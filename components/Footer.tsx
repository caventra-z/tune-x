import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
              <path d="M12 3v18M8 7v10M16 7v10M4 11v2M20 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-xl font-bold">
              <span className="text-white">Tune</span>
              <span className="gradient-text"> X</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            مرجع تخصصی مشاوره سیستم صوتی خودرو در ایران. بهترین انتخاب را بر اساس نیاز و بودجه‌ی خود داشته باشید.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-white">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/consult" className="hover:text-cyan-400">مشاور هوشمند</Link></li>
            <li><Link href="/products" className="hover:text-cyan-400">محصولات</Link></li>
            <li><Link href="/guides" className="hover:text-cyan-400">راهنماها</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-white">دسته‌بندی‌ها</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/products?cat=amplifier" className="hover:text-cyan-400">آمپلی‌فایر</Link></li>
            <li><Link href="/products?cat=subwoofer" className="hover:text-cyan-400">ساب‌ووفر</Link></li>
            <li><Link href="/products?cat=speaker" className="hover:text-cyan-400">اسپیکر</Link></li>
            <li><Link href="/products?cat=headunit" className="hover:text-cyan-400">هدیونیت</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-white">درباره ما</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-cyan-400">درباره Tune X</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400">تماس با ما</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-sm text-gray-500">
        © ۱۴۰۴ Tune X — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
