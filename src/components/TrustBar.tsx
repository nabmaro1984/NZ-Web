"use client";

interface TrustBarProps {
  t: any;
}

export default function TrustBar({ t }: TrustBarProps) {
  const items = [
    { icon: "🔒", label: t.trustBar.ssl },
    { icon: "🎧", label: t.trustBar.support },
    { icon: "✨", label: t.trustBar.trial },
  ];

  return (
    <div className="border-t border-white/[0.06]" style={{ background: "#060a14" }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[#94a3b8]">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
