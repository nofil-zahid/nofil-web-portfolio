import { z } from 'zod';

export const NAME_MIN_LENGTH = 1;
export const NAME_MAX_LENGTH = 50;

export const EMAIL_MAX_LENGTH = 254;
export const EMAIL_LOCAL_MAX_LENGTH = 64;

export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 500;

// Unicode letters and combining marks, separated by single spaces.
const NAME_REGEX = /^[\p{L}][\p{L}\p{M}]*(?: [\p{L}][\p{L}\p{M}]*)*$/u;

// ASCII dot-atom email addresses with valid domain labels.
const EMAIL_REGEX =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/;

export const contactSchema = z.object({
  name: z
    .string()
    .transform((value) => value.normalize('NFC').trim())
    .pipe(
      z
        .string()
        .min(NAME_MIN_LENGTH, { message: 'Name is required' })
        .max(NAME_MAX_LENGTH, {
          message: `Name must be at most ${NAME_MAX_LENGTH} characters`,
        })
        .regex(NAME_REGEX, {
          message: 'Name can only contain letters and single spaces',
        }),
    ),

  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .max(EMAIL_MAX_LENGTH, {
      message: `Email must be at most ${EMAIL_MAX_LENGTH} characters`,
    })
    .toLowerCase()
    .regex(EMAIL_REGEX, {
      message: 'Please enter a valid email address',
    })
    .refine((email) => email.split('@')[0].length <= EMAIL_LOCAL_MAX_LENGTH, {
      message: 'Email username must be at most 64 characters',
    }),

  message: z
    .string()
    .transform((value) => value.replace(/\r\n?/g, '\n').trim())
    .pipe(
      z
        .string()
        .min(MESSAGE_MIN_LENGTH, {
          message: `Message must be at least ${MESSAGE_MIN_LENGTH} characters`,
        })
        .max(MESSAGE_MAX_LENGTH, {
          message: `Message must be at most ${MESSAGE_MAX_LENGTH} characters`,
        })
        .refine((value) => !/\n{3,}/.test(value), {
          message: 'You cannot use more than 2 consecutive line breaks',
        }),
    ),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type ContactField = keyof typeof contactSchema.shape;
