import { QueryResolvers } from "../generated";
import { getRelatedProductsIds } from "../../utils/search";
import { buildOrderByParams } from "../../utils/resolvers";

export const products: QueryResolvers["products"] = async (
  _,
  { limit, offset, filter, orderBy },
  { app: { db, typesense } }
) => {
  const { categoryId, collectionId, nameContains, relatedTo } = filter || {};

  const baseQueryParams = {
    take: limit ?? undefined,
    orderBy: orderBy ? buildOrderByParams(orderBy) : [],
    include: { categories: true, images: true },
  };
  let items = [];
  let totalCount = 0;

  if (relatedTo) {
    const relatedIds = await getRelatedProductsIds(typesense, relatedTo, limit);

    items = await db.product.findMany({
      ...baseQueryParams,
      where: {
        id: {
          in: relatedIds,
        },
      },
    });
    totalCount = relatedIds?.length || 0;
  } else {
    const filters = {
      ...(categoryId ? { categories: { some: { id: categoryId } } } : {}),
      ...(collectionId ? { collections: { some: { id: collectionId } } } : {}),
      name: {
        contains: nameContains || undefined,
      },
    };
    items = await db.product.findMany({
      ...baseQueryParams,
      skip: offset ?? undefined,
      where: filters,
    });
    totalCount = await db.product.count({ where: filters });
  }
  return {
    items,
    totalCount,
  };
};

export const product: QueryResolvers["product"] = async (
  _,
  { id },
  { app: { db } }
) => {
  return await db.product.findUnique({
    where: {
      id,
    },
    include: {
      colors: true,
      sizes: true,
      categories: true,
      collections: true,
      images: true,
      reviews: true,
    },
  });
};
