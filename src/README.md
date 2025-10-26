# Perrito Pet Products - Chicken Triple Delight

Ecommerce landing page for Chicken Triple Delight pet product with Razorpay payment integration and Meta Pixel tracking.

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

## 📦 Deployment on Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: Deploy via Netlify Web UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

### Option 3: Manual Deploy

```bash
# Build the project
npm run build

# Drag and drop the `dist` folder to Netlify
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

### Build fails?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes not working on Netlify?
The `netlify.toml` and `public/_redirects` files handle SPA routing. Make sure they exist.

### Payment not working?
Check that Razorpay script is loaded in `index.html`:
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

## 📞 Support

For issues or questions, contact the development team.

## 📝 License

All rights reserved - Perrito Pet Products
