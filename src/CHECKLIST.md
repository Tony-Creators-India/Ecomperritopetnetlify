# ✅ Pre-Deployment Checklist

## 🔍 File Verification

### Critical Files (Must Exist)

- [ ] `public/_redirects` - **Must be a FILE, not a directory**
  ```bash
  # Verify with:
  file public/_redirects
  # Should say: ASCII text
  ```

- [ ] `package.json` - Contains all dependencies
- [ ] `index.html` - Main HTML file
- [ ] `main.tsx` - React entry point
- [ ] `App.tsx` - Main component
- [ ] `netlify.toml` - Netlify configuration
- [ ] `.nvmrc` - Node version (18)

### Content Verification

- [ ] `public/_redirects` contains exactly:
  ```
  /* /index.html 200
  ```

- [ ] `netlify.toml` contains:
  ```toml
  [build]
    command = "npm run build"
    publish = "dist"
  ```

- [ ] `package.json` has prebuild script:
  ```json
  "prebuild": "node scripts/verify-redirects.js"
  ```

## 🧪 Local Build Test

- [ ] Run `npm install`
  ```bash
  npm install
  ```
  - Should complete without errors
  - Should install all dependencies

- [ ] Run `npm run build`
  ```bash
  npm run build
  ```
  - Should show: "🔍 Verifying _redirects file..."
  - Should show: "✅ _redirects file is valid"
  - Should complete with: "✓ built in Xs"
  - Should create `dist` folder

- [ ] Verify `dist` folder contents
  ```bash
  ls -la dist/
  ```
  - [ ] `dist/index.html` exists
  - [ ] `dist/_redirects` exists
  - [ ] `dist/assets/` folder exists
  - [ ] JavaScript bundles exist (`.js` files)
  - [ ] CSS bundles exist (`.css` files)

- [ ] Run preview server
  ```bash
  npm run preview
  ```
  - [ ] Opens at http://localhost:4173
  - [ ] Home page loads
  - [ ] Can navigate to `/thank-you`
  - [ ] Images load correctly

## 🌐 Route Testing (After Preview)

- [ ] Navigate to `http://localhost:4173/`
  - [ ] Product page displays
  - [ ] Images load
  - [ ] Buttons work

- [ ] Navigate to `http://localhost:4173/thank-you`
  - [ ] Thank you page displays
  - [ ] "Back to Home" button works

- [ ] Refresh on `/thank-you` (Press F5)
  - [ ] Page stays on thank you page
  - [ ] Does NOT redirect to home
  - [ ] Does NOT show 404 error

## 📦 Git Preparation

- [ ] Stage all changes
  ```bash
  git add .
  ```

- [ ] Commit with clear message
  ```bash
  git commit -m "Fix: Resolve _redirects for Netlify deployment"
  ```

- [ ] Push to repository
  ```bash
  git push origin main
  ```

## 🚀 Netlify Deployment

### Before Deploy

- [ ] Netlify site is created
- [ ] Repository is connected to Netlify
- [ ] Build settings configured:
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `dist`

### Deploy

- [ ] Trigger deployment
  - Option A: Auto-deploy from Git push
  - Option B: Manual trigger in Netlify UI
  - Option C: Netlify CLI: `netlify deploy --prod`

### Monitor Build

- [ ] Build starts successfully
- [ ] "Installing dependencies" completes
- [ ] "Running build command" executes
- [ ] See: "🔍 Verifying _redirects file..."
- [ ] See: "✅ _redirects file is valid"
- [ ] Build completes: "✓ built in Xs"
- [ ] "Publish directory ready" appears
- [ ] "Site is live" confirmation

## 🧪 Post-Deployment Testing

### Basic Tests

- [ ] Visit home page: `https://your-site.netlify.app/`
  - [ ] Page loads correctly
  - [ ] No console errors (F12)
  - [ ] Images load
  - [ ] Layout looks correct

- [ ] Visit thank you page: `https://your-site.netlify.app/thank-you`
  - [ ] Loads directly (no redirect)
  - [ ] Shows thank you message
  - [ ] "Back to Home" button works

- [ ] Refresh test on `/thank-you`
  - [ ] Press F5 on thank you page
  - [ ] Page stays on thank you
  - [ ] Does NOT show 404

### Advanced Tests

- [ ] Share link externally
  - [ ] Copy: `https://your-site.netlify.app/thank-you`
  - [ ] Send via WhatsApp/Email to yourself
  - [ ] Click link from mobile device
  - [ ] Should open thank you page directly

- [ ] Product functionality
  - [ ] Quantity controls (+/-) work
  - [ ] Pack size selection (300g/600g) works
  - [ ] Price updates correctly
  - [ ] "Buy Now" button opens payment popup

- [ ] Payment flow
  - [ ] Click "Buy Now"
  - [ ] Razorpay popup opens
  - [ ] Complete test payment
  - [ ] Redirects to `/thank-you` after success

- [ ] Meta Pixel tracking
  - [ ] Install Meta Pixel Helper extension
  - [ ] Visit site
  - [ ] Pixel ID `1615270122762784` detected
  - [ ] Events fire correctly:
    - [ ] PageView on home
    - [ ] ViewContent on product view
    - [ ] AddToCart when clicking buy
    - [ ] Purchase on thank you page

### Mobile Responsiveness

- [ ] Test on mobile device (or DevTools mobile view)
  - [ ] Layout adapts to small screen
  - [ ] Buttons are touchable
  - [ ] Text is readable
  - [ ] Images scale properly

### Performance

- [ ] Page loads fast (<3 seconds)
- [ ] Images are optimized
- [ ] No layout shift on load

## 🔒 Security Check

- [ ] HTTPS is enabled (Netlify auto-configures)
- [ ] No API keys in frontend code
- [ ] Payment handled by Razorpay (PCI compliant)

## 📊 Analytics Setup

- [ ] Meta Pixel is active
- [ ] Events are tracking in Facebook Events Manager
- [ ] Test purchases show in dashboard

## 🌍 Custom Domain (Optional)

If using `orders.perritopetproducts.com`:

- [ ] Domain added in Netlify
- [ ] DNS records updated
- [ ] SSL certificate issued (auto, ~24h)
- [ ] Site accessible via custom domain

## ✅ Final Verification

- [ ] All routes work
- [ ] External links work
- [ ] Payment integration works
- [ ] Meta Pixel tracks events
- [ ] Site is responsive
- [ ] No console errors
- [ ] Build succeeds on Netlify

## 🎉 Success!

If all items are checked:

✅ Your site is live!
✅ Routes work correctly!
✅ External sharing works!
✅ Payment integration is functional!
✅ Analytics are tracking!

---

## 📞 If Any Item Fails

### Build Fails
→ See `NETLIFY_FIX.md`

### Routes Don't Work
→ Verify `_redirects` file is correct

### Payment Doesn't Work
→ Check Razorpay script in `index.html`

### Pixel Not Tracking
→ Check Pixel ID in `MetaPixel.tsx`

---

## 📚 Reference Documents

- `FIX_APPLIED.md` - What was fixed
- `NETLIFY_FIX.md` - Troubleshooting
- `DEPLOY_NOW.md` - Deployment guide
- `QUICK_FIX.txt` - Quick reference

---

**Last Updated:** After fixing _redirects file issue
**Status:** ✅ READY FOR DEPLOYMENT
