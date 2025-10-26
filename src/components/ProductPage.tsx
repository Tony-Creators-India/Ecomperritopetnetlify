import { useState, useEffect } from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { MediaMentions } from "./MediaMentions";
import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductTabs } from "./ProductTabs";
import { GuaranteeSection } from "./GuaranteeSection";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { ContactButtons } from "./ContactButtons";
import { StickyCheckout } from "./StickyCheckout";
import { RealTimePurchases } from "./RealTimePurchases";
import { RazorpayPaymentIframe } from "./RazorpayPaymentIframe";
import { MetaPixelEvents } from "./MetaPixel";

const PRODUCT_VARIATIONS = {
  "300gm": {
    variationId: 9530,
    price: 225,
    label: "300gm - Pack of 1",
    paymentButtonId: "pl_RTJzBzfRtud2OZ"
  },
  "600gm": {
    variationId: 9531,
    price: 400,
    label: "600gm - Pack Of 2",
    paymentButtonId: "pl_RTKBrJpHAKULEB"
  }
} as const;

export function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [packSize, setPackSize] = useState("300gm");
  const [selectedBundle, setSelectedBundle] = useState("starter");
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  const currentVariation = PRODUCT_VARIATIONS[packSize as keyof typeof PRODUCT_VARIATIONS];
  const totalPrice = currentVariation.price * quantity;

  // Track ViewContent event when page loads
  useEffect(() => {
    MetaPixelEvents.viewContent(
      "CHICKEN TRIPLE DELIGHT",
      currentVariation.price,
      "INR"
    );
  }, [currentVariation.price]);

  const handleAddToCart = () => {
    const variation = PRODUCT_VARIATIONS[packSize as keyof typeof PRODUCT_VARIATIONS];
    
    if (!variation) {
      console.error('Invalid pack size:', packSize);
      return;
    }

    // Track AddToCart event
    MetaPixelEvents.addToCart(
      "CHICKEN TRIPLE DELIGHT",
      totalPrice,
      variation.label,
      quantity
    );
    
    // Track InitiateCheckout event
    MetaPixelEvents.initiateCheckout(
      "CHICKEN TRIPLE DELIGHT",
      totalPrice,
      variation.label,
      quantity
    );
    
    // Open the Razorpay payment iframe dialog
    setIsPaymentDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <MediaMentions />
      
      <main className="max-w-[1290px] mx-auto px-4 md:px-[75px] py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[60px]">
          <ProductGallery />
          
          <ProductInfo
            quantity={quantity}
            setQuantity={setQuantity}
            packSize={packSize}
            setPackSize={setPackSize}
            onAddToCart={handleAddToCart}
            selectedBundle={selectedBundle}
            setSelectedBundle={setSelectedBundle}
          />
        </div>

        {/* Hero Section - Moved above reviews */}
        <div className="my-12">
          <HeroSection />
        </div>

        <ProductTabs />
        <GuaranteeSection />
        <FinalCTA />
      </main>

      <Footer />
      <ContactButtons />
      <StickyCheckout 
        quantity={quantity}
        setQuantity={setQuantity}
        packSize={packSize}
        setPackSize={setPackSize}
        onAddToCart={handleAddToCart}
      />
      <RealTimePurchases />

      {/* Razorpay Payment Dialog - Iframe Method */}
      <RazorpayPaymentIframe
        isOpen={isPaymentDialogOpen}
        onClose={() => setIsPaymentDialogOpen(false)}
        paymentButtonId={currentVariation.paymentButtonId}
        packSize={currentVariation.label}
        price={totalPrice}
        quantity={quantity}
      />
    </div>
  );
}