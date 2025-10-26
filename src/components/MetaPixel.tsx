import { useEffect } from 'react';

interface MetaPixelProps {
  pixelId: string;
}

export function MetaPixel({ pixelId }: MetaPixelProps) {
  useEffect(() => {
    // Check if fbq already exists (prevent double initialization)
    if (typeof window !== 'undefined' && !(window as any).fbq) {
      // Meta Pixel Base Code
      (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js',
        undefined,
        undefined,
        undefined
      );

      // Initialize pixel with your ID
      (window as any).fbq('init', pixelId);
      
      // Track PageView
      (window as any).fbq('track', 'PageView');

      console.log('Meta Pixel initialized with ID:', pixelId);
    }
  }, [pixelId]);

  // Noscript fallback image
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}

// Helper function to track custom events
export const trackMetaEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
    console.log('Meta Pixel Event:', eventName, data);
  }
};

// Predefined event tracking functions
export const MetaPixelEvents = {
  // Track when user views product
  viewContent: (productName: string, value: number, currency: string = 'INR') => {
    trackMetaEvent('ViewContent', {
      content_name: productName,
      content_type: 'product',
      value: value,
      currency: currency
    });
  },

  // Track when user adds to cart / clicks checkout
  addToCart: (productName: string, value: number, packSize: string, quantity: number) => {
    trackMetaEvent('AddToCart', {
      content_name: productName,
      content_type: 'product',
      value: value,
      currency: 'INR',
      content_ids: [packSize],
      contents: [{ id: packSize, quantity: quantity }]
    });
  },

  // Track when user initiates checkout
  initiateCheckout: (productName: string, value: number, packSize: string, quantity: number) => {
    trackMetaEvent('InitiateCheckout', {
      content_name: productName,
      content_type: 'product',
      value: value,
      currency: 'INR',
      content_ids: [packSize],
      contents: [{ id: packSize, quantity: quantity }],
      num_items: quantity
    });
  },

  // Track successful purchase
  purchase: (value: number, packSize: string, quantity: number) => {
    trackMetaEvent('Purchase', {
      value: value,
      currency: 'INR',
      content_ids: [packSize],
      content_type: 'product',
      contents: [{ id: packSize, quantity: quantity }],
      num_items: quantity
    });
  },

  // Track when user views payment options
  addPaymentInfo: (value: number) => {
    trackMetaEvent('AddPaymentInfo', {
      value: value,
      currency: 'INR'
    });
  }
};
