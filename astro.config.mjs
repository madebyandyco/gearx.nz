// @ts-check
import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gearx.nz',
  base: '/',
  output: 'static',
  outDir: './dist',
  build: {
    assetsPrefix: '//madebyandyco.github.io/gearx.nz/',
    assets: 'assets',
  },
  integrations: [],
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },

    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },

    css: {
      devSourcemap: true,
    },

    plugins: [tailwindcss()],
  },
});