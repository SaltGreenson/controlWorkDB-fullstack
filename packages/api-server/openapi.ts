import { generateOpenApiDocument } from "trpc-openapi";
import { appRouter } from "./routes";

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "OpenAPI",
  description: "",
  version: "1.0.0",
  baseUrl: `http://localhost:8080/api`,
  tags: ["main", "related"],
});
