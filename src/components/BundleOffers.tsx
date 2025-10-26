import { Check, Crown, Zap } from "lucide-react";
import { Button } from "./ui/button";

interface BundleOffersProps {
  selectedBundle: string;
  setSelectedBundle: (bundle: string) => void;
  onSelectBundle: (packSize: string, quantity: number) => void;
}

export function BundleOffers({ selectedBundle, setSelectedBundle, onSelectBundle }: BundleOffersProps) {
  const bundles = [
    {
      id: "starter",
      name: "Starter Pack",
      packSize: "300gm",
      quantity: 1,
      originalPrice: 450,
      salePrice: 225,
      savings: 225,
      savingsPercent: 50,
      perPack: 225,
      popular: false,
      icon: Zap,
      features: ["1 Pack (300gm)", "Buy 1 Get 1 FREE", "FREE Shipping"]
    },
    {
      id: "popular",
      name: "Most Popular",
      packSize: "600gm",
      quantity: 1,
      originalPrice: 800,
      salePrice: 400,
      savings: 400,
      savingsPercent: 50,
      perPack: 400,
      popular: true,
      icon: Crown,
      features: ["Pack of 2 (600gm)", "FREE Shipping", "Save ₹400"]
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="font-bold text-lg md:text-xl mb-4">Choose Your Bundle & Save More</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            className={`relative border-2 rounded-xl p-5 cursor-pointer transition-all ${
              selectedBundle === bundle.id
                ? "border-[#28a745] bg-[#28a745]/5 shadow-lg"
                : "border-[#eae6e6] hover:border-[#28a745]/50"
            }`}
            onClick={() => {
              setSelectedBundle(bundle.id);
              onSelectBundle(bundle.packSize, bundle.quantity);
            }}
          >
            {/* Popular Badge */}
            {bundle.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d32300] text-white text-xs font-bold px-4 py-1 rounded-full">
                🔥 MOST POPULAR
              </div>
            )}

            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                bundle.popular ? "bg-[#d32300]/10" : "bg-[#28a745]/10"
              }`}>
                <bundle.icon className={`w-6 h-6 ${
                  bundle.popular ? "text-[#d32300]" : "text-[#28a745]"
                }`} />
              </div>
            </div>

            {/* Bundle Name */}
            <h4 className="font-bold text-center mb-2">{bundle.name}</h4>

            {/* Pricing */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-2xl md:text-3xl font-bold text-[#d32300]">
                  ₹{bundle.salePrice}
                </span>
                <span className="text-sm text-neutral-500 line-through">
                  ₹{bundle.originalPrice}
                </span>
              </div>
              <div className="inline-block bg-[#28a745] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                Save ₹{bundle.savings} ({bundle.savingsPercent}% OFF)
              </div>
              <p className="text-xs text-neutral-600">
                Only ₹{bundle.perPack}/pack
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-4">
              {bundle.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[#28a745] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Select Button */}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedBundle(bundle.id);
                onSelectBundle(bundle.packSize, bundle.quantity);
              }}
              className={`w-full ${
                selectedBundle === bundle.id
                  ? "bg-[#28a745] hover:bg-[#28a745]/90"
                  : "bg-[#1f2021] hover:bg-[#1f2021]/90"
              } text-white`}
            >
              {selectedBundle === bundle.id ? "✓ Selected" : "Select Bundle"}
            </Button>
          </div>
        ))}
      </div>

      {/* Guarantee Note */}
      <div className="hidden mt-6 bg-[#fff3cd] border-l-4 border-[#ffc107] p-4 rounded-lg">
        <p className="text-sm text-[#856404]">
          <strong>💯 Risk-Free Guarantee:</strong> Not happy with your purchase? Get 100% money back within 30 days - no questions asked!
        </p>
      </div>
    </div>
  );
}