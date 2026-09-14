import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent border border-cyan-500/30 p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_50%)]" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              همین حالا <span className="gradient-text">سیستم صوتی ایده‌آل</span> خودت رو پیدا کن
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              با پاسخ دادن به چند سوال ساده، بهترین پیشنهاد را بر اساس خودرو، بودجه و سلیقه موسیقی خود دریافت کنید.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consult" className="btn-primary text-lg">
                شروع مشاوره رایگان
              </Link>
              <Link href="/products" className="btn-outline text-lg">
                مشاهده محصولات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
