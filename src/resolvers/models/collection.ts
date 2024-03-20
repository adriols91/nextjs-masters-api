import type { CollectionResolvers } from "../generated";

const BASE_URL = process.env.BASE_URL || "http://localhost:4000";

const Collection = {
  image: async (collection) => {
    const image = collection.image;

    return (
      image && {
        ...image,
        url: `${BASE_URL}/assets/${image.url}`,
      }
    );
  },
} satisfies CollectionResolvers;

export default Collection;
