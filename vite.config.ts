import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import typescript from '@rollup/plugin-typescript';

const mode = process.argv[3]?.slice(7)


// https://vitejs.dev/config/
const viteComponet = defineConfig({
  resolve:{
    alias:{
      "@" : resolve(__dirname,"./src")
    }
  },
  plugins: [react(),typescript()],
  build: {
    assetsInlineLimit:60000,
    lib:{
      entry:"./src/components/piano/index.tsx",
      name:"lemons-piano",
      formats:['es','umd'],
      fileName:( format ) => `lemons-piano.${format}.js`
    },
    rollupOptions: {
      output: {
        globals:{react:"react"}
      },

      external: ['react', 'react-dom'],
    },
  },
})

const viteProd = defineConfig({
  resolve: {
      alias: {
          "@": resolve(__dirname, "./src")
      }
  },
  plugins: [react(), typescript()],
  build: {
      assetsInlineLimit: 60000,
      outDir: "prod"
  }
});

const exportVite = mode==='prod'?viteProd:viteComponet

export default exportVite