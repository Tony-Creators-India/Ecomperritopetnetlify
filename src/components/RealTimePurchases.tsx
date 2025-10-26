import { useState, useEffect } from "react";
import { ShoppingCart, X } from "lucide-react";

interface Purchase {
  id: number;
  name: string;
  location: string;
  timeAgo: string;
  packSize: string;
}

const samplePurchases: Purchase[] = [
  { id: 1, name: "Priya M.", location: "Mumbai", timeAgo: "2 minutes ago", packSize: "600gm" },
  { id: 2, name: "Amit K.", location: "Delhi", timeAgo: "5 minutes ago", packSize: "300gm" },
  { id: 3, name: "Sneha P.", location: "Bangalore", timeAgo: "7 minutes ago", packSize: "600gm" },
  { id: 4, name: "Rahul S.", location: "Pune", timeAgo: "10 minutes ago", packSize: "600gm" },
  { id: 5, name: "Meera J.", location: "Hyderabad", timeAgo: "12 minutes ago", packSize: "300gm" }
];

export function RealTimePurchases() {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay initial load to not block page render
    const loadTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(loadTimeout);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const showNotification = () => {
      const randomPurchase = samplePurchases[Math.floor(Math.random() * samplePurchases.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(showNotification, 3000);
    const interval = setInterval(showNotification, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isLoaded]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !currentPurchase) return null;

  return (
    <div
      className="fixed bottom-6 left-4 md:left-6 z-50 max-w-xs transition-all duration-300"
      style={{
        transform: isVisible ? 'translateX(0)' : 'translateX(-120%)',
        opacity: isVisible ? 1 : 0
      }}
    >
      <div className="bg-white rounded-lg shadow-2xl border-2 border-[#28a745] p-4 pr-10 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#28a745]/10 rounded-full flex items-center justify-center flex-shrink-0">
            <ShoppingCart className="w-5 h-5 text-[#28a745]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm mb-1">Recent Purchase</p>
            <p className="text-xs text-neutral-700 mb-1">
              <span className="font-bold">{currentPurchase.name}</span> from {currentPurchase.location}
            </p>
            <p className="text-xs text-neutral-500">
              Purchased {currentPurchase.packSize} pack • {currentPurchase.timeAgo}
            </p>
          </div>
        </div>
        
        <div className="absolute -top-1 -left-1 w-3 h-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28a745] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#28a745]"></span>
        </div>
      </div>
    </div>
  );
}
