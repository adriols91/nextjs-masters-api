import { FastifyPluginAsync } from "fastify";
import cors from "@fastify/cors";
import fp from "fastify-plugin";

const corsPlugin: FastifyPluginAsync = fp(async (app) => {
  app.register(cors, {
    origin:
      process.env.NODE_ENV === "development"
        ? "*"
        : "https://nextjs-masters-web.fly.dev",
    methods: ["GET", "POST", "OPTIONS"],
  });

  app.log.info("Cors plugin loaded");
});

export default corsPlugin;
