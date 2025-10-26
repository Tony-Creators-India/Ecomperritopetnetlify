import { Shield, Truck, RotateCcw, Award, Heart, Leaf } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "100% Money-Back Guarantee",
      description: "Not happy? Full refund, no questions asked"
    },
    {
      icon: Truck,
      title: "FREE Shipping",
      description: "On all orders - Launch offer"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns"
    },
    {
      icon: Award,
      title: "Vet Approved",
      description: "Recommended by veterinarians"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Premium ingredients only"
    },
    {
      icon: Leaf,
      title: "No Preservatives",
      description: "100% natural & fresh"
    }
  ];

  return (
    <div className="bg-white py-8 md:py-12 border-y border-[#eae6e6] hidden md:block">
      <div className="max-w-[1290px] mx-auto px-4 md:px-[75px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <div key={index} className="text-center p-4 rounded-lg hover:bg-[#f8f8f8] transition-colors">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#28a745]/10 rounded-full flex items-center justify-center">
                  <badge.icon className="w-6 h-6 md:w-7 md:h-7 text-[#28a745]" />
                </div>
              </div>
              <h3 className="font-bold text-xs md:text-sm mb-1">{badge.title}</h3>
              <p className="text-[10px] md:text-xs text-neutral-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
