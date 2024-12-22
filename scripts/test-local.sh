#!/bin/bash

echo "Running test suite..."

# Run unit tests
echo "Running unit tests..."
npm run test

# Run E2E tests
echo "Running E2E tests..."
npm run test:e2e

# Run linting
echo "Running linting..."
npm run lint

# If all tests pass, show success message
if [ $? -eq 0 ]; then
    echo "✅ All tests passed!"
    exit 0
else
    echo "❌ Tests failed"
    exit 1
fi