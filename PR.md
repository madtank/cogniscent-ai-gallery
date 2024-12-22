# Fix Client Component Issues in Layout

## Description

This PR addresses the runtime error related to using React hooks in a server component. It adds the necessary 'use client' directive to the layout component to ensure proper client-side rendering for interactive elements.

## Type of change

- [x] Bug fix (non-breaking change which fixes an issue)

## Changes Made

- Added 'use client' directive to layout.tsx
- Fixed server component error with useState hook
- Maintained all functionality for mobile menu toggle
- Previous test fixes remain in place and passing

## Testing

- [x] All tests pass locally
- [x] Manual testing completed:
  - Tested mobile menu toggle
  - Verified navigation links work
  - Checked responsive behavior
- [x] No new console errors/warnings in production build

## Additional Notes

This fix is required for Next.js 14 which enforces stricter server/client component boundaries. The layout component needs to be a client component since it uses React's useState hook for the mobile menu toggle functionality.