import Image from 'next/image';
import { PlayCircle, Sparkles } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section
      id='demo'
      className='relative overflow-hidden py-20 lg:py-28'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }}
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/35 blur-3xl' />
        <div className='absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl' />
        <div className='absolute right-0 top-1/3 h-72 w-72 rounded-full bg-emerald-100/35 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <span className='inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600'>
            <span className='h-1.5 w-1.5 rounded-full bg-blue-500' />
            Preview Sistem
          </span>

          <h2
            className='mt-4 tracking-tight text-slate-900'
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.65rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Dashboard yang Mudah Dipahami dan <span className='text-blue-600'>Nyaman Digunakan</span>
          </h2>

          <p className='mt-4 text-sm leading-relaxed text-slate-500 sm:text-base'>Tampilan dirancang untuk membantu tim admin, tutor, dan owner bekerja lebih cepat.</p>
        </div>

        <div className='relative mt-14 lg:mt-16'>
          <div className='pointer-events-none absolute inset-x-20 top-10 h-32 rounded-full bg-blue-200/20 blur-3xl' />

          <div className='relative flex flex-col items-center gap-8 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:gap-8'>
            <div className='relative flex w-full flex-col items-center lg:items-start'>
              <div className='relative'>
                <div className='absolute -bottom-2 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-sky-200/40 blur-2xl' />
                <Image
                  src='/assets/klara-preview.png'
                  alt='Klara memperkenalkan preview dashboard'
                  width={360}
                  height={360}
                  priority
                  className='relative h-auto w-[180px] drop-shadow-[0_20px_28px_rgba(37,99,235,0.18)] sm:w-[210px] lg:w-[250px]'
                />
              </div>
            </div>

            <div className='relative w-full rounded-[30px] border border-white/70 bg-white/80 p-3 shadow-[0_40px_110px_-28px_rgba(37,99,235,0.24)] backdrop-blur-sm sm:p-4 md:p-5'>
              <div className='absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/80 via-transparent to-blue-50/80' />

              <div className='relative rounded-[24px] border border-slate-200 bg-[#dfe8f5] p-3 sm:p-4'>
                <div className='overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_16px_45px_-20px_rgba(15,23,42,0.2)]'>
                  <div className='relative aspect-video w-full'>
                    <div className='pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-slate-900/40 to-transparent' />
                    <iframe
                      className='h-full w-full'
                      src='https://www.youtube.com/embed/uwAnvbtIjrg'
                      title='Demo Video Klara'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      referrerPolicy='strict-origin-when-cross-origin'
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
