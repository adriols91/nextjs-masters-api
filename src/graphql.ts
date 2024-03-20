import mercurius from "mercurius";
import { loadSchema, runCodegen } from "./codegen";
import type { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import loaders from "./loaders";
import resolvers from "./resolvers";

const graphql = async (app: FastifyInstance) => {
  const { schema } = loadSchema(app, resolvers);

  app.log.info("Database schema loaded");

  await app.register(mercurius, {
    schema,
    loaders,
    resolvers,
    graphiql: app.config.NODE_ENV === "development",
  });

  runCodegen(app);
};

export default fp(graphql);
