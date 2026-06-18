"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import Section from "./ui/Section";

interface ScreenshotsProps {
  t: any;
}

export default function Screenshots({ t }: ScreenshotsProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const items = t.screenshots.items;

  const next = useCallback(() => {
    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % items.length : 0));
  }, [items.length]);

  const prev = useCallback(() => {
    setSelectedIdx((prev) =>
      prev !== null ? (prev - 1 + items.length) % items.length : 0
    );
  }, [items.length]);

  return (
    <Section id="screenshots" title={t.screenshots.title} subtitle={t.screenshots.subtitle}>
      {/* Marquee gallery */}
      <Marquee gradient={false} speed={35} pauseOnHover className="py-4">
        {[...items, ...items].map((item: any, i: number) => (
          <motion.button
            key={i}
            className="flex-shrink-0 mx-3 group"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedIdx(i % items.length)}
          >
            <div className="w-72 md:w-80 glass rounded-2xl p-2 overflow-hidden">
              <div className="aspect-video bg-[#1a2235] rounded-xl flex items-center justify-center">
                <div className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                  🖥️
                </div>
              </div>
              <div className="p-3 text-center">
                <span className="text-[#94a3b8] text-sm">{item.label}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </Marquee>

      {/* Static grid fallback */}
      <div className="grid md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
        {items.slice(0, 3).map((item: any, i: number) => (
          <motion.button
            key={i}
            className="group glass rounded-2xl p-2 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedIdx(i)}
          >
            <div className="aspect-video bg-[#1a2235] rounded-xl flex items-center justify-center">
              <div className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                🖥️
              </div>
            </div>
            <div className="p-3 text-center">
              <span className="text-[#94a3b8] text-sm">{item.label}</span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-[#1a2235] rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-8xl opacity-20">🖥️</div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-[#f1f5f9] text-lg font-semibold">
                  {items[selectedIdx].label}
                </span>
                <div className="flex gap-3">
                  <button onClick={prev} className="px-4 py-2 glass rounded-xl text-[#f1f5f9] hover:bg-white/10 transition-colors">
                    ←
                  </button>
                  <button onClick={next} className="px-4 py-2 glass rounded-xl text-[#f1f5f9] hover:bg-white/10 transition-colors">
                    →
                  </button>
                  <button onClick={() => setSelectedIdx(null)} className="px-4 py-2 glass rounded-xl text-[#f1f5f9] hover:bg-white/10 transition-colors">
                    ✕
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
