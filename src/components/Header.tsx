import { Phone, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgHeaderLogo from "figma:asset/5660ac9523561e471d7a19445c78c99ac3deb359.png";

export function Header() {
  return (
    <>
      {/* Sticky Top Bar - Always visible at top */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-[#dddddd] z-50">
        <div className="max-w-[1290px] mx-auto px-4 md:px-[75px]">
          <div className="flex items-center justify-center py-3 gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-xs sm:text-sm">9892133726</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-xs sm:text-sm">FREE Shipping - eStore Launch Offer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section - Scrolls naturally with page */}
      <div className="bg-white border-b border-[#323232] pt-[52px]">
        <div className="max-w-[1290px] mx-auto px-4 md:px-[75px]">
          <div className="flex items-center justify-center py-4 sm:py-6">
            <ImageWithFallback 
              src={imgHeaderLogo} 
              alt="Perrito Pet Products - Premium Dog Food" 
              className="h-[80px] sm:h-[100px] md:h-[150px] w-auto" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
