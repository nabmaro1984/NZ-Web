"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";

interface NavbarProps {
  lang: "ar" | "en";
  onToggleLang: () => void;
  t: any;
}

const navItems = (t: any) => [
  { label: t.nav.home, href: "#hero" },
  { label: t.nav.features, href: "#features" },
  { label: t.nav.pricing, href: "#pricing" },
  { label: t.nav.testimonials, href: "#testimonials" },
  { label: t.nav.faq, href: "#faq" },
  { label: t.nav.contact, href: "#contact" },
];

export default function Navbar({ lang, onToggleLang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0a0f1e]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/10"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22d3ee] to-[#0891b2] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#0891b2]/30">
                ن
              </div>
              <span className="text-xl font-bold text-[#f1f5f9] hidden sm:block">
                NZ-<span className="text-[#0891b2]">لمعلم</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems(t).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-[#94a3b8] hover:text-[#f1f5f9] transition-colors rounded-lg hover:bg-white/5 font-cairo"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={onToggleLang}
                className="px-3 py-2 text-sm font-semibold text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5 rounded-lg transition-all border border-white/10"
              >
                {t.nav.lang}
              </button>

              <Button size="sm" variant="gradient" href="#contact">
                {t.nav.cta}
              </Button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col gap-1.5 p-2"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-[#f1f5f9] rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-[#f1f5f9] rounded-full"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-0.5 bg-[#f1f5f9] rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              dir={lang === "ar" ? "rtl" : "ltr"}
              initial={{ x: lang === "ar" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: lang === "ar" ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed top-0 bottom-0 z-50 w-80 bg-[#111827] border-l border-white/10 lg:hidden",
                lang === "ar" ? "left-auto right-0 border-l" : "left-0 right-auto border-r"
              )}
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-2">
                  {navItems(t).map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="px-4 py-3 text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5 rounded-xl transition-all text-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Button variant="gradient" className="w-full" href="#contact">
                    {t.nav.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
