"use client";

import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import Section from "./ui/Section";

interface FeaturesProps {
  t: any;
}

const accentGradients: Record<string, string> = {
  teal: "from-[#0891b2] to-[#22d3ee]",
  blue: "from-[#3b82f6] to-[#60a5fa]",
  purple: "from-[#8b5cf6] to-[#a78bfa]",
  amber: "from-[#f59e0b] to-[#fbbf24]",
  green: "from-[#10b981] to-[#34d399]",
  red: "from-[#ef4444] to-[#f87171]",
  cyan: "from-[#22d3ee] to-[#67e8f9]",
};

export default function Features({ t }: FeaturesProps) {
  return (
    <Section id="features" title={t.features.title} subtitle={t.features.subtitle} gradient>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {t.features.items.map((item: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <GlassCard glow={item.accent === "teal" ? "cyan" : item.accent === "purple" ? "purple" : item.accent === "green" ? "green" : "none"}>
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accentGradients[item.accent]} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">{item.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
