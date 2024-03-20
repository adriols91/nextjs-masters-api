import { QueryResolvers } from "../generated";

export const cart: QueryResolvers["cart"] = async (
  _,
  { id },
  { app: { db } }
) => {
  return await db.cart.findUnique({
    where: {
      id,
    },
    include: {
      items: { include: { product: { include: { categories: true } } } },
    },
  });
};
