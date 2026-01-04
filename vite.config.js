import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import https from "https";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "https://10.114.0.3:5000",
        changeOrigin: true,
        secure: false,
        agent: new https.Agent({
          cert: fs.readFileSync("./certs/client.crt"),
          key: fs.readFileSync("./certs/client.key"),
          ca: fs.readFileSync("./certs/ca.crt"),
        }),
        headers: {
          "x-internal-secret": "superSecretPassword123!",
        },
      },
    },
  },
});

