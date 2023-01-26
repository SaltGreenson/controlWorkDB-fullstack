import { initializedTRPC } from "../helpers/helpers";
import { userRoutes } from "./user.routes";

export const appRouter = initializedTRPC.router({
  user: userRoutes,
});
