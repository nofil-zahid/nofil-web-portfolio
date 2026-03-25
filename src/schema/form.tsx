import { z } from "zod";

export const NAME_MIN_LENGTH = 1;
export const NAME_MAX_LENGTH = 50;
export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 500;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(NAME_MIN_LENGTH, { message: "Name is required" })
    .max(NAME_MAX_LENGTH, { message: `Name must be at most ${NAME_MAX_LENGTH} characters` })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Name can only contain letters and spaces",
    }),

  email: z
    .email({ message: "Invalid email format" })
    .transform((email) => email.toLowerCase()),

  message: z
    .string()
    .trim()
    .min(MESSAGE_MIN_LENGTH, { message: `Message must be at least ${MESSAGE_MIN_LENGTH} characters` })
    .max(MESSAGE_MAX_LENGTH, { message: `Message must be at most ${MESSAGE_MAX_LENGTH} characters` })
    .refine((msg) => !/(\r?\n){3,}/.test(msg), {
      message: "You cannot use more than 2 consecutive line breaks",
    }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
