import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { useRazorpay } from "../hooks/useRazorpay";
import { Loader2 } from "lucide-react";

interface RazorpayCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  packSize: string;
  price: number;
  quantity: number;
}

export function RazorpayCheckout({
  isOpen,
  onClose,
  packSize,
  price,
  quantity,
}: RazorpayCheckoutProps) {
  const { isLoaded, isLoading, openCheckout } = useRazorpay();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalAmount = price * quantity;

  const handlePayment = () => {
    if (!isLoaded) {
      alert("Payment system is loading. Please try again in a moment.");
      return;
    }

    setIsProcessing(true);

    try {
      openCheckout({
        // Replace with your actual Razorpay key
        key: "rzp_test_YOUR_KEY_HERE", // Replace with your key
        amount: totalAmount * 100, // Amount in paise (₹225 = 22500 paise)
        currency: "INR",
        name: "Perrito Pet Products",
        description: `${packSize} - Chicken Triple Delight`,
        image: "https://your-logo-url.com/logo.png", // Optional: Add your logo
        
        // Payment success handler
        handler: function (response: any) {
          console.log("Payment successful:", response);
          
          // Handle successful payment
          alert(`Payment Successful! 
Payment ID: ${response.razorpay_payment_id}
Order ID: ${response.razorpay_order_id || 'N/A'}
Signature: ${response.razorpay_signature || 'N/A'}`);
          
          // Here you can:
          // 1. Send payment details to your backend
          // 2. Show success message
          // 3. Redirect to order confirmation page
          
          setIsProcessing(false);
          onClose();
        },
        
        // Prefill customer details (optional)
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        
        // Theme customization
        theme: {
          color: "#28a745", // Your brand color
        },
        
        // Modal dismiss handler
        modal: {
          ondismiss: function () {
            console.log("Payment cancelled by user");
            setIsProcessing(false);
          },
        },
      });
    } catch (error) {
      console.error("Error opening Razorpay checkout:", error);
      setIsProcessing(false);
      alert("Failed to open payment. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center">Complete Your Order</DialogTitle>
          <DialogDescription className="text-center text-sm text-neutral-600">
            Review your order and proceed to secure payment
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
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
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Quantity:</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#eae6e6] pt-2 mt-2">
                <span>Total Amount:</span>
                <span className="text-[#d32300]">₹{totalAmount}.00</span>
              </div>
            </div>
          </div>

          {/* Payment Button */}
          <div className="space-y-3">
            <Button
              onClick={handlePayment}
              disabled={!isLoaded || isProcessing}
              className="w-full bg-[#528FF0] hover:bg-[#3b7dd6] text-white h-12"
            >
              {isLoading && (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading Payment...
                </>
              )}
              {!isLoading && isProcessing && (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              )}
              {!isLoading && !isProcessing && (
                <>
                  🔒 Pay ₹{totalAmount} Securely
                </>
              )}
            </Button>

            <div className="text-center">
              <p className="text-xs text-neutral-500">
                Powered by <span className="font-bold">Razorpay</span> - 100% Secure Payment
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-600 pt-2">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>SSL Encrypted</span>
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
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">Credit Card</span>
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">Debit Card</span>
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">UPI</span>
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">Net Banking</span>
              <span className="text-xs bg-neutral-100 px-2 py-1 rounded">Wallets</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
