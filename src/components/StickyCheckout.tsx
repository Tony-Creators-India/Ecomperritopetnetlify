import { useState, useEffect } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface StickyCheckoutProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  packSize: string;
  setPackSize: (size: string) => void;
  onAddToCart: () => void;
}

const PRODUCT_VARIATIONS = {
  "300gm": {
    variationId: 9530,
    price: 225,
    label: "300gm - Pack of 1"
  },
  "600gm": {
    variationId: 9531,
    price: 400,
    label: "600gm - Pack Of 2"
  }
} as const;

export function StickyCheckout({
  quantity,
  setQuantity,
  packSize,
  setPackSize,
  onAddToCart,
}: StickyCheckoutProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Remove scroll logic - sticky checkout is always visible
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Show sticky checkout when scrolled past 800px
  //     setIsVisible(window.scrollY > 800);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const currentVariation = PRODUCT_VARIATIONS[packSize as keyof typeof PRODUCT_VARIATIONS];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#eae6e6] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-[1290px] mx-auto px-4 md:px-[75px] py-4">
        <div className="flex items-center gap-3 md:gap-6 flex-wrap md:flex-nowrap">
          {/* Product Info */}
          <div className="flex-shrink-0">
            <h3 className="font-bold text-sm md:text-base">CHICKEN TRIPLE DELIGHT</h3>
            <p className="text-[#d32300] font-bold text-lg md:text-xl">
              ₹{currentVariation.price}.00 <span className="text-sm text-[#28a745]">( Buy 1 Get 1 Free )</span>
            </p>
          </div>

          {/* Pack Size Selection - Compact */}
          <div className="flex-shrink-0">
            <RadioGroup value={packSize} onValueChange={setPackSize} className="flex gap-2">
              <div>
                <RadioGroupItem value="300gm" id="sticky-300gm" className="peer sr-only" />
                <Label
                  htmlFor="sticky-300gm"
                  className="flex items-center justify-center h-10 px-3 border border-[#eae6e6] rounded cursor-pointer peer-data-[state=checked]:border-[#0e0c0c] peer-data-[state=checked]:bg-white hover:border-gray-400 transition-colors text-xs md:text-sm"
                >
                  300gm
                </Label>
              </div>
              <div>
                <RadioGroupItem value="600gm" id="sticky-600gm" className="peer sr-only" />
                <Label
                  htmlFor="sticky-600gm"
                  className="flex items-center justify-center h-10 px-3 border border-[#eae6e6] rounded cursor-pointer peer-data-[state=checked]:border-[#0e0c0c] peer-data-[state=checked]:bg-white hover:border-gray-400 transition-colors text-xs md:text-sm"
                >
                  600gm
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center border border-[#eae6e6] rounded-lg overflow-hidden flex-shrink-0">
            <button
              onClick={decreaseQuantity}
              className="px-3 h-10 hover:bg-gray-50 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <div className="w-12 h-10 flex items-center justify-center border-x border-[#eae6e6] font-bold text-sm">
              {quantity}
            </div>
            <button
              onClick={increaseQuantity}
              className="px-3 h-10 hover:bg-gray-50 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Checkout Button */}
          <Button
            onClick={onAddToCart}
            className="flex-1 h-10 md:h-12 bg-gradient-to-r from-[#28a745] to-[#20c997] hover:from-[#20c997] hover:to-[#28a745] text-white rounded-lg text-sm md:text-base font-bold shadow-lg"
          >
            Checkout
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}