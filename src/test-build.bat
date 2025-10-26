@echo off
REM Deployment Test Script for Netlify (Windows)
REM This script tests if your project is ready for deployment

echo.
echo Starting Deployment Test...
echo.

REM Test 1: Check Node version
echo Checking Node.js version...
node -v
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed
    exit /b 1
)
echo OK: Node.js found
echo.

REM Test 2: Check required files
echo Checking required files...
if exist "package.json" (echo OK: package.json) else (echo ERROR: package.json missing && exit /b 1)
if exist "index.html" (echo OK: index.html) else (echo ERROR: index.html missing && exit /b 1)
if exist "main.tsx" (echo OK: main.tsx) else (echo ERROR: main.tsx missing && exit /b 1)
if exist "App.tsx" (echo OK: App.tsx) else (echo ERROR: App.tsx missing && exit /b 1)
if exist "vite.config.ts" (echo OK: vite.config.ts) else (echo ERROR: vite.config.ts missing && exit /b 1)
if exist "netlify.toml" (echo OK: netlify.toml) else (echo ERROR: netlify.toml missing && exit /b 1)
if exist "public\_redirects" (echo OK: public/_redirects) else (echo ERROR: public/_redirects missing && exit /b 1)
echo.

REM Test 3: Install dependencies
echo Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to install dependencies
    exit /b 1
)
echo OK: Dependencies installed
echo.

REM Test 4: Build project
echo Building project...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed
    exit /b 1
)
echo OK: Build successful
echo.

REM Test 5: Check build output
echo Checking build output...
if exist "dist" (
    echo OK: dist folder created
    if exist "dist\index.html" (
        echo OK: dist/index.html exists
    ) else (
        echo ERROR: dist/index.html not found
        exit /b 1
    )
    if exist "dist\assets" (
        echo OK: dist/assets folder exists
    ) else (
        echo WARNING: dist/assets folder not found
    )
    if exist "dist\_redirects" (
        echo OK: dist/_redirects exists
    ) else (
        echo WARNING: dist/_redirects not found
    )
) else (
    echo ERROR: dist folder not created
    exit /b 1
)
echo.

echo.
echo ========================================
echo All tests passed!
echo ========================================
echo.
echo Your project is ready for Netlify deployment!
echo.
echo Next steps:
echo 1. Push your code to GitHub
echo 2. Go to https://app.netlify.com
echo 3. Click "New site from Git"
echo 4. Select your repository and deploy!
echo.
pause
