import { initializedTRPC } from "../helpers/helpers";
import { mainTableRoutes } from "./mainTable.routes";
import { relatedTableRoutes } from "./relatedTable.routes";

export const appRouter = initializedTRPC.router({
  main: mainTableRoutes,
  related: relatedTableRoutes,
});
