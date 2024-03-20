import { Prisma } from "@prisma/client";
import { Sort } from "../resolvers/generated";

export const buildOrderByParams = (
  orderBy: Array<Record<string, Sort | null>>
) => {
  return orderBy.reduce(
    (acc, param) => {
      Object.entries(param).forEach(([field, direction]) => {
        if (direction) {
          acc.push({
            [field]:
              direction === Sort.ASC
                ? Prisma.SortOrder.asc
                : Prisma.SortOrder.desc,
          });
        }
      });
      return acc;
    },
    [] as Array<Record<string, Prisma.SortOrder>>
  );
};
