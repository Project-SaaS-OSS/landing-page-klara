import { ArrowRight, CalendarCheck, CheckCircle2 } from 'lucide-react';

const benefits = ['Akses semua fitur selama 1 bulan gratis', 'Tidak perlu kartu kredit', 'Setup mudah, langsung bisa dipakai'];

export function FinalCTAFeatures() {
  return (
    <section className='py-20 lg:py-28 relative overflow-hidden'>
      <div
        className='absolute inset-0'
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #0891b2 100%)' }}
      />
      <div className='absolute -top-32 -right-32 w-125 h-125 rounded-full bg-white/5 blur-3xl' />
      <div className='absolute -bottom-32 -left-32 w-125 h-125 rounded-full bg-white/5 blur-3xl' />

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-6'>
          <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
          Siap Memulai? Gratis 1 Bulan
        </div>

        <h2
          className='text-white mb-5 tracking-tight'
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15 }}
        >
          Lihat Bagaimana Fitur Ini <span className='text-sky-300'>Bekerja untuk Lembaga Anda</span>
        </h2>

        <p
          className='text-blue-100 leading-relaxed mb-10 max-w-xl mx-auto'
          style={{ fontSize: '1.05rem' }}
        >
          Jadwalkan demo atau coba sistem untuk melihat bagaimana operasional dan pembelajaran bisa dikelola dalam satu dashboard.
        </p>

        <div className='flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10'>
          {benefits.map((b) => (
            <div
              key={b}
              className='flex items-center gap-2 text-sm text-blue-100'
            >
              <CheckCircle2 className='w-4 h-4 text-emerald-400 shrink-0' />
              {b}
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='#coba'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-lg'
          >
            Coba Gratis Sekarang
            <ArrowRight className='w-4 h-4' />
          </a>
          <a
            href='#demo'
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
