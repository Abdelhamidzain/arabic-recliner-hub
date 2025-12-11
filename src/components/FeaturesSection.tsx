import { Ruler, Palette, Tag, Home, CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const specs = [
    { icon: Tag, text: "العلامة التجارية: Homez (هوميز)" },
    { icon: CheckCircle, text: "النوع: كرسي استرخاء هزاز ودوار" },
    { icon: Palette, text: "الخامة: قماش جلدي مريح وسهل العناية" },
    { icon: Palette, text: "اللون: بني" },
    { icon: Home, text: "الاستخدام: غرفة المعيشة، غرفة التلفاز، زاوية القراءة" },
  ];

  const dimensions = [
    { label: "الطول", value: "84 سم" },
    { label: "العرض", value: "92 سم" },
    { label: "الارتفاع", value: "103 سم" },
  ];

  return (
    <section className="section-padding bg-background" id="features">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            المواصفات والأبعاد
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تعرّف على التفاصيل الفنية للكرسي
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Specifications */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Tag className="w-5 h-5 text-primary" />
              </span>
              المواصفات الرئيسية
            </h3>
            <ul className="space-y-4">
              {specs.map((spec, index) => (
                <li key={index} className="flex items-center gap-4 text-foreground">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <spec.icon className="w-4 h-4 text-accent" />
                  </span>
                  <span className="text-base">{spec.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dimensions */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Ruler className="w-5 h-5 text-primary" />
              </span>
              الأبعاد التقريبية
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {dimensions.map((dim, index) => (
                <div key={index} className="bg-background rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-accent mb-1">{dim.value.split(" ")[0]}</p>
                  <p className="text-sm text-muted-foreground">{dim.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 rounded-xl p-4">
              <p className="text-foreground text-center">
                <span className="font-semibold">تصميم مثالي</span> يناسب المساحات الصغيرة والمتوسطة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
