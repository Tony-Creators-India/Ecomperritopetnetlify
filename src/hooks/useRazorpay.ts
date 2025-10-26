import { useEffect, useState } from "react";

// Razorpay options interface
interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  handler: (response: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function useRazorpay() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      setIsLoaded(true);
      setIsLoading(false);
      return;
    }

    // Check if script is already in document
    const existingScript = document.querySelector(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        setIsLoaded(true);
        setIsLoading(false);
      });
      return;
    }

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };

    script.onerror = () => {
      console.error("Failed to load Razorpay SDK");
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      // Don't remove script on cleanup as it might be used elsewhere
    };
  }, []);

  const openCheckout = (options: RazorpayOptions) => {
    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded");
      return;
    }

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return { isLoaded, isLoading, openCheckout };
}
