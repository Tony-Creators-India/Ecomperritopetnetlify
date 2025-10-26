# ✅ Netlify Deployment Checklist

## Pre-Deployment Verification

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Local Build
```bash
npm run build
```
This should create a `dist` folder with your built application.

### 3. Preview Build Locally
```bash
npm run preview
```
Visit http://localhost:4173 to test the production build.

### 4. Test Routes
- ✅ Home page: `/`
- ✅ Thank you page: `/thank-you`
- ✅ Refresh on `/thank-you` should work (not 404)

## Deployment Steps

### Method 1: Netlify Web UI (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Choose GitHub and select your repository
   
3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (auto-detected from netlify.toml)
   
4. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete (~2-3 minutes)

5. **Configure Domain (Optional)**
   - Go to Site settings > Domain management
   - Add custom domain: `orders.perritopetproducts.com`
   - Update DNS records as instructed

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod
```

### Method 3: Drag & Drop

```bash
# Build locally
npm run build

# Go to https://app.netlify.com/drop
# Drag the `dist` folder
```

## Post-Deployment Verification

### Test These URLs:

1. **Home Page**
   ```
   https://your-site.netlify.app/
   ```
   - Should load product page
   - Check payment buttons work
   - Test quantity controls

2. **Thank You Page (Direct Link)**
   ```
   https://your-site.netlify.app/thank-you
   ```
   - Should load thank you page
   - Should NOT redirect to home
   - Test "Back to Home" button

3. **Thank You Page (Refresh)**
   - Visit `/thank-you`
   - Press F5 to refresh
   - Should stay on thank you page (not 404)

4. **External Link Test**
   - Send link via WhatsApp/Email
   - Click from mobile
   - Should open thank you page directly

5. **Payment Flow**
   - Add product to cart
   - Click "Buy Now"
   - Complete test payment
   - Should redirect to `/thank-you`

### Meta Pixel Verification

1. Install Meta Pixel Helper Chrome extension
2. Visit your site
3. Check that Pixel ID `1615270122762784` is firing
4. Test these events:
   - PageView (on home page)
   - ViewContent (on product view)
   - AddToCart (when clicking buy)
   - Purchase (on thank you page)

## Troubleshooting

### ❌ Build Fails

**Error: Module not found**
```bash
npm install
npm run build
```

**Error: Node version mismatch**
- Check `netlify.toml` has `NODE_VERSION = "18"`

### ❌ Routes Return 404

**Check these files exist:**
- `/netlify.toml`
- `/public/_redirects`

**Content of `/public/_redirects`:**
```
/* /index.html 200
```

### ❌ Payment Not Working

**Check index.html includes:**
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

### ❌ Thank You Page Shows Home

**Check App.tsx routing:**
```tsx
<Route path="/thank-you" element={<ThankYouPage />} />
```

## Files Required for Deployment

✅ package.json
✅ index.html
✅ main.tsx
✅ App.tsx
✅ vite.config.ts
✅ tsconfig.json
✅ netlify.toml
✅ public/_redirects

## Build Output

After `npm run build`, the `dist` folder should contain:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images and fonts]
└── _redirects
```

## Environment Variables

None required! All configs are in code:
- Razorpay Button IDs: Hardcoded
- Meta Pixel ID: Hardcoded

## Custom Domain Setup

1. Go to Netlify dashboard
2. Site settings > Domain management
3. Add custom domain: `orders.perritopetproducts.com`
4. Update DNS:
   ```
   Type: A
   Name: @
   Value: [Netlify IP from dashboard]
   
   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

5. Enable HTTPS (auto-configured)

## Success Metrics

✅ Site builds successfully
✅ All routes work (/, /thank-you)
✅ External links work from WhatsApp/Email
✅ Payment integration works
✅ Meta Pixel fires correctly
✅ Mobile responsive
✅ Fast load time (<3s)

## Next Steps After Deployment

1. Update `PRODUCTION_URLS.md` with your Netlify URL
2. Test payment flow end-to-end
3. Share `/thank-you` link on WhatsApp to verify
4. Monitor Meta Pixel events in Facebook Events Manager
5. Set up Netlify Analytics (optional)

## Support

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://answers.netlify.com
- **Vite Docs:** https://vitejs.dev
- **React Router Docs:** https://reactrouter.com

---

🎉 **You're ready to deploy!**

Run `npm install && npm run build` to get started.
