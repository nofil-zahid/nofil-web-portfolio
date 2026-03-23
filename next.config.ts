import type { NextConfig } from "next";
import path from "path";

if (process.env.CI !== "true") {
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
