import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <a href="#" className="hover:underline">Home Page</a>
      <ChevronRight className="w-4 h-4" />
      <a href="#" className="hover:underline">Ready fresh meals</a>
      <ChevronRight className="w-4 h-4" />
      <span>CHICKEN TRIPLE DELIGHT</span>
    </nav>
  );
}
