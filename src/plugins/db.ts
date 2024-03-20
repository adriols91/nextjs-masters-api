import { PrismaClient } from "@prisma/client";
import type { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    db: PrismaClient;
  }
}

const prismaPlugin: FastifyPluginAsync = fp(async (app) => {
  app.log.info(app.config, "Loading database context");

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: app.config.DATABASE_URL,
      },
    },
    log: ["query"],
  });
  await prisma.$connect();

  app.decorate("db", prisma);
  app.log.info("Database context loaded");

  app.addHook("onClose", async (server) => {
    await server.db.$disconnect();
  });
});

export default prismaPlugin;
