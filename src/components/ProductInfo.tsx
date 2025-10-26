import { Minus, Plus, ShoppingCart, Eye, Star } from "lucide-react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { BundleOffers } from "./BundleOffers";
import { DeliveryUrgency } from "./DeliveryUrgency";

interface ProductInfoProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  packSize: string;
  setPackSize: (size: string) => void;
  onAddToCart: () => void;
  selectedBundle: string;
  setSelectedBundle: (bundle: string) => void;
}

// Product variation mapping - matches ProductPage.tsx
const PRODUCT_VARIATIONS = {
  "300gm": {
    variationId: 9530,
    price: 225,
    originalPrice: 450,
    label: "300gm - Pack of 1"
  },
  "600gm": {
    variationId: 9531,
    price: 400,
    originalPrice: 800,
    label: "600gm - Pack Of 2"
  }
} as const;

export function ProductInfo({
  quantity,
  setQuantity,
  packSize,
  setPackSize,
  onAddToCart,
  selectedBundle,
  setSelectedBundle,
}: ProductInfoProps) {
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleBundleSelect = (bundlePackSize: string, bundleQuantity: number) => {
    setPackSize(bundlePackSize);
    // Always set quantity to 1 regardless of bundle
    setQuantity(1);
  };

  const handlePackSizeChange = (newPackSize: string) => {
    setPackSize(newPackSize);
    // Update selected bundle based on pack size
    if (newPackSize === "300gm") {
      setSelectedBundle("starter");
      setQuantity(1);
    } else if (newPackSize === "600gm") {
      setSelectedBundle("popular");
      setQuantity(1); // Keep default quantity at 1 for all pack sizes
    }
  };

  // Get current variation details
  const currentVariation = PRODUCT_VARIATIONS[packSize as keyof typeof PRODUCT_VARIATIONS];
  const totalPrice = currentVariation.price * quantity;
  const totalOriginalPrice = currentVariation.originalPrice * quantity;
  const totalSavings = totalOriginalPrice - totalPrice;

  return (
    <div className="space-y-6">
      {/* Brand & Stock */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm text-[#999999]">Brands:</span>
        <a href="#" className="hover:underline font-bold text-[#28a745]">WAG IN JOY</a>
        <span className="bg-[#28a745] text-white text-sm px-4 py-1 rounded-lg flex items-center gap-2">
          ✓ In Stock
        </span>
      </div>

      {/* Title */}
      <div>
        <h1 className="font-bold text-[24px] mb-2">
          CHICKEN TRIPLE DELIGHT
        </h1>
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-[#ffc107] text-[#ffc107]" />
            ))}
          </div>
          <span className="text-sm font-bold">5.0</span>
          <span className="text-sm text-neutral-600">(150+ Reviews)</span>
        </div>
        
        {/* Current Price Display */}
        <div className="bg-gradient-to-r from-[#28a745]/10 to-[#20c997]/10 border-2 border-[#28a745] rounded-lg p-4">
          <div className="flex items-baseline gap-3 flex-wrap">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#d32300]">₹{currentVariation.price}.00</span>
              <span className="text-lg text-neutral-500 line-through">₹{currentVariation.originalPrice}.00</span>
            </div>
            <span className="bg-[#d32300] text-white text-sm px-3 py-1 rounded-full font-bold">
              Save 50%
            </span>
          </div>
          <p className="text-sm text-neutral-600 mt-2">
            <strong>{currentVariation.label}</strong> - Price per unit: ₹{currentVariation.price}
          </p>
        </div>
      </div>

      {/* Viewing Count */}
      <div className="flex items-center gap-2 bg-[#fff3cd] border-l-4 border-[#ffc107] px-4 py-3 rounded">
        <Eye className="w-5 h-5 text-[#d32300] animate-pulse" />
        <span className="text-sm font-bold text-[#856404]">
          🔥 <span className="text-[#d32300]">129 people</span> are viewing this right now
        </span>
      </div>

      {/* Delivery Urgency */}
      <DeliveryUrgency />

      {/* Description */}
      <p className="text-base leading-relaxed text-neutral-900 bg-[#f8f8f8] p-4 rounded-lg border border-[#eae6e6]">
        <strong>Premium Fresh Chicken Meals</strong> - Treat your pet to restaurant-quality nutrition! 
        Packed with real chicken, vegetables, and nutrients that support your dog's health inside out. 
        Ready in 60 seconds - no mess, no stress, just pure goodness!
      </p>

      {/* Products Bought - Social Proof */}
      <div className="bg-[#28a745]/10 border-l-4 border-[#28a745] rounded px-4 py-3">
        <p className="text-sm font-bold text-[#28a745]">
          ✓ <span className="text-[#1f2021]">3000+ happy customers</span> bought this product last month
        </p>
      </div>

      {/* Flash Sale Alert - Moved here */}
      <div className="bg-[#fff8f0] border-2 border-[#ff9800] rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <span className="text-[#ff9800]">🎁</span>
          </div>
          <div>
            <h3 className="font-bold text-[#d32300] mb-1">
              Limited Time Offer: Buy 1 Get 1 FREE
            </h3>
            <p className="text-sm text-neutral-700">
              Get double the value on all packs today. Perfect for stocking up on your pet's favorite meals!
            </p>
          </div>
        </div>
      </div>

      {/* Bundle Offers */}
      <BundleOffers 
        selectedBundle={selectedBundle}
        setSelectedBundle={setSelectedBundle}
        onSelectBundle={handleBundleSelect}
      />

      {/* Manual Pack Size Selection (Alternative) */}
      <div className="space-y-3 border-t border-[#eae6e6] pt-6">
        <label className="font-bold">Or customize your order:</label>
        <RadioGroup value={packSize} onValueChange={handlePackSizeChange} className="flex gap-2">
          <div className="flex-1">
            <RadioGroupItem value="300gm" id="300gm" className="peer sr-only" />
            <Label
              htmlFor="300gm"
              className="flex flex-col items-center justify-center h-20 border-2 border-[#eae6e6] rounded-lg cursor-pointer peer-data-[state=checked]:border-[#28a745] peer-data-[state=checked]:bg-[#28a745]/5 hover:border-[#28a745]/50 transition-colors"
            >
              <span className="font-bold">300gm</span>
              <span className="text-xs text-neutral-600">Pack of 1</span>
              <span className="text-sm font-bold text-[#d32300]">₹225</span>
            </Label>
          </div>
          <div className="flex-1">
            <RadioGroupItem value="600gm" id="600gm" className="peer sr-only" />
            <Label
              htmlFor="600gm"
              className="flex flex-col items-center justify-center h-20 border-2 border-[#eae6e6] rounded-lg cursor-pointer peer-data-[state=checked]:border-[#28a745] peer-data-[state=checked]:bg-[#28a745]/5 hover:border-[#28a745]/50 transition-colors"
            >
              <span className="font-bold">600gm</span>
              <span className="text-xs text-neutral-600">Pack of 2</span>
              <span className="text-sm font-bold text-[#d32300]">₹400</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Quantity & Price Summary */}
      <div className="bg-gradient-to-br from-[#f8f8f8] to-white border-2 border-[#eae6e6] rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <label className="font-bold">Quantity:</label>
          <div className="flex items-center border-2 border-[#eae6e6] rounded-lg overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="px-4 h-12 hover:bg-gray-50 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-5 h-5" />
            </button>
            <div className="w-16 h-12 flex items-center justify-center border-x-2 border-[#eae6e6] font-bold text-lg">
              {quantity}
            </div>
            <button
              onClick={increaseQuantity}
              className="px-4 h-12 hover:bg-gray-50 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="border-t border-[#eae6e6] pt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-neutral-600">Original Price:</span>
            <span className="line-through text-neutral-500">₹{totalOriginalPrice}.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-neutral-600">Discount (50% OFF):</span>
            <span className="text-[#28a745] font-bold">-₹{totalSavings}.00</span>
          </div>
          <div className="flex justify-between items-center text-xl font-bold border-t-2 border-[#eae6e6] pt-3">
            <span>Your Price:</span>
            <div className="text-right">
              <div className="text-[#d32300]">₹{totalPrice}.00</div>
              <div className="text-xs text-[#28a745] font-normal">You save ₹{totalSavings}!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        onClick={onAddToCart}
        className="w-full h-14 bg-gradient-to-r from-[#28a745] to-[#20c997] hover:from-[#20c997] hover:to-[#28a745] text-white rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all"
      >
        <ShoppingCart className="w-6 h-6 mr-2" />
        Checkout - ₹{totalPrice}.00
      </Button>

      {/* Trust Indicators Below CTA */}
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-white border border-[#eae6e6] rounded-lg p-3">
          <div className="text-2xl mb-1">🚚</div>
          <p className="text-xs font-bold">FREE Shipping</p>
        </div>
        <div className="bg-white border border-[#eae6e6] rounded-lg p-3">
          <div className="text-2xl mb-1">💯</div>
          <p className="text-xs font-bold">Money Back</p>
        </div>
        <div className="bg-white border border-[#eae6e6] rounded-lg p-3">
          <div className="text-2xl mb-1">⚡</div>
          <p className="text-xs font-bold">Fast Delivery</p>
        </div>
      </div>

      {/* Product Meta */}
      <div className="pt-6 border-t border-[#eae6e6] space-y-2 text-sm">
        <div className="flex flex-wrap gap-1">
          <span className="text-[#999999]">Categories:</span>
          <a href="#" className="hover:underline text-[#28a745] font-bold">Pet-Treats</a>
          <span className="text-[#999999]">,</span>
          <a href="#" className="hover:underline text-[#28a745] font-bold">Ready fresh meals</a>
        </div>
        <div className="flex flex-wrap gap-1">
          <span className="text-[#999999]">Brands:</span>
          <a href="#" className="hover:underline text-[#28a745] font-bold">WAG IN JOY</a>
        </div>
      </div>
    </div>
  );
}
