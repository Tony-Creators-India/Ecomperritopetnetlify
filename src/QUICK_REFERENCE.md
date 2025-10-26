# 🚀 Quick Reference - Chicken Triple Delight Order Page

## 🌐 Production URLs

### Main Product Page
```
https://orders.perritopetproducts.com/
```

### Thank You Page (Standalone)
```
https://orders.perritopetproducts.com/thank-you.html
```

---

## 💳 Razorpay Payment Button IDs

### 300gm Pack
```
pl_RTJzBzfRtud2OZ
```

### 600gm Pack
```
pl_RTKBrJpHAKULEB
```

---

## 📊 Meta Pixel ID

```
1615270122762784
```

### Events Tracked
- ✅ `PageView` - Main page loads
- ✅ `ViewContent` - Product viewed
- ✅ `AddToCart` - Buy Now clicked
- ✅ `InitiateCheckout` - Payment dialog opens
- ✅ `AddPaymentInfo` - Payment popup loads
- ✅ `Purchase` - Thank you page loads

---

## 📞 Contact Information

### WhatsApp
```
https://wa.me/918240729820
Phone: +91 82407 29820
```

### Email
```
support@chickentripledelight.com
```

---

## 🔄 Payment Flow

```
1. Customer visits main page
   ↓
2. Selects pack size (300gm/600gm)
   ↓
3. Adjusts quantity (+/-)
   ↓
4. Clicks "Buy Now"
   ↓
5. Payment popup opens (Razorpay)
   ↓
6. Customer completes payment
   ↓
7. Auto-redirect to /thank-you.html
   ↓
8. Thank you page displays
   ↓
9. Meta Pixel tracks Purchase event
   ↓
10. Customer clicks "Back to Home"
```

---

## 📁 Important Files

### Main Application
- `/App.tsx` - Main app entry
- `/index.html` - Main page HTML

### Thank You Page
- `/thank-you.html` - Standalone thank you page (NO dependencies)

### Payment Integration
- `/components/RazorpayPaymentIframe.tsx` - Payment popup handler

### Meta Pixel
- `/components/MetaPixel.tsx` - Facebook tracking

---

## 🧪 Quick Test Commands

### Test Thank You Page Directly
```
Open: https://orders.perritopetproducts.com/thank-you.html
```

### Test Payment Flow
```
1. Visit main page
2. Click "Buy Now"
3. Use test payment
4. Verify redirect to thank-you.html
```

### Test Meta Pixel
```
1. Open browser console (F12)
2. Load main page
3. Check for: "Meta Pixel loaded"
4. Click "Buy Now"
5. Check for tracking events
```

---

## ⚙️ Build & Deployment

### Files to Deploy
```
✅ /index.html
✅ /thank-you.html
✅ /App.tsx (and all components)
✅ /styles/globals.css
✅ Build assets (JS/CSS bundles)
```

### Verify Deployment
```
1. Check main page loads
2. Check /thank-you.html loads (404 = deployment issue)
3. Test payment flow
4. Check Meta Pixel tracking
```

---

## 🔧 Common Issues & Fixes

### Issue: Thank You page shows 404
**Fix**: Ensure `thank-you.html` is in build output

### Issue: Payment doesn't redirect
**Fix**: Check `/components/RazorpayPaymentIframe.tsx` line 45

### Issue: Meta Pixel not tracking
**Fix**: Check Pixel ID is `1615270122762784`

### Issue: WhatsApp button not working
**Fix**: Verify link is `https://wa.me/918240729820`

---

## 📊 Analytics to Monitor

### Meta Events Manager
- Check for Purchase events
- Verify event details (currency: INR)
- Monitor conversion rate

### Payment Analytics
- Track successful payments
- Monitor abandoned carts
- Check average order value

---

## 🎯 Success Metrics

### Technical
- ✅ Main page loads < 3 seconds
- ✅ Payment popup opens instantly
- ✅ Thank you page loads < 1 second
- ✅ All Meta Pixel events fire correctly

### Business
- 🎯 Conversion rate (visitors → purchases)
- 🎯 Average order value
- 🎯 Cart abandonment rate
- 🎯 Customer satisfaction

---

## 📱 Mobile Responsive Breakpoints

```css
Mobile:   < 640px  (sm)
Tablet:   640-1024px (md-lg)
Desktop:  > 1024px (xl)
```

All components are fully responsive across all breakpoints.

---

## 🎨 Brand Colors

```css
Primary Green:   #28a745
Secondary Green: #20c997
Light Green BG:  #f0fdf4
Success Green:   #16a34a
```

---

## 📝 Environment Variables

**None required!** 

All configuration is hardcoded for simplicity:
- Razorpay Payment Button IDs
- Meta Pixel ID
- Contact information

---

## 🚨 Emergency Contacts

### Technical Issues
- Developer: [Your contact]
- Hosting Support: [Hosting provider]

### Payment Issues
- Razorpay Support: https://razorpay.com/support/

### Advertising Issues
- Meta Business Support: https://business.facebook.com/help

---

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] Main page loads correctly
- [ ] Product gallery works
- [ ] Quantity controls work (+/-)
- [ ] Pack size selection works
- [ ] Payment button opens popup
- [ ] Payment flow completes
- [ ] Thank you page displays
- [ ] Meta Pixel tracking works
- [ ] WhatsApp button works
- [ ] Email button works
- [ ] Mobile responsive design works
- [ ] Desktop layout looks good
- [ ] SSL certificate active (HTTPS)

---

## 📅 Maintenance Schedule

### Daily
- Monitor Meta Pixel events
- Check for payment errors
- Review customer inquiries

### Weekly
- Review conversion analytics
- Test payment flow
- Check for broken links

### Monthly
- Update product images if needed
- Review and optimize Meta ads
- Analyze customer feedback

---

**Last Updated**: October 24, 2025  
**Version**: 1.0  
**Status**: 🟢 Production Ready
