# 🚀 Build and Deploy - Static Website Export

## ⚠️ CRITICAL: _redirects File Issue

The `public/_redirects` keeps getting converted to a directory with `.tsx` files. **This must be a plain text file!**

I've fixed it again, but **DO NOT manually edit** the `_redirects` file.

## 📦 How to Create Static Website

Since this is a React app, you need to build it once to create static files. Here's how:

### Step 1: Build the Project Locally

```bash
# Install dependencies (one time only)
npm install

# Build the project
npm run build
```

This creates a `dist` folder with all static files.

### Step 2: Verify the Build

```bash
# Check the dist folder contents
ls -la dist/

# Should contain:
# - index.html
# - _redirects
# - assets/ (folder with .js and .css files)
```

### Step 3: Deploy to Netlify

**Option A: Drag and Drop (Easiest)**
1. Go to https://app.netlify.com/drop
2. Drag the entire `dist` folder to the page
3. Done! Your site is live.

**Option B: Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

**Option C: Connect Git Repository**
1. Push this code to GitHub
2. Go to https://app.netlify.com
3. Click "New site from Git"
4. Connect your repository
5. Build settings are already configured in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## 🛑 WHY THE BUILD KEEPS FAILING

The Netlify build is failing because `public/_redirects` is a **directory** instead of a **file**.

### The Problem:
```
public/
└── _redirects/              ← WRONG! This is a directory
    ├── Component1.tsx
    └── Component2.tsx
```

### The Solution:
```
public/
└── _redirects               ← CORRECT! This is a plain text file
```

### How to Fix Permanently:

**On Your Computer:**
1. Delete the `public/_redirects` folder completely
2. Create a new file called `_redirects` (no extension)
3. Add this content:
   ```
   /* /index.html 200
   ```
4. Save it
5. Commit and push to Git

**Commands:**
```bash
# Delete the directory
rm -rf public/_redirects

# Create the file
echo "/* /index.html 200" > public/_redirects

# Verify it's a file
file public/_redirects
# Should say: "ASCII text"

# Commit and push
git add public/_redirects
git commit -m "Fix: _redirects as file not directory"
git push
```

## 📁 What's in the Built Static Website

After building, the `dist` folder contains:

```
dist/
├── index.html                    # Main HTML file (2-3 KB)
├── _redirects                    # Routing rules for SPA
└── assets/
    ├── index-[hash].js           # All React code bundled (~200-300 KB)
    ├── index-[hash].css          # All styles bundled (~40-50 KB)
    └── [other assets]            # Images, fonts, etc.
```

**This folder is 100% static and ready to deploy!**

No build step needed after this - just upload the `dist` folder.

## 🎯 Quick Deploy Guide

### Method 1: Build Locally, Deploy Manually

```bash
# 1. Build
npm install
npm run build

# 2. Deploy - Drag dist folder to:
# https://app.netlify.com/drop
```

### Method 2: Let Netlify Build

```bash
# 1. Fix _redirects
rm -rf public/_redirects
echo "/* /index.html 200" > public/_redirects

# 2. Commit and push
git add .
git commit -m "Fix _redirects for deployment"
git push

# 3. Netlify auto-deploys (if connected to Git)
```

## ✅ Pre-Build Checklist

Before building, ensure:

- [ ] `public/_redirects` is a **file** (not directory)
  ```bash
  file public/_redirects
  # Must say: "ASCII text"
  ```

- [ ] All dependencies installed
  ```bash
  npm install
  ```

- [ ] No TypeScript errors
  ```bash
  npm run build
  # Should complete without errors
  ```

## 🔧 Troubleshooting

### "Deploy directory 'dist' does not exist"

**Cause:** The build failed, so `dist` folder was never created.

**Fix:** 
1. Check if `_redirects` is a file: `file public/_redirects`
2. If it's a directory, delete it and recreate as a file
3. Run `npm run build` locally to test
4. If it works locally, push to Git

### "npm run build fails locally"

**Check:**
1. Node version: `node -v` (should be 18+)
2. Dependencies installed: `npm install`
3. TypeScript errors in code

### "_redirects is still a directory after I fixed it"

**This happens when:**
- You edit it in Figma Make interface
- You manually edit it incorrectly

**Solution:**
1. **On your local computer**, delete the `_redirects` folder
2. Create it as a plain text file
3. Use command line or text editor (NOT Figma Make)
4. Commit from command line

## 📊 Build Output Example

```bash
$ npm run build

> perrito-pet-products@1.0.0 prebuild
> node scripts/verify-redirects.js

🔍 Verifying _redirects file...
✅ _redirects file is valid

> perrito-pet-products@1.0.0 build
> vite build

vite v5.1.0 building for production...
✓ 150 modules transformed.
dist/index.html                   2.34 kB │ gzip:  1.12 kB
dist/_redirects                   0.02 kB
dist/assets/index-a1b2c3.css     45.23 kB │ gzip: 12.45 kB
dist/assets/index-a1b2c3.js     234.56 kB │ gzip: 78.90 kB
✓ built in 3.45s
```

## 🌐 After Deployment

Your static website will be live at:
- Netlify URL: `https://your-site.netlify.app`
- Custom domain: `https://orders.perritopetproducts.com` (if configured)

**Test:**
1. Home page: `/`
2. Thank you page: `/thank-you`
3. Refresh on `/thank-you` (should work, not 404)
4. Share link on WhatsApp (should open correctly)

## 📞 Still Having Issues?

### Option 1: Build Locally and Upload Manually

This bypasses all Git/Netlify build issues:

```bash
# On your computer
npm install
npm run build

# Upload dist folder to:
# https://app.netlify.com/drop
```

### Option 2: Share the Dist Folder

After building locally, you can:
1. Zip the `dist` folder
2. Share it with anyone
3. They can upload to any static hosting (Netlify, Vercel, GitHub Pages, etc.)

### Option 3: Use Different Hosting

The `dist` folder works on:
- Netlify Drop (easiest)
- Vercel
- GitHub Pages
- AWS S3
- Cloudflare Pages
- Any static hosting service

## 🎉 Summary

**Problem:** `_redirects` keeps becoming a directory
**Solution:** Delete and recreate as a file via command line
**Deploy:** Build locally (`npm run build`) and upload `dist` folder

**One-Line Deploy:**
```bash
npm install && npm run build && netlify deploy --prod --dir=dist
```

---

**The `dist` folder is your static website - no build tools needed after creation!**
