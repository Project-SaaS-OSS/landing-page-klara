import { MapPin, Globe, Building2 } from 'lucide-react';

export function LocationSection() {
  return (
    <section className='py-14 lg:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl mb-10'>
          <h2
            className='text-slate-900 font-extrabold tracking-tight mb-3'
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Lokasi <span className='text-blue-600'>Kami</span>
          </h2>
          <p className='text-slate-500 text-sm leading-relaxed'>Kami siap melayani konsultasi online untuk berbagai lembaga pendidikan di seluruh Indonesia.</p>
        </div>

        <div className='grid lg:grid-cols-3 gap-6 items-stretch'>
          <div className='lg:col-span-2 rounded-3xl bg-slate-100 border border-slate-200 overflow-hidden relative min-h-70 flex items-center justify-center'>
            <div className='absolute inset-0 opacity-20'>
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`h-${i}`}
                  className='absolute w-full border-t border-slate-400'
                  style={{ top: `${i * 10}%` }}
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={`v-${i}`}
                  className='absolute h-full border-l border-slate-400'
                  style={{ left: `${i * 10}%` }}
                />
              ))}
            </div>

            <div className='absolute inset-0 opacity-10'>
              <div
                className='absolute w-full h-1 bg-slate-500'
                style={{ top: '35%' }}
              />
              <div
                className='absolute w-full h-1 bg-slate-500'
                style={{ top: '65%' }}
              />
              <div
                className='absolute h-full w-1 bg-slate-500'
                style={{ left: '40%' }}
              />
              <div
                className='absolute h-full w-1 bg-slate-500'
                style={{ left: '70%' }}
              />
            </div>

            <div className='relative flex flex-col items-center'>
              <div className='w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-300 mb-3'>
                <MapPin className='w-8 h-8 text-white' />
              </div>
              <div className='bg-white rounded-2xl border border-slate-200 shadow-lg px-5 py-3 text-center'>
                <p className='text-slate-900 font-bold text-sm'>KLARA HQ</p>
                <p className='text-slate-500 text-xs mt-0.5'>Jakarta Selatan, Indonesia</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex-1 bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col justify-center'>
              <div className='w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-3'>
                <Building2 className='w-5 h-5 text-blue-600' />
              </div>
              <p className='text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1'>Alamat</p>
              <p className='text-slate-900 font-bold text-sm mb-1'>Jakarta Selatan</p>
              <p className='text-slate-500 text-xs leading-relaxed'>Gedung Inovasi, Jl. Pendidikan No. 12, Jakarta Selatan, DKI Jakarta 12345</p>
            </div>

            <div className='flex-1 bg-blue-600 rounded-2xl p-6 flex flex-col justify-center'>
              <div className='w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3'>
                <Globe className='w-5 h-5 text-white' />
              </div>
              <p className='text-blue-200 text-[11px] font-bold uppercase tracking-widest mb-1'>Layanan Online</p>
              <p className='text-white font-bold text-sm mb-2'>Demo & Konsultasi Online</p>
              <p className='text-blue-100 text-xs leading-relaxed'>Semua sesi demo dan konsultasi dapat dilakukan secara online melalui video call sesuai jadwal yang disepakati.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
