const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 pb-24 lg:pb-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-heading text-2xl font-bold mb-2">هوميز</p>
          <p className="text-primary-foreground/70 mb-4">
            كراسي استرخاء عالية الجودة للمنازل العصرية
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">سياسة الخصوصية</a>
            <span>|</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">الشروط والأحكام</a>
            <span>|</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">تواصل معنا</a>
          </div>
          <p className="text-primary-foreground/50 text-sm mt-6">
            © {new Date().getFullYear()} هوميز. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
