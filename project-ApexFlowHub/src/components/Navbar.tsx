import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface NavbarProps {
  page: string;
  setPage: (p: string) => void;
}

export default function Navbar({ page, setPage }: NavbarProps) {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { key: 'home', label: t.nav.home },
    { key: 'dashboard', label: t.nav.dashboard },
    { key: 'docs', label: t.nav.docs },
    { key: 'pricing', label: t.nav.pricing },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080b14]/90 backdrop-blur-xl border-b border-[#1e2d4a]/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => setPage('home')} className="flex items-center gap-3">
            <img src="/logo-1.webp" alt="ApexFlowHub Logo" className="h-9 w-auto object-contain" />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => setPage(link.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  page === link.key
                    ? 'text-[#60a5fa] bg-[#1e3a5f]/40'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#1e3a5f]/80 text-slate-300 hover:text-white hover:border-[#3b82f6]/60 transition-all duration-200"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={() => setPage('dashboard')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              {t.nav.login}
            </button>
            <button
              onClick={() => setPage('dashboard')}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              {t.nav.signup}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="px-2 py-1 rounded text-xs font-semibold border border-[#1e3a5f]/80 text-slate-300"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#080b14]/95 backdrop-blur-xl border-b border-[#1e2d4a]/60 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => { setPage(link.key); setMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                page === link.key
                  ? 'text-[#60a5fa] bg-[#1e3a5f]/40'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => { setPage('dashboard'); setMenuOpen(false); }}
              className="flex-1 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 border border-[#1e2d4a]/80 hover:text-white"
            >
              {t.nav.login}
            </button>
            <button
              onClick={() => { setPage('dashboard'); setMenuOpen(false); }}
              className="flex-1 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white"
            >
              {t.nav.signup}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
