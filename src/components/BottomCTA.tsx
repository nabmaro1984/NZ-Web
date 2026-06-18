"use client";

import { motion } from "framer-motion";

interface BottomCTAProps {
  t: any;
}

export default function BottomCTA({ t }: BottomCTAProps) {
  return (
    <div className="sticky bottom-0 z-40 border-t border-white/[0.06]" style={{ background: "rgba(10,15,30,0.92)" }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4">
          <span className="text-[#94a3b8] text-sm hidden sm:block">
            {t.hero.stats.trial} · {t.hero.stats.clients}
          </span>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-bold rounded-xl shadow-lg shadow-[#f59e0b]/30 hover:shadow-[#f59e0b]/50 transition-all duration-300 text-base"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            🚀 {t.hero.cta}
          </motion.a>
        </div>
      </div>
    </div>
  );
}
