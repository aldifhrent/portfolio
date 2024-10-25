import * as z from "zod";

export const workSchema = z.object({
  place: z.string().min(1, "Place is required"),
  role: z.string().min(1, "Role is required"),
  startDate: z.date(),
  endDate: z.date(),
});

export type WorkFormValues = z.infer<typeof workSchema>;
