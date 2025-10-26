import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function ThankYouPage() {
  const navigate = useNavigate();
  
  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-[500px] text-center">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        
        {/* Main Message */}
        <h1 className="text-4xl mb-4">
          Thank You!
        </h1>
        
        <p className="text-lg text-neutral-600 mb-8">
          Your order has been placed successfully. We'll send you a confirmation shortly.
        </p>

        {/* Back Button */}
        <Button 
          onClick={handleBackToHome}
          size="lg"
          className="bg-[#28a745] hover:bg-[#20c997] px-8"
        >
          Back to Home
        </Button>

        {/* Footer Message */}
        <p className="text-sm text-neutral-500 mt-12">
          Chicken Triple Delight
        </p>
      </div>
    </div>
  );
}
