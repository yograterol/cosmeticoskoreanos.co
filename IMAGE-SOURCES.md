# Image Sources Guide

## Missing/Better Images Needed

### 1. Innisfree Green Tea Seed Serum
**Current:** Placeholder (1.9K)
**Needed:** Real product photo

**Where to find:**
1. Go to https://www.innisfree.com
2. Search "Green Tea Seed Serum"
3. Screenshot or download product image
4. Save as: `static/images/marcas/innisfree-hero.webp`

**Alternative sources:**
- https://www.sephora.com/product/innisfree-green-tea-seed-serum-P427417
- https://www.peachandlily.com/products/innisfree-green-tea-seed-serum
- https://www.yesstyle.com (search "innisfree green tea seed serum")

---

### 2. COSRX Snail Mucin Essence
**Current:** 12K (low quality)
**Needed:** Higher quality product photo

**Where to find:**
1. Go to https://www.cosrx.com
2. Navigate to "Advanced Snail 96 Mucin Power Essence"
3. Download main product image
4. Save as: `static/images/marcas/cosrx-hero.webp`

**Alternative sources:**
- https://www.amazon.com/Cosrx-Advanced-Snail-Mucin-Essence/dp/B00PBX3L7K
- https://www.sokoglam.com/products/cosrx-advanced-snail-96-mucin-power-essence

---

### 3. General K-Beauty Flatlay (for future content)
**Where to find free stock:**
- https://unsplash.com (search "skincare", "korean beauty")
- https://pexels.com (search "cosmetics", "beauty products")
- https://pixabay.com (search "skin care", "beauty")

**Where to find premium:**
- https://www.freepik.com (search "korean skincare")
- https://www.shutterstock.com (search "k-beauty products")

---

## Download Instructions

### Method 1: Direct Download
1. Right-click image on website
2. "Save Image As..."
3. Save to `static/images/[folder]/`
4. Convert to WebP:
   ```bash
   cwebp -q 85 input.jpg -o output.webp
   ```

### Method 2: Screenshot
1. Open product page
2. Screenshot product image
3. Crop to focus on product
4. Save as WebP

### Method 3: Browser DevTools
1. Right-click image → "Inspect"
2. Find `<img>` tag in Elements panel
3. Right-click image URL → "Open in new tab"
4. Save image from new tab

---

## Image Requirements

| Property | Value |
|----------|-------|
| Format | WebP (preferred) or JPG |
| Width | 800-1200px |
| Quality | High (no pixelation) |
| Background | Clean/white preferred |
| Attribution | Note source URL |

---

## Current Image Status

| Page | Image | Status | Size |
|------|-------|--------|------|
| COSRX | cosrx-hero.webp | ⚠️ Low quality | 12K |
| Innisfree | innisfree-hero.webp | ❌ Placeholder | 1.9K |
| Serums ranking | serums-2026-hero.webp | ✅ Good | 25K |
| Limpiadores ranking | limpiadores-2026-hero.webp | ✅ Good | 46K |
| Acne guide | acne-hero.webp | ✅ Good | 26K |
| 10-step routine | rutina-coreana-10-pasos.webp | ✅ Good | 48K |

---

## OG Images Status

All OG images are **1200x630 landscape** and working:
- ✅ homepage.webp
- ✅ marcas-cosrx.webp
- ✅ marcas-innisfree.webp
- ✅ mejores-serums-2026.webp
- ✅ mejores-limpiadores-2026.webp
- ✅ preocupaciones-acne.webp
- ✅ rutina-coreana-10-pasos.webp

---

*Last updated: March 18, 2026*
