import { CheckCircle2, Play, Zap } from 'lucide-react';
import { HeroIllustration } from './HeroIllustration';

export function Hero() {
  return (
    <section
      id='beranda'
      className='pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden'
      style={{
        background: 'linear-gradient(155deg, #EEF5FF 0%, #ffffff 48%, #F0FDF6 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-14 lg:gap-10 xl:gap-16'>
          <div className='flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0 lg:max-w-none'>
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-6'>
              <span className='w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse' />
              Platform Manajemen Bimbel #1 Indonesia
            </div>

            <h1
              className='text-slate-900 mb-5 tracking-tight'
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              Kelola Bimbel Lebih Rapi, <span className='text-blue-600'>dalam Satu Sistem Terpadu</span>
            </h1>

            <p
              className='text-slate-500 mb-8 leading-relaxed'
              style={{ fontSize: '1.05rem' }}
            >
              KLARA menyatukan jadwal, absensi, progress belajar, dan laporan operasional dalam satu dashboard cerdas—tanpa ribet spreadsheet.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8'>
              <a
                href='#coba'
                className='inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 transition-all hover:shadow-blue-300 hover:-translate-y-0.5'
              >
                Coba Gratis 1 Bulan
                <CheckCircle2 className='w-4 h-4' />
              </a>
              <a
                href='#demo'
                className='inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-xl transition-all hover:-translate-y-0.5'
              >
                <Play className='w-4 h-4 fill-blue-600 text-blue-600' />
                Lihat Demo
              </a>
            </div>

            <div className='inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100 text-left max-w-sm mx-auto lg:mx-0'>
              <div className='w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0'>
                <Zap className='w-4 h-4 text-emerald-600' />
              </div>
              <p className='text-sm text-slate-700 leading-snug'>
                <span className='font-semibold text-emerald-700'>Hemat 10+ jam/minggu</span> dari pekerjaan operasional berulang yang menyita waktu admin.
              </p>
            </div>

            <p className='text-xs text-slate-400 font-medium mt-5'>Cocok untuk bimbel, kursus, dan lembaga pendidikan · Tanpa kartu kredit</p>
          </div>

          <div className='flex-1 w-full flex items-center justify-center lg:justify-end'>
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
