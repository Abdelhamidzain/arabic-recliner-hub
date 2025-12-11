import { Truck, CreditCard, RefreshCcw } from "lucide-react";

const infoBlocks = [
  {
    icon: Truck,
    title: "خيارات التوصيل",
    description: "توصيل سريع خلال 3-5 أيام عمل داخل المملكة العربية السعودية، مع إمكانية تتبع الشحنة. التوصيل مجاني للطلبات فوق 500 ر.س."
  },
  {
    icon: CreditCard,
    title: "خيارات الدفع",
    description: "الدفع عند الاستلام متاح في معظم المناطق. كما يمكنك الدفع بالبطاقات الائتمانية أو عبر Apple Pay. خيارات التقسيط متوفرة عبر تمارا وتابي."
  },
  {
    icon: RefreshCcw,
    title: "سياسة الاستبدال والإرجاع",
    description: "يمكنك استبدال أو إرجاع المنتج خلال 7 أيام من تاريخ الاستلام في حال وجود عيب مصنعي أو عدم تطابق المنتج مع المواصفات المذكورة."
  }
];

const ShippingPaymentSection = () => {
  return (
    <section className="section-padding bg-muted/50" id="shipping">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            التوصيل والدفع
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نوفر لك تجربة شراء سهلة وآمنة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {infoBlocks.map((block, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <block.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {block.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingPaymentSection;
