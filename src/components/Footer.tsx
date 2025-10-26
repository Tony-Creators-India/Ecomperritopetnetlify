import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgHeaderLogo from "figma:asset/5660ac9523561e471d7a19445c78c99ac3deb359.png";
import imgDecor1 from "figma:asset/556699f5791edcaa694f90f2f1de787d64852087.png";

export function Footer() {
  return (
    <footer className="bg-[#0b2127] text-white relative pt-20 pb-8">
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-[35px] overflow-hidden">
        <svg className="w-full h-full" fill="white" preserveAspectRatio="none" viewBox="0 0 1442 35">
          <path d="M659.647 34.4035C680.568 35.2337 700.587 31.3135 720.65 27.2778L722.1 26.9854C736.133 24.1566 750.196 21.3213 764.617 20.0581C789.089 17.9167 813.404 21.2261 837.651 24.5269C845.69 25.6219 853.73 26.716 861.762 27.6099C894.372 31.2413 928.295 30.7792 960.972 27.9997C965.033 27.6604 969.079 27.2705 973.133 26.8446C979.656 26.1552 986.18 25.3597 992.703 24.5641C1012.76 22.1184 1032.82 19.6717 1052.98 20.3036C1062.35 20.5996 1071.67 21.5526 1080.98 22.7582C1086.49 23.473 1092 24.2744 1097.51 25.0757C1114.2 27.5038 1130.89 29.9309 1147.73 29.9418C1165.87 29.9542 1183.74 27.1219 1201.56 24.2972C1225.04 20.5744 1248.44 16.8648 1272.27 19.6972C1286.15 21.3445 1299.93 23.6824 1313.7 26.0192C1335.77 29.7657 1357.83 33.5098 1380.3 34.4035C1401.21 35.2337 1421.23 31.3135 1441.3 27.2778V0H0V27.2778C0.483451 27.1804 0.966925 27.0829 1.45044 26.9854C15.4826 24.1566 29.5463 21.3213 43.9669 20.0581C68.4423 17.9167 92.7514 21.2261 116.998 24.5269C125.041 25.6219 133.077 26.716 141.111 27.6099C173.72 31.2413 207.648 30.7792 240.323 27.9997C244.38 27.6604 248.43 27.2705 252.48 26.8446C259.005 26.1552 265.529 25.3597 272.053 24.5641C292.108 22.1184 312.172 19.6717 332.335 20.3036C341.704 20.5996 351.021 21.5526 360.325 22.7582C365.841 23.473 371.351 24.2744 376.859 25.0757C393.552 27.5038 410.238 29.9309 427.079 29.9418C445.217 29.9542 463.084 27.1219 480.904 24.2972C504.389 20.5744 527.791 16.8648 551.622 19.6972C565.502 21.3445 579.277 23.6824 593.048 26.0192C615.124 29.7657 637.185 33.5098 659.647 34.4035Z" />
        </svg>
      </div>

      <div className="max-w-[1290px] mx-auto px-4 md:px-[75px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-12">
          {/* Logo */}
          <div>
            <ImageWithFallback src={imgHeaderLogo} alt="Perrito Pet Products" className="h-[100px] md:h-[120px] w-auto" />
          </div>

          {/* Our Policies */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">Our Policies</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://perritopetproducts.com/privacy-policy/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://perritopetproducts.com/customer-care/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="https://perritopetproducts.com/terms-and-conditions/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="https://perritopetproducts.com/shipping-and-return/" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  Shipping and Return
                </a>
              </li>
            </ul>
          </div>

          {/* Decorative Image - aligned in same row */}
          <div className="flex justify-center md:justify-end">
            <ImageWithFallback src={imgDecor1} alt="Decorative element" className="h-[150px] md:h-[200px] w-auto" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 border-t border-white/20 text-sm text-[#b1b1b1]">
          Copyright © 2024 <a href="https://perritopetproducts.com" className="hover:underline text-white" target="_blank" rel="noopener noreferrer">Perritopetproducts</a>. All rights reserved
        </div>
      </div>
    </footer>
  );
}
