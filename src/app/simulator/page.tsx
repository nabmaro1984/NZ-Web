"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

// ============================================================
// NZ SYSTEM SIMULATOR — Interactive Demo
// ============================================================

type Page = "pos" | "dashboard" | "inventory" | "customers" | "invoices" | "reports";

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: "pos", label: "نقطة البيع", icon: "🛒" },
  { id: "dashboard", label: "لوحة التحكم", icon: "📊" },
  { id: "inventory", label: "المخزون", icon: "📦" },
  { id: "customers", label: "العملاء", icon: "👥" },
  { id: "invoices", label: "الفواتير", icon: "📋" },
  { id: "reports", label: "التقارير", icon: "📈" },
];

// Mock products
const mockProducts = [
  { name: "مارلبورو أحمر", price: 8.50, stock: 120 },
  { name: "مارلبورو جولد", price: 8.00, stock: 85 },
  { name: "مارلبورو سيلفر", price: 7.50, stock: 60 },
  { name: "وينستون أزرق", price: 7.00, stock: 200 },
  { name: "كينت نيوترا", price: 9.00, stock: 45 },
  { name: "دايفيدوف جولد", price: 12.00, stock: 30 },
  { name: "بإسمي 100", price: 10.00, stock: 100 },
  { name: "مروان 100", price: 11.50, stock: 55 },
  { name: "كولا 500مل", price: 2.00, stock: 500 },
  { name: "مياه معدنية 1.5ل", price: 1.50, stock: 300 },
  { name: "شيبس ليز كبير", price: 3.00, stock: 150 },
  { name: "شوكولاتة جالكسي", price: 5.00, stock: 80 },
];

export default function SimulatorPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("pos");
  const [cart, setCart] = useState<{ name: string; price: number; qty: number }[]>([]);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const filtered = mockProducts.filter(p =>
    p.name.includes(search) || search === ""
  );

  const addToCart = useCallback((product: typeof mockProducts[0]) => {
    setCart(prev => {
      const existing = prev.find(c => c.name === product.name);
      if (existing) {
        return prev.map(c =>
          c.name === product.name ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { name: product.name, price: product.price, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((name: string) => {
    setCart(prev => prev.filter(c => c.name !== name));
  }, []);

  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

  const renderPage = () => {
    switch (currentPage) {
      case "pos": return renderPOS();
      case "dashboard": return renderDashboard();
      case "inventory": return renderInventory();
      case "customers": return renderCustomers();
      case "invoices": return renderInvoices();
      case "reports": return renderReports();
    }
  };

  // ===== POS PAGE =====
  const renderPOS = () => (
    <div className="flex gap-3 h-full">
      {/* Products grid */}
      <div className="flex-1 flex flex-col gap-3 min-w-0">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="🔍 بحث عن منتج..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 bg-[#0D1030] text-[#EEF0FF] text-sm outline-none focus:border-[#8b5cf6] transition-colors"
          />
          <span className="text-xs text-[#64748B]">{filtered.length} منتج</span>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 overflow-y-auto pb-2">
          {filtered.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              onClick={() => addToCart(p)}
              className="group relative bg-[#151848] border border-[rgba(139,92,246,0.15)] rounded-xl p-3 text-right hover:border-[#8b5cf6] transition-all hover:shadow-lg hover:shadow-[#8b5cf6]/10"
            >
              <div className="text-xs text-[#64748B] mb-1 truncate">{p.name}</div>
              <div className="text-sm font-bold text-[#00D4FF]">{p.price.toFixed(2)} د.ل</div>
              <div className="text-[10px] text-[#64748B] mt-1">متبقي: {p.stock}</div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8b5cf6]/0 to-[#00D4FF]/0 group-hover:from-[#8b5cf6]/5 group-hover:to-[#00D4FF]/5 transition-all pointer-events-none" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Cart panel */}
      <div className="w-72 flex-shrink-0 bg-[#111438] border border-[rgba(139,92,246,0.15)] rounded-2xl p-3 flex flex-col">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
          <span className="text-xs text-[#64748B]">الفاتورة الحالية</span>
          <span className="text-xs text-[#64748B]">{cart.length} صنف</span>
        </div>
        <div className="flex-1 overflow-y-auto space-y-1.5 mb-3">
          {cart.length === 0 && (
            <div className="text-center text-[#64748B] text-xs py-8">الفاتورة فارغة</div>
          )}
          {cart.map((c, i) => (
            <div key={i} className="flex items-center justify-between bg-[#0D1030] rounded-lg px-3 py-2">
              <div className="flex-1 min-w-0">
                <div className="text-xs text-[#EEF0FF] truncate">{c.name}</div>
                <div className="text-[10px] text-[#64748B]">{c.qty} × {c.price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2 mr-2">
                <span className="text-xs font-bold text-[#00D4FF]">{(c.price * c.qty).toFixed(2)}</span>
                <button onClick={() => removeFromCart(c.name)} className="text-[#EF4444] text-xs opacity-50 hover:opacity-100">✕</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-2 border-t border-white/5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-[#64748B]">الإجمالي</span>
            <span className="text-lg font-bold text-[#10B981]">{total.toFixed(2)} د.ل</span>
          </div>
          <button className="w-full py-2.5 rounded-xl bg-gradient-to-l from-[#8b5cf6] to-[#00D4FF] text-white text-sm font-bold hover:opacity-90 transition-opacity">
            إتمام البيع ({cart.length})
          </button>
        </div>
      </div>
    </div>
  );

  // ===== DASHBOARD =====
  const renderDashboard = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "مبيعات اليوم", value: "12,450", color: "from-[#00D4FF] to-[#8b5cf6]", change: "+12%" },
          { label: "الفواتير", value: "48", color: "from-[#10B981] to-[#34D399]", change: "+5%" },
          { label: "العملاء", value: "156", color: "from-[#8b5cf6] to-[#A78BFA]", change: "+8%" },
          { label: "المخزون المنخفض", value: "7", color: "from-[#EF4444] to-[#F87171]", change: "-2" },
        ].map((kpi, i) => (
          <div key={i} className="bg-[#151848] border border-[rgba(139,92,246,0.15)] rounded-2xl p-4">
            <div className="text-xs text-[#64748B] mb-1">{kpi.label}</div>
            <div className={`text-2xl font-bold bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}>{kpi.value}</div>
            <div className="text-[10px] text-[#64748B] mt-1">{kpi.change} عن أمس</div>
          </div>
        ))}
      </div>
      <div className="bg-[#151848] border border-[rgba(139,92,246,0.15)] rounded-2xl p-4">
        <div className="text-xs text-[#64748B] mb-4">آخر المعاملات</div>
        {[
          { customer: "محمد علي", amount: "230 د.ل", status: "مكتمل" },
          { customer: "أحمد سالم", amount: "85 د.ل", status: "مكتمل" },
          { customer: "خالد عمر", amount: "450 د.ل", status: "معلق" },
          { customer: "فاطمة الزهراء", amount: "120 د.ل", status: "مكتمل" },
        ].map((tx, i) => (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
            <span className="text-sm text-[#EEF0FF]">{tx.customer}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-[#10B981]">{tx.amount}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${tx.status === 'مكتمل' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#F59E0B]/10 text-[#F59E0B]'}`}>{tx.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== INVENTORY =====
  const renderInventory = () => (
    <div className="bg-[#151848] border border-[rgba(139,92,246,0.15)] rounded-2xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5 text-[#64748B] text-xs">
            <th className="text-right p-3">المنتج</th>
            <th className="text-center p-3">المخزون</th>
            <th className="text-center p-3">سعر الشراء</th>
            <th className="text-center p-3">سعر البيع</th>
            <th className="text-center p-3">الحالة</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map((p, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-[rgba(139,92,246,0.04)]">
              <td className="p-3 text-[#EEF0FF]">{p.name}</td>
              <td className="p-3 text-center">{p.stock}</td>
              <td className="p-3 text-center text-[#64748B]">{(p.price * 0.6).toFixed(2)}</td>
              <td className="p-3 text-center text-[#00D4FF]">{p.price.toFixed(2)}</td>
              <td className="p-3 text-center">
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${p.stock > 50 ? 'bg-[#10B981]/10 text-[#10B981]' : p.stock > 20 ? 'bg-[#F59E0B]/10 text-[#F59E0B]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                  {p.stock > 50 ? 'جيد' : p.stock > 20 ? 'متوسط' : 'منخفض'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // ===== CUSTOMERS =====
  const renderCustomers = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {[
        { name: "محمد علي", phone: "+218 91 234 5678", total: "12,450", visits: 45 },
        { name: "أحمد سالم", phone: "+218 92 345 6789", total: "8,200", visits: 32 },
        { name: "خالد عمر", phone: "+218 93 456 7890", total: "5,600", visits: 18 },
        { name: "فاطمة الزهراء", phone: "+218 94 567 8901", total: "3,400", visits: 12 },
      ].map((c, i) => (
        <div key={i} className="bg-[#151848] border border-[rgba(139,92,246,0.15)] rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#FF40D0] flex items-center justify-center text-white font-bold text-sm">
              {c.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm text-[#EEF0FF]">{c.name}</div>
              <div className="text-[10px] text-[#64748B]">{c.phone}</div>
            </div>
          </div>
          <div className="flex gap-4 text-xs text-[#64748B]">
            <span>إجمالي المشتريات: <span className="text-[#00D4FF] font-semibold">{c.total} د.ل</span></span>
            <span>زيارات: {c.visits}</span>
          </div>
        </div>
      ))}
    </div>
  );

  // ===== INVOICES =====
  const renderInvoices = () => (
    <div className="bg-[#151848] border border-[rgba(139,92,246,0.15)] rounded-2xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5 text-[#64748B] text-xs">
            <th className="text-right p-3">الفاتورة</th>
            <th className="text-center p-3">العميل</th>
            <th className="text-center p-3">التاريخ</th>
            <th className="text-center p-3">المبلغ</th>
            <th className="text-center p-3">الحالة</th>
          </tr>
        </thead>
        <tbody>
          {[
            { no: "INV-001", customer: "محمد علي", date: "2026-06-30", amount: "230.00", status: "مدفوعة" },
            { no: "INV-002", customer: "أحمد سالم", date: "2026-06-30", amount: "85.00", status: "مدفوعة" },
            { no: "INV-003", customer: "خالد عمر", date: "2026-06-29", amount: "450.00", status: "آجل" },
            { no: "INV-004", customer: "فاطمة الزهراء", date: "2026-06-29", amount: "120.00", status: "مدفوعة" },
            { no: "INV-005", customer: "سارة المبروك", date: "2026-06-28", amount: "670.00", status: "آجل" },
          ].map((inv, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-[rgba(139,92,246,0.04)]">
              <td className="p-3 text-[#EEF0FF]">{inv.no}</td>
              <td className="p-3 text-center">{inv.customer}</td>
              <td className="p-3 text-center text-[#64748B]">{inv.date}</td>
              <td className="p-3 text-center text-[#00D4FF]">{inv.amount}</td>
              <td className="p-3 text-center">
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${inv.status === 'مدفوعة' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#F59E0B]/10 text-[#F59E0B]'}`}>{inv.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // ===== REPORTS =====
  const renderReports = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {[
        { title: "تقرير المبيعات اليومي", desc: "إجمالي المبيعات، عدد الفواتير، متوسط الفاتورة", color: "#00D4FF" },
        { title: "تقرير المخزون", desc: "المنتجات المنخفضة، المنتجات الأكثر مبيعاً", color: "#10B981" },
        { title: "تقرير العملاء", desc: "أكثر العملاء إنفاقاً، عدد الزيارات", color: "#8b5cf6" },
        { title: "تقرير الأرباح", desc: "صافي الربح، إجمالي المشتريات، المصروفات", color: "#FF40D0" },
      ].map((r, i) => (
        <div key={i} className="bg-[#151848] border border-[rgba(139,92,246,0.15)] rounded-2xl p-4 hover:border-[#8b5cf6] transition-colors cursor-pointer">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full" style={{ background: r.color }} />
            <div className="text-sm text-[#EEF0FF]">{r.title}</div>
          </div>
          <div className="text-xs text-[#64748B]">{r.desc}</div>
        </div>
      ))}
    </div>
  );

  // ===== LOGIN SCREEN =====
  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#0A0E27] flex items-center justify-center p-4" style={{ fontFamily: "'Cairo', sans-serif" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm bg-[#111438] border border-[rgba(139,92,246,0.15)] rounded-2xl p-8 text-center shadow-2xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#FF40D0] flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">
            NZ
          </div>
          <h1 className="text-xl font-bold text-[#EEF0FF] mb-2">NZ-لمعلم</h1>
          <p className="text-sm text-[#64748B] mb-6">بيئة تجربة تفاعلية</p>

          <input
            type="text"
            placeholder="اسم المستخدم (أي شيء)"
            defaultValue="demo"
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0D1030] text-[#EEF0FF] text-sm text-center outline-none mb-3 focus:border-[#8b5cf6] transition-colors"
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            defaultValue="demo"
            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0D1030] text-[#EEF0FF] text-sm text-center outline-none mb-4 focus:border-[#8b5cf6] transition-colors"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setLoggedIn(true)}
            className="w-full py-3 rounded-xl bg-gradient-to-l from-[#8b5cf6] to-[#00D4FF] text-white font-bold text-sm"
          >
            🚀 دخول إلى التجربة
          </motion.button>

          <p className="text-[10px] text-[#64748B] mt-4">
            هذه التجربة لا تمثل النظام الكامل — لأغراض العرض فقط
          </p>
        </motion.div>
      </div>
    );
  }

  // ===== MAIN INTERFACE =====
  return (
    <div className="min-h-screen bg-[#0A0E27] text-[#EEF0FF] flex" style={{ fontFamily: "'Cairo', sans-serif" }}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-56' : 'w-0'} transition-all duration-300 overflow-hidden flex-shrink-0 bg-[#0E1235] border-l border-[rgba(139,92,246,0.12)] flex flex-col`}>
        <div className="p-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#FF40D0] flex items-center justify-center text-white font-bold text-xs">NZ</div>
            <div>
              <div className="text-xs font-bold">NZ-لمعلم</div>
              <div className="text-[8px] text-[#64748B]">v2.0 • تجربة</div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${currentPage === item.id ? 'bg-[rgba(139,92,246,0.12)] text-[#8b5cf6] border-r-2 border-[#8b5cf6]' : 'text-[#64748B] hover:text-[#EEF0FF] hover:bg-white/5'}`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="p-3 border-t border-white/5">
          <div className="flex items-center gap-2 text-[10px] text-[#64748B]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_#10B981]" />
            متصل
          </div>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0E1235] border-b border-[rgba(139,92,246,0.12)]">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-[#64748B] hover:text-[#EEF0FF] text-lg">
              {sidebarOpen ? '✕' : '☰'}
            </button>
            <span className="text-sm font-bold">{navItems.find(n => n.id === currentPage)?.label}</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)} className="text-xs text-[#64748B] hover:text-[#EEF0FF]">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <a href="/" className="text-[10px] px-3 py-1.5 rounded-lg bg-white/5 text-[#64748B] hover:bg-[#EF4444]/20 hover:text-[#EF4444] transition-colors">
              ✕ خروج
            </a>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {renderPage()}
        </div>

        {/* Footer info */}
        <div className="text-center text-[8px] text-[#64748B] py-1.5 border-t border-[rgba(139,92,246,0.06)]">
          NZ-84 ERP OS — بيئة تجربة تفاعلية • هذه الواجهة لا تمثل النظام الكامل
        </div>
      </div>
    </div>
  );
}
