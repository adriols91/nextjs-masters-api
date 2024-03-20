import autoLoad from "@fastify/autoload";
import type { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = async (app: FastifyInstance) => {
  app.register(autoLoad, {
    dir: `${__dirname}/plugins`,
  });
  app.register(import("./graphql"));
};

export default fp(app);
