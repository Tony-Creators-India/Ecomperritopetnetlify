# 🚨 MANUAL DEPLOY ONLY - READ THIS

## ⚠️ CRITICAL ISSUE

The `public/_redirects` file in this project **CANNOT be used with Netlify Git auto-deploy** because Figma Make keeps converting it into a directory with React components.

## ✅ THE SOLUTION: Manual Deployment

### Deploy Process (Every Time You Want to Update)

#### Step 1: Build Locally on Your Computer

**Never build on Netlify servers. Always build locally.**

**Windows:**
```batch
BUILD-AND-DEPLOY.bat
```

**Mac/Linux:**
```bash
chmod +x fix-and-build.sh
./fix-and-build.sh
```

The script will:
- ✅ Automatically detect if `_redirects` is a directory
- ✅ Delete it and recreate as a file
- ✅ Build your project
- ✅ Create the `dist` folder

#### Step 2: Deploy to Netlify Drop

1. Open: https://app.netlify.com/drop
2. Drag the `dist` folder from your computer
3. Done! Your site is live.

## 🛑 STOP Doing This

**DO NOT:**
- ❌ Use "Trigger deploy" in Netlify dashboard
- ❌ Push to Git expecting auto-deploy to work
- ❌ Edit `_redirects` file in Figma Make
- ❌ Commit `_redirects` changes
- ❌ Enable Netlify build from Git

## ✅ START Doing This

**DO:**
- ✅ Build locally with the script (auto-fixes `_redirects`)
- ✅ Upload `dist` folder to Netlify Drop manually
- ✅ Treat `dist` as your deployment artifact
- ✅ Keep Git for source control only (not deployment)

## 🔧 How to Disable Git Auto-Deploy

If your Netlify site is connected to Git:

1. Go to Netlify dashboard
2. Select your site
3. Site settings → Build & deploy
4. Build settings → Edit settings
5. Set "Build command" to blank
6. Or click "Stop builds"
7. Or disconnect repository entirely

This prevents failed builds from Git pushes.

## 📦 What is the `dist` Folder?

The `dist` folder is your **complete static website**:

```
dist/
├── index.html              # Your web page
├── _redirects              # Routing (auto-fixed)
└── assets/
    ├── index-xxxxx.js      # All React code (bundled)
    └── index-xxxxx.css     # All styles (bundled)
```

- ✅ No package.json needed
- ✅ No build process needed
- ✅ No Node.js needed to host it
- ✅ Pure static files
- ✅ Upload anywhere (Netlify, Vercel, AWS S3, etc.)

## 🔄 Update Workflow

When you make changes to your site:

1. **Edit code** in Figma Make or locally
2. **Download/pull** latest code to your computer
3. **Run build script:**
   - Windows: `BUILD-AND-DEPLOY.bat`
   - Mac/Linux: `./fix-and-build.sh`
4. **Upload `dist` folder** to Netlify Drop
5. Your site is updated!

## 🎯 Why This Approach Works

### The Problem with Git Auto-Deploy:
```
Push to Git → Netlify builds
              ↓
              _redirects is a directory (broken)
              ↓
              Build fails
              ↓
              No dist folder created
              ↓
              Deployment fails ❌
```

### The Solution with Manual Deploy:
```
Build locally → Script auto-fixes _redirects
                ↓
                Build succeeds
                ↓
                dist folder created
                ↓
                Upload to Netlify Drop
                ↓
                Deployment succeeds ✅
```

## 📊 Build Script Features

The updated `verify-redirects.js` script now:

1. **Detects** if `_redirects` is a directory
2. **Automatically deletes** the directory
3. **Recreates** it as a proper file
4. **Continues** with the build

**You don't need to manually fix it anymore!**

## 🧪 Test the Fix

Run this on your computer:

```bash
# Build the project
npm run build

# You should see:
# 🔍 Verifying _redirects file...
# 🔧 Auto-fixing: Deleting directory and creating file...
# ✅ Fixed: _redirects is now a proper file
# ✓ built in 3.45s
```

## ✅ Deployment Checklist

Every time you deploy:

- [ ] Make your code changes
- [ ] Pull latest from Git (if working in a team)
- [ ] Run build script on YOUR computer
- [ ] Verify `dist` folder was created
- [ ] Check `dist/index.html` exists
- [ ] Upload `dist` to Netlify Drop
- [ ] Test the live site

## 🌐 Alternative Hosting

Since you have a static `dist` folder, you can deploy to:

- **Netlify Drop** (recommended) - https://app.netlify.com/drop
- **Vercel** - Drag folder to dashboard
- **GitHub Pages** - Push dist to gh-pages branch
- **AWS S3** - Upload as static website
- **Cloudflare Pages** - Manual upload
- **Any static hosting** - Just upload the folder

## 🔐 Keep Your Netlify Site

You don't need to delete your Netlify site. Just:

1. Disconnect Git auto-deploy
2. Use manual deployment via Netlify Drop
3. Your site URL stays the same
4. Custom domains still work
5. HTTPS still works

## 📞 Support

If you encounter issues:

### Build Script Fails?
- Check Node.js is installed: `node -v`
- Delete `node_modules`: `rm -rf node_modules`
- Reinstall: `npm install`
- Try again: Run the script

### Can't Upload to Netlify Drop?
- Try Netlify CLI: `netlify deploy --prod --dir=dist`
- Or try a different browser
- Or use alternative hosting

### _redirects Still Breaks?
- Don't edit it in Figma Make
- The script auto-fixes it anyway
- Just run the build script

## 🎉 Summary

**Problem:** `_redirects` file breaks with Git auto-deploy  
**Solution:** Build locally, deploy manually  
**Script:** Auto-fixes `_redirects` every time  
**Deploy:** Drag `dist` to Netlify Drop  
**Result:** Reliable deployments every time! ✅

---

## 🚀 Quick Commands

**Build:**
```bash
# Windows
BUILD-AND-DEPLOY.bat

# Mac/Linux
./fix-and-build.sh
```

**Deploy:**
- Go to: https://app.netlify.com/drop
- Drag: `dist` folder

**Done!** ✅

---

**Remember: Always build locally, never rely on Netlify Git auto-deploy for this project.**
