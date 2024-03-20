import { QueryResolvers } from "../generated";

// @ts-expect-error TODO status field typing
export const orders: QueryResolvers["orders"] = async (
  _,
  { limit, offset },
  { app: { db } }
) => {
  const items = await db.order.findMany({
    take: limit ?? undefined,
    skip: offset ?? undefined,
  });

  return {
    items,
    totalCount: await db.order.count(),
  };
};

export const order: QueryResolvers["order"] = async (
  _,
  { id },
  { app: { db } }
) => {
  return await db.category.findFirst({
    where: {
      id,
    },
  });
};
