import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://0xguy07.github.io',
  integrations: [sitemap()],
});
