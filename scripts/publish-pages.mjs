import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const distPath = path.join(projectRoot, 'dist');
const distAssetsPath = path.join(distPath, 'pages-assets');
const publishedAssetsPath = path.join(projectRoot, 'pages-assets');
const distHtmlPath = path.join(distPath, 'index.html');
const publishedHtmlPath = path.join(projectRoot, 'index.html');

if (!existsSync(distHtmlPath) || !existsSync(distAssetsPath)) {
  throw new Error('Vite output is missing. Run `vite build` before publishing Pages files.');
}

rmSync(publishedAssetsPath, { recursive: true, force: true });
mkdirSync(publishedAssetsPath, { recursive: true });
cpSync(distAssetsPath, publishedAssetsPath, { recursive: true });
copyFileSync(distHtmlPath, publishedHtmlPath);
writeFileSync(path.join(projectRoot, '.nojekyll'), '');
