// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

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
  integrations: [tailwind()],
  vite: {
    server: {
      fs: {
        allow: ['..'],
      },
    },
    build: {
      cssMinify: true,
    },
  },
});
