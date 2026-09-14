import Link from "next/link";
import StatsSection from "@/components/StatsSection";
import FeatureCards from "@/components/FeatureCards";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0F1A1F] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.15),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 text-center py-20">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">
              مشاور هوشمند سیستم صوتی خودرو
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            سیستم صوتی خودروی خود را
            <br />
            <span className="gradient-text">هوشمند انتخاب کنید</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            با وارد کردن مدل خودرو، بودجه و سلیقه موسیقی خود، بهترین سیستم
            صوتی متناسب با نیاز شما را پیدا کنید. راهنمای نصب کامل و فروش
            محصولات معتبر، همه در یک سایت.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consult"
              className="btn-primary text-lg inline-flex items-center justify-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              مشاور هوشمند
            </Link>
            <Link href="/guides" className="btn-outline text-lg">
              راهنمای نصب
            </Link>
          </div>
        </div>
      </section>

      <StatsSection />
      <FeatureCards />
      <CTASection />
    </>
  );
}
