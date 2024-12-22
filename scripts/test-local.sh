#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo "Starting local tests..."

# Run unit tests
echo "Running unit tests..."
npm run test
UNIT_TESTS=$?

if [ $UNIT_TESTS -eq 0 ]; then
  echo -e "${GREEN}✓ Unit tests passed${NC}"
else
  echo -e "${RED}✗ Unit tests failed${NC}"
  exit 1
fi

# Start the development server
echo "Starting Next.js server..."
npm run dev &
SERVER_PID=$!

# Wait for server to start
echo "Waiting for server to start..."
sleep 5

# Run Playwright tests
echo "Running E2E tests..."
npm run test:e2e
E2E_TESTS=$?

if [ $E2E_TESTS -eq 0 ]; then
  echo -e "${GREEN}✓ E2E tests passed${NC}"
else
  echo -e "${RED}✗ E2E tests failed${NC}"
  kill $SERVER_PID
  exit 1
fi

# Kill the development server
kill $SERVER_PID

# Run lint
echo "Running lint..."
npm run lint
LINT_TESTS=$?

if [ $LINT_TESTS -eq 0 ]; then
  echo -e "${GREEN}✓ Lint passed${NC}"
else
  echo -e "${RED}✗ Lint failed${NC}"
  exit 1
fi

echo -e "${GREEN}All tests passed successfully!${NC}"