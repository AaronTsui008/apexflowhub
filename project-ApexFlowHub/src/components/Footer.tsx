import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="relative border-t border-[#1e2d4a]/60 bg-[#060912]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-1.webp" alt="ApexFlowHub" className="h-8 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {f.disclaimer}
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
              {f.platform_title}
            </h4>
            <ul className="space-y-2">
              {f.platform_links.map((link) => (
                <li key={link}>
                  <span className="text-slate-400 text-sm hover:text-slate-200 transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wide uppercase">
              {f.legal_title}
            </h4>
            <ul className="space-y-2">
              {f.legal_links.map((link) => (
                <li key={link}>
                  <span className="text-slate-400 text-sm hover:text-slate-200 transition-colors cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e2d4a]/60 pt-8 space-y-2">
          <p className="text-slate-500 text-xs">{f.copy}</p>
          <p className="text-slate-500 text-xs">{f.powered}</p>
          <p className="text-slate-500 text-xs">{f.built}</p>
          <p className="text-slate-500 text-xs">
            {f.newapi_credit}{' '}
            <a
              href={f.newapi_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#60a5fa]/70 hover:text-[#60a5fa] transition-colors underline underline-offset-2"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
