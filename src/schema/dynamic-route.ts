import { z } from "zod";

// auth/verify/[entity]
export const verifyAuthRouteSchema = z.enum(["email", "link"]);
export type VerifyAuthRoute = z.infer<typeof verifyAuthRouteSchema>;

// any dynamic route
export const anyDynamicRouteSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/i, "Only alphanumeric & dashes allowed")
  .min(1)
  .max(50);
