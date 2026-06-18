"use client";

import { useState, useCallback } from "react";
import { ar, en } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = lang === "ar" ? ar : en;

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  return (
    <body className={lang === "en" ? "english" : ""}>
      <Navbar lang={lang} onToggleLang={toggleLang} t={t} />
      <main>{children}</main>
      <Footer t={t} lang={lang} />
    </body>
  );
}
