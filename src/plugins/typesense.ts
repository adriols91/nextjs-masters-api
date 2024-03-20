import { Client as TypesenseClient } from "typesense";
import fp from "fastify-plugin";
import { initTypesense } from "../utils/typesense";

declare module "fastify" {
  interface FastifyInstance {
    typesense: TypesenseClient;
  }
}

const typesensePlugin = fp(async (app) => {
  const { config, db } = app;

  const typesense = new TypesenseClient({
    nodes: [
      {
        host: config.TYPESENSE_HOST,
        port: config.TYPESENSE_PORT,
        protocol: config.TYPESENSE_PROTOCOL,
      },
    ],
    apiKey: config.TYPESENSE_API_KEY,
  });

  app.decorate("typesense", typesense);

  app.addHook("onReady", async () => {
    await initTypesense({ db, typesense });
  });

  app.log.info("Typesense client is ready");
});

export default typesensePlugin;
