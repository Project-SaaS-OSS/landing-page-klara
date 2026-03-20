import { ArrowRight, CalendarCheck, CheckCircle2 } from 'lucide-react';

const perks = ['Coba gratis 1 bulan, tanpa kartu kredit', 'Onboarding mudah dan cepat', 'Dukungan tim siap membantu'];

export function FinalCTAFAQ() {
  return (
    <section className='py-20 lg:py-28 relative overflow-hidden'>
      <div
        className='absolute inset-0'
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #0891b2 100%)',
        }}
      />
      <div className='absolute -top-24 -right-24 w-125 h-125 rounded-full bg-white/5 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-24 -left-24 w-125 h-125 rounded-full bg-white/5 blur-3xl pointer-events-none' />

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-6'>
          <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
          Siap Memulai?
        </div>

        <h2
          className='text-white mb-5 tracking-tight'
          style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.12,
          }}
        >
          Masih Ingin Tahu <span className='text-sky-300'>Lebih Banyak?</span>
        </h2>

        <p
          className='text-blue-100 leading-relaxed mb-10 max-w-xl mx-auto'
          style={{ fontSize: '1.05rem' }}
        >
          Coba gratis 1 bulan atau jadwalkan demo untuk melihat bagaimana sistem ini dapat membantu lembaga Anda beroperasi lebih efisien dan terstruktur.
        </p>

        <div className='flex flex-wrap justify-center gap-x-8 gap-y-2.5 mb-10'>
          {perks.map((p) => (
            <div
              key={p}
              className='flex items-center gap-2 text-sm text-blue-100'
            >
              <CheckCircle2 className='w-4 h-4 text-emerald-400 shrink-0' />
              {p}
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='#mulai'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-lg'
          >
            Coba Gratis
            <ArrowRight className='w-4 h-4' />
          </a>
          <a
            href='/demo'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-all'
          >
            <CalendarCheck className='w-4 h-4' />
            Jadwalkan Demo
          </a>
        </div>
      </div>
    </section>
  );
}
