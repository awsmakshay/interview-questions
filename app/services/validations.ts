import { z } from "zod";

export const CreateQuestion = z.object({
  title: z.string(),
  description: z.string().optional(),
});
