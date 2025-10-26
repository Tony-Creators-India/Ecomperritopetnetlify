import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface RazorpayPaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  paymentButtonId: string;
  packSize: string;
  price: number;
}

// Declare Razorpay on window object
declare global {
  interface Window {
    Razorpay: any;
  }
}

export function RazorpayPaymentDialog({
  isOpen,
  onClose,
  paymentButtonId,
  packSize,
  price,
}: RazorpayPaymentDialogProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load Razorpay script
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="razorpay"]')) {
      setScriptLoaded(true);
      setIsLoading(false);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay checkout script loaded");
      setScriptLoaded(true);
      setIsLoading(false);
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay script");
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Don't remove script on cleanup as it might be used by other components
    };
  }, []);

  // Inject payment button when dialog opens
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    // Clear container
    containerRef.current.innerHTML = "";

    // Method 1: Using dangerouslySetInnerHTML approach
    const formHTML = `
      <form>
        <script 
          src="https://checkout.razorpay.com/v1/payment-button.js" 
          data-payment_button_id="${paymentButtonId}" 
          async>
        </script>
      </form>
    `;

    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = formHTML;
    
    // Extract the form and script
    const form = tempDiv.querySelector('form');
    if (form) {
      // Clone and re-execute scripts (needed for dynamic script execution)
      const scripts = form.querySelectorAll('script');
      scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });
        newScript.textContent = oldScript.textContent;
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      });
      
      containerRef.current.appendChild(form);
      console.log("Razorpay payment button form injected");
    }

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [isOpen, paymentButtonId]);

  // Fallback: Manual Razorpay checkout
  const handleManualCheckout = () => {
    if (!window.Razorpay) {
      alert("Razorpay is not loaded. Please refresh the page and try again.");
      return;
    }

    // This is a fallback - you'll need to create an order on your backend
    // For now, we'll show an alert
    alert("Manual checkout not configured. Please use the payment button above or contact support.");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Complete Your Order
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-neutral-600">
            Review your order and proceed to secure payment
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Order Summary */}
          <div className="bg-gradient-to-br from-[#f8f8f8] to-white border-2 border-[#eae6e6] rounded-lg p-4">
            <h3 className="font-bold mb-3">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Product:</span>
                <span className="font-bold">CHICKEN TRIPLE DELIGHT</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Pack Size:</span>
                <span className="font-bold">{packSize}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#eae6e6] pt-2">
                <span className="font-bold">Total Amount:</span>
                <span className="text-xl font-bold text-[#d32300]">₹{price}.00</span>
              </div>
            </div>
          </div>

          {/* Razorpay Payment Button */}
          <div className="border-2 border-[#28a745] rounded-lg p-6 bg-white">
            <div className="text-center mb-4">
              <p className="text-sm text-neutral-600 mb-2">
                🔒 Secure Payment powered by Razorpay
              </p>
            </div>
            
            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-4">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#28a745]"></div>
                <p className="mt-2 text-sm text-neutral-600">Loading payment options...</p>
              </div>
            )}
            
            {/* Razorpay Button Container */}
            <div 
              ref={containerRef} 
              className="razorpay-embed-btn-container min-h-[60px]"
            >
              {/* Razorpay form will be injected here */}
            </div>

            {/* Fallback Button */}
            {!isLoading && (
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-xs text-center text-neutral-500 mb-2">
                  Button not loading? Try direct checkout:
                </p>
                <button
                  onClick={handleManualCheckout}
                  className="w-full bg-[#528FF0] hover:bg-[#3b7dd6] text-white py-3 rounded-lg transition-colors"
                >
                  Pay with Razorpay
                </button>
              </div>
            )}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-4 text-xs text-neutral-600">
            <div className="flex items-center gap-1">
              <span>🔒</span>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <span>✓</span>
              <span>Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🚚</span>
              <span>FREE Shipping</span>
            </div>
          </div>

          {/* Debug Info (Remove in production) */}
          <div className="mt-4 p-3 bg-neutral-100 rounded text-xs">
            <p className="font-bold mb-1">Debug Info:</p>
            <p>Payment Button ID: {paymentButtonId}</p>
            <p>Script Loaded: {scriptLoaded ? "✓ Yes" : "✗ No"}</p>
            <p>Dialog Open: {isOpen ? "✓ Yes" : "✗ No"}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
