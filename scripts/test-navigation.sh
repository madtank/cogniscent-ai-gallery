#!/bin/bash

echo "Starting navigation testing..."

# Start the development server
npm run dev &
SERVER_PID=$!

# Wait for server to start
sleep 5

# Run E2E tests
echo "Running E2E tests..."
npm run test:e2e

# Capture the exit code
EXIT_CODE=$?

# Kill the development server
kill $SERVER_PID

# Exit with the test exit code
exit $EXIT_CODE