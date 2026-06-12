import { useState } from 'react';
import { Copy, Check, AlertTriangle, MessageCircle, CreditCard } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

// PLACEHOLDER — replace with real TRC-20 address before going live
const USDT_ADDRESS = 'TXXX_PLACEHOLDER_USDT_TRC20_ADDRESS_XXXX';

function QRPlaceholder({ data }: { data: string }) {
  const SIZE = 21;
  const cells: boolean[] = [];
  for (let i = 0; i < SIZE * SIZE; i++) {
    cells.push(data.charCodeAt(i % data.length) % 3 !== 0);
  }

  return (
    <div className="p-3 bg-white rounded-xl inline-block">
      <svg width="126" height="126" viewBox={`0 0 ${SIZE} ${SIZE}`}>
        {cells.map((on, i) => {
          const x = i % SIZE;
          const y = Math.floor(i / SIZE);
          const inFinder =
            (x < 7 && y < 7) || (x >= 14 && y < 7) || (x < 7 && y >= 14);
          let fill = '#fff';
          if (inFinder) {
            const inBorder =
              x === 0 || x === 6 || y === 0 || y === 6 ||
              x === 14 || x === 20 || (x >= 14 && (y === 0 || y === 6)) ||
              (y >= 14 && (x === 0 || x === 6));
            const inCenter =
              (x >= 2 && x <= 4 && y >= 2 && y <= 4) ||
              (x >= 16 && x <= 18 && y >= 2 && y <= 4) ||
              (x >= 2 && x <= 4 && y >= 16 && y <= 18);
            fill = inBorder || inCenter ? '#000' : '#fff';
          } else {
            fill = on ? '#000' : '#fff';
          }
          return <rect key={i} x={x} y={y} width={1} height={1} fill={fill} />;
        })}
      </svg>
    </div>
  );
}

export default function TopUpTab() {
  const { t } = useLang();
  const u = t.topup;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(USDT_ADDRESS); } catch { /* noop */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* USDT */}
      <div className="p-6 rounded-2xl border border-[#1e2d4a]/60 bg-[#0d1929]/80">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-full bg-[#26a17b] flex items-center justify-center text-white text-xs font-black">
            ₮
          </div>
          <h2 className="text-white font-semibold text-base">{u.usdt_title}</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0 text-center">
            <QRPlaceholder data={USDT_ADDRESS} />
            <p className="text-slate-500 text-xs mt-2">{u.qr_label}</p>
          </div>

          <div className="flex-1 w-full">
            <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
              {u.usdt_address}
            </label>
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#080b14] border border-[#1e2d4a]/80">
              <code className="flex-1 text-[#60a5fa] text-xs font-mono break-all leading-relaxed">
                {USDT_ADDRESS}
              </code>
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  copied
                    ? 'bg-[#34d399]/15 text-[#34d399] border border-[#34d399]/30'
                    : 'bg-[#1e3a5f]/60 text-slate-200 hover:bg-[#1e3a5f] border border-[#1e3a5f]/80'
                }`}
              >
                {copied ? <><Check size={12} /> {u.usdt_copied}</> : <><Copy size={12} /> {u.usdt_copy}</>}
              </button>
            </div>

            <div className="mt-4 flex items-start gap-2.5 p-3.5 rounded-xl bg-[#26a17b]/8 border border-[#26a17b]/25">
              <span className="text-[#34d399] text-base leading-none mt-0.5">✦</span>
              <p className="text-[#6ee7b7] text-sm leading-relaxed">{u.usdt_bonus}</p>
            </div>

            <div className="mt-3 flex items-start gap-2.5 p-3.5 rounded-xl bg-[#f59e0b]/5 border border-[#f59e0b]/20">
              <AlertTriangle size={14} className="text-[#fbbf24] flex-shrink-0 mt-0.5" />
              <p className="text-[#fcd34d] text-xs leading-relaxed">{u.usdt_notice}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other methods */}
      <div className="p-6 rounded-2xl border border-[#1e2d4a]/60 bg-[#0d1929]/80">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard size={17} className="text-[#60a5fa]" />
          <h2 className="text-white font-semibold text-base">{u.other_title}</h2>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{u.other_desc}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {['Visa', 'Mastercard', 'Alipay', 'WeChat Pay'].map((method) => (
            <div
              key={method}
              className="px-4 py-2 rounded-lg border border-[#1e2d4a]/60 bg-[#0d1929]/60 text-slate-300 text-xs font-semibold tracking-wide"
            >
              {method}
            </div>
          ))}
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#1e3a5f]/60 border border-[#3b82f6]/30 text-[#60a5fa] hover:border-[#3b82f6]/60 hover:text-white transition-all duration-200">
          <MessageCircle size={15} />
          {u.contact}
        </button>
      </div>
    </div>
  );
}
