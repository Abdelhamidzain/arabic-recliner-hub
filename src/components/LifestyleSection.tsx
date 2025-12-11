import { Coffee, Tv, BookOpen } from "lucide-react";

const LifestyleSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              زاوية استرخاء خاصة بك في قلب المنزل
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              تخيل أن تنهي يومك الطويل وتجلس على كرسي استرخاء هوميز، تهتز بلطف، تدور نحو التلفاز، وتضع كوب القهوة بجانبك. تصميم الكرسي يساعدك على إيجاد لحظات هدوء وسط زحمة اليوم، مع مظهر أنيق يضيف لمسة فخامة إلى ديكور الغرفة.
            </p>
            
            {/* Lifestyle icons */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Tv className="w-6 h-6" />
                </div>
                <span className="font-medium">مشاهدة التلفاز</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="font-medium">قراءة الكتب</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6" />
                </div>
                <span className="font-medium">استراحة القهوة</span>
              </div>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="bg-primary-foreground/10 rounded-3xl p-8 lg:p-12">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl sm:text-8xl font-bold text-primary-foreground/20 mb-4">∞</p>
                  <p className="text-xl font-bold">لحظات لا تنتهي من الراحة</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-xl px-6 py-3 shadow-lg">
              <p className="font-bold">849 ر.س فقط</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
