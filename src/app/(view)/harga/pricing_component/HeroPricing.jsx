import { ArrowRight, CalendarCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const badges = ['Tanpa setup yang rumit', 'Cocok untuk bimbel & kursus', 'Skalabel sesuai kebutuhan'];

export function HeroPricing() {
  return (
    <section
      className='pt-24 pb-16 lg:pt-28 lg:pb-20 text-center overflow-hidden relative'
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #ffffff 60%, #f0fdf4 100%)' }}
    >
      <div className='absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-emerald-100 opacity-40 blur-3xl pointer-events-none' />

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5'>
          <Sparkles className='w-3.5 h-3.5' />
          Paket Harga KLARA
        </div>

        <h1
          className='text-slate-900 mb-5 tracking-tight'
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.12 }}
        >
          Pilih Paket yang Sesuai <br className='hidden sm:block' />
          <span className='text-blue-600'>untuk Lembaga Anda</span>
        </h1>

        <p
          className='text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto'
          style={{ fontSize: '1.05rem' }}
        >
          Mulai dari kebutuhan operasional dasar hingga pengelolaan lembaga yang lebih kompleks, pilih paket yang paling sesuai dengan skala dan alur kerja tim Anda.
        </p>

        <p className='text-xs text-slate-400 font-medium mb-7'>Coba gratis 1 bulan untuk mulai mengenal sistem · Tidak perlu kartu kredit</p>

        <div className='flex flex-col sm:flex-row gap-3 justify-center mb-10'>
          <a
            href='#mulai'
            className='inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 transition-all'
          >
            Coba Gratis
            <ArrowRight className='w-4 h-4' />
          </a>
          <a
            href='#demo'
            className='inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-xl transition-all'
          >
            <CalendarCheck className='w-4 h-4' />
            Jadwalkan Demo
          </a>
        </div>

        <div className='flex flex-wrap justify-center gap-2.5'>
          {badges.map((b) => (
            <span
              key={b}
              className='inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold shadow-sm'
            >
              <CheckCircle2 className='w-3.5 h-3.5 text-emerald-500' />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
