import { QueryResolvers } from "../generated";

export const categories: QueryResolvers["categories"] = async (
  _,
  { limit, offset },
  { app: { db } }
) => {
  const items = await db.category.findMany({
    take: limit ?? undefined,
    skip: offset ?? undefined,
    include: { image: true },
  });

  return {
    items,
    totalCount: await db.category.count(),
  };
};

export const category: QueryResolvers["category"] = async (
  _,
  { id, slug },
  { app: { db } }
) => {
  return await db.category.findFirst({
    where: {
      id: id ?? undefined,
      slug: slug ?? undefined,
    },
    include: { products: { include: { categories: true } }, image: true },
  });
};
