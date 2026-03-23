import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z.email({ error: "Invalid email format" }),
  message: z.string().min(10, { error: "Message must be at least 10 chars" }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
