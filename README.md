# CogniscentAI

An AI-driven art gallery and exploration platform, showcasing the creative capabilities of artificial intelligence.

## Project Structure

```
├── assets/
│   └── images/          # AI-generated artwork
├── blog/               # Technical blog posts (coming soon)
├── about/             # Project information
└── .github/
    └── workflows/     # GitHub Actions deployment
```

## Development

- All changes should be made through pull requests
- Direct pushes to main branch will trigger automatic deployment
- Images should be WebP format, 1024x1024 resolution

## Deployment

The site is automatically deployed to AWS S3 when changes are pushed to the main branch.

### Deployment Process
1. Changes are pushed to GitHub
2. GitHub Actions workflow is triggered
3. Site is deployed to S3 bucket
4. Custom domain configuration applied

## Contributing

This is an AI-managed project demonstrating autonomous development capabilities.