#!/bin/bash
set -e

FUNCTION_NAME="fozan-rag-api"
AWS_REGION="us-east-1"
ACCOUNT_ID="777547433864"
ROLE_NAME="fozan-rag-lambda-role"
API_NAME="fozan-rag-api-gateway"

echo "🔧 Setting up RAG API infrastructure on AWS..."
echo ""

# Step 1: Get Groq API key
read -p "Enter your Groq API key (get free at console.groq.com): " GROQ_KEY
echo ""

# Step 2: Create IAM Role for Lambda
echo "👤 Creating IAM role..."
TRUST_POLICY='{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {"Service": "lambda.amazonaws.com"},
    "Action": "sts:AssumeRole"
  }]
}'

ROLE_ARN=$(aws iam create-role \
    --role-name $ROLE_NAME \
    --assume-role-policy-document "$TRUST_POLICY" \
    --query 'Role.Arn' --output text 2>/dev/null || \
    aws iam get-role --role-name $ROLE_NAME --query 'Role.Arn' --output text)

aws iam attach-role-policy \
    --role-name $ROLE_NAME \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole 2>/dev/null || true

echo "✅ IAM Role: $ROLE_ARN"
echo "⏳ Waiting for role to propagate..."
sleep 10

# Step 3: Build and package
echo "📦 Building Lambda package..."
rm -rf package/
mkdir -p package
pip install -r requirements.txt -t package/ --quiet
cp src/*.py package/
cd package && zip -r9 ../rag-api.zip . --quiet && cd ..
echo "✅ Package size: $(du -sh rag-api.zip | cut -f1)"

# Step 4: Create Lambda function
echo "⚡ Creating Lambda function..."
FUNCTION_ARN=$(aws lambda create-function \
    --function-name $FUNCTION_NAME \
    --runtime python3.11 \
    --role $ROLE_ARN \
    --handler main.handler \
    --zip-file fileb://rag-api.zip \
    --timeout 30 \
    --memory-size 256 \
    --environment "Variables={GROQ_API_KEY=$GROQ_KEY}" \
    --region $AWS_REGION \
    --query 'FunctionArn' --output text)

echo "✅ Lambda created: $FUNCTION_ARN"

# Step 5: Create Function URL (simplest API setup - no API Gateway needed)
echo "🌐 Creating Lambda Function URL..."
FUNCTION_URL=$(aws lambda create-function-url-config \
    --function-name $FUNCTION_NAME \
    --auth-type NONE \
    --cors '{"AllowOrigins":["https://fozanrizvi.com","https://www.fozanrizvi.com","http://localhost:3000"],"AllowMethods":["GET","POST"],"AllowHeaders":["*"]}' \
    --region $AWS_REGION \
    --query 'FunctionUrl' --output text)

# Step 6: Allow public access to function URL
aws lambda add-permission \
    --function-name $FUNCTION_NAME \
    --statement-id FunctionURLAllowPublicAccess \
    --action lambda:InvokeFunctionUrl \
    --principal "*" \
    --function-url-auth-type NONE \
    --region $AWS_REGION > /dev/null

echo ""
echo "🎉 Setup Complete!"
echo ""
echo "Your RAG API URL: $FUNCTION_URL"
echo ""
echo "📝 Add this to your React app:"
echo "   REACT_APP_RAG_API_URL=$FUNCTION_URL"
echo ""
echo "Test it:"
echo "   curl ${FUNCTION_URL}health"
