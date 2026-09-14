"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "خانه" },
    { href: "/consult", label: "مشاور هوشمند" },
    { href: "/guides", label: "راهنماها" },
    { href: "/products", label: "محصولات" },
    { href: "/contact", label: "تماس" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-black/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <path d="M12 3v18M8 7v10M16 7v10M4 11v2M20 11v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-2xl font-bold">
            <span className="text-white">Tune</span>
            <span className="gradient-text"> X</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-gray-300 hover:text-cyan-400 transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/consult" className="hidden md:inline-block btn-primary text-sm">
          شروع مشاوره
        </Link>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/5 px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block text-gray-300 hover:text-cyan-400 py-2" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/consult" className="block btn-primary text-center" onClick={() => setOpen(false)}>
            شروع مشاوره
          </Link>
        </div>
      )}
    </header>
  );
}
