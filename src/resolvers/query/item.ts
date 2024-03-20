import { QueryResolvers } from "../generated";

export const item: QueryResolvers["item"] = async (
  _,
  { cartId, productId },
  { app: { db } }
) => {
  return await db.item.findFirst({
    where: {
      cartId,
      productId,
    },
    include: { product: { include: { categories: true } } },
  });
};
