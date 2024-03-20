import { Product } from "@prisma/client";
import { Client as TypesenseClient } from "typesense";

export const getRelatedProductsIds = async (
  typesense: TypesenseClient,
  relatedTo: string,
  limit?: number | null
) => {
  const related = await typesense
    .collections("products")
    .documents()
    .search({
      preset: "related-products",
      q: "*",
      per_page: limit ?? undefined,
      vector_query: `vectors:([], id: ${relatedTo})`,
    });

  return related.hits?.map((hit) => (hit.document as Pick<Product, "id">).id);
};
