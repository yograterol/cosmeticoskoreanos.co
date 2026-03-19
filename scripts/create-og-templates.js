const http = require('http');
const fs = require('fs');
const path = require('path');

// Create simple HTML OG image template
function createOGTemplate(title, subtitle = 'Guía K-Beauty Colombia 2026') {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #FF6B9D 0%, #9B5DE5 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: white;
      text-align: center;
      padding: 60px;
    }
    .logo {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 30px;
      opacity: 0.9;
      letter-spacing: 1px;
    }
    .title {
      font-size: 64px;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 24px;
      text-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .subtitle {
      font-size: 32px;
      opacity: 0.95;
      max-width: 1000px;
      line-height: 1.4;
    }
    .badge {
      background: rgba(255,255,255,0.25);
      padding: 12px 32px;
      border-radius: 30px;
      font-size: 20px;
      margin-top: 40px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="logo">CosmeticosKoreanos.co</div>
  <div class="title">${title}</div>
  <div class="subtitle">${subtitle}</div>
  <div class="badge">Guía 2026</div>
</body>
</html>
  `;
}

// Generate OG images as HTML files (to be screenshotted)
const OG_DIR = './static/og-templates';
if (!fs.existsSync(OG_DIR)) {
  fs.mkdirSync(OG_DIR, { recursive: true });
}

const pages = [
  { file: 'homepage.html', title: 'Guía Definitiva de Cosméticos Coreanos', subtitle: 'Reviews, rutinas y rankings K-Beauty 2026' },
  { file: 'marcas-cosrx.html', title: 'COSRX: Marca Coreana de Culto', subtitle: 'Snail Mucin, productos estrella y más' },
  { file: 'marcas-innisfree.html', title: 'Innisfree: Natural de Jeju', subtitle: 'Green Tea Seed, ingredientes naturales' },
  { file: 'mejores-serums-2026.html', title: 'Mejores Serums Coreanos 2026', subtitle: 'Ranking con análisis de ingredientes' },
  { file: 'mejores-limpiadores-2026.html', title: 'Mejores Limpiadores Coreanos', subtitle: 'Top 8 según tu tipo de piel' },
  { file: 'rutina-coreana-10-pasos.html', title: 'Rutina Coreana 10 Pasos', subtitle: 'Guía completa paso a paso' },
  { file: 'preocupaciones-acne.html', title: 'Tratamiento Acné con K-Beauty', subtitle: 'Ingredientes y rutina anti-acné' }
];

pages.forEach(page => {
  const html = createOGTemplate(page.title, page.subtitle);
  fs.writeFileSync(path.join(OG_DIR, page.file), html);
});

console.log('✅ OG image templates created!');
console.log(`Location: ${OG_DIR}/`);
console.log('');
console.log('Dimensions: 1200x630px (1.91:1 landscape)');
console.log('');
console.log('To generate final WebP images:');
console.log('1. Open each HTML file in browser');
console.log('2. Set viewport to 1200x630 (DevTools device mode)');
console.log('3. Screenshot and save as WebP');
console.log('');
console.log('Or use a screenshot tool like Puppeteer:');
console.log('npx playwright screenshot --viewport-size=1200,630 \');
console.log('  static/og-templates/homepage.html \');
console.log('  static/og/homepage-og.webp');
