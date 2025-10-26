# PowerShell script to fix _redirects and build the project
# Run this on Windows: powershell -ExecutionPolicy Bypass -File fix-and-build.ps1

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Netlify Deployment Fix & Build" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Fix _redirects file
Write-Host "Step 1: Fixing _redirects file..." -ForegroundColor Yellow

# Check if _redirects is a directory
if (Test-Path "public\_redirects" -PathType Container) {
    Write-Host "  ERROR: _redirects is a directory!" -ForegroundColor Red
    Write-Host "  Deleting directory..." -ForegroundColor Yellow
    Remove-Item -Path "public\_redirects" -Recurse -Force
    Write-Host "  Directory deleted." -ForegroundColor Green
}

# Create _redirects as a file
Write-Host "  Creating _redirects file..." -ForegroundColor Yellow
"/* /index.html 200" | Out-File -FilePath "public\_redirects" -Encoding ASCII -NoNewline
Write-Host "  SUCCESS: _redirects file created!" -ForegroundColor Green

# Verify
if (Test-Path "public\_redirects" -PathType Leaf) {
    Write-Host "  Verified: _redirects is a file" -ForegroundColor Green
} else {
    Write-Host "  ERROR: Could not create _redirects file" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 2: Install dependencies
Write-Host "Step 2: Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ERROR: Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "  SUCCESS: Dependencies installed!" -ForegroundColor Green
Write-Host ""

# Step 3: Build the project
Write-Host "Step 3: Building the project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ERROR: Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "  SUCCESS: Build completed!" -ForegroundColor Green
Write-Host ""

# Step 4: Verify dist folder
Write-Host "Step 4: Verifying build output..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Write-Host "  SUCCESS: dist folder created" -ForegroundColor Green
    
    if (Test-Path "dist\index.html") {
        Write-Host "  SUCCESS: index.html exists" -ForegroundColor Green
    } else {
        Write-Host "  ERROR: index.html not found" -ForegroundColor Red
    }
    
    if (Test-Path "dist\_redirects") {
        Write-Host "  SUCCESS: _redirects exists" -ForegroundColor Green
    } else {
        Write-Host "  WARNING: _redirects not found in dist" -ForegroundColor Yellow
    }
    
    if (Test-Path "dist\assets") {
        Write-Host "  SUCCESS: assets folder exists" -ForegroundColor Green
    } else {
        Write-Host "  WARNING: assets folder not found" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ERROR: dist folder not created" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  BUILD SUCCESSFUL!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "The 'dist' folder is ready to deploy!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Go to: https://app.netlify.com/drop" -ForegroundColor White
Write-Host "  2. Drag the 'dist' folder to the page" -ForegroundColor White
Write-Host "  3. Your site will be live in seconds!" -ForegroundColor White
Write-Host ""
Write-Host "Or deploy via CLI:" -ForegroundColor Yellow
Write-Host "  netlify deploy --prod --dir=dist" -ForegroundColor White
Write-Host ""
