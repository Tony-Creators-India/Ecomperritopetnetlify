# Perrito Pet Products - Chicken Triple Delight

Ecommerce landing page for Chicken Triple Delight pet product with Razorpay payment integration and Meta Pixel tracking.

## ⚠️ IMPORTANT: Deployment Method

**🚨 Git auto-deploy does NOT work for this project due to a recurring `_redirects` file issue.**

**✅ Use manual deployment only (see below).**

## 🚀 Quick Deployment (3 Steps)

### Step 1: Download & Build

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Windows - just double-click
BUILD-AND-DEPLOY.bat

# Mac/Linux - run in terminal
chmod +x fix-and-build.sh
./fix-and-build.sh
```

### Step 2: Get the `dist` Folder

After building, you'll have a `dist` folder containing your complete static site:
```
dist/
├── index.html           ← Your website
├── _redirects           ← Routing
└── assets/
    ├── index-*.js       ← All code bundled
    └── index-*.css      ← All styles bundled
```

### Step 3: Deploy to Netlify

**Recommended: Netlify Drop**
1. Go to: https://app.netlify.com/drop
2. Drag the `dist` folder
3. Done! Your site is live ✅

**Alternative: Vercel**
```bash
npm install -g vercel
cd dist
vercel --prod
```

## 🛠️ Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### Build Settings
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18

These are already configured in `netlify.toml`.

### Environment Variables

No environment variables needed - all configurations are in the code:
- Razorpay Payment Button IDs (300g & 600g)
- Meta Pixel ID: `1615270122762784`

## 🌐 Routes

- `/` - Product landing page
- `/thank-you` - Order confirmation page

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn/ui
- **Payment:** Razorpay
- **Analytics:** Meta Pixel

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Product image gallery with thumbnails
- ✅ Quantity controls (+/- buttons)
- ✅ Pack size selection (300g/600g)
- ✅ Razorpay payment integration
- ✅ Meta Pixel tracking
- ✅ Order confirmation page
- ✅ Clean URLs with React Router

## 🔗 Production URLs

- **Home:** `https://orders.perritopetproducts.com/`
- **Thank You:** `https://orders.perritopetproducts.com/thank-you`

## 📄 File Structure

```
├── App.tsx                 # Main app component with routing
├── main.tsx               # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── vite.config.ts         # Vite configuration
├── netlify.toml           # Netlify deployment config
├── components/            # React components
│   ├── ProductPage.tsx    # Main product page
│   ├── ThankYouPage.tsx   # Order confirmation
│   ├── MetaPixel.tsx      # Meta Pixel tracking
│   └── ui/                # Shadcn UI components
├── styles/
│   └── globals.css        # Global styles
└── public/
    └── _redirects         # SPA routing for Netlify
```

## 🐛 Troubleshooting

### Error: "No dist folder found"
**Solution:** You must build the project locally. Run `BUILD-AND-DEPLOY.bat` or `./fix-and-build.sh`

### Git auto-deploy fails?
**Solution:** Don't use Git auto-deploy. Build locally and upload the `dist` folder to Netlify Drop.

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes not working on Netlify?
The `netlify.toml` and `public/_redirects` files handle SPA routing. They're auto-fixed by the build script.

### Payment not working?
Check that Razorpay script is loaded in `index.html`:
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

## 📚 Important Documentation

**MUST READ:**
- `ABSOLUTE_FINAL_INSTRUCTIONS.txt` - How to deploy (critical!)
- `STOP_DEPLOYING_WITHOUT_BUILDING.md` - Why auto-deploy fails
- `START_HERE_STATIC_EXPORT.md` - Complete deployment guide

**Build Scripts:**
- `BUILD-AND-DEPLOY.bat` - Windows build script
- `fix-and-build.sh` - Mac/Linux build script

**Reference:**
- `DOCUMENTATION_INDEX.md` - All documentation
- `vercel.json` - Vercel configuration
- `netlify.toml` - Netlify configuration

## 📞 Support

For issues or questions, contact the development team.

## 📝 License

All rights reserved - Perrito Pet Products
