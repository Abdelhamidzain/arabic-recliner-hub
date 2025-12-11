import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هي أبعاد كرسي الاسترخاء هوميز؟",
    answer: "أبعاد الكرسي تقريباً: الطول 84 سم، العرض 92 سم، الارتفاع 103 سم، وهي أبعاد مناسبة لمعظم غرف المعيشة والمساحات الصغيرة والمتوسطة."
  },
  {
    question: "ما نوع القماش المستخدم في الكرسي؟",
    answer: "الكرسي مصنوع من قماش جلدي سهل التنظيف، يجمع بين شكل الجلد الأنيق وملمس مريح للاستخدام اليومي."
  },
  {
    question: "هل الكرسي مزود بخاصية الدوران والهز؟",
    answer: "نعم، الكرسي مزود بخاصيتي الدوران 360 درجة تقريباً والهز بلطف، مما يمنحك تجربة استرخاء مريحة أثناء قراءة كتابك المفضل أو مشاهدة التلفاز."
  },
  {
    question: "هل يناسب الكرسي غرف المعيشة الصغيرة؟",
    answer: "نعم، الأبعاد مصممة لتناسب أغلب غرف المعيشة وغرف التلفاز، مع شكل جانبي أنيق لا يستهلك مساحة كبيرة."
  },
  {
    question: "كيف يمكن العناية بالكرسي وتنظيفه؟",
    answer: "يمكن تنظيف قماش الكرسي الجلدي بمسحه بقطعة قماش ناعمة مبللة قليلاً بالماء والصابون الخفيف، مع تجنب المواد الكيميائية القوية أو الفرش الخشنة."
  },
  {
    question: "هل الكرسي مريح للاستخدام لفترات طويلة؟",
    answer: "نعم، تصميم الكرسي يعتمد على وسادات سميكة ودعم جيد للظهر والرقبة، مما يجعله مريحاً للجلوس لفترات طويلة أثناء مشاهدة التلفاز أو الاسترخاء."
  }
];

const FaqSection = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            كل ما تحتاج معرفته عن كرسي الاسترخاء هوميز
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border-0 shadow-soft overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-right hover:no-underline hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-muted/30">
                  <span className="text-lg font-semibold text-foreground text-right">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
