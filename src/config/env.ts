import { clientEnvSchema, Env, serverEnvSchema } from '../schema/env';

const clientEnv = {
  NEXT_PUBLIC_HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
  NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
  NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

let env = {} as Env;

if (typeof window === 'undefined') {
  const serverParsed = serverEnvSchema.safeParse(process.env);
  const clientParsed = clientEnvSchema.safeParse(clientEnv);

  if (!serverParsed.success || !clientParsed.success) {
    console.error('❌ Invalid environment variables:');
    if (!serverParsed.success) console.error(serverParsed.error.format());
    if (!clientParsed.success) console.error(clientParsed.error.format());
    throw new Error('Invalid server environment variables');
  }

  env = { ...serverParsed.data, ...clientParsed.data };
} else {
  const clientParsed = clientEnvSchema.safeParse(clientEnv);

  if (!clientParsed.success) {
    console.error('❌ Invalid client environment variables:');
    console.error(clientParsed.error.format());
  }

  env = clientParsed.data as Env;
}

/**
 * Derived flags
 */
const isProd = env?.NEXT_PUBLIC_NODE_ENV === 'production';

/**
 * Final export
 */
export const envVars = {
  ...env,
  isProd,
};
