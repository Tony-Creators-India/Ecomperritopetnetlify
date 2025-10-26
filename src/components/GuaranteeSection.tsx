import { Shield, Award, Heart, ThumbsUp } from "lucide-react";

export function GuaranteeSection() {
  return (
    <div className="bg-gradient-to-br from-[#28a745] to-[#20c997] text-white py-12 md:py-16 my-12 md:my-16 rounded-2xl">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 text-center">
        {/* Main Guarantee */}
        <div className="mb-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4">
            <Shield className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our 100% Happiness Guarantee
          </h2>
          <p className="text-lg md:text-xl mb-6 opacity-95">
            We're so confident your dog will love Chicken Triple Delight that we offer a complete money-back guarantee.
          </p>
          <div className="bg-white text-[#28a745] inline-block px-8 py-4 rounded-xl font-bold text-xl md:text-2xl shadow-lg">
            Try Risk-Free for 30 Days!
          </div>
        </div>

        {/* Supporting Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Award className="w-10 h-10 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p className="text-sm opacity-90">
              Made with human-grade ingredients, vet-approved formula
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Heart className="w-10 h-10 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">No Risk</h3>
            <p className="text-sm opacity-90">
              Don't love it? Get every penny back within 30 days
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <ThumbsUp className="w-10 h-10 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Proven Results</h3>
            <p className="text-sm opacity-90">
              98% of customers reorder - they see the difference!
            </p>
          </div>
        </div>

        {/* Fine Print */}
        <p className="text-sm mt-8 opacity-80">
          If your dog doesn't absolutely love our meals, or if you're not satisfied for any reason, 
          contact us within 30 days for a full refund - no questions asked.
        </p>
      </div>
    </div>
  );
}
