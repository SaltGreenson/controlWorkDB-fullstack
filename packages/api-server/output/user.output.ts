import { z } from "zod";

export const oneUserOutput = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
});

export const usersOutput = z.array(oneUserOutput);
