import { Gift, Zap } from "lucide-react";

export function FinalCTA() {
  return (
    <div className="bg-gradient-to-br from-[#d32300] via-[#ff4444] to-[#d32300] text-white rounded-2xl p-8 md:p-12 my-12 md:my-16 shadow-2xl">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-5 mb-6 animate-pulse">
          <Gift className="w-16 h-16" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Don't Miss This Limited-Time BOGO Offer!
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 opacity-95">
          Join 3000+ Happy Pet Parents Who Are Already Seeing Amazing Results
        </p>

        {/* Benefits Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
          {[
            "✓ Buy 1 Get 1 FREE - 50% Off Today Only",
            "✓ FREE Shipping on All Orders",
            "✓ 100% Money-Back Guarantee",
            "✓ 3000+ 5-Star Reviews",
            "✓ Vet Approved & Recommended",
            "✓ Visible Results in Just 2 Weeks"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Zap className="w-5 h-5 text-[#ffc107] flex-shrink-0" />
              <span className="text-sm md:text-base font-bold">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="mt-8 flex items-center justify-center gap-6 flex-wrap text-sm opacity-90">
          <div className="flex items-center gap-2">
            <span>🔒</span>
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span>
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💳</span>
            <span>Safe Payment</span>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="mt-6 bg-[#ffc107] text-[#1f2021] font-bold py-3 px-6 rounded-lg inline-block">
          ⚡ Sale Ends Today - Limited Stock Available!
        </div>
      </div>
    </div>
  );
}
