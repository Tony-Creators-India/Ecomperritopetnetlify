import { CheckCircle2, Star } from "lucide-react";

export function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-[#f8f8f8] to-white border-b-2 border-[#eae6e6] py-8 md:py-12">
      <div className="max-w-[1290px] mx-auto px-4 md:px-[75px]">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pre-headline */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-[#ffc107] text-[#ffc107]" />
              ))}
            </div>
            <span className="text-sm md:text-base">Rated 5.0 by 3000+ Happy Pet Parents</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[28px] md:text-[42px] lg:text-[52px] font-bold leading-tight mb-4 md:mb-6">
            Give Your Dog <span className="text-[#d32300]">Restaurant-Quality Meals</span> That Make Their Coat Shine & Tail Wag
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-700 mb-6 md:mb-8 leading-relaxed">
            Premium Fresh Chicken Meals • No Preservatives • Vet Approved • Ready in 60 Seconds
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {[
              { title: "100% Fresh Ingredients", desc: "Human-grade chicken & vegetables" },
              { title: "Vet Recommended", desc: "Nutritionally balanced formula" },
              { title: "Visible Results in 2 Weeks", desc: "Shinier coat, more energy" }
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#28a745] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-sm md:text-base">{benefit.title}</p>
                  <p className="text-xs md:text-sm text-neutral-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Urgency Bar */}
          <div className="bg-[#fff8f0] border-l-4 border-[#ff9800] p-4 rounded-lg">
            <p className="text-sm md:text-base font-bold text-[#856404]">
              🔥 <span className="text-[#d32300]">FLASH SALE ALERT:</span> Buy 1 Get 1 FREE ends today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
