#!/usr/bin/env bash
# Generate OpenGraph images by taking screenshots of pages
# Requires: Playwright or Puppeteer (optional - can use external service)

set -e

SITE_URL="https://cosmeticoskoreanos.co"
OG_DIR="./static/og"

echo "OG Image Generator"
echo "=================="
echo ""
echo "For now, we'll create placeholder OG images with ImageMagick or generate them manually."
echo ""
echo "To generate proper OG images:"
echo "1. Visit each page"
echo "2. Use browser dev tools to capture screenshot at 1200x630"
echo "3. Save to static/og/ folder"
echo ""
echo "Current OG images:"
ls -lh $OG_DIR/
