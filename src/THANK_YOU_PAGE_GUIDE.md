# Thank You Page Guide

## Overview
A dedicated "Thank You for Your Order" page has been created to show customers after successful payment completion.

## How to Access

### Automatic Navigation
After a successful payment through Razorpay, customers are automatically redirected to the thank you page with their order details.

### Direct URL Access
You can access the thank you page directly using:

```
https://your-domain.com/#thank-you
```

### With Order Details
To view the thank you page with specific order details, use:

```
https://your-domain.com/#thank-you?orderId=TD123ABC&total=450&packSize=300gm&quantity=2
```

### URL Parameters
- `orderId`: Order identification number (e.g., TD123ABC)
- `total`: Total order amount in INR (e.g., 450)
- `packSize`: Selected pack size (e.g., "300gm - Pack of 1" or "600gm - Pack Of 2")
- `quantity`: Number of items ordered (e.g., 1, 2, 3)

## Features

The thank you page includes:

1. **Order Confirmation**
   - Success message with checkmark icon
   - Unique order ID display
   - Order summary with product details

2. **Next Steps Timeline**
   - Email confirmation notification
   - Order processing status
   - Shipping notification info
   - Expected delivery time (3-5 business days)

3. **Customer Support**
   - WhatsApp support button (https://wa.me/918240729820)
   - Email support option
   - Easy access to help

4. **Navigation**
   - "Back to Home" button in header
   - "Continue Shopping" CTA button
   - Auto-navigation back to product page

5. **Meta Pixel Tracking**
   - Automatically tracks "Purchase" event with order details
   - Sends conversion data to Facebook Ads

## Testing

To test the thank you page:

1. **Test with Sample Data:**
   ```
   /#thank-you?orderId=TDTEST001&total=225&packSize=300gm%20-%20Pack%20of%201&quantity=1
   ```

2. **Test Empty State (no parameters):**
   ```
   /#thank-you
   ```
   This will show default values

## Integration with Payment Flow

The payment flow works as follows:

1. User selects product and quantity
2. User clicks "Checkout Now"
3. Order summary dialog appears
4. User clicks "Proceed to Secure Payment"
5. Razorpay payment popup opens
6. User completes payment
7. **Payment success → Automatic redirect to Thank You page**
8. Meta Pixel tracks Purchase event
9. User sees order confirmation

## Customization

To customize the thank you page, edit:
- `/components/ThankYouPage.tsx` - Main thank you page component
- Update support contact links (WhatsApp, Email)
- Modify delivery time estimates
- Change styling and branding

## Notes

- The thank you page uses hash-based routing (/#thank-you) to work seamlessly without server-side routing configuration
- All order details are passed via URL parameters for easy tracking and sharing
- The page is fully responsive and works on all devices
- Meta Pixel automatically tracks the purchase when the page loads
