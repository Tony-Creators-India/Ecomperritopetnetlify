import { useState, useEffect } from "react";
import { Truck, MapPin } from "lucide-react";

export function DeliveryUrgency() {
  const [deliveryTime, setDeliveryTime] = useState(2 * 60 * 60 + 45 * 60 + 12);

  useEffect(() => {
    const timer = setInterval(() => {
      setDeliveryTime((prev) => {
        if (prev <= 0) return 2 * 60 * 60 + 45 * 60;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(deliveryTime / 3600);
  const minutes = Math.floor((deliveryTime % 3600) / 60);
  const seconds = deliveryTime % 60;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const deliveryDay = deliveryDate.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="bg-gradient-to-r from-[#0b2127] to-[#1a3a47] text-white rounded-xl p-5 mb-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 flex-shrink-0">
          <Truck className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Express Delivery Available
          </h3>
          <p className="text-sm mb-3 opacity-90">
            Order within <span className="font-mono font-bold text-[#ffc107]">
              {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span> to get it by <strong className="text-[#ffc107]">{deliveryDay}</strong>
          </p>
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <span className="bg-[#28a745] px-2 py-1 rounded">✓ FREE Shipping</span>
            <span className="bg-white/10 px-2 py-1 rounded">📦 Secure Packaging</span>
            <span className="bg-white/10 px-2 py-1 rounded">❄️ Fresh Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
