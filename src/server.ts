import fastify from "fastify";
import * as dotenv from "dotenv";

dotenv.config();

const FASTIFY_HOST = process.env.FASTIFY_HOST || "127.0.0.1";
const FASTIFY_PORT =
  (process.env.FASTIFY_PORT && parseInt(process.env.FASTIFY_PORT)) || 4000;

const app = fastify({ logger: process.env.NODE_ENV === "development" });

app.register(import("./app"));

app.listen({ host: FASTIFY_HOST, port: FASTIFY_PORT }).then(() => {
  console.log(`Server is running on port ${FASTIFY_PORT}\n`);
});
