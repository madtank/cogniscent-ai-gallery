data "aws_acm_certificate" "website" {
  domain   = var.domain_name
  statuses = ["ISSUED"]
}