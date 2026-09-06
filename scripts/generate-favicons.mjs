import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');

// 1. High-fidelity architectural SVG Master
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="nyksysBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141312" />
      <stop offset="100%" stop-color="#0a0908" />
    </linearGradient>
    <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e8b878" />
      <stop offset="100%" stop-color="#c99552" />
    </linearGradient>
  </defs>
  <!-- Background with subtle luxury rounded aesthetic -->
  <rect width="512" height="512" rx="112" fill="url(#nyksysBg)" />
  
  <!-- Subtle inner architectural border -->
  <rect x="20" y="20" width="472" height="472" rx="96" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2" />
  
  <!-- Architectural Monogram 'N' -->
  <path
    d="M 124 396 L 124 116 L 188 116 L 324 320 L 324 116 L 388 116 L 388 396 L 324 396 L 188 192 L 188 396 Z"
    fill="#faf8f5"
  />
  
  <!-- Architectural Dot Accent (Gold) -->
  <circle cx="414" cy="386" r="14" fill="url(#goldAccent)" />
</svg>`;

// Write master SVG
fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), svgContent, 'utf-8');
console.log('✓ public/favicon.svg created');

// Function to generate ICO file header + directory + PNG images
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + numImages * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  for (const { buffer, size } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    dirEntries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function generateAll() {
  const svgBuffer = Buffer.from(svgContent);

  // 1. favicon-96x96.png
  await sharp(svgBuffer)
    .resize(96, 96)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'favicon-96x96.png'));
  console.log('✓ public/favicon-96x96.png created');

  // 2. apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
  console.log('✓ public/apple-touch-icon.png created');

  // 3. web-app-manifest-192x192.png
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'web-app-manifest-192x192.png'));
  console.log('✓ public/web-app-manifest-192x192.png created');

  // 4. web-app-manifest-512x512.png
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(PUBLIC_DIR, 'web-app-manifest-512x512.png'));
  console.log('✓ public/web-app-manifest-512x512.png created');

  // 5. favicon.ico (multi-resolution 16x16, 32x32, 48x48)
  const ico16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  const icoBuffer = createIco([
    { buffer: ico16, size: 16 },
    { buffer: ico32, size: 32 },
    { buffer: ico48, size: 48 },
  ]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  console.log('✓ public/favicon.ico created');

  // 6. site.webmanifest
  const manifest = {
    name: "Nyksys — Architecture d'Intérieur",
    short_name: "Nyksys",
    description: "Studio d'architecture d'intérieur haut de gamme : conception sur-mesure et résidences d'exception.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0c0b",
    theme_color: "#0d0c0b",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
  fs.writeFileSync(path.join(PUBLIC_DIR, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('✓ public/site.webmanifest created');
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});
