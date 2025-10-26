#!/bin/bash

# Bash script to fix _redirects and build the project
# Run this on Mac/Linux: chmod +x fix-and-build.sh && ./fix-and-build.sh

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo ""
echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}  Netlify Deployment Fix & Build${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""

# Step 1: Fix _redirects file
echo -e "${YELLOW}Step 1: Fixing _redirects file...${NC}"

# Check if _redirects is a directory
if [ -d "public/_redirects" ]; then
    echo -e "${RED}  ERROR: _redirects is a directory!${NC}"
    echo -e "${YELLOW}  Deleting directory...${NC}"
    rm -rf public/_redirects
    echo -e "${GREEN}  Directory deleted.${NC}"
fi

# Create _redirects as a file
echo -e "${YELLOW}  Creating _redirects file...${NC}"
echo "/* /index.html 200" > public/_redirects
echo -e "${GREEN}  SUCCESS: _redirects file created!${NC}"

# Verify
if [ -f "public/_redirects" ]; then
    echo -e "${GREEN}  Verified: _redirects is a file${NC}"
else
    echo -e "${RED}  ERROR: Could not create _redirects file${NC}"
    exit 1
fi

echo ""

# Step 2: Install dependencies
echo -e "${YELLOW}Step 2: Installing dependencies...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}  ERROR: Failed to install dependencies${NC}"
    exit 1
fi
echo -e "${GREEN}  SUCCESS: Dependencies installed!${NC}"
echo ""

# Step 3: Build the project
echo -e "${YELLOW}Step 3: Building the project...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}  ERROR: Build failed${NC}"
    exit 1
fi
echo -e "${GREEN}  SUCCESS: Build completed!${NC}"
echo ""

# Step 4: Verify dist folder
echo -e "${YELLOW}Step 4: Verifying build output...${NC}"
if [ -d "dist" ]; then
    echo -e "${GREEN}  SUCCESS: dist folder created${NC}"
    
    if [ -f "dist/index.html" ]; then
        echo -e "${GREEN}  SUCCESS: index.html exists${NC}"
    else
        echo -e "${RED}  ERROR: index.html not found${NC}"
    fi
    
    if [ -f "dist/_redirects" ]; then
        echo -e "${GREEN}  SUCCESS: _redirects exists${NC}"
    else
        echo -e "${YELLOW}  WARNING: _redirects not found in dist${NC}"
    fi
    
    if [ -d "dist/assets" ]; then
        echo -e "${GREEN}  SUCCESS: assets folder exists${NC}"
    else
        echo -e "${YELLOW}  WARNING: assets folder not found${NC}"
    fi
else
    echo -e "${RED}  ERROR: dist folder not created${NC}"
    exit 1
fi

echo ""
echo -e "${CYAN}========================================${NC}"
echo -e "${GREEN}  BUILD SUCCESSFUL!${NC}"
echo -e "${CYAN}========================================${NC}"
echo ""
echo -e "${GREEN}The 'dist' folder is ready to deploy!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "${NC}  1. Go to: https://app.netlify.com/drop${NC}"
echo -e "${NC}  2. Drag the 'dist' folder to the page${NC}"
echo -e "${NC}  3. Your site will be live in seconds!${NC}"
echo ""
echo -e "${YELLOW}Or deploy via CLI:${NC}"
echo -e "${NC}  netlify deploy --prod --dir=dist${NC}"
echo ""
