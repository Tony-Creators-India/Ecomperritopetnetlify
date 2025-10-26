# 🚀 Deployment Checklist - Production Ready

## Pre-Deployment Verification

### ✅ Code Review
- [ ] All components working locally
- [ ] No console errors
- [ ] All features tested
- [ ] Meta Pixel tracking verified
- [ ] Payment integration tested

### ✅ Files to Deploy
- [ ] `/index.html` - Main page entry point
- [ ] `/thank-you.html` - Standalone thank you page
- [ ] `/App.tsx` - Main React application
- [ ] All `/components/**` files
- [ ] `/styles/globals.css` - Global styles
- [ ] Build output (dist/build folder)

### ✅ Configuration Check
- [ ] Razorpay Payment Button IDs correct
  - 300gm: `pl_RTJzBzfRtud2OZ`
  - 600gm: `pl_RTKBrJpHAKULEB`
- [ ] Meta Pixel ID: `1615270122762784`
- [ ] WhatsApp number: `+91 82407 29820`
- [ ] Email: `support@chickentripledelight.com`
- [ ] Production domain: `orders.perritopetproducts.com`

---

## Build Process

### Step 1: Clean Build
```bash
# Remove old build
rm -rf dist

# Install dependencies
npm install

# Build for production
npm run build
```

### Step 2: Verify Build Output
```bash
# Check if these files exist in dist/
dist/
├── index.html
├── thank-you.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
```

### Step 3: Test Build Locally
```bash
# Serve build locally
npm run preview

# Or use a static server
npx serve dist
```

---

## Deployment Steps

### Option A: Deploy to Existing Server

```bash
# Upload files to server via FTP/SFTP
# Ensure these files are in the root directory:
- index.html
- thank-you.html
- assets/ (folder with all JS/CSS)

# Or use rsync:
rsync -avz dist/ user@server:/path/to/orders.perritopetproducts.com/
```

### Option B: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option C: Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

---

## Post-Deployment Testing

### ✅ Main Page Tests

#### Test 1: Page Load
```
1. Visit: https://orders.perritopetproducts.com/
2. ✓ Page loads without errors
3. ✓ All images display correctly
4. ✓ No console errors
```

#### Test 2: Product Gallery
```
1. Click thumbnail images
2. ✓ Main image changes
3. ✓ Smooth transitions
```

#### Test 3: Quantity Controls
```
1. Click + button
2. ✓ Quantity increases
3. Click - button
4. ✓ Quantity decreases
5. ✓ Price updates accordingly
```

#### Test 4: Pack Size Selection
```
1. Click "300gm" option
2. ✓ Button highlights
3. ✓ Price changes to 300gm price
4. Click "600gm" option
5. ✓ Button highlights
6. ✓ Price changes to 600gm price
```

#### Test 5: Payment Button
```
1. Click "Buy Now"
2. ✓ Payment popup opens
3. ✓ Shows correct amount
4. ✓ Razorpay form loads
```

---

### ✅ Thank You Page Tests

#### Test 1: Direct Access
```
1. Visit: https://orders.perritopetproducts.com/thank-you.html
2. ✓ Page loads immediately
3. ✓ Success icon displays
4. ✓ Animations work
5. ✓ No console errors
```

#### Test 2: Content Display
```
1. On thank you page
2. ✓ "Thank You!" heading visible
3. ✓ Order info card displays
4. ✓ WhatsApp button visible
5. ✓ Email button visible
6. ✓ "Back to Home" button visible
```

#### Test 3: WhatsApp Button
```
1. Click WhatsApp button
2. ✓ Opens WhatsApp Web or app
3. ✓ Pre-filled with number: +91 82407 29820
```

#### Test 4: Email Button
```
1. Click Email button
2. ✓ Opens email client
3. ✓ Pre-filled with: support@chickentripledelight.com
```

#### Test 5: Back to Home Button
```
1. Click "Back to Home"
2. ✓ Redirects to main page
3. ✓ Main page loads correctly
```

---

### ✅ Payment Flow Tests

#### Test 1: Complete Payment Flow
```
1. Visit main page
2. Select 300gm pack
3. Set quantity to 2
4. Click "Buy Now"
5. ✓ Popup opens with correct amount
6. Complete test payment
7. ✓ Redirects to thank-you.html
8. ✓ Thank you page displays
9. Click "Back to Home"
10. ✓ Returns to main page
```

#### Test 2: Payment Cancellation
```
1. Click "Buy Now"
2. Close payment popup
3. ✓ Returns to main page
4. ✓ Can try payment again
```

---

### ✅ Meta Pixel Tracking Tests

#### Test 1: Check Pixel Installation
```
1. Open browser console (F12)
2. Visit main page
3. ✓ Check for: "Meta Pixel loaded"
4. Or use Meta Pixel Helper extension
```

#### Test 2: Track Events
```
1. Visit main page
2. ✓ PageView event fires
3. ✓ ViewContent event fires
4. Click "Buy Now"
5. ✓ AddToCart event fires
6. ✓ InitiateCheckout event fires
7. Payment popup opens
8. ✓ AddPaymentInfo event fires
9. Complete payment → Thank you page
10. ✓ Purchase event fires
```

#### Test 3: Verify in Events Manager
```
1. Go to Meta Events Manager
2. Select Pixel: 1615270122762784
3. Check "Test Events" tab
4. ✓ All events appearing
5. ✓ Correct event parameters
```

---

### ✅ Mobile Responsive Tests

#### Test on Mobile Device
```
1. Open on phone: https://orders.perritopetproducts.com/
2. ✓ Layout stacks vertically
3. ✓ Images responsive
4. ✓ Buttons full width
5. ✓ Text readable (not too small)
6. ✓ Touch targets adequate size
7. ✓ Gallery swipe works
8. ✓ Payment popup mobile-friendly
```

#### Test on Tablet
```
1. Open on tablet
2. ✓ Layout adapts appropriately
3. ✓ Images scale correctly
4. ✓ Buttons appropriate size
```

---

### ✅ Browser Compatibility Tests

Test on all major browsers:

#### Chrome
- [ ] Main page works
- [ ] Payment flow works
- [ ] Thank you page works

#### Firefox
- [ ] Main page works
- [ ] Payment flow works
- [ ] Thank you page works

#### Safari
- [ ] Main page works
- [ ] Payment flow works
- [ ] Thank you page works

#### Edge
- [ ] Main page works
- [ ] Payment flow works
- [ ] Thank you page works

---

### ✅ Performance Tests

#### Test 1: Google PageSpeed Insights
```
1. Visit: https://pagespeed.web.dev/
2. Enter: https://orders.perritopetproducts.com/
3. Run test
4. ✓ Mobile score > 80
5. ✓ Desktop score > 90
```

#### Test 2: Load Time
```
1. Open browser DevTools (F12)
2. Go to Network tab
3. Hard refresh (Ctrl+Shift+R)
4. ✓ DOMContentLoaded < 2s
5. ✓ Full load < 3s
```

---

### ✅ Security Tests

#### Test 1: HTTPS Enabled
```
1. Visit site
2. ✓ URL shows "https://"
3. ✓ Padlock icon in address bar
4. ✓ No mixed content warnings
```

#### Test 2: Security Headers
```
1. Open DevTools → Network
2. Refresh page
3. Click on main document
4. Check Response Headers
5. ✓ Has security headers (if configured)
```

---

## Common Issues & Solutions

### Issue: Thank You Page Shows 404

**Symptoms**: 
- `/thank-you.html` returns 404 error
- After payment, shows "Page not found"

**Solution**:
```bash
# Check if file exists in build
ls dist/thank-you.html

# If missing, ensure Vite config includes it:
# vite.config.ts
export default {
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        thankYou: './thank-you.html'
      }
    }
  }
}

# Rebuild
npm run build

# Redeploy
```

---

### Issue: Payment Redirect Not Working

**Symptoms**:
- Payment completes but stays on main page
- No redirect to thank you page

**Solution**:
1. Check `/components/RazorpayPaymentIframe.tsx` line 45
2. Should be: `window.location.href = '/thank-you.html';`
3. Not: `window.location.hash = 'thank-you';`
4. Rebuild and redeploy

---

### Issue: Meta Pixel Not Tracking

**Symptoms**:
- No events in Meta Events Manager
- Console shows pixel errors

**Solution**:
1. Verify Pixel ID: `1615270122762784`
2. Check `/components/MetaPixel.tsx`
3. Check browser console for errors
4. Use Meta Pixel Helper extension
5. Check ad blockers aren't blocking

---

### Issue: Images Not Loading

**Symptoms**:
- Broken image icons
- 404 errors for images

**Solution**:
1. Check image paths in build output
2. Verify images copied to `dist/assets/`
3. Check image imports in components
4. Clear browser cache
5. Rebuild and redeploy

---

### Issue: Mobile Layout Broken

**Symptoms**:
- Layout doesn't stack on mobile
- Text too small
- Buttons too small

**Solution**:
1. Check `styles/globals.css` responsive rules
2. Verify Tailwind breakpoints working
3. Test on real device (not just browser DevTools)
4. Clear cache and hard refresh

---

## Final Verification Checklist

Before announcing to customers:

### Technical
- [ ] Main page loads perfectly
- [ ] Payment flow works end-to-end
- [ ] Thank you page accessible
- [ ] Meta Pixel tracking verified
- [ ] All buttons/links work
- [ ] Mobile responsive on real devices
- [ ] Fast load times (< 3s)
- [ ] HTTPS enabled
- [ ] No console errors

### Content
- [ ] Product images display correctly
- [ ] Pricing correct
- [ ] Contact information correct
- [ ] Product descriptions accurate
- [ ] Legal/policy links work (if any)

### Business
- [ ] Razorpay account configured
- [ ] Payment buttons active (not test mode)
- [ ] Meta Pixel connected to correct ad account
- [ ] Customer support ready (WhatsApp/Email)
- [ ] Fulfillment process ready
- [ ] Shipping logistics confirmed

---

## Go Live!

Once all checks pass:

1. ✅ Announce to team
2. ✅ Start Meta ad campaigns
3. ✅ Monitor first orders closely
4. ✅ Respond to customer inquiries quickly
5. ✅ Track analytics daily
6. ✅ Gather customer feedback

---

## Post-Launch Monitoring

### First 24 Hours
- [ ] Monitor every order
- [ ] Test payment flow after each order
- [ ] Check for any error reports
- [ ] Verify Meta Pixel data

### First Week
- [ ] Review conversion rate
- [ ] Analyze traffic sources
- [ ] Check average order value
- [ ] Gather customer feedback
- [ ] Optimize based on data

### Ongoing
- [ ] Weekly analytics review
- [ ] Monthly performance report
- [ ] Continuous optimization
- [ ] A/B testing (if needed)

---

## Emergency Rollback Plan

If critical issues occur:

1. **Identify Issue**: What's broken?
2. **Assess Impact**: How many customers affected?
3. **Quick Fix**: Can it be fixed quickly?
4. **Or Rollback**: Deploy previous working version
5. **Communicate**: Notify affected customers
6. **Fix & Redeploy**: Fix issue, test, redeploy

---

## Support Contacts

### Hosting Issues
- Provider: [Your hosting provider]
- Support: [Support URL/Phone]

### Payment Issues
- Razorpay Support: https://razorpay.com/support/
- Razorpay Docs: https://razorpay.com/docs/

### Meta Pixel Issues
- Meta Business Support: https://business.facebook.com/help
- Meta Developer Docs: https://developers.facebook.com/docs/meta-pixel

---

## Success! 🎉

Your e-commerce landing page is now live at:

**https://orders.perritopetproducts.com/**

Thank you page:
**https://orders.perritopetproducts.com/thank-you.html**

---

**Deployment Date**: _______________  
**Deployed By**: _______________  
**Version**: 1.0  
**Status**: 🟢 LIVE IN PRODUCTION

---

Good luck with your launch! 🚀🐾
