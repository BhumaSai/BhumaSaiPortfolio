import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompress from "vite-plugin-compression";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    viteCompress({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      deleteOriginFile: false,
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
