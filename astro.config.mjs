// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Xóa bỏ các biến process.env tự động và khai báo đường dẫn tĩnh của bạn
  site: 'https://wuwuyn.github.io',
  base: '/wuwuyn',
  
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
