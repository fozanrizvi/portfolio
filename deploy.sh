#!/bin/bash

# Portfolio Deployment Script - AWS S3 + CloudFront
# This script deploys your React portfolio to AWS S3 and invalidates CloudFront cache

set -e

echo "🚀 Starting Portfolio Deployment to AWS S3 + CloudFront"
echo "=================================================="

# Configuration - UPDATE THESE VALUES
S3_BUCKET="your-portfolio-bucket"  # e.g., fozanrizvi-portfolio
CLOUDFRONT_DISTRIBUTION_ID="your-cloudfront-id"  # e.g., E1A2B3C4D5E6F
CUSTOM_DOMAIN="your-domain.com"  # e.g., fozanrizvi.com
AWS_REGION="us-east-1"

# Check if build directory exists
if [ ! -d "build" ]; then
    echo "❌ Build directory not found. Running npm run build..."
    npm run build
fi

echo ""
echo "📦 Build complete! Files ready for deployment."
echo ""

# Sync files to S3
echo "📤 Uploading files to S3 bucket: $S3_BUCKET"
aws s3 sync build/ "s3://$S3_BUCKET/" \
    --region "$AWS_REGION" \
    --delete \
    --cache-control "max-age=31536000,public" \
    --exclude "index.html" \
    --exclude "service-worker.js"

# Upload HTML files with no-cache
echo "📄 Uploading index.html with no-cache policy..."
aws s3 cp build/index.html "s3://$S3_BUCKET/index.html" \
    --region "$AWS_REGION" \
    --cache-control "no-cache,no-store,must-revalidate" \
    --content-type "text/html"

# Invalidate CloudFront cache
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo ""
    echo "🔄 Invalidating CloudFront cache (Distribution: $CLOUDFRONT_DISTRIBUTION_ID)..."
    aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --paths "/*"
    echo "✅ CloudFront cache invalidated!"
else
    echo "⚠️  CloudFront Distribution ID not configured. Skipping cache invalidation."
fi

echo ""
echo "=================================================="
echo "✅ Deployment Complete!"
echo ""
echo "Your portfolio is now live at:"
echo "   https://$CUSTOM_DOMAIN"
echo ""
echo "Deployment Summary:"
echo "   S3 Bucket: $S3_BUCKET"
echo "   CloudFront Distribution: $CLOUDFRONT_DISTRIBUTION_ID"
echo "   Region: $AWS_REGION"
echo ""
