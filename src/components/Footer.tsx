"use client";

interface FooterProps {
  t: any;
  lang: "ar" | "en";
}

export default function Footer({ t, lang }: FooterProps) {
  return (
    <footer className="relative border-t border-white/[0.06] zellij-border-top" style={{ background: "#060a14" }}>
      {/* Moroccan decorative corners */}
      <div className="zellij-corner zellij-corner-tl" />
      <div className="zellij-corner zellij-corner-tr" />
      <div className="zellij-corner zellij-corner-bl" />
      <div className="zellij-corner zellij-corner-br" />

      {/* Subtle zellij tile grid in background */}
      <div className="absolute left-8 top-16 zellij-tile-grid opacity-[0.04] hidden md:grid">
        {[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6].map((c, i) => (
          <div key={i} className={`zellij-tile zellij-tile-${c}`} />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Row 1 — Logo + tagline + social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22d3ee] to-[#0891b2] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#0891b2]/30">
              ن
            </div>
            <span className="text-xl font-bold text-[#f1f5f9]">
              NZ-<span className="text-[#0891b2]">لمعلم</span>
            </span>
          </a>
          <p className="text-[#94a3b8] text-sm text-center md:text-right max-w-md">
            {t.footer.tagline}
          </p>
          <div className="flex gap-3">
            <a
              href="https://wa.me/218000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/10 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/10 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Row 2 — Links */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-[#f1f5f9] font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { label: t.nav.home, href: "#hero" },
                { label: t.nav.features, href: "#features" },
                { label: t.nav.pricing, href: "#pricing" },
                { label: t.nav.screenshots, href: "#screenshots" },
                { label: t.nav.contact, href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#f1f5f9] font-bold mb-4">{t.footer.features}</h4>
            <ul className="space-y-3">
              {[
                "نقطة البيع السريعة",
                "إدارة المخزون",
                "إدارة العملاء والديون",
                "التقارير والإحصائيات",
                "المنتجات الوزنية",
              ].map((f, i) => (
                <li key={i}>
                  <span className="text-[#94a3b8] text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[#f1f5f9] font-bold mb-4">{t.footer.support}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/218000000000" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors text-sm">
                  {t.footer.whatsapp}
                </a>
              </li>
              <li>
                <a href="mailto:nz84.shop@gmail.com" className="text-[#94a3b8] hover:text-[#f1f5f9] transition-colors text-sm">
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2.5 — Zellij divider */}
        <div className="zellij-section-divider mb-8">
          <span className="zellij-diamond" />
          <span className="zellij-diamond" style={{ animationDelay: '0.8s' }} />
          <span className="zellij-diamond" style={{ animationDelay: '1.6s' }} />
        </div>

        {/* Row 3 — Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94a3b8] text-sm">
            © {new Date().getFullYear()} NZ-لمعلم. {t.footer.rights}.
          </p>
          <p className="text-[#94a3b8] text-sm">
            {t.footer.poweredBy}
          </p>
        </div>
      </div>
    </footer>
  );
}
