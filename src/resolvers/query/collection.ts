import { QueryResolvers } from "../generated";

export const collections: QueryResolvers["collections"] = async (
  _,
  { limit, offset },
  { app: { db } }
) => {
  const items = await db.collection.findMany({
    take: limit ?? undefined,
    skip: offset ?? undefined,
    include: { image: true },
  });

  return {
    items,
    totalCount: await db.collection.count(),
  };
};

export const collection: QueryResolvers["collection"] = async (
  _,
  { id, slug },
  { app: { db } }
) => {
  return await db.collection.findFirst({
    where: {
      id: id ?? undefined,
      slug: slug ?? undefined,
    },
    include: { products: { include: { categories: true } }, image: true },
  });
};
