import { FastifyPluginAsync } from "fastify";
import staticFiles from "@fastify/static";
import fp from "fastify-plugin";
import path from "path";

const staticFilesPlugin: FastifyPluginAsync = fp(async (app) => {
  app.register(staticFiles, {
    root: path.join(process.cwd(), "assets"),
    prefix: "/assets/",
  });
  app.log.info("Static files plugin loaded");
});

export default staticFilesPlugin;
