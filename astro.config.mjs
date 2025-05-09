// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: 'server',
        access: 'public'
      }),
      SCORE_API_ENDPOINT: envField.string({
        default: 'https://api.example.com/score',
        context: 'server',
        access: 'public'
      }),
    }
  },

  integrations: [react()],

  adapter: vercel(),
});