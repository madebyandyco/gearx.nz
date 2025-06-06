// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gearx.nz',
  // base: 'gear-x',
  output: 'static',
  outDir: './dist',
  build: {
    assets: 'astro',
  },
  integrations: [tailwind()],
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
});
