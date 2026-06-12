import { useState } from 'react';
import { Wallet, Key } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import TopUpTab from '../components/TopUpTab';
import ApiKeysTab from '../components/ApiKeysTab';

export default function Dashboard() {
  const { t } = useLang();
  const [tab, setTab] = useState<'topup' | 'keys'>('topup');

  const tabs = [
    { id: 'topup' as const, label: t.dashboard.tab_topup, icon: Wallet },
    { id: 'keys' as const, label: t.dashboard.tab_keys, icon: Key },
  ];

  return (
    <div className="min-h-screen bg-[#060912] text-white pt-20">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#1e40af]/8 blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#5b21b6]/8 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96,165,250,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)' }}
            >
              U
            </div>
            <span className="text-slate-400 text-sm">{t.dashboard.welcome}</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        </div>

        {/* Balance card */}
        <div className="mb-8 p-5 rounded-2xl border border-[#1e2d4a]/60 bg-[#0d1929]/80 flex items-center justify-between">
          <div>
            <div className="text-slate-400 text-sm mb-1">{t.dashboard.balance}</div>
            <div className="text-3xl font-bold" style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              0
              <span className="text-base font-normal text-slate-400 ml-2" style={{ WebkitTextFillColor: '#94a3b8' }}>
                {t.dashboard.balance_unit}
              </span>
            </div>
          </div>
          <div className="hidden sm:block w-12 h-12 rounded-xl bg-[#1e3a5f]/60 flex items-center justify-center">
            <Wallet size={22} className="text-[#60a5fa]" />
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 p-1 rounded-xl bg-[#0d1929]/80 border border-[#1e2d4a]/60 mb-8 w-fit">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                tab === id
                  ? 'bg-[#1e3a5f] text-white border border-[#3b82f6]/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {tab === 'topup' ? <TopUpTab /> : <ApiKeysTab />}
      </div>
    </div>
  );
}
