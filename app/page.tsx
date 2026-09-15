"use client";
import { useState } from "react";
import Link from "next/link";

const genres = [
  { value: "pop", label: "پاپ" },
  { value: "rap", label: "رپ" },
  { value: "classic", label: "کلاسیک" },
  { value: "electronic", label: "الکترونیک" },
  { value: "rock", label: "راک" },
];

function toPersian(n: number) {
  return n.toLocaleString("fa-IR");
}

export default function ConsultPage() {
  const [form, setForm] = useState({
    carModel: "",
    budget: 30000000,
    genre: "pop",
    purpose: "SQ",
    hasAmp: false,
    hasSub: false,
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      alert("خطا در ارسال درخواست");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">مشاور هوشمند</span> سیستم صوتی
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          اطلاعات خودرو و سلیقه‌ی موسیقی خود را وارد کنید تا بهترین ترکیب
          سیستم صوتی متناسب با بودجه‌ی شما پیشنهاد شود.
        </p>
      </div>

      <form onSubmit={submit} className="card space-y-6">
        <div>
          <label className="block mb-2 text-sm text-gray-300">مدل خودرو</label>
          <input
            type="text"
            placeholder="مثلاً پراید، پژو ۲۰۷، دنا..."
            value={form.carModel}
            onChange={(e) => setForm({ ...form, carModel: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">بودجه (تومان)</label>
          <input
            type="number"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: +e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm text-gray-300">سبک موسیقی</label>
            <select
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
            >
              {genres.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-300">هدف شما</label>
            <select
              value={form.purpose}
              onChange={(e) => setForm({ ...form, purpose: e.target.value })}
            >
              <option value="SQ">کیفیت صدا (SQ)</option>
              <option value="SPL">قدرت و بیس (SPL)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5" checked={form.hasAmp} onChange={(e) => setForm({ ...form, hasAmp: e.target.checked })} />
            <span className="text-gray-300">آمپلی‌فایر دارم</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5" checked={form.hasSub} onChange={(e) => setForm({ ...form, hasSub: e.target.checked })} />
            <span className="text-gray-300">ساب‌ووفر دارم</span>
          </label>
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full text-lg disabled:opacity-50">
          {loading ? "در حال محاسبه..." : "دریافت پیشنهاد"}
        </button>
      </form>

      {result && !result.empty && (
        <div className="mt-10 card border-cyan-500/30">
          <h2 className="text-2xl font-bold mb-6 text-center">
            پیشنهاد <span className="gradient-text">Tune X</span>
          </h2>
          <div className="space-y-4">
            {result.items?.map((p: any) => (
              <div key={p.id} className="flex justify-between items-center border-b border-white/5 pb-3">
                <div>
                  <div className="font-semibold text-white">{p.name}</div>
                  <div className="text-sm text-gray-500">{p.category} — {p.brand}</div>
                </div>
                <div className="text-cyan-400 font-bold">{toPersian(p.price)} تومان</div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
            <span className="text-gray-400">جمع کل:</span>
            <span className="text-2xl font-bold gradient-text">{toPersian(result.totalPrice)} تومان</span>
          </div>
          <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">💎 مشاوره‌ی حرفه‌ای</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              با پرداخت فقط <span className="text-cyan-400 font-bold">۲۹۹,۰۰۰ تومان</span>،
              لیست کامل قطعات با قیمت دقیق، چک‌لیست سازگاری، و پشتیبانی بعد از خرید دریافت کنید.
            </p>
            <Link href={`/consult/premium?budget=${form.budget}&genre=${form.genre}&purpose=${form.purpose}&carModel=${encodeURIComponent(form.carModel)}`} className="btn-primary">
              دریافت مشاوره حرفه‌ای
            </Link>
          </div>
        </div>
      )}

      {result?.empty && (
        <div className="mt-10 card text-center">
          <p className="text-gray-400">فعلاً محصولی در دیتابیس نیست. به‌زودی اضافه می‌شود.</p>
        </div>
      )}
    </div>
  );
}