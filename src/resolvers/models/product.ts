import { buildOrderByParams } from "../../utils/resolvers";
import type { ProductResolvers } from "../generated";

const BASE_URL = process.env.BASE_URL || "http://localhost:4000";

const Product = {
  images: async (product, { limit, offset }, { app }) => {
    let items = await app.db.product
      .findUnique({ where: { id: product.id } })
      .images({ skip: offset ?? undefined, take: limit ?? undefined });

    items ||= [];

    return items.map((image) => ({
      ...image,
      url: `${BASE_URL}/assets/${image.url}`,
    }));
  },
  reviews: async (product, { limit, orderBy }, { app }) => {
    const items = await app.db.product
      .findUnique({ where: { id: product.id } })
      .reviews({
        take: limit ?? undefined,
        orderBy: orderBy ? buildOrderByParams(orderBy) : [],
      });

    return items || [];
  },
} satisfies ProductResolvers;

export default Product;
