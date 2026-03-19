const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OG_DIR = './static/og';
const BASE_URL = 'http://localhost:1313';

// OG Image dimensions: 1200 x 630 = 1.91:1 aspect ratio (landscape)
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const PAGES = [
  { path: '/', name: 'homepage' },
  { path: '/marcas/cosrx/', name: 'marcas-cosrx' },
  { path: '/marcas/innisfree/', name: 'marcas-innisfree' },
  { path: '/mejores/serums-2026/', name: 'mejores-serums-2026' },
  { path: '/mejores/limpiadores-2026/', name: 'mejores-limpiadores-2026' },
  { path: '/rutinas/rutina-coreana-10-pasos/', name: 'rutina-coreana-10-pasos' },
  { path: '/preocupaciones/acne/', name: 'preocupaciones-acne' }
];

async function generateOGImages() {
  console.log('Generating OG images with Playwright...');
  console.log(`Viewport: ${OG_WIDTH}x${OG_HEIGHT} (1.91:1 aspect ratio)`);
  console.log('Format: Landscape (width > height)');
  
  const browser = await chromium.launch({ headless: true });
  
  for (const page of PAGES) {
    try {
      const context = await browser.newContext({
        viewport: { width: OG_WIDTH, height: OG_HEIGHT },
        deviceScaleFactor: 1
      });
      
      const pageObj = await context.newPage();
      
      console.log(`\nCapturing: ${page.name}`);
      await pageObj.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle' });
      
      // Wait for fonts and images to load
      await pageObj.waitForTimeout(1500);
      
      // Screenshot at exactly 1200x630 (landscape)
      const pngPath = path.join(OG_DIR, `${page.name}-og.png`);
      await pageObj.screenshot({ 
        path: pngPath,
        type: 'png',
        fullPage: false // Important: viewport only, not full page
      });
      
      // Convert to WebP immediately
      const webpPath = path.join(OG_DIR, `${page.name}-og.webp`);
      try {
        execSync(`cwebp -q 85 "${pngPath}" -o "${webpPath}"`, { stdio: 'ignore' });
        fs.unlinkSync(pngPath); // Delete PNG after conversion
        console.log(`✓ ${page.name}: ${OG_WIDTH}x${OG_HEIGHT} -> ${webpPath}`);
      } catch (e) {
        console.log(`✓ ${page.name}: ${pngPath} (WebP conversion failed, keeping PNG)`);
      }
      
      await context.close();
      
    } catch (err) {
      console.error(`✗ ${page.name}: ${err.message}`);
    }
  }
  
  await browser.close();
  console.log('\n✅ OG image generation complete!');
  console.log(`Aspect ratio: ${OG_WIDTH}:${OG_HEIGHT} = ${(OG_WIDTH/OG_HEIGHT).toFixed(2)}:1`);
}

generateOGImages().catch(console.error);
