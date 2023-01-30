import { z } from "zod";

export const createMainInput = z.object({
  region: z.string(),
  capital: z.string(),
  square: z.string(),
  population: z.string(),
});

export const updateMainInput = z.object({
  id: z.string(),
  region: z.string(),
  capital: z.string(),
  square: z.string(),
  population: z.string(),
});
