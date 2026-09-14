import Link from "next/link";

const features = [
  {
    title: "مشاور هوشمند",
    desc: "با وارد کردن اطلاعات خودرو و سلیقه موسیقی، بهترین محصولات را با امتیازدهی هوشمند دریافت کنید.",
    href: "/consult",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "راهنمای نصب",
    desc: "مقالات کامل و تخصصی نصب، سیم‌کشی و تنظیم سیستم صوتی خودرو به زبان فارسی.",
    href: "/guides",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "from-cyan-400 to-teal-500",
  },
  {
    title: "محصولات",
    desc: "مشاهده و فیلتر کردن محصولات معتبر برندهای پایونیر، JBL، کنوود و هرتز با قیمت واقعی.",
    href: "/products",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-cyan-300 to-cyan-600",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هر آنچه برای <span className="gradient-text">سیستم صوتی ایده‌آل</span> نیاز دارید
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            از انتخاب تا نصب و تنظیم، همراه شما هستیم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Link key={i} href={f.href} className="card group">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{f.desc}</p>
              <span className="text-cyan-400 text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                بیشتر بدانید
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
