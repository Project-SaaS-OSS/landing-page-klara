import { ArrowRight, Sparkles } from 'lucide-react';
import { topQuestions, faqCategories } from './faqData';

const catColors = {
  umum: 'bg-blue-50 text-blue-600 border-blue-100',
  fitur: 'bg-violet-50 text-violet-600 border-violet-100',
  harga: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  akun: 'bg-amber-50 text-amber-600 border-amber-100',
  operasional: 'bg-sky-50 text-sky-600 border-sky-100',
  evaluasi: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  implementasi: 'bg-rose-50 text-rose-600 border-rose-100',
  bantuan: 'bg-slate-50 text-slate-600 border-slate-200',
};

export function TopQuestions({ onSelect }) {
  return (
    <section className='py-14 lg:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-2 mb-8'>
          <Sparkles className='w-4 h-4 text-amber-500' />
          <h2
            className='text-slate-900 font-extrabold'
            style={{ fontSize: '1.35rem' }}
          >
            Pertanyaan Terpopuler
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {topQuestions.map((tq, i) => {
            const catLabel = faqCategories.find((c) => c.id === tq.cat)?.label ?? tq.cat;
            const colorClass = catColors[tq.cat] ?? 'bg-slate-50 text-slate-600 border-slate-200';

            return (
              <button
                key={i}
                onClick={() => onSelect(tq.cat)}
                className='text-left group bg-white border border-slate-100 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start justify-between gap-3'
              >
                <div className='flex-1'>
                  <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border mb-2.5 ${colorClass}`}>{catLabel}</span>
                  <p
                    className='text-slate-800 font-semibold leading-snug group-hover:text-blue-700 transition-colors'
                    style={{ fontSize: '0.88rem' }}
                  >
                    {tq.q}
                  </p>
                </div>
                <ArrowRight className='w-4 h-4 text-slate-300 group-hover:text-blue-500 shrink-0 mt-0.5 transition-all group-hover:translate-x-0.5' />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
