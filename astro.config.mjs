import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://www.pietronoli.it',
  trailingSlash: 'never',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
