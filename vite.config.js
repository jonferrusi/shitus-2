import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages project sites are served from /<repo-name>/. If a custom
// domain is set up (public/CNAME present), serve from the root instead.
const hasCustomDomain = fs.existsSync(path.resolve(dirname, 'public/CNAME'));

export default defineConfig({
  plugins: [react()],
  base: hasCustomDomain ? '/' : '/shitus-2/',
});
