import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const SERVER_ENTRY = path.resolve(DIST_DIR, 'server/entry-server.js');

const routes = [
  '/',
  '/contact',
  '/services',
  '/a-propos',
  '/about',
  '/projets',
  '/projects',
  '/projets/oakroom-residence',
  '/projets/ellhmart-penthouse',
  '/projets/kyoto-sanctuary',
  '/projets/foundry-loft',
  '/projects/oakroom-residence',
  '/projects/ellhmart-penthouse',
  '/projects/kyoto-sanctuary',
  '/projects/foundry-loft',
];

async function prerender() {
  console.log('🚀 Starting SSG prerender process (Node.js React SSR)...');

  // 1. Read base client template
  const templatePath = path.join(DIST_DIR, 'index.html');
  const template = await fs.readFile(templatePath, 'utf-8');

  // 2. Import server render function
  const { render } = await import(pathToFileURL(SERVER_ENTRY).href);

  // 3. Render each route and write static HTML
  for (const route of routes) {
    console.log(`⚡ Prerendering SSG: ${route}...`);
    const { html: appHtml, helmet } = render(route);

    let pageHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    if (helmet) {
      const titleTag = helmet.title?.toString() || '';
      const metaTags = helmet.meta?.toString() || '';
      const linkTags = helmet.link?.toString() || '';

      if (titleTag) {
        pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/, titleTag);
      }
      if (metaTags || linkTags) {
        pageHtml = pageHtml.replace('</head>', `${metaTags}\n${linkTags}\n</head>`);
      }
    }

    const dirPath = route === '/' ? DIST_DIR : path.join(DIST_DIR, route.replace(/^\//, ''));
    await fs.mkdir(dirPath, { recursive: true });
    await fs.writeFile(path.join(dirPath, 'index.html'), pageHtml, 'utf-8');
    console.log(`✅ Saved: ${path.join(dirPath, 'index.html')}`);
  }

  // 4. Clean up temporary server build directory
  try {
    await fs.rm(path.join(DIST_DIR, 'server'), { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary dist/server bundle.');
  } catch (err) {
    console.warn('Warning: Could not remove dist/server', err);
  }

  console.log('🎉 SSG Prerendering successfully completed for all routes!');
}

prerender().catch((err) => {
  console.error('❌ SSG Prerender error:', err);
  process.exit(1);
});
