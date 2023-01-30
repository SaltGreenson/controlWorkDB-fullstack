import { z } from "zod";

export const mainRowOutput = z.object({
  id: z.string(),
  region: z.string(),
  capital: z.string(),
  square: z.string(),
  population: z.string(),
});

export const mainRowsOutput = z.array(mainRowOutput);
