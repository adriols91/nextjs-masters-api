import { MutationResolvers, Order, OrderStatus } from "../generated";

export const orderCreate: MutationResolvers["orderCreate"] = async (
  _,
  { input },
  { app: { db } }
) => {
  return {
    order: (await db.order.create({
      data: {
        ...input,
        status: OrderStatus.CREATED,
      },
    })) as Order,
  };
};
