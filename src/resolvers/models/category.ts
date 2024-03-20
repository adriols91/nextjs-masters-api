import type { CategoryResolvers } from "../generated";

const BASE_URL = process.env.BASE_URL || "http://localhost:4000";

const Category = {
  image: async (category) => {
    const image = category.image;

    return (
      image && {
        ...image,
        url: `${BASE_URL}/assets/${image.url}`,
      }
    );
  },
} satisfies CategoryResolvers;

export default Category;
