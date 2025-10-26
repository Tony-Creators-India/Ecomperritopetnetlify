# Production URLs - Perrito Pet Products

## Live Site URLs

### Main Product Page
**URL**: https://orders.perritopetproducts.com/

### Thank You Page (Standalone HTML)
**URL**: https://orders.perritopetproducts.com/thank-you.html

---

## How Payment Flow Works

1. **Customer visits main page**: `https://orders.perritopetproducts.com/`
2. **Clicks "Buy Now"** → Opens Razorpay payment popup
3. **Completes payment** → Automatically redirected to:
   - `https://orders.perritopetproducts.com/thank-you.html`

---

## Testing Checklist

### ✅ Main Page Tests
- [ ] Page loads correctly
- [ ] Product gallery works (image thumbnails clickable)
- [ ] Quantity +/- buttons work
- [ ] Pack size selection (300gm/600gm) works
- [ ] Bundle offers selection works
- [ ] "Buy Now" button opens payment dialog
- [ ] Payment popup opens with correct amount

### ✅ Thank You Page Tests
- [ ] Page accessible at `/thank-you.html`
- [ ] Success icon displays and animates
- [ ] "Thank You!" message shows
- [ ] Order information card displays
- [ ] WhatsApp button works
- [ ] Email button works
- [ ] "Back to Home" button works
- [ ] Button redirects to main page
- [ ] Page is responsive on mobile/tablet/desktop
- [ ] Green gradient background displays correctly
- [ ] Meta Pixel tracks Purchase event

### ✅ Payment Integration Tests
- [ ] 300gm product uses payment button ID: `pl_RTJzBzfRtud2OZ`
- [ ] 600gm product uses payment button ID: `pl_RTKBrJpHAKULEB`
- [ ] Payment popup displays correct order summary
- [ ] After successful payment, redirects to thank you page
- [ ] Payment popup closes after successful payment

### ✅ Meta Pixel Tracking Tests
- [ ] Pixel ID `1615270122762784` is active
- [ ] ViewContent event fires on page load
- [ ] AddToCart event fires when "Buy Now" clicked
- [ ] InitiateCheckout event fires when payment dialog opens
- [ ] AddPaymentInfo event fires when payment popup opens

---

## Deployment Notes

### Files to Deploy
Make sure these files are deployed:
- `/index.html` (main page)
- `/thank-you.html` (standalone thank you page)
- `/App.tsx` (main app)
- All component files
- `/styles/globals.css`

### Thank You Page Setup
The Thank You page is a **standalone HTML file**:
- File: `/thank-you.html`
- No React required
- Works independently
- All styles and scripts inline

---

## Troubleshooting

### Thank You Page Not Loading?
1. Check if file exists: `/thank-you.html`
2. Verify file is deployed to server
3. Check browser console for errors
4. Test URL directly: https://orders.perritopetproducts.com/thank-you.html

### Payment Redirect Not Working?
1. Check `/components/RazorpayPaymentIframe.tsx` line 45
2. Should redirect to: `/thank-you.html`
3. Check browser console for redirect errors

### Back Button Not Working?
1. Open `/thank-you.html`
2. Check the CTA button href attribute
3. Should link to: `https://orders.perritopetproducts.com/`

---

## Support Contacts

- **WhatsApp**: https://wa.me/918240729820
- **Email**: support@chickentripledelight.com

---

Last Updated: October 24, 2025
