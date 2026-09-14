import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tune X | مشاوره هوشمند سیستم صوتی خودرو",
  description: "بهترین سیستم صوتی خودرو را بر اساس خودرو، بودجه و سلیقه موسیقی خود پیدا کنید. مشاوره تخصصی و صادقانه.",
  keywords: "سیستم صوتی خودرو، آمپلی فایر، ساب ووفر، اسپیکر ماشین، مشاوره سیستم صوتی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
