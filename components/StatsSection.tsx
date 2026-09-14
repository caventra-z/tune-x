"use client";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "محصول تخصصی" },
  { value: 15, suffix: "+", label: "برند معتبر" },
  { value: 2000, suffix: "+", label: "مشاوره موفق" },
  { value: 98, suffix: "%", label: "رضایت مشتری" },
];

function toPersian(num: number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
}

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((s, i) => {
      const step = s.value / 50;
      let current = 0;
      return setInterval(() => {
        current += step;
        if (current >= s.value) {
          current = s.value;
          clearInterval(timers[i]);
        }
        setCounts((prev) => {
          const next = [...prev];
          next[i] = Math.floor(current);
          return next;
        });
      }, 30);
    });
    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="py-16 border-y border-white/5 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
              {toPersian(counts[i])}
              {s.suffix}
            </div>
            <div className="text-gray-400 text-sm md:text-base">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
