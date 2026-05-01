#!/bin/bash
set -e

FUNCTION_NAME="fozan-rag-api"
AWS_REGION="us-east-1"
ROLE_NAME="fozan-rag-lambda-role"

echo "🚀 Deploying RAG API to AWS Lambda..."

# Step 1: Install dependencies into package directory
echo "📦 Installing dependencies..."
rm -rf package/
mkdir -p package
pip install -r requirements.txt -t package/ --quiet

# Step 2: Copy source files
echo "📁 Copying source files..."
cp src/*.py package/

# Step 3: Create deployment zip
echo "🗜️  Creating deployment package..."
cd package
zip -r9 ../rag-api.zip . --quiet
cd ..

echo "✅ Package size: $(du -sh rag-api.zip | cut -f1)"

# Step 4: Check if function exists
if aws lambda get-function --function-name $FUNCTION_NAME --region $AWS_REGION > /dev/null 2>&1; then
    echo "🔄 Updating existing Lambda function..."
    aws lambda update-function-code \
        --function-name $FUNCTION_NAME \
        --zip-file fileb://rag-api.zip \
        --region $AWS_REGION > /dev/null

    # Wait for update
    aws lambda wait function-updated \
        --function-name $FUNCTION_NAME \
        --region $AWS_REGION

    echo "✅ Lambda function updated!"
else
    echo "⚠️  Lambda function '$FUNCTION_NAME' not found."
    echo "Please create it first using the AWS Console or run setup.sh"
fi

echo ""
echo "🎉 Deployment complete!"
