import { Button } from "@/components/ui/button";
import { Check, RotateCcw, Sparkles, Sofa } from "lucide-react";
import heroChair from "@/assets/hero-chair.jpg";

const HeroSection = () => {
  const features = [
    "خاصية الدوران والهز لحركة مريحة وهادئة",
    "قماش جلدي أنيق وسهل التنظيف",
    "أبعاد مثالية تناسب أغلب المساحات",
    "دعم مريح للظهر والرقبة",
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="gradient-hero min-h-screen relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">عرض خاص - توصيل مجاني</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              كرسي الاسترخاء الذي يحوّل جلستك اليومية إلى لحظات فخمة من الراحة
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              هوميز، كرسي إسترخاء هزاز ودوار باللون البني، قماش جلدي مريح مع تصميم أنيق يناسب أي غرفة معيشة.
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl sm:text-5xl font-bold text-primary">849</span>
              <span className="text-xl text-muted-foreground">ر.س</span>
              <span className="text-sm text-muted-foreground line-through mr-2">999 ر.س</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => scrollToSection("final-cta")}
                className="w-full sm:w-auto"
              >
                <Sofa className="w-5 h-5" />
                اطلب الكرسي الآن
              </Button>
              <Button 
                variant="whatsapp" 
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  تحدث معنا على واتساب
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img
                src={heroChair}
                alt="كرسي استرخاء هوميز هزاز ودوار باللون البني"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-elevated animate-float"
              />
              {/* Features badges */}
              <div className="absolute -bottom-4 left-4 bg-card rounded-xl shadow-soft p-4 flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">دوران 360°</p>
                  <p className="text-xs text-muted-foreground">حركة سلسة</p>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
