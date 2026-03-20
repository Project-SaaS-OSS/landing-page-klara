import { ArrowRight, Send, CheckCircle2 } from 'lucide-react';

const perks = ['Konsultasi gratis, tanpa biaya', 'Demo bisa dijadwalkan sesuai waktu Anda', 'Tidak perlu komitmen di awal'];

export function FinalCTAKontak() {
  return (
    <section className='py-20 lg:py-28 relative overflow-hidden'>
      <div
        className='absolute inset-0'
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #0891b2 100%)',
        }}
      />
      <div className='absolute -top-32 -right-32 w-150 h-150 rounded-full bg-white/5 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-32 -left-32 w-150 h-150 rounded-full bg-white/5 blur-3xl pointer-events-none' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl pointer-events-none' />

      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold mb-7'>
          <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
          Tim Siap Membantu
        </div>

        <h2
          className='text-white mb-5 tracking-tight'
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Siap Mendiskusikan Kebutuhan <span className='text-sky-300'>Lembaga Anda?</span>
        </h2>

        <p
          className='text-blue-100 leading-relaxed mb-10 max-w-xl mx-auto'
          style={{ fontSize: '1.05rem' }}
        >
          Kami siap membantu Anda memahami fitur, paket, dan alur implementasi yang paling sesuai dengan kondisi dan kebutuhan operasional lembaga Anda.
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
            href='#form-kontak'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-all shadow-lg'
          >
            <Send className='w-4 h-4' />
            Kirim Permintaan
          </a>
          <a
            href='#mulai'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-all'
          >
            Coba Gratis
            <ArrowRight className='w-4 h-4' />
          </a>
        </div>
      </div>
    </section>
  );
}
