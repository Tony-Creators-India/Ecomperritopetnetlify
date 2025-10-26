import { Star, Award, TrendingUp, Users } from "lucide-react";

export function MediaMentions() {
  return (
    <div className="hidden bg-white py-8 md:py-12 border-y border-[#eae6e6]">
      <div className="max-w-[1290px] mx-auto px-4 md:px-[75px]">
        <div className="text-center mb-8">
          <h3 className="text-lg md:text-xl font-bold text-neutral-600 mb-6">
            Trusted by Pet Parents Across India
          </h3>
          
          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-14 h-14 bg-[#28a745]/10 rounded-full flex items-center justify-center">
                  <Star className="w-7 h-7 text-[#28a745]" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#d32300] mb-1">5.0</div>
              <p className="text-xs md:text-sm text-neutral-600">Average Rating</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-14 h-14 bg-[#28a745]/10 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#28a745]" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#d32300] mb-1">3000+</div>
              <p className="text-xs md:text-sm text-neutral-600">Happy Customers</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-14 h-14 bg-[#28a745]/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-[#28a745]" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#d32300] mb-1">98%</div>
              <p className="text-xs md:text-sm text-neutral-600">Reorder Rate</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <div className="w-14 h-14 bg-[#28a745]/10 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#28a745]" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#d32300] mb-1">100%</div>
              <p className="text-xs md:text-sm text-neutral-600">Vet Approved</p>
            </div>
          </div>
        </div>

        {/* Testimonial Highlights */}
        <div className="mt-8 bg-[#f8f8f8] rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm md:text-base italic text-neutral-700 mb-2">
                "Best investment for my dog's health!"
              </p>
              <p className="text-xs text-neutral-500">- Pet Parent Review</p>
            </div>
            <div>
              <p className="text-sm md:text-base italic text-neutral-700 mb-2">
                "Visible difference in just 2 weeks"
              </p>
              <p className="text-xs text-neutral-500">- Verified Buyer</p>
            </div>
            <div>
              <p className="text-sm md:text-base italic text-neutral-700 mb-2">
                "My dog's coat is so shiny now!"
              </p>
              <p className="text-xs text-neutral-500">- 5-Star Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}