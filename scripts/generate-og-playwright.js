const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OG_DIR = './static/og';
const BASE_URL = 'http://localhost:1313';

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
  console.log('Viewport: 1200x630 (exact OG dimensions)');
  
  const browser = await chromium.launch({ headless: true });
  
  for (const page of PAGES) {
    try {
      const context = await browser.newContext({
        viewport: { width: 1200, height: 630 }
      });
      
      const pageObj = await context.newPage();
      
      console.log(`Capturing: ${page.name}`);
      await pageObj.goto(`${BASE_URL}${page.path}`, { waitUntil: 'networkidle' });
      
      // Wait for fonts and images
      await pageObj.waitForTimeout(1000);
      
      // Screenshot at exactly 1200x630
      const screenshotPath = path.join(OG_DIR, `${page.name}-og.png`);
      await pageObj.screenshot({ 
        path: screenshotPath,
        type: 'png'
      });
      
      await context.close();
      console.log(`✓ ${page.name}: ${screenshotPath}`);
      
    } catch (err) {
      console.error(`✗ ${page.name}: ${err.message}`);
    }
  }
  
  await browser.close();
  console.log('\nDone! Convert PNG to WebP with:');
  console.log('cwebp -q 85 static/og/*.png -o static/og/*.webp');
}

generateOGImages().catch(console.error);
