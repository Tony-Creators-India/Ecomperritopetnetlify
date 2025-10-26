import { Tag } from "lucide-react";

export function UrgencyTimer() {
  return (
    <div className="bg-[#fff8f0] border-2 border-[#ff9800] rounded-lg p-4 mb-6">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Tag className="w-5 h-5 text-[#ff9800]" />
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
  );
}