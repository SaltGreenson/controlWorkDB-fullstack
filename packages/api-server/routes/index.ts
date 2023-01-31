import { initializedTRPC } from "../helpers/helpers";
import { mainTableRoutes } from "./mainTable.routes";

export const appRouter = initializedTRPC.router({
  main: mainTableRoutes,
});
