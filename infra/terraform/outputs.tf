output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.website.id
}

output "website_bucket" {
  value = aws_s3_bucket.website.id
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.website.domain_name
}

output "cloudfront_function_arn" {
  value = aws_cloudfront_function.url_rewriter.arn
}