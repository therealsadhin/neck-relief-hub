#!/bin/bash
set -e

echo "Installing dependencies..."
npm ci

echo "Building the project..."
npm run build

echo "Build completed successfully!"