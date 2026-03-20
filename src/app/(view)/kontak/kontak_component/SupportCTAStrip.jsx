import { MessageCircle, CalendarCheck } from 'lucide-react';

export function SupportCTAStrip() {
  return (
    <section
      className='py-12 lg:py-16'
      style={{ background: '#f8fafc' }}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className='rounded-3xl overflow-hidden'
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #0891b2 100%)',
          }}
        >
          <div className='px-8 py-10 lg:px-14 lg:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
            <div>
              <p className='text-blue-200 text-xs font-bold uppercase tracking-widest mb-2'>Butuh Jawaban Lebih Cepat?</p>
              <h2
                className='text-white font-extrabold tracking-tight mb-2 leading-snug'
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
              >
                Hubungi tim kami langsung via <span className='text-emerald-300'>WhatsApp</span> atau jadwalkan demo.
              </h2>
              <p className='text-blue-100 text-sm leading-relaxed max-w-xl'>Hubungi tim kami melalui WhatsApp atau jadwalkan demo untuk melihat sistem secara langsung tanpa perlu menunggu lama.</p>
            </div>

            <div className='flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0'>
              <a
                href='https://wa.me/6281234567890'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-900/30'
              >
                <MessageCircle className='w-4 h-4' />
                Chat WhatsApp
              </a>
              <a
                href='#form-kontak'
                className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all'
              >
                <CalendarCheck className='w-4 h-4' />
                Jadwalkan Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
