"use client";

import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";

interface TestimonialsProps {
  t: any;
}

export default function Testimonials({ t }: TestimonialsProps) {
  return (
    <Section subtitle={t.testimonials.subtitle} title={t.testimonials.title}>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {t.testimonials.items.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <GlassCard glow="cyan">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 line-clamp-2">
                {item.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0891b2] to-[#22d3ee] flex items-center justify-center text-white font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[#f1f5f9] font-semibold text-sm">{item.name}</div>
                  <div className="text-[#94a3b8] text-xs">{item.role}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
