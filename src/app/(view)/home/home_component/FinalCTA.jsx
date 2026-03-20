import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

const benefits = ['Trial 1 bulan gratis, tanpa kartu kredit', 'Setup mudah, bisa langsung digunakan', 'Dukungan teknis responsif'];

export function FinalCTA() {
  return (
    <section className='py-20 lg:py-28 relative overflow-hidden'>
      <div
        className='absolute inset-0'
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #0ea5e9 100%)',
        }}
      />
      <div className='absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl' />
      <div className='absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-white/3 blur-3xl' />

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-6 backdrop-blur-sm'>
          <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
          Mulai Hari Ini — Gratis 1 Bulan
        </div>

        <h2
          className='text-white mb-5 tracking-tight'
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          Mulai Digitalisasi Operasional <span className='text-sky-300'>Bimbel Anda</span>
        </h2>

        <p className='text-blue-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto'>Coba gratis 1 bulan atau jadwalkan demo untuk melihat bagaimana sistem ini bekerja untuk lembaga Anda.</p>

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
            className='inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:shadow-xl'
          >
            Coba Gratis Sekarang
            <ArrowRight className='w-4 h-4' />
          </a>
          <a
            href='#kontak'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm'
          >
            <MessageCircle className='w-4 h-4' />
            Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
