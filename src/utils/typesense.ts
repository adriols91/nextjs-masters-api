import { Client as TypesenseClient } from "typesense";
import { CollectionCreateSchema } from "typesense/lib/Typesense/Collections";

import { PrismaClient } from "@prisma/client";

const schema: CollectionCreateSchema = {
  name: "products",
  fields: [
    {
      name: "id",
      type: "string",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "price",
      type: "int32",
    },
    {
      name: "popularity",
      type: "int32",
    },
    {
      name: "rating",
      type: "float",
      optional: true,
    },
    {
      name: "categories",
      type: "string[]",
      facet: true,
    },
    {
      name: "collections",
      type: "string[]",
      facet: true,
    },
    {
      name: "reviewsCount",
      type: "int32",
      optional: true,
    },
    {
      name: "vectors",
      type: "float[]",
      num_dim: 384,
    },
  ],
  default_sorting_field: "popularity",
};

export const initTypesense = async ({
  db,
  typesense,
}: {
  db: PrismaClient;
  typesense: TypesenseClient;
}) => {
  const products = await db.product.findMany({
    include: {
      categories: true,
      collections: true,
      _count: {
        select: { reviews: true },
      },
    },
  });

  const productsData = products.map((product) => ({
    ...product,
    categories: product.categories.map((category) => category.name),
    collections: product.collections.map((collection) => collection.name),
    reviewsCount: product._count.reviews,
    vectors: JSON.parse(product.vectors),
  }));

  let reindexNeeded = false;

  try {
    const collection = await typesense.collections("products").retrieve();

    console.log("Found existing schema\n");

    if (
      collection.num_documents !== products.length ||
      process.env.FORCE_REINDEX === "true"
    ) {
      console.log("Deleting existing schema");

      reindexNeeded = true;

      await typesense.collections("products").delete();
    }
  } catch (e) {
    reindexNeeded = true;
  }

  if (!reindexNeeded) {
    return true;
  }
  console.log("Creating schema:");
  console.log(JSON.stringify(schema, null, 2));

  await typesense.collections().create(schema);

  console.log("Adding records:");

  try {
    const data = await typesense
      .collections("products")
      .documents()
      .import(productsData);

    console.log(data);
    console.log("Done indexing");

    const failedItems = data.filter((item) => item.success === false);

    if (failedItems.length > 0) {
      throw new Error(
        `Error indexing items ${JSON.stringify(failedItems, null, 2)}`
      );
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
