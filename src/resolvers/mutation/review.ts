import { MutationResolvers } from "../generated";

export const reviewCreate: MutationResolvers["reviewCreate"] = async (
  _,
  { input },
  { app: { db } }
) => {
  const { productId } = input;

  const item = await db.review.create({
    data: {
      ...input,
    },
  });
  const {
    _avg: { rating },
  } = await db.review.aggregate({
    where: {
      productId,
    },
    _avg: {
      rating: true,
    },
  });

  await db.product.update({
    where: {
      id: productId,
    },
    data: {
      rating,
    },
  });

  return {
    review: item,
  };
};
