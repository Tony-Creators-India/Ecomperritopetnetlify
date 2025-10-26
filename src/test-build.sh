#!/bin/bash

# Deployment Test Script for Netlify
# This script tests if your project is ready for deployment

echo "🚀 Starting Deployment Test..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Check Node version
echo "📦 Checking Node.js version..."
NODE_VERSION=$(node -v)
echo "   Node version: $NODE_VERSION"
if [[ "$NODE_VERSION" < "v18" ]]; then
    echo -e "${RED}❌ Node.js version must be 18 or higher${NC}"
    exit 1
else
    echo -e "${GREEN}✅ Node.js version OK${NC}"
fi
echo ""

# Test 2: Check required files
echo "📄 Checking required files..."
required_files=("package.json" "index.html" "main.tsx" "App.tsx" "vite.config.ts" "netlify.toml" "public/_redirects")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file exists${NC}"
    else
        echo -e "${RED}❌ Missing: $file${NC}"
        exit 1
    fi
done
echo ""

# Test 3: Install dependencies
echo "📥 Installing dependencies..."
if npm install; then
    echo -e "${GREEN}✅ Dependencies installed${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo ""

# Test 4: Build project
echo "🔨 Building project..."
if npm run build; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo ""

# Test 5: Check build output
echo "📂 Checking build output..."
if [ -d "dist" ]; then
    echo -e "${GREEN}✅ dist folder created${NC}"
    
    # Check for index.html
    if [ -f "dist/index.html" ]; then
        echo -e "${GREEN}✅ dist/index.html exists${NC}"
    else
        echo -e "${RED}❌ dist/index.html not found${NC}"
        exit 1
    fi
    
    # Check for assets folder
    if [ -d "dist/assets" ]; then
        echo -e "${GREEN}✅ dist/assets folder exists${NC}"
    else
        echo -e "${YELLOW}⚠️  dist/assets folder not found${NC}"
    fi
    
    # Check for _redirects file
    if [ -f "dist/_redirects" ]; then
        echo -e "${GREEN}✅ dist/_redirects exists${NC}"
    else
        echo -e "${YELLOW}⚠️  dist/_redirects not found (may cause routing issues)${NC}"
    fi
else
    echo -e "${RED}❌ dist folder not created${NC}"
    exit 1
fi
echo ""

# Test 6: Check bundle size
echo "📊 Checking bundle size..."
DIST_SIZE=$(du -sh dist | cut -f1)
echo "   Build size: $DIST_SIZE"
echo ""

# Test 7: Check for common issues
echo "🔍 Checking for common issues..."

# Check if _redirects is a file (not directory)
if [ -f "public/_redirects" ]; then
    echo -e "${GREEN}✅ public/_redirects is a file${NC}"
else
    echo -e "${RED}❌ public/_redirects should be a file, not a directory${NC}"
fi

# Check netlify.toml configuration
if grep -q "npm run build" netlify.toml; then
    echo -e "${GREEN}✅ Build command configured in netlify.toml${NC}"
else
    echo -e "${YELLOW}⚠️  Build command not found in netlify.toml${NC}"
fi

if grep -q "dist" netlify.toml; then
    echo -e "${GREEN}✅ Publish directory configured in netlify.toml${NC}"
else
    echo -e "${YELLOW}⚠️  Publish directory not found in netlify.toml${NC}"
fi

echo ""

# Final summary
echo "🎉 ${GREEN}All tests passed!${NC}"
echo ""
echo "✅ Your project is ready for Netlify deployment!"
echo ""
echo "Next steps:"
echo "1. Push your code to GitHub:"
echo "   git add ."
echo "   git commit -m 'Ready for deployment'"
echo "   git push"
echo ""
echo "2. Deploy to Netlify:"
echo "   - Go to https://app.netlify.com"
echo "   - Click 'New site from Git'"
echo "   - Select your repository"
echo "   - Deploy!"
echo ""
echo "Or use Netlify CLI:"
echo "   netlify deploy --prod"
echo ""
