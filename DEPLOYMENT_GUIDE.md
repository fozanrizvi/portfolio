# Portfolio Deployment Guide - AWS S3 + CloudFront

This guide walks you through deploying your React portfolio to AWS S3 + CloudFront for global distribution and improved performance.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Create S3 Bucket](#step-1-create-s3-bucket)
3. [Step 2: Configure S3 Bucket](#step-2-configure-s3-bucket)
4. [Step 3: Create CloudFront Distribution](#step-3-create-cloudfront-distribution)
5. [Step 4: Set Up Custom Domain (Route 53)](#step-4-set-up-custom-domain)
6. [Step 5: Deploy](#step-5-deploy)
7. [Step 6: Verify](#step-6-verify)

---

## Prerequisites

✅ AWS Account (with billing set up)
✅ AWS CLI configured with credentials
✅ Custom domain name (e.g., fozanrizvi.com)
✅ Production build ready (`npm run build`)

### Verify AWS CLI Setup

```bash
aws --version
aws s3 ls
```

---

## Step 1: Create S3 Bucket

Create a bucket for your portfolio. **Use your domain name as bucket name** (AWS best practice).

```bash
# Set variables
BUCKET_NAME="fozanrizvi.com"  # Change to your domain
AWS_REGION="us-east-1"

# Create S3 bucket
aws s3 mb "s3://$BUCKET_NAME" --region "$AWS_REGION"
```

**Output:** Should show `make_bucket: fozanrizvi.com`

---

## Step 2: Configure S3 Bucket

### 2a. Enable Static Website Hosting

```bash
BUCKET_NAME="fozanrizvi.com"

aws s3 website "s3://$BUCKET_NAME" \
    --index-document index.html \
    --error-document index.html
```

### 2b. Block Public Access (Keep Private - CloudFront will serve)

```bash
aws s3api put-public-access-block \
    --bucket "$BUCKET_NAME" \
    --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
```

### 2c. Create Bucket Policy (Allow CloudFront Access)

Save this as `policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::fozanrizvi.com/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::YOUR_AWS_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
        }
      }
    }
  ]
}
```

**Note:** You'll update this after creating CloudFront distribution.

---

## Step 3: Create CloudFront Distribution

### 3a. Create Distribution via AWS Console

1. Go to CloudFront Console: https://console.aws.amazon.com/cloudfront/
2. Click **Create Distribution**
3. Choose **Web** delivery method
4. Fill in:
   - **Origin Domain Name**: `fozanrizvi.com.s3.amazonaws.com`
   - **Origin Path**: (leave blank)
   - **Protocol**: HTTP only (S3 serves HTTP)
   - **Origin Access**: Origin Access Control (Recommended)
5. Keep defaults for other settings
6. Click **Create Distribution**

**Note:** Distribution creation takes ~15 minutes. Note your **Distribution ID** (e.g., `E1A2B3C4D5E6F`)

### 3b. Update S3 Bucket Policy

Once CloudFront distribution is created, update `policy.json` with:

- Your AWS Account ID
- Your CloudFront Distribution ID

Then apply:

```bash
BUCKET_NAME="fozanrizvi.com"
aws s3api put-bucket-policy \
    --bucket "$BUCKET_NAME" \
    --policy file://policy.json
```

---

## Step 4: Set Up Custom Domain (Route 53)

### 4a. Register Domain or Transfer to Route 53

If your domain is registered elsewhere, transfer it to AWS Route 53 for easier management.

### 4b. Create DNS Records

In Route 53 Console:

1. Create **A Record** (Root Domain):
   - Name: `fozanrizvi.com`
   - Type: `A`
   - Value: Your CloudFront Distribution Domain (e.g., `d123.cloudfront.net`)
   - Alias: **Yes**
   - Alias Target: Select your CloudFront distribution

2. Create **CNAME Record** (www subdomain):
   - Name: `www.fozanrizvi.com`
   - Type: `CNAME`
   - Value: Your CloudFront Distribution Domain

---

## Step 5: Deploy

### Fast Deploy Script (Automated)

Update `deploy.sh` with your values:

```bash
# Edit the script
nano deploy.sh

# Update these lines:
S3_BUCKET="fozanrizvi.com"
CLOUDFRONT_DISTRIBUTION_ID="E1A2B3C4D5E6F"
CUSTOM_DOMAIN="fozanrizvi.com"
AWS_REGION="us-east-1"
```

Then run:

```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deploy (Step by Step)

```bash
BUCKET_NAME="fozanrizvi.com"
CLOUDFRONT_ID="E1A2B3C4D5E6F"
AWS_REGION="us-east-1"

# Build
npm run build

# Upload to S3 (with cache headers)
aws s3 sync build/ "s3://$BUCKET_NAME/" \
    --region "$AWS_REGION" \
    --delete \
    --cache-control "max-age=31536000,public" \
    --exclude "index.html"

# Upload index.html with no-cache (for fast updates)
aws s3 cp build/index.html "s3://$BUCKET_NAME/index.html" \
    --region "$AWS_REGION" \
    --cache-control "no-cache,no-store,must-revalidate" \
    --content-type "text/html"

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
    --distribution-id "$CLOUDFRONT_ID" \
    --paths "/*"
```

---

## Step 6: Verify

### Check S3 Upload

```bash
aws s3 ls s3://fozanrizvi.com/ --recursive
```

### Check CloudFront Status

```bash
aws cloudfront get-distribution-config \
    --id "E1A2B3C4D5E6F" | grep "Status"
```

### Test in Browser

- Visit: `https://fozanrizvi.com`
- Visit: `https://www.fozanrizvi.com`
- Check certificate: Should be automatically provided by CloudFront (via AWS Certificate Manager)

---

## Troubleshooting

### Issue: 403 Forbidden Error

**Solution:** Check S3 bucket policy allows CloudFront access

```bash
aws s3api get-bucket-policy --bucket "fozanrizvi.com"
```

### Issue: Old Content Showing

**Solution:** Invalidate CloudFront cache

```bash
aws cloudfront create-invalidation \
    --distribution-id "E1A2B3C4D5E6F" \
    --paths "/*"
```

### Issue: Domain Not Resolving

**Solution:** Check Route 53 DNS records are correct and point to CloudFront

```bash
nslookup fozanrizvi.com
```

---

## Cost Estimate (Monthly)

- **S3 Storage**: ~$0.50 (for 100MB site)
- **Data Transfer**: ~$2-5 (depends on traffic)
- **CloudFront**: Included in AWS Free Tier (first 1GB/month free), then ~$0.085 per GB
- **Route 53**: $0.50 (per hosted zone)

**Total: ~$0.50-6/month** depending on traffic

---

## Post-Deployment

### Enable HTTPS (Automatic)

CloudFront automatically provides HTTPS via AWS Certificate Manager.

### Monitor Performance

```bash
# View CloudFront stats
aws cloudfront list-distributions | grep DomainName
```

### Update DNS TTL (Optional)

After verifying DNS, you can reduce TTL to 300 seconds for faster updates:

```bash
# Update via Route 53 Console
# TTL: 300 (instead of 3600)
```

---

## Future Deployments

After initial setup, deployment is simple:

```bash
./deploy.sh
```

That's it! Your portfolio is now live and cached globally via CloudFront! 🚀

---

## Need Help?

AWS Resources:

- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [Route 53 Documentation](https://docs.aws.amazon.com/route53/)
