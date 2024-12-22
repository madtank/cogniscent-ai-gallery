# Improve Tests and Accessibility

## Description

This PR improves test coverage and accessibility while fixing a runtime error with client components. The changes enhance both the testing infrastructure and component implementation.

## Changes Made

1. Navigation Component Improvements:
   - Fixed DOM nesting and accessibility issues
   - Improved test queries using `getByRole`
   - Added proper ARIA labels and roles
   - Fixed mobile menu toggle tests

2. Blog Component Updates:
   - Fixed invalid h1 inside h3 nesting
   - Updated test cases to match content
   - Added more specific test assertions
   - Improved component structure

3. Client Component Fix:
   - Added 'use client' directive to layout component
   - Fixed React hook usage in Next.js 14
   - Maintained all mobile menu functionality

## Testing

- All tests are passing
- Verified mobile menu toggle works
- Checked responsive design
- No console errors in production build
- Improved accessibility for screen readers

## Additional Context

The client component fix was necessary for Next.js 14 which has stricter server/client component boundaries. This change ensures proper client-side rendering for interactive elements while maintaining all accessibility improvements.