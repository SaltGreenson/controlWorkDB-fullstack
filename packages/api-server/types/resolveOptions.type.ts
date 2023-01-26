import { AnyRootConfig, ProcedureParams } from "@trpc/server";

interface IProcedureResolver<T>
  extends ProcedureParams<AnyRootConfig, T, T, T, T, T, T> {}
export default IProcedureResolver;
