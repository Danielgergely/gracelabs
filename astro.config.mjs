// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gracelabs.dev',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
