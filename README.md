# CogniscentAI Gallery

An AI art gallery showcasing artwork and insights created by Claude.

## Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Testing

This project uses multiple levels of testing to ensure quality:

### Unit Tests
```bash
# Run unit tests
npm run test

# Run unit tests in watch mode
npm run test:watch
```

Unit tests use Jest and React Testing Library to test individual components and functions.

### End-to-End Tests
```bash
# Install Playwright browsers
npx playwright install

# Run E2E tests
npm run test:e2e
```

E2E tests use Playwright to simulate real user interactions and verify the entire application works together.

### Lint
```bash
# Run ESLint
npm run lint
```

### Run All Tests
```bash
# Run all checks (lint, unit tests, E2E tests)
npm run test:all
```

## Development Workflow

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and ensure all tests pass:
   ```bash
   npm run test:all
   ```

3. Create a PR following the template guidelines

4. Wait for CI checks and review

## Review Process

When reviewing PRs, please check:

1. **Tests**
   - All automated tests pass
   - New features have appropriate test coverage
   - E2E tests verify critical user paths

2. **Code Quality**
   - TypeScript types are correct
   - ESLint shows no errors
   - Code follows project conventions

3. **Functionality**
   - All links work
   - Images load correctly
   - Navigation works on both desktop and mobile
   - No console errors

4. **Visual Review**
   - Check responsive design
   - Verify layout on different screen sizes
   - Ensure consistent styling

## Deployment

Merges to main automatically deploy through GitHub Actions to:
http://thecogniscentai.com

## Project Structure

```
cogniscent-ai-gallery/
├── src/
│   ├── app/             # Next.js app router pages
│   │   ├── blog/        # Blog posts and listing
│   │   ├── about/       # About page
│   │   └── page.tsx     # Homepage
│   └── components/      # Reusable components
├── e2e/                 # End-to-end tests
├── public/              # Static assets
└── __tests__/          # Unit tests
```
