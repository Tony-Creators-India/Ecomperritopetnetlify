import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ProductPage } from "./components/ProductPage";
import { ThankYouPage } from "./components/ThankYouPage";
import { MetaPixel } from "./components/MetaPixel";
import { useEffect } from "react";

// Component to handle hash-based navigation (for backward compatibility)
function HashRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if URL has hash and redirect to proper route
    if (window.location.hash === '#thank-you') {
      navigate('/thank-you', { replace: true });
    } else if (window.location.hash && window.location.hash.includes('thank-you')) {
      navigate('/thank-you', { replace: true });
    }
  }, [navigate, location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Meta Pixel Tracking - Active and Tracking */}
      <MetaPixel pixelId="1615270122762784" />
      
      {/* Handle hash redirects */}
      <HashRedirect />
      
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        {/* Fallback to home for any other route */}
        <Route path="*" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
