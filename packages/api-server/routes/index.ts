import { initializedTRPC } from "../helpers/helpers";
import { main_tableRoutes } from "./main_table.routes";

export const appRouter = initializedTRPC.router({
  user: main_tableRoutes,
});
