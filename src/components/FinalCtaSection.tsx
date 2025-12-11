import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden" id="final-cta">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            حوّل ركن الجلوس العادي إلى مساحة استرخاء فاخرة
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            اطلب كرسي الاسترخاء هوميز الآن واستمتع براحة حقيقية في كل لحظة جلوس
          </p>

          {/* Price reminder */}
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 rounded-2xl px-8 py-4 mb-8">
            <div className="text-right">
              <p className="text-sm text-primary-foreground/70">السعر الحالي</p>
              <p className="text-4xl font-bold">849 <span className="text-lg">ر.س</span></p>
            </div>
            <div className="w-px h-12 bg-primary-foreground/20" />
            <div className="text-right">
              <p className="text-sm text-primary-foreground/70">بدلاً من</p>
              <p className="text-2xl line-through text-primary-foreground/50">999 ر.س</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="cta" 
              size="xl"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90"
            >
              <ArrowLeft className="w-6 h-6" />
              اطلب الآن
            </Button>
            <Button 
              variant="heroSecondary" 
              size="xl"
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground/50"
            >
              <Phone className="w-5 h-5" />
              احجز اتصالاً مع فريق المبيعات
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              توصيل سريع
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              دفع عند الاستلام
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              ضمان الجودة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
