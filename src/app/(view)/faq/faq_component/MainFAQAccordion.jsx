import { useState } from 'react';
import { CircleHelp, Layers, CreditCard, Rocket, UserCheck, Settings, BarChart3, LifeBuoy, ChevronDown } from 'lucide-react';
import { faqCategories } from './faqData';

const iconMap = {
  CircleHelp,
  Layers,
  CreditCard,
  Rocket,
  UserCheck,
  Settings,
  BarChart3,
  LifeBuoy,
};

const catAccentColors = {
  umum: { bg: 'bg-blue-100', text: 'text-blue-700', ring: 'ring-blue-200' },
  fitur: { bg: 'bg-violet-100', text: 'text-violet-700', ring: 'ring-violet-200' },
  harga: { bg: 'bg-emerald-100', text: 'text-emerald-700', ring: 'ring-emerald-200' },
  implementasi: { bg: 'bg-rose-100', text: 'text-rose-700', ring: 'ring-rose-200' },
  akun: { bg: 'bg-amber-100', text: 'text-amber-700', ring: 'ring-amber-200' },
  operasional: { bg: 'bg-sky-100', text: 'text-sky-700', ring: 'ring-sky-200' },
  evaluasi: { bg: 'bg-indigo-100', text: 'text-indigo-700', ring: 'ring-indigo-200' },
  bantuan: { bg: 'bg-slate-100', text: 'text-slate-700', ring: 'ring-slate-200' },
};

function AccordionItem({ q, a, isOpen, onToggle, accentText }) {
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-blue-200 shadow-sm bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
      <button
        onClick={onToggle}
        className='w-full flex items-start justify-between gap-3 px-6 py-4 text-left'
      >
        <span className={`text-sm font-semibold leading-snug pr-2 transition-colors ${isOpen ? accentText : 'text-slate-800'}`}>{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 mt-0.5 ${isOpen ? `rotate-180 ${accentText}` : 'text-slate-400'}`} />
      </button>

      {isOpen && (
        <div className='px-6 pb-5'>
          <p className='text-sm text-slate-500 leading-relaxed'>{a}</p>
        </div>
      )}
    </div>
  );
}

export function MainFAQAccordion({ activeCat, searchQuery }) {
  const [openMap, setOpenMap] = useState({});

  const toggle = (key) => {
    setOpenMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filtered = faqCategories
    .filter((cat) => activeCat === 'semua' || cat.id === activeCat)
    .map((cat) => ({
      ...cat,
      items: searchQuery.trim()
        ? cat.items.filter((item) => item.q.toLowerCase().includes(searchQuery.toLowerCase()) || item.a.toLowerCase().includes(searchQuery.toLowerCase()) || cat.label.toLowerCase().includes(searchQuery.toLowerCase()))
        : cat.items,
    }))
    .filter((cat) => cat.items.length > 0);

  const totalResults = filtered.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <section
      className='py-14 lg:py-20'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex gap-10 items-start'>
          <aside className='hidden lg:block w-56 shrink-0 sticky top-40'>
            <p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4'>Kategori</p>
            <nav className='space-y-1'>
              {faqCategories.map((cat) => {
                const Icon = iconMap[cat.icon];
                const isActive = activeCat === cat.id;
                const accent = catAccentColors[cat.id];

                return (
                  <a
                    key={cat.id}
                    href={`#cat-${cat.id}`}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive ? `${accent.bg} ${accent.text}` : 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'}`}
                  >
                    {Icon && <Icon className='w-4 h-4' />}
                    {cat.label}
                    <span className='ml-auto text-[10px] font-bold text-slate-300'>{cat.items.length}</span>
                  </a>
                );
              })}
            </nav>
          </aside>

          <div className='flex-1 min-w-0'>
            {searchQuery && (
              <div className='mb-6 px-4 py-3 rounded-xl bg-blue-50 border border-blue-100'>
                <p className='text-sm text-blue-700 font-semibold'>
                  Menampilkan <span className='font-extrabold'>{totalResults}</span> hasil untuk &quot;<em>{searchQuery}</em>&quot;
                </p>
              </div>
            )}

            {filtered.length === 0 && (
              <div className='text-center py-20'>
                <p className='text-slate-400 text-sm'>Tidak ada pertanyaan yang cocok dengan pencarian Anda.</p>
              </div>
            )}

            {filtered.map((cat) => {
              const Icon = iconMap[cat.icon];
              const accent = catAccentColors[cat.id];

              return (
                <div
                  key={cat.id}
                  id={`cat-${cat.id}`}
                  className='mb-10 scroll-mt-40'
                >
                  <div className='flex items-center gap-3 mb-5'>
                    <div className={`w-9 h-9 rounded-xl ${accent.bg} flex items-center justify-center ring-4 ${accent.ring}`}>{Icon && <Icon className={`w-4 h-4 ${accent.text}`} />}</div>
                    <div>
                      <h2
                        className='text-slate-900 font-extrabold leading-none'
                        style={{ fontSize: '1.1rem' }}
                      >
                        {cat.label}
                      </h2>
                      <p className='text-xs text-slate-400 mt-0.5'>{cat.items.length} pertanyaan</p>
                    </div>
                  </div>

                  <div className='space-y-2.5'>
                    {cat.items.map((item, idx) => {
                      const key = `${cat.id}-${idx}`;

                      return (
                        <AccordionItem
                          key={key}
                          q={item.q}
                          a={item.a}
                          isOpen={!!openMap[key]}
                          onToggle={() => toggle(key)}
                          accentText={accent.text}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
