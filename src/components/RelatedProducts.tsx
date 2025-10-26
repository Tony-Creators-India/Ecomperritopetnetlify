import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgProduct1 from "figma:asset/dfadd94273d4bb19d1a37372e9b036de78ba9d98.png";
import imgProduct2 from "figma:asset/47dfc2dddb4015b40071c80e64270c2c079e43fa.png";
import imgProduct3 from "figma:asset/b23fd43301a88185958b72949bf80114219702ac.png";
import imgProduct4 from "figma:asset/4b625b5e4782701ba4d35e103b86c29ac37b604b.png";

const products = [
  {
    id: 1,
    name: "Vanilla Milk Bar – Small Sticks – 150gm",
    image: imgProduct1,
    price: 200,
    originalPrice: 275,
    discount: 27,
  },
  {
    id: 2,
    name: "Fruit Magic Treats Sticks-Shape 125gm",
    image: imgProduct2,
    price: 200,
    originalPrice: 215,
    discount: 7,
  },
  {
    id: 3,
    name: "Wag in Joy Dehydrated Chicken Feet – All-Natural Dog Treat",
    image: imgProduct3,
    price: 284,
    originalPrice: 299,
    discount: 5,
  },
  {
    id: 4,
    name: "Lick in Joy, Chicken with Lobster 35 gm",
    image: imgProduct4,
    price: 160,
    originalPrice: 199,
    discount: 20,
  },
];

export function RelatedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1290px] mx-auto px-4 md:px-[75px]">
        <h2 className="text-2xl font-bold mb-8">Related products</h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`w-6 h-2 rounded-full transition-colors ${
              currentSlide === 0 ? "bg-[#d32300]" : "bg-neutral-900"
            }`}
            aria-label="Go to slide 1"
          />
          <button
            onClick={() => setCurrentSlide(1)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === 1 ? "bg-[#d32300]" : "bg-neutral-900"
            }`}
            aria-label="Go to slide 2"
          />
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="border border-[#eae6e6] rounded-[20px] overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Image Container */}
      <div className="relative bg-[#f1ece8] aspect-square p-4">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply"
        />
        <div className="absolute top-4 left-4 bg-[#d32300] text-white px-2 py-1 rounded-lg text-sm">
          -{product.discount}%
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 bg-white">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 fill-[#dfdfdf]" viewBox="0 0 15 13">
                <path d="M7.5 0L9.18386 4.93506L14.6329 4.93506L10.2245 7.80519L11.9084 12.7403L7.5 9.87012L3.09161 12.7403L4.77547 7.80519L0.367076 4.93506L5.81614 4.93506L7.5 0Z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-[#999999]">(0 Reviews)</span>
        </div>

        {/* Title */}
        <h3 className="font-bold mb-3 line-clamp-2 min-h-[44px]">{product.name}</h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl text-[#d32300] font-bold">₹{product.price}.00</span>
          <span className="text-sm text-[#999999] line-through">₹{product.originalPrice}.00</span>
        </div>

        {/* Quantity & Add to Cart - Hidden by default, shown on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
          <div className="flex items-center border border-[#eae6e6] rounded-lg overflow-hidden">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 h-10 hover:bg-gray-50"
            >
              -
            </button>
            <div className="w-12 h-10 flex items-center justify-center border-x border-[#eae6e6] font-bold text-sm">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 h-10 hover:bg-gray-50"
            >
              +
            </button>
          </div>
          <button className="flex-1 bg-[#1f2021] text-white rounded-[15px] h-10 hover:bg-[#1f2021]/90 transition-colors">
            <svg className="w-5 h-5 mx-auto" fill="white" viewBox="0 0 18 18">
              <path d="M17.029 14.9431C16.8252 15.1948 16.5704 15.3926 16.2647 15.5365C15.959 15.6803 15.6384 15.7522 15.3027 15.7522H3.18282L3.14685 16.022C3.08691 16.5854 2.84416 17.0559 2.41858 17.4336C1.99301 17.8112 1.49251 18 0.917083 18H0.755245C0.539461 18 0.35964 17.9251 0.215784 17.7752C0.0719281 17.6254 0 17.4486 0 17.2448C0 17.041 0.0749251 16.8671 0.224775 16.7233C0.374625 16.5794 0.551449 16.5075 0.755245 16.5075H0.917083C1.10889 16.5075 1.27672 16.4416 1.42058 16.3097C1.56444 16.1778 1.64236 16.022 1.65435 15.8422L2.6973 7.06693C2.74525 6.61139 2.87712 6.17982 3.09291 5.77223C3.30869 5.36464 3.58741 5.00799 3.92907 4.7023C4.27073 4.3966 4.65734 4.16284 5.08891 4.001C5.52048 3.83916 5.96404 3.75824 6.41958 3.75824H14.2597C14.4635 3.75824 14.6374 3.83017 14.7812 3.97403C14.9251 4.11788 14.997 4.29471 14.997 4.5045C14.997 4.71429 14.9251 4.89111 14.7812 5.03496C14.6374 5.17882 14.4635 5.25075 14.2597 5.25075H6.41958C5.94006 5.25075 5.50849 5.38861 5.12487 5.66434C4.74126 5.94006 4.46553 6.2997 4.2977 6.74326H13.2348C13.6783 6.74326 14.1069 6.81818 14.5205 6.96803C14.9341 7.11788 15.3087 7.33367 15.6444 7.61538C15.98 7.8971 16.2587 8.22977 16.4805 8.61339C16.7023 8.997 16.8551 9.4046 16.9391 9.83616L17.5325 13.0909C17.5804 13.4266 17.5624 13.7562 17.4785 14.0799C17.3946 14.4036 17.2448 14.6913 17.029 14.9431Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
