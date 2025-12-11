import { Star, Shield, ThumbsUp, Award } from "lucide-react";

const proofs = [
  {
    icon: Award,
    title: "جودة خامات",
    description: "مناسبة للاستخدام اليومي"
  },
  {
    icon: ThumbsUp,
    title: "تصميم مريح",
    description: "مدروس لراحة الظهر والرقبة"
  },
  {
    icon: Star,
    title: "تجارب إيجابية",
    description: "من مستخدمين على متاجر مختلفة"
  },
  {
    icon: Shield,
    title: "سعر منافس",
    description: "مقارنة بالقيمة والراحة"
  }
];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-card" id="social-proof">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            لماذا يختار العملاء كراسي الاسترخاء من هوميز؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            جودة موثوقة وتجربة مميزة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofs.map((proof, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 text-center shadow-soft hover:shadow-elevated transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <proof.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {proof.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {proof.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-xl font-bold text-foreground mb-2">
            منتج موثوق من علامة هوميز
          </p>
          <p className="text-muted-foreground">
            آلاف العملاء الراضين في جميع أنحاء المملكة
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
