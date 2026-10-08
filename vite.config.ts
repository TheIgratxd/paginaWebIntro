import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/n
export default defineConfig({
  plugins: [react()],
  base: "/paginaWebIntro/", // <-- Reemplaza por el nombre exacto de tu repositorio en GitHub
});
