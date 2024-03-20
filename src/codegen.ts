import { buildSchema } from "graphql";
import type { FastifyInstance } from "fastify";
import type { IResolvers, MercuriusContext } from "mercurius";
import {
  codegenMercurius,
  loadSchemaFiles,
  type CodegenMercuriusOptions,
} from "mercurius-codegen";

const codegenOptions: CodegenMercuriusOptions = {
  targetPath: "./src/resolvers/generated.ts",
  operationsGlob: "./src/gql/operations/*.gql",
  codegenConfig: {
    useTypeImports: true,
    defaultScalarType: "unknown",
    skipTypename: true,
    documentMode: "string",
    scalars: {
      DateTime: "Date",
      JSON: "string",
    },
  },
  watchOptions: {
    enabled: process.env.NODE_ENV === "development",
  },
};

export const runCodegen = async (app: FastifyInstance) => {
  await codegenMercurius(app, codegenOptions).catch(console.error);

  if (process.env.IS_CODE_GEN) {
    process.exit(0);
  }
};

export const loadSchema = (
  app: FastifyInstance,
  resolvers: IResolvers<any, MercuriusContext>
) => {
  return loadSchemaFiles("./src/gql/schema/**/*.gql", {
    watchOptions: {
      enabled: process.env.NODE_ENV === "development",
      async onChange(schema) {
        app.graphql.replaceSchema(buildSchema(schema.join("\n")));
        app.graphql.defineResolvers(resolvers);

        await runCodegen(app);
      },
    },
  });
};
