import z from 'zod';

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().optional().default('https://nofil-web-portfolio.vercel.app'),
  NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().default('default-service-id'),
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().default('default-template-id'),
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().default('default-public-key'),
});

export const serverEnvSchema = z.object({
  // will be added soon.
});

export const envSchema = serverEnvSchema.extend(clientEnvSchema.shape);
export type Env = z.infer<typeof envSchema>;
