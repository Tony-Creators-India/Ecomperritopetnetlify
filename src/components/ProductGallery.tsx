import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgMain from "figma:asset/109660e01044cbd7f4d372aeb1424cbeaff6ab56.png";
import img2 from "figma:asset/19d3eca8ad2f02e391718bbb2c46b99f063c66bf.png";
import img4 from "figma:asset/b768d6e1decfeed0abc3321ed4a5ca4ec4dcff8b.png";
import img5 from "figma:asset/f8706ddffd1faf672139d35574a8fcf79991151d.png";

// Removed 1st (img1) and 3rd (img3) images as requested
const images = [imgMain, img2, img4, img5];

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image - Navigation arrows removed */}
      <div className="relative bg-[#f1ece8] rounded-[20px] overflow-hidden aspect-[481/602]">
        <ImageWithFallback
          src={images[selectedImage]}
          alt="Chicken Triple Delight - Premium Dog Food"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-[20px] overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? "border-[#0e0c0c] opacity-100"
                : "border-[#eae6e6] opacity-60 hover:opacity-100"
            }`}
          >
            <ImageWithFallback
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
