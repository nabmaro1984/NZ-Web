"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./ui/Section";
import GlassCard from "./ui/GlassCard";

interface FAQProps {
  t: any;
}

export default function FAQ({ t }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <Section subtitle={t.faq.subtitle} title={t.faq.title} gradient>
      <div className="max-w-2xl mx-auto space-y-3">
        {t.faq.items.map((item: any, i: number) => (
          <GlassCard key={i} hover={false} glow="none" className="!p-0 overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full flex items-center justify-between p-4 md:p-5 text-right"
            >
              <span className="text-[#f1f5f9] font-semibold text-sm md:text-base">
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: openIdx === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#0891b2] flex-shrink-0 mr-3"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.span>
            </button>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-5 pb-4 md:pb-5 text-[#94a3b8] text-sm leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
