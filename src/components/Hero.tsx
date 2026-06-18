"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import ParticlesBackground from "./ParticlesBackground";

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0a0f1e" }}
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0891b2]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full text-[#f59e0b] text-sm font-semibold mb-8">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            style={{ letterSpacing: "tight" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.hero.title.split("\n").map((line: string, i: number) => (
              <span key={i}>
                {line.includes("الأذكى") ? (
                  <>
                    {line.split("الأذكى").map((part: string, j: number, arr: string[]) => (
                      <span key={j}>
                        {part}
                        {j < arr.length - 1 && (
                          <span className="bg-gradient-to-r from-[#22d3ee] to-[#0891b2] bg-clip-text text-transparent">
                            الأذكى
                          </span>
                        )}
                      </span>
                    ))}
                  </>
                ) : (
                  <span className="text-[#f1f5f9]">{line}</span>
                )}
                {i < t.hero.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-[#94a3b8] mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {Object.entries(t.hero.stats).map(([key, val]) => (
              <div key={key} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#22d3ee] to-[#0891b2] bg-clip-text text-transparent">
                  {val as string}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-bold rounded-2xl shadow-lg shadow-[#f59e0b]/30 hover:shadow-[#f59e0b]/50 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 {t.hero.cta}
            </motion.a>
            <Button
              variant="secondary"
              size="lg"
              href="https://wa.me/218000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          {/* Hero Dashboard Screenshot */}
          <motion.div
            className="mt-16 w-full max-w-4xl perspective-1000"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="preserve-3d"
              animate={{
                rotateY: [0, 3, 0, -3, 0],
                rotateX: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="glass rounded-3xl p-1.5 shadow-2xl shadow-[#0891b2]/20">
                <div className="bg-[#111827] rounded-2xl overflow-hidden">
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-[#94a3b8] text-xs">NZ-لمعلم v2.0 — نظام إدارة متكامل</span>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-5 md:p-7 space-y-4">
                    {/* Top stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "المبيعات اليوم", value: "12,450 د.ل", color: "from-[#0891b2] to-[#22d3ee]" },
                        { label: "الفواتير", value: "48", color: "from-[#10b981] to-[#34d399]" },
                        { label: "العملاء", value: "156", color: "from-[#8b5cf6] to-[#a78bfa]" },
                      ].map((stat, i) => (
                        <div key={i} className="glass rounded-xl p-3 md:p-4 text-center">
                          <div className={`text-lg md:text-xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-[#94a3b8] mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div className="glass rounded-xl p-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-[#94a3b8]">آخر 7 أيام</span>
                        <span className="text-xs text-[#10b981]">+12.5%</span>
                      </div>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t-lg bg-gradient-to-t from-[#0891b2] to-[#22d3ee] opacity-80"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Table */}
                    <div className="glass rounded-xl p-4">
                      <div className="grid grid-cols-3 gap-4 text-xs text-[#94a3b8] mb-2 pb-2 border-b border-white/5">
                        <span>المنتج</span>
                        <span>الكمية</span>
                        <span>الإجمالي</span>
                      </div>
                      {[
                        { name: "منتج أ", qty: "15", total: "450 د.ل" },
                        { name: "منتج ب", qty: "8", total: "320 د.ل" },
                        { name: "منتج ج", qty: "23", total: "690 د.ل" },
                      ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 gap-4 text-sm py-2.5 border-b border-white/5 last:border-0">
                          <span className="text-[#f1f5f9]">{row.name}</span>
                          <span className="text-[#94a3b8]">{row.qty}</span>
                          <span className="text-[#10b981] font-semibold">{row.total}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow behind */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#0891b2]/20 via-[#22d3ee]/10 to-[#8b5cf6]/20 blur-3xl -z-10 rounded-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 glass rounded-full border border-white/10 flex items-start justify-center p-2">
          <motion.div className="w-1.5 h-3 bg-gradient-to-b from-[#0891b2] to-[#22d3ee] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
