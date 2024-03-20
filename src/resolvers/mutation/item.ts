import { MutationResolvers } from "../generated";

export const itemCreate: MutationResolvers["itemCreate"] = async (
  _,
  { input },
  { app: { db } }
) => {
  return {
    item: await db.item.create({
      data: {
        ...input,
      },
      include: { product: { include: { categories: true } } },
    }),
  };
};

export const itemUpdate: MutationResolvers["itemUpdate"] = async (
  _,
  { input: { id, ...data } },
  { app: { db } }
) => {
  return {
    item: await db.item.update({
      where: {
        id,
      },
      data,
      include: { product: { include: { categories: true } } },
    }),
  };
};

export const itemDelete: MutationResolvers["itemDelete"] = async (
  _,
  { id },
  { app: { db } }
) => {
  await db.item.delete({
    where: {
      id,
    },
  });
  return { id, success: true };
};
