import { useEffect, useRef } from 'react';
import {
  Globe,
  Zap,
  Shield,
  Key,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const ICONS = [Globe, Zap, BarChart3, Key, Shield, CheckCircle2];

interface LandingPageProps {
  setPage: (p: string) => void;
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="text-3xl md:text-4xl font-bold mb-1"
        style={{
          background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {value}
      </div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  );
}

export default function LandingPage({ setPage }: LandingPageProps) {
  const { t } = useLang();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#060912] text-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(96,165,250,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#1e40af]/10 blur-[140px]" />
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#7c3aed]/8 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#0ea5e9]/8 blur-[120px]" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/5 text-[#93c5fd] text-xs font-semibold mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-4">
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #ffffff, #93c5fd, #c4b5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.hero.line1}
            </span>
            <span
              className="block mt-1"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.hero.line2}
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPage('dashboard')}
              className="group relative px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                boxShadow: '0 8px 32px rgba(59,130,246,0.25)',
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t.hero.cta_primary}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 rounded-xl text-base font-semibold border border-[#1e3a5f]/80 text-slate-200 hover:border-[#3b82f6]/50 hover:text-white hover:bg-white/5 transition-all duration-200 backdrop-blur-sm">
              {t.hero.cta_secondary}
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs">
            {['No credit card required', 'Free tier available', '99.9% SLA'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-[#34d399]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060912] to-transparent" />
      </section>

      {/* STATS */}
      <section className="relative py-20 border-y border-[#1e2d4a]/40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/10 via-[#1e2d4a]/20 to-[#1e3a5f]/10" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={t.stats.uptime} label={t.stats.uptime_sub} />
            <StatCard value={t.stats.latency} label={t.stats.latency_sub} />
            <StatCard value={t.stats.models} label={t.stats.models_sub} />
            <StatCard value={t.stats.regions} label={t.stats.regions_sub} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1e3a5f]/60 text-[#60a5fa] text-xs font-semibold mb-4">
            <Layers size={12} />
            PLATFORM
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.features.title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="group relative p-6 rounded-2xl border border-[#1e2d4a]/60 bg-[#0d1929]/80 hover:border-[#3b82f6]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1e3a5f]/60 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#60a5fa]" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/20 via-[#3b82f6]/10 to-[#7c3aed]/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to go{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              apex?
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            Join thousands of developers routing at the edge with ApexFlowHub.
          </p>
          <button
            onClick={() => setPage('dashboard')}
            className="px-10 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
              boxShadow: '0 8px 32px rgba(59,130,246,0.25)',
            }}
          >
            {t.hero.cta_primary} →
          </button>
        </div>
      </section>
    </div>
  );
}
