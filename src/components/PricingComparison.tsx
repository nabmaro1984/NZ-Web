"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "./ui/Button";

interface PricingComparisonProps {
  t: any;
}

export default function PricingComparison({ t }: PricingComparisonProps) {
  const plans = t.pricing.comparison.plans;

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <motion.h3
        className="text-2xl font-bold text-[#f1f5f9] text-center mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {t.pricing.comparison.title}
      </motion.h3>
      <motion.p
        className="text-[#94a3b8] text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {t.pricing.comparison.subtitle}
      </motion.p>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={cn(
              "glass rounded-2xl p-5 flex flex-col",
              plan.popular && "border-[#0891b2]/30 glow-cyan"
            )}
          >
            {plan.popular && (
              <span className="text-xs font-semibold text-[#0891b2] mb-2">
                {t.pricing.popular}
              </span>
            )}
            <h4 className="text-lg font-bold text-[#f1f5f9] mb-1">{plan.name}</h4>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-black text-[#f1f5f9]">{plan.price}</span>
              <span className="text-xs text-[#94a3b8]">/{plan.period}</span>
            </div>
            <ul className="flex-1 space-y-2 mb-5">
              {plan.features.map((f: string, j: number) => (
                <li key={j} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                  <span className="text-[#10b981]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? "gradient" : "outline"}
              size="sm"
              className="w-full"
              href="#contact"
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
