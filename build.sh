#!/usr/bin/env bash

# Build script for Cloudflare Workers
# Installs Hugo and builds the site

set -euo pipefail

HUGO_VERSION="0.158.0"

echo "Installing Hugo ${HUGO_VERSION}..."

# Download and install Hugo (Linux x64 for Cloudflare build environment)
curl -sLJO "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.tar.gz"
mkdir -p "${HOME}/.local/hugo"
tar -C "${HOME}/.local/hugo" -xf "hugo_${HUGO_VERSION}_linux-amd64.tar.gz"
rm "hugo_${HUGO_VERSION}_linux-amd64.tar.gz"
export PATH="${HOME}/.local/hugo:${PATH}"

echo "Hugo version:"
hugo version

echo "Building site..."
hugo --minify --gc

echo "Build complete!"
