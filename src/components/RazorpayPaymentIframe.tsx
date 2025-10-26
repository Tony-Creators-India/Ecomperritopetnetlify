import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { MetaPixelEvents } from "./MetaPixel";

interface RazorpayPaymentIframeProps {
  isOpen: boolean;
  onClose: () => void;
  paymentButtonId: string;
  packSize: string;
  price: number;
  quantity: number;
}

export function RazorpayPaymentIframe({
  isOpen,
  onClose,
  paymentButtonId,
  packSize,
  price,
  quantity,
}: RazorpayPaymentIframeProps) {
  const popupRef = useRef<Window | null>(null);

  useEffect(() => {
    // Listen for messages from popup (payment success/failure)
    const handleMessage = (event: MessageEvent) => {
      // Handle payment events from Razorpay
      if (event.data.type === 'razorpay_payment_success') {
        console.log('Payment successful:', event.data);
        
        // Track Purchase event in Meta Pixel
        MetaPixelEvents.purchase(price, packSize, quantity);
        
        // Generate order ID
        const orderId = "TD" + Math.random().toString(36).substring(2, 9).toUpperCase();
        
        // Close the dialog and popup
        onClose();
        if (popupRef.current) {
          popupRef.current.close();
        }
        
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else if (event.data.type === 'razorpay_payment_failure') {
        console.log('Payment failed:', event.data);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onClose, price, packSize, quantity]);

  // Clean up popup on unmount
  useEffect(() => {
    return () => {
      if (popupRef.current && !popupRef.current.closed) {
        popupRef.current.close();
      }
    };
  }, []);

  const openPaymentPopup = () => {
    // Track AddPaymentInfo event
    MetaPixelEvents.addPaymentInfo(price);
    
    // Create HTML content for the popup
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Complete Your Payment - CHICKEN TRIPLE DELIGHT</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 40px 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          
          .container {
            max-width: 600px;
            width: 100%;
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }

          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }

          .header h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 8px;
          }

          .header p {
            font-size: 14px;
            opacity: 0.95;
          }

          .content {
            padding: 30px;
          }

          .order-summary {
            background: #f8f9fa;
            border: 2px solid #eae6e6;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
          }

          .order-summary h2 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
            color: #333;
          }

          .order-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e0e0e0;
          }

          .order-row:last-child {
            border-bottom: none;
            border-top: 2px solid #333;
            margin-top: 10px;
            padding-top: 16px;
            font-weight: 600;
          }

          .order-row .label {
            color: #666;
            font-size: 14px;
          }

          .order-row .value {
            color: #333;
            font-size: 14px;
            font-weight: 500;
          }

          .order-row:last-child .value {
            color: #d32300;
            font-size: 18px;
          }

          .payment-section {
            background: white;
            border: 2px solid #28a745;
            border-radius: 12px;
            padding: 30px;
            text-align: center;
          }

          .payment-section .secure-badge {
            font-size: 14px;
            color: #666;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .payment-section .secure-badge::before {
            content: "🔒";
            font-size: 18px;
          }

          form {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .razorpay-payment-button {
            background-color: #528FF0 !important;
            color: white !important;
            border: none !important;
            padding: 16px 48px !important;
            font-size: 18px !important;
            font-weight: 600 !important;
            border-radius: 8px !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 4px 12px rgba(82, 143, 240, 0.3) !important;
          }
          
          .razorpay-payment-button:hover {
            background-color: #3b7dd6 !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(82, 143, 240, 0.4) !important;
          }

          .trust-badges {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            flex-wrap: wrap;
          }

          .trust-badge {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: #666;
          }

          .payment-methods {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
          }

          .payment-methods p {
            font-size: 12px;
            color: #999;
            margin-bottom: 12px;
            text-align: center;
          }

          .methods {
            display: flex;
            justify-content: center;
            gap: 8px;
            flex-wrap: wrap;
          }

          .method-badge {
            background: #f5f5f5;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 11px;
            color: #666;
          }

          @media (max-width: 640px) {
            body {
              padding: 20px 10px;
            }

            .header h1 {
              font-size: 20px;
            }

            .content {
              padding: 20px;
            }

            .payment-section {
              padding: 20px;
            }

            .razorpay-payment-button {
              padding: 14px 32px !important;
              font-size: 16px !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Complete Your Order</h1>
            <p>You're one step away from treating your pet!</p>
          </div>

          <div class="content">
            <div class="order-summary">
              <h2>Order Summary</h2>
              <div class="order-row">
                <span class="label">Product:</span>
                <span class="value">CHICKEN TRIPLE DELIGHT</span>
              </div>
              <div class="order-row">
                <span class="label">Pack Size:</span>
                <span class="value">${packSize}</span>
              </div>
              <div class="order-row">
                <span class="label">Total Amount:</span>
                <span class="value">₹${price}.00</span>
              </div>
            </div>

            <div class="payment-section">
              <div class="secure-badge">
                Secure Payment powered by Razorpay
              </div>
              
              <form>
                <script 
                  src="https://checkout.razorpay.com/v1/payment-button.js" 
                  data-payment_button_id="${paymentButtonId}" 
                  async>
                </script>
              </form>

              <div class="payment-methods">
                <p>We accept all major payment methods:</p>
                <div class="methods">
                  <span class="method-badge">💳 Credit Card</span>
                  <span class="method-badge">💳 Debit Card</span>
                  <span class="method-badge">📱 UPI</span>
                  <span class="method-badge">🏦 Net Banking</span>
                  <span class="method-badge">👛 Wallets</span>
                </div>
              </div>
            </div>

            <div class="trust-badges">
              <div class="trust-badge">
                <span>🔒</span>
                <span>100% Secure</span>
              </div>
              <div class="trust-badge">
                <span>✓</span>
                <span>Money Back Guarantee</span>
              </div>
              <div class="trust-badge">
                <span>🚚</span>
                <span>FREE Shipping</span>
              </div>
            </div>
          </div>
        </div>
        
        <script>
          // Listen for payment events from Razorpay
          window.addEventListener('message', function(event) {
            // Forward messages to parent window
            if (window.opener) {
              window.opener.postMessage(event.data, '*');
            }
          });
          
          console.log('Razorpay payment popup initialized with ID:', '${paymentButtonId}');
        </script>
      </body>
      </html>
    `;

    // Open popup window
    const width = 650;
    const height = 750;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    const popup = window.open(
      '',
      'RazorpayPayment',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );

    if (popup) {
      popup.document.write(htmlContent);
      popup.document.close();
      popupRef.current = popup;

      // Close the dialog after opening popup
      onClose();
    } else {
      alert('Please allow popups for this site to complete payment');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center">Ready to Checkout?</DialogTitle>
          <DialogDescription className="text-center text-sm text-neutral-600">
            Click below to open secure payment window
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Order Summary */}
          <div className="bg-gradient-to-br from-[#f8f8f8] to-white border-2 border-[#eae6e6] rounded-lg p-4">
            <h3 className="mb-3">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Product:</span>
                <span>CHICKEN TRIPLE DELIGHT</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Pack Size:</span>
                <span>{packSize}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#eae6e6] pt-2 mt-2">
                <span>Total Amount:</span>
                <span className="text-[#d32300]">₹{price}.00</span>
              </div>
            </div>
          </div>

          {/* Proceed to Payment Button */}
          <div className="space-y-3">
            <Button
              onClick={openPaymentPopup}
              className="w-full bg-[#528FF0] hover:bg-[#3b7dd6] text-white py-6 text-lg"
            >
              🔒 Proceed to Secure Payment
            </Button>
            <p className="text-xs text-center text-neutral-500">
              A new window will open with Razorpay payment options
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-600 pt-4 border-t border-neutral-200">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Money Back</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🚚</span>
              <span>FREE Shipping</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-neutral-200 pt-4">
            <p className="text-xs text-center text-neutral-500 mb-2">We accept:</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">💳 Cards</span>
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">📱 UPI</span>
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">🏦 Net Banking</span>
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">👛 Wallets</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
