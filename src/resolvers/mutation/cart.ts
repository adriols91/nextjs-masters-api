import { MutationResolvers } from "../generated";

export const cartCreate: MutationResolvers["cartCreate"] = async (
  _,
  { input },
  { app: { db } }
) => {
  return {
    cart: await db.cart.create({
      data: {
        ...input,
      },
    }),
  };
};
