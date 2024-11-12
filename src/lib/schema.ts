import * as z from "zod";

export const workSchema = z.object({
  workPlace: z.string(),
  role: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  description: z.string().array(),
});

export type WorkFormValues = z.infer<typeof workSchema>;
