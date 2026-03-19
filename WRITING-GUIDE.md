# 📖 Guía de Escritura - CosmeticosKoreanos.co

## 🎯 Propósito
Ser la fuente #1 en español LATAM sobre cosméticos coreanos (K-Beauty). Contenido educativo, confiable y SEO-optimizado para Colombia y Latinoamérica.

---

## 🏗️ Arquitectura de Contenidos

### 1. **Marcas** (`/marcas/{marca}/`)
Páginas de marca con estructura fija:
- Historia de la marca
- Filosofía coreana (clean beauty, fermentación, etc.)
- Productos estrella
- Dónde comprar en Colombia
- Verificación de autenticidad

### 2. **Productos** (`/productos/{marca}-{producto}/`)
Reviews individuales:
- INCI completo con análisis
- Para qué tipo de piel funciona
- Cómo usar en rutina coreana
- Precios y dónde comprar
- Comparativas con similares

### 3. **Mejores de [Año]** (`/mejores/{categoria}-2026/`)
Rankings anuales SEO-drivers:
- **Ejemplo**: `/mejores/mejores-serums-coreanos-2026/`
- Mínimo 10 productos por ranking
- Criterios de selección explícitos
- Tabla comparativa
- Actualizar anualmente

### 4. **Preocupaciones** (`/preocupaciones/{problema}/`)
Guías por problema de piel:
- Acné, manchas, arrugas, sensibilidad
- Rutinas específicas
- Ingredientes clave recomendados
- Productos sugeridos por paso

### 5. **Rutinas** (`/rutinas/{tipo-piel}/`)
Rutinas coreanas completas:
- 10 pasos explicados
- Alternativas según presupuesto
- Versión minimalista (3-5 pasos)
- Mañana vs noche

### 6. **Comparar** (`/comparar/{producto-a-vs-producto-b}/`)
Versus directos:
- Essence vs Tónico
- Serum vs Ampolla
- Niacinamida vs Vitamina C
- Tabla comparativa side-by-side

### 7. **Ciudades** (`/colombia/{ciudad}/`)
Dónde comprar físicamente:
- Tiendas físicas en Bogotá, Medellín, Cali, etc.
- Precios aproximados
- Verificación de productos originales

---

## ✍️ Estilo de Escritura

### Voz y Tono
- **Voz**: Experta pero accesible, como una amiga que sabe de skincare
- **Tono**: Informativo, animador, sin alarmismo
- **Nunca**: Dogmática, prometedora de "milagros", médica

### Reglas de Escritura

#### 1. **Estructura de Párrafos**
- Máximo 3-4 líneas por párrafo
- Espaciado visual entre ideas
- Usa negritas para conceptos clave
- Listas con viñetas para pasos o beneficios

#### 2. **Lenguaje**
- Español neutro (LATAM), evitar regionalismos colombianos excesivos
- Términos técnicos con explicación: "niacinamida (vitamina B3)"
- Coreano entre paréntesis: "chok chok (피부)"
- INGREDIENTES en mayúsculas cuando se mencionan por primera vez

#### 3. **SEO**
- H1: Target keyword al inicio
- H2s: Preguntas frecuentes, pasos del proceso
- H3s: Subcategorías específicas
- Meta description: 155-160 caracteres con CTA
- Keywords LSI: sinónimos y términos relacionados

#### 4. **Formato de Reviews de Productos**
```
## [Nombre del Producto]

**Tipo:** Serum/Essence/Crema/etc.
**Marca:** [Marca coreana]
**Precio aproximado:** $XX.XXX COP
**Dónde comprar:** [Links con afiliados]

### INCI Completo
[Ingredientes en orden de concentración]

### Análisis de Ingredientes Clave
- **Niacinamida (X%):** Explicación del beneficio
- **Ácido Hialurónico:** Tres pesos moleculares para hidratación en profundidad

### Para Quién Es
✅ Piel grasa con deshidratación
✅ Primera vez con vitamina C
❌ Piel sensible a fragancias

### Cómo Usar en Rutina Coreana
1. Después del tónico
2. Antes de la crema
3. Mañana o noche

### Opinión
[Análisis personal, pros y contras]

### Alternativas
- **Más económico:** [Producto similar]
- **Premium:** [Producto de gama alta]
```

#### 5. **Formato de Rankings "Mejores"**
```
# Mejores [Categoría] Coreanos 2026

## Cómo Elegimos
Explicación de criterios: eficacia basada en INCI, reviews, relación precio/calidad, disponibilidad en Colombia.

## Comparativa Rápida
| Producto | Marca | Precio | Mejor Para |
|----------|-------|--------|------------|
| [Nombre] | [Marca] | $XX | Piel grasa |

## 10. [Producto #10]
[Breve descripción]

## 9. [Producto #9]
...

## 1. [Mejor producto]
[Review completo]

## Preguntas Frecuentes
### ¿Cuándo actualizan esta lista?
Anualmente, enero de cada año.

### ¿Dónde comprar en Colombia?
[Links a tiendas verificadas]
```

---

## 🔍 Optimización Técnica SEO

### Schema Markup Obligatorio
Cada página debe incluir:
- **Article** schema para posts
- **Product** schema para reviews individuales
- **FAQPage** schema para secciones de preguntas
- **BreadcrumbList** en todas las páginas
- **Organization** schema en homepage

### URLs
- Todo en minúsculas
- Guiones medios (-) para espacios
- Sin fechas en URL de posts evergreen
- Ejemplo: `/marcas/cosrx/`, no `/marcas/cosrx-2026/`

### Internal Linking
- Mínimo 5 links internos por post
- Link a categorías padre
- Links a productos mencionados
- Cross-link entre contenido relacionado

### Imágenes
- Formato: WebP (cwebp -q 85)
- Dimensiones: 1200x800px para hero, 800x800 para productos
- Nombres descriptivos: `cosrx-advanced-snail-96-mucin-power-essence.jpg`
- Alt text: "[Producto] de [Marca] sobre fondo blanco"
- OpenGraph: 1200x630px con título y branding

---

## 🖼️ OpenGraph / Social Cards

### Proceso para Cada Página
1. **Build** la página: `hugo --minify`
2. **Screenshot** de la página renderizada (Puppeteer/Playwright)
3. **Optimizar** a 1200x630px WebP
4. **Guardar** en `/static/og/[slug].webp`
5. **Referenciar** en frontmatter:
   ```yaml
   og_image: "/og/marcas-cosrx.webp"
   ```

### Template de OG Image
- Fondo: gradiente suave (rosa pálido → lavanda)
- Logo: CosmeticosKoreanos.co esquina superior derecha
- Título: H1 de la página, máximo 60 caracteres
- Badge: "Guía 2026" o "Review" según tipo

---

## 🖼️ OpenGraph - Generación Automática

### Requisitos Previos
- Hugo instalado (`brew install hugo`)
- Navegador (Chrome/Edge) para screenshots
- `cwebp` instalado (`brew install webp`)

### Flujo de Generación de OG Images (Automatizado)

#### Método 1: Screenshot del Sitio Local (Recomendado)

**Paso 1:** Iniciar servidor Hugo local
```bash
hugo server -D --port 1313
```

**Paso 2:** Configurar navegador
- Abrir navegador DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Seleccionar "Edit" → "Add custom device"
- Configurar: **1200 x 630 px**
- Importante: Debe ser **viewport visible**, NO full page

**Paso 3:** Navegar y capturar
Abrir cada página en el viewport 1200x630:
- Homepage: `http://localhost:1313/`
- Marcas: `http://localhost:1313/marcas/[marca]/`
- Rankings: `http://localhost:1313/mejores/[categoria]/`
- Preocupaciones: `http://localhost:1313/preocupaciones/[tema]/`

**Paso 4:** Tomar screenshot
- Screenshot solo del **viewport visible** (NO full page)
- Guardar como PNG

**Paso 5:** Convertir a WebP
```bash
cwebp -q 82 screenshot.png -o static/og/[slug].webp
```

**⚠️ IMPORTANTE:** El screenshot debe capturar solo el área visible 1200x630, no la página completa con scroll.

**Paso 4:** Actualizar frontmatter del contenido
```yaml
og_image: "/og/[slug].webp"
```

#### Método 2: Script Automático (Experimental)

```javascript
// scripts/generate-og.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PAGES = [
  { url: 'http://localhost:1313/', output: 'homepage.webp' },
  { url: 'http://localhost:1313/marcas/cosrx/', output: 'marcas-cosrx.webp' },
  // ... más páginas
];

async function generateOGImages() {
  const browser = await puppeteer.launch();
  
  for (const page of PAGES) {
    const pageObj = await browser.newPage();
    await pageObj.setViewport({ width: 1200, height: 630 });
    await pageObj.goto(page.url, { waitUntil: 'networkidle0' });
    await pageObj.screenshot({
      path: path.join('./static/og', page.output.replace('.webp', '.png'))
    });
    await pageObj.close();
  }
  
  await browser.close();
}

generateOGImages();
```

Instalar dependencias:
```bash
npm install puppeteer
node scripts/generate-og.js
```

Luego convertir PNG a WebP:
```bash
for img in static/og/*.png; do
  cwebp -q 82 "$img" -o "${img%.png}.webp"
  rm "$img"
done
```

### Ventajas del Método de Screenshot

1. **Fidelidad exacta**: El OG image muestra exactamente cómo se ve la página
2. **Diseño consistente**: Usa el mismo CSS y branding del sitio
3. **Automatizable**: Puede hacerse con scripts o manualmente
4. **Actualizable**: Solo repetir el proceso cuando cambie el diseño

### Especificaciones Técnicas

| Parámetro | Valor |
|-----------|-------|
| Dimensiones | 1200 x 630 px |
| Formato final | WebP (calidad 82) |
| Ubicación | `/static/og/[slug].webp` |
| Referencia en frontmatter | `og_image: "/og/[slug].webp"` |

### Ejemplos de OG Images Generadas

- `homepage-generated.webp` (56K)
- `marcas-cosrx-generated.webp` (59K)
- `mejores-serums-2026-generated.webp` (31K)

### Notas Importantes

- Los OG images generados incluyen: header, título, contenido real
- El screenshot captura el scroll de la página → usar viewport fijo
- Verificar que el servidor Hugo esté corriendo antes de generar
- Los archivos `-generated.webp` son los screenshots automatizados
- Los archivos originales `.webp` son imágenes de stock manuales

---

## 🏷️ Taxonomías

### Categorías Principales
- Marcas
- Productos
- Mejores (rankings)
- Preocupaciones
- Rutinas
- Comparar
- Colombia

### Tags (opcional)
- Por ingrediente: niacinamida, ácido-hialuronico, retinol
- Por tipo de piel: piel-grasa, piel-seca, piel-sensible
- Por paso de rutina: limpieza, tonico, esencia, serum, crema

---

## 🌐 Localización Colombia

### Moneda
- Siempre COP (pesos colombianos)
- Formato: $45.900 (con punto de miles)

### Links de Compra
Prioridad:
1. Tiendas colombianas verificadas (GlamourStore, etc.)
2. Amazon México (envío a Colombia)
3. YesStyle (internacional)
4. iHerb

### Referencias Locales
- INVIMA para registro sanitario
- Superintendencia de Industria y Comercio
- Bogotá, Medellín, Cali, Barranquilla como ciudades principales

### Clima
- Considerar altitud (Bogotá 2.640m) para reseñas de hidratación
- Humedad en ciudades costeras

---

## 📋 Checklist Pre-Publicación

- [ ] H1 único y con keyword
- [ ] Meta description 155-160 chars
- [ ] Mínimo 5 links internos
- [ ] Mínimo 3 imágenes optimizadas
- [ ] Schema JSON-LD válido
- [ ] Breadcrumbs funcionando
- [ ] OG image generada y referenciada
- [ ] INCI verificado (si aplica)
- [ ] Precios actualizados en COP
- [ ] Links de compra funcionando
- [ ] Revisión ortográfica (LanguageTool)
- [ ] Mobile-friendly test

---

## 🔄 Flujo de Trabajo

### 1. Investigación (30 min)
- Buscar información en fuentes coreanas (Soko Glam, Byrdie, Reddit r/AsianBeauty)
- Verificar INCI en sitios oficiales
- Buscar imágenes sin marca de agua

### 2. Redacción (60 min)
- Seguir templates de arriba
- Incluir datos específicos (porcentajes, tamaños)
- Traducir conceptos coreanos

### 3. Optimización (20 min)
- Revisar SEO (títulos, meta, keywords)
- Optimizar imágenes
- Generar OG image

### 4. Revisión (10 min)
- Checklist de arriba
- Preview en Hugo
- Build y screenshot para OG

### 5. Publicación
- `git add .`
- `git commit -m "Add: [título]"`
- `git push origin main`
- Cloudflare auto-deploy

---

## 🎨 Guía Visual (para OG y sitio)

### Paleta de Colores
- **Primario:** `#FF6B9D` (Rosa coreano)
- **Secundario:** `#9B5DE5` (Lavanda)
- **Acento:** `#00D4AA` (Menta)
- **Fondo:** `#FAFAFA` (Blanco roto)
- **Texto:** `#1A1A2E` (Azul noche)

### Tipografía
- **Headings:** Pretendard o Inter (sans-serif moderna)
- **Body:** Noto Sans KR (para términos coreanos) + Inter
- **Tamaños:** H1 2.5rem, H2 1.75rem, Body 1rem

---

## 🚫 Qué NO Hacer

- ❌ Prometer resultados milagrosos
- ❌ Copiar INCI sin verificar
- ❌ Usar imágenes con marca de agua
- ❌ Dar consejos médicos (siempre "consulta a un dermatólogo")
- ❌ Ignorar piel sensible en reviews
- ❌ Precios desactualizados
- ❌ Links de afiliados sin disclosure

---

## 📚 Recursos Útiles

### Fuentes Confiables
- **Coreanas:** Hwahae app, Glowpick, Naver
- **Inglesas:** Soko Glam, Byrdie, Lab Muffin Beauty Science
- **INCI:** INCIDecoder, CosDNA, manufacturer websites

### Herramientas
- **Optimización imágenes:** `cwebp -q 85`
- **OG screenshots:** Puppeteer script en `scripts/generate-og.js`
- **SEO:** Screaming Frog (mensual), Google Search Console

---

## 📄 Notas Legales

Incluir en footer de cada página:
> "Este sitio contiene links de afiliados. Ganamos comisión si compras a través de ellos, sin costo adicional para ti. Las opiniones son independientes."

Y el aviso médico:
> "⚕️ Este contenido es educativo y no sustituye la consulta con un dermatólogo."

---

**Última actualización:** Marzo 2026
**Versión:** 1.0
**Autor:** Arturito para CosmeticosKoreanos.co
