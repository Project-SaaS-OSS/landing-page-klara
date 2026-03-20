import { CalendarCheck, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const trustPoints = ['Respons dalam 1 hari kerja', 'Konsultasi tanpa biaya', 'Tidak perlu komitmen awal'];

export function HeroKontak() {
  return (
    <section
      className='pt-24 pb-16 lg:pt-28 lg:pb-20 relative overflow-hidden'
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #ffffff 55%, #f0fdf4 100%)' }}
    >
      {/* Blobs */}
      <div className='absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-blue-100 opacity-30 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-24 -right-10 w-96 h-96 rounded-full bg-emerald-100 opacity-30 blur-3xl pointer-events-none' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* ── Left ── */}
          <div>
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold mb-6'>
              <span className='w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse' />
              Tim siap membantu Anda
            </div>

            <h1
              className='text-slate-900 tracking-tight mb-5'
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1 }}
            >
              Hubungi <span className='text-blue-600'>Tim Kami</span>
            </h1>

            <p
              className='text-slate-500 leading-relaxed mb-8 max-w-lg'
              style={{ fontSize: '1.05rem' }}
            >
              Konsultasikan kebutuhan lembaga Anda, jadwalkan demo, atau tanyakan fitur dan paket yang paling sesuai untuk operasional bimbel Anda.
            </p>

            {/* Trust points */}
            <div className='flex flex-wrap gap-x-6 gap-y-2.5 mb-8'>
              {trustPoints.map((p) => (
                <div
                  key={p}
                  className='flex items-center gap-2 text-sm text-slate-600'
                >
                  <CheckCircle2 className='w-4 h-4 text-emerald-500 shrink-0' />
                  {p}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row gap-3'>
              <a
                href='#form-kontak'
                className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200 transition-all'
              >
                <CalendarCheck className='w-4 h-4' />
                Jadwalkan Demo
              </a>
              <a
                href='https://wa.me/6281234567890'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all'
              >
                <MessageCircle className='w-4 h-4 text-emerald-500' />
                Chat WhatsApp
              </a>
            </div>
          </div>

          {/* ── Right: Klara (kiri) + Form card (kanan) sejajar, rata bawah ── */}
          <div className='hidden lg:flex items-end gap-3'>
            {/* ── Klara: berdiri di kiri form ── */}
            <div className='relative shrink-0 flex flex-col items-center self-end'>
              {/* Glow di belakang Klara */}
              <div className='pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-36 rounded-full bg-blue-200/50 blur-2xl' />

              {/* Speech bubble — tail ke kanan bawah menuju form */}
              <div className='relative z-10 mb-3 bg-white/95 border border-blue-100 rounded-2xl rounded-br-none px-4 py-2.5 shadow-lg backdrop-blur-sm'>
                <p className='text-sm font-medium text-slate-700 leading-snug whitespace-nowrap'>
                  Halo! Ada yang bisa
                  <br />
                  saya bantu? 😊
                </p>
                {/* Tail */}
                <span
                  className='absolute -bottom-2 right-3 w-3 h-3 rotate-45 bg-white/95 border-b border-r border-blue-100'
                  aria-hidden='true'
                />
              </div>

              {/* Klara image */}
              <Image
                src='/assets/klara-kontak.png'
                alt='Maskot customer support KLARA'
                width={320}
                height={320}
                className='relative z-10 w-[110px] xl:w-[130px] h-auto object-contain drop-shadow-[0_18px_32px_rgba(37,99,235,0.18)]'
                priority
              />
            </div>

            {/* ── Form card ── */}
            <div className='relative w-full max-w-md'>
              <div className='bg-white rounded-3xl border border-slate-100 shadow-xl p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200'>
                    <MessageCircle className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <p className='text-slate-900 font-bold text-sm'>Konsultasi Gratis</p>
                    <p className='text-slate-400 text-xs'>Tanpa komitmen, tanpa biaya</p>
                  </div>
                </div>

                {/* Fake form fields */}
                <div className='space-y-3 mb-5'>
                  {['Nama Lembaga Anda', 'Email atau WhatsApp', 'Jumlah Siswa'].map((ph) => (
                    <div
                      key={ph}
                      className='h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center px-4'
                    >
                      <span className='text-slate-400 text-xs'>{ph}</span>
                    </div>
                  ))}
                  <div className='h-20 rounded-xl bg-slate-50 border border-slate-200 flex items-start p-4'>
                    <span className='text-slate-400 text-xs'>Ceritakan kebutuhan lembaga Anda...</span>
                  </div>
                </div>

                <div className='w-full py-3 rounded-xl bg-blue-600 flex items-center justify-center gap-2'>
                  <span className='text-white text-xs font-bold'>Kirim Permintaan</span>
                  <ArrowRight className='w-3.5 h-3.5 text-white' />
                </div>

                <p className='text-center text-slate-400 text-[11px] mt-3'>Tim kami akan merespons secepatnya</p>
              </div>

              {/* Floating badges (tidak berubah dari versi asli) */}
              <div className='absolute -top-4 -right-4 bg-white rounded-2xl border border-emerald-200 shadow-lg px-4 py-2.5 flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                <span className='text-xs font-bold text-slate-700'>Online Sekarang</span>
              </div>
            </div>
          </div>
          {/* ── End Right ── */}
        </div>
      </div>
    </section>
  );
}
