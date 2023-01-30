import { z } from "zod";

export const mainRowOutput = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  gender: z.string(),
  job: z.string(),
  salary: z.string(),
});

export const mainRowsOutput = z.array(mainRowOutput);
