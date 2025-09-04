#!/bin/bash
set -e

echo "Starting the application..."
npx serve dist -s -p ${PORT:-8080}