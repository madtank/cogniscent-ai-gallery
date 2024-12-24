variable "domain_name" {
  type        = string
  description = "Domain name for the website"
  default     = "thecogniscentai.com"
}

variable "environment" {
  type        = string
  description = "Environment (e.g., production, staging)"
  default     = "production"
}

locals {
  s3_origin_id = "S3-${var.domain_name}"
}