import type { NextConfig } from "next";
import path from "path";

console.log("CI", process.env.CI);

if (process.env.CI !== "true") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./src/config/env");
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: path.join(__dirname, "./"),
  },
};

export default nextConfig;
