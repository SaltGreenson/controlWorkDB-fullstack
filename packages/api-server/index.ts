import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import cors from "cors";
import { createOpenApiExpressMiddleware } from "trpc-openapi";
import { openApiDocument } from "./openapi";
import { appRouter } from "./routes";
import swaggerUi from "swagger-ui-express";

let port: number = 8080;

const app = express();
app.use(cors());
app.use("/api/trpc", createExpressMiddleware({ router: appRouter }));
app.use("/api", createOpenApiExpressMiddleware({ router: appRouter }));

app.use("/", swaggerUi.serve);
app.get("/", swaggerUi.setup(openApiDocument));

export type AppRouter = typeof appRouter;

(function start() {
  app
    .listen(port, () => {
      console.log(`api-server listening at http://localhost:${port}`);
    })
    .on("error", () => {
      port += 1;
      start();
    });
})();
