@echo off
REM Double-click this file to build your project for deployment

echo.
echo ========================================
echo   Netlify Deployment Builder
echo ========================================
echo.

REM Step 1: Fix _redirects
echo Step 1: Fixing _redirects file...
if exist "public\_redirects\" (
    echo   Deleting invalid _redirects directory...
    rmdir /s /q "public\_redirects"
)
echo /* /index.html 200 > public\_redirects
echo   SUCCESS: _redirects file created!
echo.

REM Step 2: Install dependencies
echo Step 2: Installing dependencies...
echo   This may take a few minutes...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo   ERROR: Failed to install dependencies
    pause
    exit /b 1
)
echo   SUCCESS: Dependencies installed!
echo.

REM Step 3: Build
echo Step 3: Building project...
echo   This may take a minute...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo   ERROR: Build failed
    pause
    exit /b 1
)
echo   SUCCESS: Build completed!
echo.

REM Step 4: Verify
echo Step 4: Verifying build output...
if exist "dist" (
    echo   SUCCESS: dist folder created
) else (
    echo   ERROR: dist folder not found
    pause
    exit /b 1
)
echo.

echo ========================================
echo   BUILD SUCCESSFUL!
echo ========================================
echo.
echo The 'dist' folder is ready to deploy!
echo.
echo Next steps:
echo   1. Open: https://app.netlify.com/drop
echo   2. Drag the 'dist' folder to the page
echo   3. Your site will be live!
echo.
echo Press any key to open Netlify Drop...
pause > nul

start https://app.netlify.com/drop

echo.
echo Netlify Drop opened in your browser.
echo Drag the 'dist' folder from this project to deploy!
echo.
pause
