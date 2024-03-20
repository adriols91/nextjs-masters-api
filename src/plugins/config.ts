import type { FastifyInstance } from "fastify";
import { z } from "zod";
import fp from "fastify-plugin";

const configSchema = z.object({
  NODE_ENV: z.union([z.literal("development"), z.literal("production")]),
  DATABASE_URL: z.string(),
  TYPESENSE_HOST: z.string(),
  TYPESENSE_PORT: z.number(),
  TYPESENSE_PROTOCOL: z.string(),
  TYPESENSE_API_KEY: z.string(),
});

type Config = z.infer<typeof configSchema>;

declare module "fastify" {
  interface FastifyInstance {
    config: Config;
  }
}

const config = async (app: FastifyInstance) => {
  const env = process.env;
  const cfg = configSchema.safeParse({
    ...env,
    TYPESENSE_PORT: parseInt(env.TYPESENSE_PORT ?? "8108"),
  });

  if (cfg.success) {
    app.decorate("config", cfg.data);
  } else {
    throw new Error("Invalid configuration");
  }
};

export default fp(config);
