# Meta Pixel Setup Guide 🎯

## ✅ What's Been Added

Your Meta Pixel (Facebook Pixel) tracking is now fully integrated into your pet product landing page!

---

## 🔧 How to Add Your Meta Pixel ID

### Step 1: Find Your Meta Pixel ID

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager2)
2. Select your Pixel
3. Copy your Pixel ID (it looks like: `123456789012345`)

### Step 2: Add Your Pixel ID to the Code

Open `/components/ProductPage.tsx` and find line 84:

```tsx
<MetaPixel pixelId="YOUR_PIXEL_ID" />
```

**Replace `YOUR_PIXEL_ID` with your actual Pixel ID:**

```tsx
<MetaPixel pixelId="123456789012345" />
```

**That's it!** 🎉

---

## 📊 Events Being Tracked

Your Meta Pixel will automatically track these events:

### 1. **PageView** (Automatic)
- Fires when someone visits your product page
- Tracks all page visitors

### 2. **ViewContent**
- Fires when product page loads
- Data sent:
  - Product name: "CHICKEN TRIPLE DELIGHT"
  - Price: ₹225 or ₹400
  - Currency: INR

### 3. **AddToCart**
- Fires when user clicks "Checkout" button
- Data sent:
  - Product name
  - Total value
  - Pack size (300gm or 600gm)
  - Quantity

### 4. **InitiateCheckout**
- Fires when checkout dialog opens
- Data sent:
  - Product details
  - Total value
  - Pack size
  - Quantity
  - Number of items

### 5. **AddPaymentInfo**
- Fires when payment popup window opens
- Data sent:
  - Total value
  - Currency: INR

### 6. **Purchase** 🎯
- Fires when payment is successful
- Data sent:
  - Total value
  - Pack size
  - Quantity
  - Currency: INR

---

## 🎨 Tracking Flow Example

```
User visits page
  → PageView + ViewContent tracked ✅

User selects 600gm pack
  → ViewContent updated with new price ✅

User clicks "Checkout"
  → AddToCart tracked ✅
  → InitiateCheckout tracked ✅

User clicks "Proceed to Secure Payment"
  → AddPaymentInfo tracked ✅
  → Payment popup opens

User completes payment
  → Purchase tracked ✅ 💰
```

---

## 🔍 How to Verify It's Working

### Method 1: Browser Console
1. Open your site
2. Press F12 to open Developer Console
3. Look for messages like:
   - `Meta Pixel initialized with ID: YOUR_PIXEL_ID`
   - `Meta Pixel Event: ViewContent`
   - `Meta Pixel Event: AddToCart`

### Method 2: Meta Pixel Helper (Recommended)
1. Install [Meta Pixel Helper Chrome Extension](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Visit your site
3. Click the extension icon
4. You should see your Pixel ID and events firing ✅

### Method 3: Meta Events Manager
1. Go to Meta Events Manager
2. Click on your Pixel
3. Go to "Test Events" tab
4. Visit your site - you should see events appearing in real-time!

---

## 📈 Using This Data for Ads

### Create Custom Audiences
- **Website Visitors**: People who viewed your page (PageView)
- **Product Viewers**: People who viewed product (ViewContent)
- **Cart Abandoners**: People who added to cart but didn't purchase
- **Purchasers**: People who completed purchase

### Create Conversion Campaigns
Set up conversion ads optimizing for:
- **Add to Cart**: Get people to click checkout
- **Initiate Checkout**: Get people to open payment
- **Purchase**: Get people to complete payment (most important!)

### Create Lookalike Audiences
- Create lookalike audiences based on purchasers
- Find more people similar to your best customers

---

## 🎯 Optimization Tips

### For Best Results:

1. **Let Pixel Learn**
   - Run ads for at least 7-14 days
   - Pixel needs 50+ events per week for optimization

2. **Track Purchase Event**
   - Most important event!
   - Shows actual ROI from ads

3. **Use Custom Conversions**
   - Create custom conversions in Events Manager
   - Set value rules (e.g., purchases over ₹500)

4. **Test Different Audiences**
   - ViewContent (broader)
   - AddToCart (warmer)
   - Purchasers (hottest)

---

## 🔒 Privacy & Compliance

### Important Notes:

1. **Privacy Policy**: Make sure your privacy policy mentions:
   - You use Meta Pixel
   - What data is collected
   - How it's used for advertising

2. **Cookie Consent**: Consider adding cookie consent banner if required in your region

3. **Data Protection**: Meta Pixel automatically hashes personal data (email, phone) if you send it

---

## 🐛 Troubleshooting

### Pixel Not Working?

**Check 1: Pixel ID is correct**
- Make sure you replaced `YOUR_PIXEL_ID` with actual ID
- No quotes or extra spaces

**Check 2: Browser Console**
- Open console (F12)
- Look for errors
- Should see "Meta Pixel initialized" message

**Check 3: Ad Blockers**
- Disable ad blockers temporarily
- Some ad blockers block Meta Pixel

**Check 4: Events Manager**
- Check "Test Events" in Meta Events Manager
- Should see events appearing within seconds

### Events Not Showing?

**Common Issues:**
- Ad blocker blocking pixel
- Wrong Pixel ID
- Browser privacy settings blocking tracking
- Need to wait a few minutes for data to appear

---

## 📞 Meta Pixel Support

### Resources:
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Meta Business Help Center](https://www.facebook.com/business/help)
- [Meta Events Manager](https://business.facebook.com/events_manager2)

### Standard Events Reference:
- [List of All Standard Events](https://developers.facebook.com/docs/meta-pixel/reference)

---

## ✅ Current Status

**Status**: ✅ READY - Just add your Pixel ID!

**What's Working:**
- ✅ Meta Pixel component created
- ✅ Event tracking functions ready
- ✅ All key events integrated
- ✅ Purchase tracking on successful payment
- ✅ Proper data structure for each event

**Next Step:**
Replace `YOUR_PIXEL_ID` in `/components/ProductPage.tsx` line 84 with your actual Meta Pixel ID!

---

## 💡 Quick Example

**Before:**
```tsx
<MetaPixel pixelId="YOUR_PIXEL_ID" />
```

**After (with your actual Pixel ID):**
```tsx
<MetaPixel pixelId="1234567890123456" />
```

---

That's it! Your Meta Pixel is ready to track conversions and help you optimize your Facebook/Instagram ads! 🚀📊

Questions? Check the Meta Events Manager to see your events in real-time!
