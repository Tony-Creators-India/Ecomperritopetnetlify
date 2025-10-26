import { Star, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SocialProofBanner() {
  const quickReviews = [
    {
      name: "Priya S.",
      location: "Mumbai",
      rating: 5,
      text: "My Labrador's coat is so shiny now! Amazing quality.",
      verified: true
    },
    {
      name: "Rajesh K.",
      location: "Delhi",
      rating: 5,
      text: "Best dog food we've tried. He finishes the bowl every time!",
      verified: true
    },
    {
      name: "Anita D.",
      location: "Bangalore",
      rating: 5,
      text: "No preservatives, fresh ingredients - exactly what I wanted!",
      verified: true
    }
  ];

  return (
    <div className="bg-[#f8f8f8] py-6 md:py-8 hidden">
      <div className="max-w-[1290px] mx-auto px-4 md:px-[75px]">
        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-[#d32300]" />
              <p className="text-xl md:text-3xl font-bold text-[#d32300]">3000+</p>
            </div>
            <p className="text-xs md:text-sm text-neutral-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-[#ffc107]" />
              <p className="text-xl md:text-3xl font-bold">5.0</p>
            </div>
            <p className="text-xs md:text-sm text-neutral-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#28a745]" />
              <p className="text-xl md:text-3xl font-bold text-[#28a745]">98%</p>
            </div>
            <p className="text-xs md:text-sm text-neutral-600">Reorder Rate</p>
          </div>
        </div>

        {/* Quick Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickReviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-[#eae6e6]">
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 md:w-4 md:h-4 fill-[#ffc107] text-[#ffc107]" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-neutral-700 mb-3 line-clamp-2">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-xs md:text-sm">{review.name}</p>
                  <p className="text-[10px] md:text-xs text-neutral-500">{review.location}</p>
                </div>
                {review.verified && (
                  <span className="text-[10px] md:text-xs bg-[#28a745]/10 text-[#28a745] px-2 py-1 rounded">
                    ✓ Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
