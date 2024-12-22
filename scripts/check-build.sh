#!/bin/bash

echo "Running pre-deployment checks..."

# Clean previous build
echo "Cleaning previous build..."
rm -rf .next out

# Install dependencies
echo "Installing dependencies..."
npm install

# Run linting
echo "Running linter..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ Linting failed"
    exit 1
fi

# Run tests
echo "Running tests..."
npm run test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed"
    exit 1
fi

# Try building
echo "Attempting build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ All checks passed! Safe to create PR."