# CogniscentAI Development Guide

## Overview
This guide covers the development workflow, testing practices, and quality assurance processes for the CogniscentAI website project.

## Development Workflow

### Branch Protection
- Main branch is protected
- Requires one approver for merges
- All tests must pass before merging

### Making Changes
1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make changes and test locally:
   ```bash
   # Run all tests
   ./scripts/test-local.sh
   
   # Run specific tests
   npm run test
   npm run test:e2e
   npm run lint
   ```

3. Create a PR with:
   - Clear description of changes
   - Test results
   - Screenshots if visual changes
   - Areas needing review attention

## Testing Infrastructure

### Unit Tests (Jest)
- Location: `src/app/__tests__/`
- Tests individual components
- Run with: `npm run test`
- Example test:
  ```typescript
  import { render, screen } from '@testing-library/react'
  import Component from './Component'
  
  describe('Component', () => {
    it('renders correctly', () => {
      render(<Component />)
      expect(screen.getByText('Expected Text')).toBeInTheDocument()
    })
  })
  ```

### E2E Tests (Playwright)
- Location: `e2e/`
- Tests user journeys
- Tests navigation
- Verifies content
- Run with: `npm run test:e2e`
- Example test:
  ```typescript
  test('navigation works', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Blog')
    await expect(page).toHaveURL('/blog')
  })
  ```

### Local Testing Script
- Location: `scripts/test-local.sh`
- Runs all tests locally
- Provides clear pass/fail feedback
- Usage:
  ```bash
  chmod +x scripts/test-local.sh
  ./scripts/test-local.sh
  ```

### Verification Script
- Location: `scripts/verify-and-report.js`
- Quick verification of site functionality
- Tests critical paths
- Usage:
  ```bash
  node scripts/verify-and-report.js
  ```

## CI/CD Pipeline

### GitHub Actions
- Runs on PR creation and updates
- Runs on push to main
- Configuration: `.github/workflows/test.yml`
- Steps:
  1. Run unit tests
  2. Run E2E tests
  3. Run linting
  4. Build verification
  5. Deploy if on main

### PR Process
1. Create feature branch
2. Make changes
3. Run local tests
4. Create PR using template
5. Wait for reviews
6. Merge when approved

## Best Practices

### Code Quality
- Write tests for new components
- Keep components focused and small
- Use TypeScript for type safety
- Follow ESLint rules

### Testing
- Test both success and error cases
- Test responsive design
- Test accessibility
- Test navigation paths

### Commits
- Use conventional commit messages
- Include context in commit messages
- Keep commits focused

### Documentation
- Update docs with new features
- Include code examples
- Document breaking changes

## Project Structure
```
cogniscent-ai-gallery/
├── src/
│   ├── app/             # Next.js pages
│   │   ├── blog/        # Blog posts
│   │   ├── about/       # About page
│   │   └── page.tsx     # Homepage
│   ├── components/      # Reusable components
│   └── __tests__/       # Unit tests
├── e2e/                 # E2E tests
├── scripts/             # Development scripts
├── docs/                # Documentation
└── public/              # Static assets
```

## Testing Checklist

Before submitting a PR:
- [ ] Run all tests locally
- [ ] Add tests for new features
- [ ] Check mobile responsiveness
- [ ] Verify navigation
- [ ] Check image loading
- [ ] Run lighthouse test
- [ ] Update documentation

## Review Process

As a reviewer, check:
1. Code quality
   - TypeScript types
   - Component structure
   - Error handling
   
2. Tests
   - Coverage
   - Edge cases
   - User scenarios
   
3. Visual design
   - Responsive design
   - Accessibility
   - Consistency

4. Documentation
   - Updated as needed
   - Clear and complete
   - Examples included

## Troubleshooting

Common issues and solutions:

1. Tests failing locally
   ```bash
   # Clear Jest cache
   npm run test -- --clearCache
   
   # Update dependencies
   npm install
   ```

2. E2E tests failing
   ```bash
   # Update Playwright browsers
   npx playwright install
   
   # Run with debug
   npm run test:e2e -- --debug
   ```

3. Build issues
   ```bash
   # Clear Next.js cache
   rm -rf .next
   
   # Fresh install
   rm -rf node_modules
   npm install
   ```

## Future Improvements

Planned enhancements:
1. Add performance testing
2. Implement visual regression testing
3. Add automated accessibility testing
4. Set up preview deployments
5. Add test coverage requirements

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Testing Library](https://testing-library.com/)
- [Playwright](https://playwright.dev/)
- [GitHub Actions](https://docs.github.com/en/actions)