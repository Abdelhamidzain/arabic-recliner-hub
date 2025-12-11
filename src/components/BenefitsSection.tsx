import { Armchair, Sparkles, Paintbrush, Heart } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "راحة قصوى بعد يوم طويل",
    description: "وسادات سميكة وظهر مائل يمنحانك وضعية استرخاء مثالية لمشاهدة التلفاز أو قراءة كتابك المفضل."
  },
  {
    icon: Armchair,
    title: "حركة هزازة ودوار سلس",
    description: "خاصية الهز والدوران تساعد على تهدئة الجسم وتخفيف التوتر مع آلية حركة ناعمة."
  },
  {
    icon: Paintbrush,
    title: "قماش جلدي سهل التنظيف",
    description: "تصميم عملي للعائلات والأطفال، يمكن تنظيفه بسرعة بمسحة بسيطة دون عناء."
  },
  {
    icon: Sparkles,
    title: "تصميم أنيق يناسب ديكور منزلك",
    description: "اللون البني الدافئ وخطوط التصميم الناعمة تجعل الكرسي ينسجم بسلاسة مع مختلف أنماط الأثاث."
  }
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-card" id="benefits">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            لماذا تختار كرسي الاسترخاء هوميز؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            صُمم هذا الكرسي ليمنحك تجربة استرخاء فاخرة في قلب منزلك
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
