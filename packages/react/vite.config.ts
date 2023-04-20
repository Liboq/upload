import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";


export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Upload",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "react",
            "react-dom": "react-dom",
          },
        },      
    },
  },
})