import { useState } from 'react';
import { Plus, Copy, Check, Trash2, KeyRound, AlertCircle, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string | null;
  revoked: boolean;
}

function generateKey(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const rand = Array.from({ length: 48 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('');
  return `apx-${rand}`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

export default function ApiKeysTab() {
  const { t } = useLang();
  const k = t.apikeys;
  const [keys, setKeys] = useState<ApiKey[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newKey, setNewKey] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCreate = () => {
    if (!newName.trim()) return;
    const key = generateKey();
    const entry: ApiKey = {
      id: crypto.randomUUID(),
      name: newName.trim(),
      key,
      created: new Date().toISOString(),
      lastUsed: null,
      revoked: false,
    };
    setKeys((prev) => [entry, ...prev]);
    setNewKey(key);
    setNewName('');
  };

  const handleCopy = async (text: string, id: string) => {
    try { await navigator.clipboard.writeText(text); } catch { /* noop */ }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRevoke = (id: string) => {
    setKeys((prev) => prev.map((item) => item.id === id ? { ...item, revoked: true } : item));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewKey(null);
    setNewName('');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white font-semibold text-base">{k.title}</h2>
          <p className="text-slate-400 text-sm mt-0.5">{k.subtitle}</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)', boxShadow: '0 4px 16px rgba(59,130,246,0.2)' }}
        >
          <Plus size={15} />
          {k.create}
        </button>
      </div>

      {keys.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-dashed border-[#1e2d4a]/60 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#1e3a5f]/30 flex items-center justify-center mb-4">
            <KeyRound size={24} className="text-[#60a5fa]/50" />
          </div>
          <p className="text-slate-500 text-sm">{k.no_keys}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {keys.map((entry) => (
            <div
              key={entry.id}
              className={`p-5 rounded-2xl border transition-all duration-200 ${
                entry.revoked
                  ? 'border-[#1e2d4a]/30 bg-[#080b14]/40 opacity-50'
                  : 'border-[#1e2d4a]/60 bg-[#0d1929]/80'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-semibold text-sm">{entry.name}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        entry.revoked
                          ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                          : 'bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/20'
                      }`}
                    >
                      {entry.revoked ? k.status_revoked : k.status_active}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#080b14]/60 border border-[#1e2d4a]/40">
                    <code className="flex-1 text-[#93c5fd] text-xs font-mono truncate">
                      {entry.key.slice(0, 24)}••••••••••••••••
                    </code>
                    {!entry.revoked && (
                      <button
                        onClick={() => handleCopy(entry.key, entry.id)}
                        className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                          copiedId === entry.id
                            ? 'bg-[#34d399]/15 text-[#34d399]'
                            : 'bg-[#1e3a5f]/60 text-slate-300 hover:bg-[#1e3a5f]'
                        }`}
                      >
                        {copiedId === entry.id
                          ? <><Check size={11} /> {k.copied}</>
                          : <><Copy size={11} /> {k.copy}</>}
                      </button>
                    )}
                  </div>
                  <div className="flex gap-4 mt-2 text-slate-500 text-xs">
                    <span>{k.created}: {formatDate(entry.created)}</span>
                    <span>{k.last_used}: {entry.lastUsed ? formatDate(entry.lastUsed) : k.never}</span>
                  </div>
                </div>
                {!entry.revoked && (
                  <button
                    onClick={() => handleRevoke(entry.id)}
                    className="flex-shrink-0 p-2 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                    title={k.revoke}
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={!newKey ? handleCloseModal : undefined}
          />
          <div className="relative w-full max-w-md rounded-2xl border border-[#1e2d4a]/80 bg-[#0d1929] shadow-2xl shadow-black/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-semibold text-base">{k.modal_title}</h3>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
              >
                <X size={16} />
              </button>
            </div>

            {!newKey ? (
              <>
                <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                  Key Name
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
                  placeholder={k.name_placeholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#080b14] border border-[#1e2d4a]/80 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#3b82f6]/60 transition-colors mb-6"
                  autoFocus
                />
                <div className="flex gap-3">
                  <button
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 border border-[#1e2d4a]/60 hover:text-white hover:border-[#1e2d4a] transition-all"
                  >
                    {k.modal_cancel}
                  </button>
                  <button
                    onClick={handleCreate}
                    disabled={!newName.trim()}
                    className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-all"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)' }}
                  >
                    {k.modal_create}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#f59e0b]/5 border border-[#f59e0b]/20 mb-4">
                  <AlertCircle size={14} className="text-[#fbbf24] flex-shrink-0 mt-0.5" />
                  <p className="text-[#fcd34d] text-xs leading-relaxed">{k.key_warning}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#080b14] border border-[#1e2d4a]/80 mb-4">
                  <code className="text-[#60a5fa] text-xs font-mono break-all">{newKey}</code>
                </div>
                <button
                  onClick={() => handleCopy(newKey, 'modal')}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-3 ${
                    copiedId === 'modal'
                      ? 'bg-[#34d399]/15 text-[#34d399] border border-[#34d399]/30'
                      : 'bg-[#1e3a5f]/60 text-white border border-[#3b82f6]/30 hover:border-[#3b82f6]/60'
                  }`}
                >
                  {copiedId === 'modal'
                    ? <><Check size={14} /> {k.copied}</>
                    : <><Copy size={14} /> {k.copy}</>}
                </button>
                <button
                  onClick={handleCloseModal}
                  className="w-full px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
