import type { IResolvers } from "mercurius";

import Mutation from "./mutation";
import Query from "./query";
import models from "./models";
import scalars from "./scalars";

const resolvers = {
  ...scalars,
  ...models,
  Mutation,
  Query,
} satisfies IResolvers;

export default resolvers;
