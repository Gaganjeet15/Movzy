import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()); // Load .env files based on mode
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/",
  };
});
