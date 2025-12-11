import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const StickyMobileCta = () => {
  const scrollToSection = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border p-4 z-50 lg:hidden shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground truncate text-sm">كرسي استرخاء هوميز</p>
          <p className="text-lg font-bold text-accent">849 ر.س</p>
        </div>
        <Button 
          variant="cta" 
          size="lg" 
          onClick={scrollToSection}
          className="flex-shrink-0"
        >
          <ShoppingBag className="w-5 h-5" />
          اطلب الآن
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCta;
