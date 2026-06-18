"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./ui/Section";
import Button from "./ui/Button";
import GlassCard from "./ui/GlassCard";

interface ContactProps {
  t: any;
}

export default function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "هذا الحقل مطلوب";
    if (!formData.phone.trim()) newErrors.phone = "هذا الحقل مطلوب";
    if (!formData.business) newErrors.business = "هذا الحقل مطلوب";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const infoCards = [
    {
      icon: "📱",
      title: "واتساب",
      value: t.contact.info.phone,
      action: { label: t.contact.info.whatsappBtn, href: "https://wa.me/218000000000" },
    },
    {
      icon: "📧",
      title: "البريد الإلكتروني",
      value: t.contact.info.email,
    },
    {
      icon: "📍",
      title: "الموقع",
      value: t.contact.info.location,
    },
    {
      icon: "🕐",
      title: "ساعات الدعم",
      value: t.contact.info.hours,
    },
  ];

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Left — Info cards (2 cols) */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <GlassCard glow="cyan" className="text-center h-full">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h4 className="text-[#f1f5f9] font-bold mb-1">{card.title}</h4>
                <p className="text-[#94a3b8] text-sm mb-3">{card.value}</p>
                {(card as any).action && (
                  <a
                    href={(card as any).action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#10b981] text-white text-sm font-semibold rounded-xl hover:bg-[#10b981]/90 transition-colors shadow-lg shadow-[#10b981]/25"
                  >
                    {(card as any).action.label}
                  </a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Right — Form (3 cols) */}
        <div className="lg:col-span-3">
          <GlassCard glow="cyan">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-5">✅</div>
                  <h3 className="text-2xl font-bold text-[#f1f5f9] mb-3">
                    {t.contact.form.success}
                  </h3>
                  <Button variant="primary" onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", business: "", message: "" }); }}>
                    إرسال طلب آخر
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-[#f1f5f9] font-semibold mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder={t.contact.form.placeholders.name}
                      className="w-full bg-[#1a2235] border border-white/10 rounded-xl px-4 py-3 text-[#f1f5f9] placeholder:text-[#94a3b8]/50 focus:border-[#0891b2]/50 focus:outline-none focus:ring-1 focus:ring-[#0891b2]/30 transition-all"
                    />
                    {errors.name && <span className="text-red-400 text-sm mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-[#f1f5f9] font-semibold mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder={t.contact.form.placeholders.phone}
                      className="w-full bg-[#1a2235] border border-white/10 rounded-xl px-4 py-3 text-[#f1f5f9] placeholder:text-[#94a3b8]/50 focus:border-[#0891b2]/50 focus:outline-none focus:ring-1 focus:ring-[#0891b2]/30 transition-all"
                    />
                    {errors.phone && <span className="text-red-400 text-sm mt-1 block">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="block text-[#f1f5f9] font-semibold mb-2">
                      {t.contact.form.business}
                    </label>
                    <select
                      value={formData.business}
                      onChange={(e) => handleChange("business", e.target.value)}
                      className="w-full bg-[#1a2235] border border-white/10 rounded-xl px-4 py-3 text-[#f1f5f9] focus:border-[#0891b2]/50 focus:outline-none focus:ring-1 focus:ring-[#0891b2]/30 transition-all"
                    >
                      <option value="">{t.contact.form.placeholders.business}</option>
                      {t.contact.businesses.map((b: string) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                    {errors.business && <span className="text-red-400 text-sm mt-1 block">{errors.business}</span>}
                  </div>

                  <div>
                    <label className="block text-[#f1f5f9] font-semibold mb-2">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={t.contact.form.placeholders.message}
                      rows={4}
                      className="w-full bg-[#1a2235] border border-white/10 rounded-xl px-4 py-3 text-[#f1f5f9] placeholder:text-[#94a3b8]/50 focus:border-[#0891b2]/50 focus:outline-none focus:ring-1 focus:ring-[#0891b2]/30 transition-all resize-none"
                    />
                  </div>

                  <Button variant="gradient" className="w-full" type="submit">
                    {t.contact.form.submit}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}
