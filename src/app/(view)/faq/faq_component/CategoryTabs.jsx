import { CircleHelp, Layers, CreditCard, Rocket, UserCheck, Settings, BarChart3, LifeBuoy } from 'lucide-react';
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

export function CategoryTabs({ active, onSelect }) {
  return (
    <section className='py-8 bg-white border-b border-slate-100 sticky top-16 z-30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 hidden sm:block'>Jelajahi berdasarkan topik</p>

        <div className='flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1'>
          <button
            onClick={() => onSelect('semua')}
            className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all ${
              active === 'semua' ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-700'
            }`}
          >
            Semua
          </button>

          {faqCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = active === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                  isActive ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {Icon && <Icon className='w-3.5 h-3.5' />}
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
