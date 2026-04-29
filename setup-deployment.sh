#!/bin/bash

# Quick AWS Setup Helper - Interactive deployment configuration
# This script helps you set up your AWS deployment

echo "🚀 AWS Portfolio Deployment Setup"
echo "=================================="
echo ""

# Get user input
read -p "Enter your S3 bucket name (e.g., fozanrizvi.com): " BUCKET_NAME
read -p "Enter your CloudFront Distribution ID: " CLOUDFRONT_ID
read -p "Enter your custom domain (e.g., fozanrizvi.com): " CUSTOM_DOMAIN
read -p "Enter AWS region [us-east-1]: " AWS_REGION
AWS_REGION=${AWS_REGION:-us-east-1}

# Validate AWS CLI
echo ""
echo "Checking AWS CLI..."
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI not found. Please install it first:"
    echo "   https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi
echo "✅ AWS CLI found"

# Test AWS credentials
echo ""
echo "Testing AWS credentials..."
if aws s3 ls &> /dev/null; then
    echo "✅ AWS credentials configured"
else
    echo "❌ AWS credentials not configured"
    echo "   Run: aws configure"
    exit 1
fi

# Update deploy.sh
echo ""
echo "Updating deploy.sh with your configuration..."
sed -i.bak "s|S3_BUCKET=\".*\"|S3_BUCKET=\"$BUCKET_NAME\"|g" deploy.sh
sed -i.bak "s|CLOUDFRONT_DISTRIBUTION_ID=\".*\"|CLOUDFRONT_DISTRIBUTION_ID=\"$CLOUDFRONT_ID\"|g" deploy.sh
sed -i.bak "s|CUSTOM_DOMAIN=\".*\"|CUSTOM_DOMAIN=\"$CUSTOM_DOMAIN\"|g" deploy.sh
sed -i.bak "s|AWS_REGION=\".*\"|AWS_REGION=\"$AWS_REGION\"|g" deploy.sh

echo "✅ deploy.sh updated"

# Create .env for reference
cat > .deployment.env << EOF
# Deployment Configuration
S3_BUCKET=$BUCKET_NAME
CLOUDFRONT_DISTRIBUTION_ID=$CLOUDFRONT_ID
CUSTOM_DOMAIN=$CUSTOM_DOMAIN
AWS_REGION=$AWS_REGION
EOF

echo ""
echo "=================================="
echo "✅ Setup Complete!"
echo ""
echo "Your configuration:"
echo "   S3 Bucket: $BUCKET_NAME"
echo "   CloudFront ID: $CLOUDFRONT_ID"
echo "   Custom Domain: $CUSTOM_DOMAIN"
echo "   AWS Region: $AWS_REGION"
echo ""
echo "Saved to: .deployment.env"
echo ""
echo "Next steps:"
echo "1. Make sure your S3 bucket is created"
echo "2. Make sure CloudFront distribution is ready"
echo "3. Run: ./deploy.sh"
echo ""
