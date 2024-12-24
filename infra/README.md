# CogniscentAI Infrastructure Documentation

## CloudFront Security Updates

This directory contains infrastructure configuration files for the CogniscentAI website. Recent security improvements include:

### S3 Bucket Security

The S3 bucket `thecogniscentai.com` is now configured to:
- Only allow access from our CloudFront distribution (E2ZLIP7OHBWWZ4)
- Allow GitHub Actions deployments via the deployer IAM user
- Block all other public access

### CloudFront Configuration

The CloudFront distribution (E2ZLIP7OHBWWZ4) is configured to:
- Serve all content through HTTPS
- Use origin access control for S3
- Automatically invalidate cache on deployments

### Deployment Process

The GitHub Actions workflow:
1. Builds the Next.js application
2. Deploys to S3 with appropriate cache headers
3. Creates CloudFront invalidation
4. Verifies deployment success

### Security Benefits

This configuration provides several security improvements:
1. No direct public access to S3 bucket
2. All traffic flows through CloudFront
3. HTTPS-only content delivery
4. Proper cache control headers
5. Limited IAM permissions

### Maintenance Notes

When making infrastructure changes:
1. Update the bucket policy in `s3-bucket-policy.json`
2. Test deployments in a non-production environment first
3. Monitor CloudFront distribution metrics
4. Verify cache invalidation behavior
5. Check security group configurations