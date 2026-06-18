"use client";

import { motion } from "framer-motion";
import Section from "./ui/Section";
import Button from "./ui/Button";
import GlassCard from "./ui/GlassCard";
import PricingComparison from "./PricingComparison";
import { cn } from "@/lib/utils";

interface PricingProps {
  t: any;
}

export default function Pricing({ t }: PricingProps) {
  const plans = [
    {
      key: "free",
      ...t.pricing.free,
      popular: false,
      color: "gray",
    },
    {
      key: "monthly",
      ...t.pricing.monthly,
      popular: true,
      color: "teal",
    },
    {
      key: "yearly",
      ...t.pricing.yearly,
      popular: false,
      color: "purple",
    },
  ];

  return (
    <Section id="pricing" title={t.pricing.title} subtitle={t.pricing.subtitle}>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            {/* Badge */}
            {(plan.popular || plan.key === "yearly") && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span
                  className={cn(
                    "px-4 py-1.5 text-white text-sm font-semibold rounded-full",
                    plan.popular
                      ? "bg-gradient-to-r from-[#0891b2] to-[#22d3ee] shadow-lg shadow-[#0891b2]/30"
                      : "bg-gradient-to-r from-[#10b981] to-[#34d399] shadow-lg shadow-[#10b981]/30"
                  )}
                >
                  {plan.key === "yearly" ? t.pricing.saveBadge : t.pricing.popular}
                </span>
              </div>
            )}

            <GlassCard
              glow={plan.popular ? "cyan" : plan.key === "yearly" ? "green" : "none"}
              className={cn(
                "h-full flex flex-col",
                plan.popular && "border-[#0891b2]/30"
              )}
            >
              {/* Plan name & price */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-black text-[#f1f5f9]">
                    {plan.price}
                  </span>
                  {plan.key !== "free" && (
                    <span className="text-[#94a3b8]">د.ل / {plan.period}</span>
                  )}
                  {plan.key === "free" && (
                    <span className="text-[#94a3b8]">/{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 space-y-3 mb-8">
                {(plan.features as string[]).map((feature: string, j: number) => (
                  <div key={j} className="flex items-center gap-3 text-sm">
                    <span className="text-[#10b981] flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[#94a3b8]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant={plan.popular ? "gradient" : "outline"}
                className="w-full"
                href="#contact"
              >
                {plan.cta}
              </Button>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Payment methods */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-[#94a3b8] mb-4">💳 {t.pricing.payment}</p>
        <div className="flex flex-wrap justify-center gap-3">
          {t.pricing.methods.map((method: string, i: number) => (
            <span
              key={i}
              className="px-4 py-2 glass rounded-xl text-sm text-[#94a3b8]"
            >
              {method}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Comparison Table */}
      <PricingComparison t={t} />
    </Section>
  );
}
