import { z } from "zod";

export const relatedRowOutput = z.object({
  id: z.string(),
  job_title: z.string(),
  salary: z.string(),
});

export const relatedRowsOutput = z.array(relatedRowOutput);
