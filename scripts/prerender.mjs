import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/contact',
  '/services',
  '/about',
  '/projects',
  '/projects/oakroom-residence',
  '/projects/ellhmart-penthouse',
  '/projects/kyoto-sanctuary',
  '/projects/foundry-loft'
];

async function prerender() {
  console.log('Starting prerender process...');
  
  // 1. Start static server
  const app = express();
  app.use(express.static(DIST_DIR));
  
  // Fallback for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });

  const server = app.listen(4000, '127.0.0.1', async () => {
    console.log('Static server listening on http://127.0.0.1:4000');
    
    // 2. Launch Puppeteer
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // 3. Render each route
    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      await page.goto(`http://127.0.0.1:4000${route}`, { waitUntil: 'networkidle0' });
      
      // Extract HTML
      let html = await page.evaluate(() => document.documentElement.outerHTML);
      html = `<!DOCTYPE html>\n${html}`;

      // 4. Save to dist
      const dirPath = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);
      await fs.mkdir(dirPath, { recursive: true });
      await fs.writeFile(path.join(dirPath, 'index.html'), html);
      console.log(`Saved ${route}`);
    }

    await browser.close();
    server.close();
    console.log('Prerendering complete!');
  });
}

prerender().catch(err => {
  console.error('Prerender error:', err);
  process.exit(1);
});
