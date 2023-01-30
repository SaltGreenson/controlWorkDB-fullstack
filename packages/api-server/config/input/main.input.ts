import { z } from "zod";

export const createMainInput = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  gender: z.string(),
  job: z.string(),
  salary: z.string(),
});

export const updateMainInput = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  gender: z.string(),
  job: z.string(),
  salary: z.string(),
});
