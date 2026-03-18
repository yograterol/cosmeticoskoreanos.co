# CosmeticosKoreanos.co

La guía definitiva de cosméticos coreanos (K-Beauty) en Colombia y Latinoamérica.

## 🚀 Tecnología

- **Generador estático:** Hugo
- **Tema:** Custom minimal clean
- **Hosting:** Cloudflare Pages
- **Dominio:** cosmeticoskoreanos.co

## 📁 Estructura de Contenidos

```
content/
├── marcas/           # Reviews de marcas (COSRX, Innisfree, etc.)
├── productos/        # Reviews individuales de productos
├── mejores/          # Rankings anuales ("Mejores serums 2026")
├── preocupaciones/   # Guías por problema (acné, manchas, etc.)
├── rutinas/          # Rutinas coreanas paso a paso
├── comparar/         # Comparativas (A vs B)
├── colombia/         # Dónde comprar en ciudades colombianas
└── blog/             # Posts generales
```

## 📝 Guía de Escritura

Ver [WRITING-GUIDE.md](./WRITING-GUIDE.md) para:
- Estructura de posts
- SEO y schemas
- Estilo de escritura
- Flujo de trabajo

## 🛠️ Desarrollo Local

```bash
# Instalar Hugo
brew install hugo

# Clonar repo
git clone https://github.com/yograterol/cosmeticoskoreanos.co.git
cd cosmeticoskoreanos.co

# Servidor de desarrollo
hugo server -D

# Build para producción
hugo --minify
```

## 🖼️ Generar OpenGraph Images

```bash
# Después de build, generar screenshots
node scripts/generate-og.js
```

## 📦 Deploy

Push a `main` → Cloudflare Pages auto-deploy

## 📄 Licencia

Contenido propietario © 2026 CosmeticosKoreanos.co
