import { BookOpen, Calendar, BarChart3, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const pillars = [
  {
    icon: BookOpen,
    gradient: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    badge: 'bg-blue-100 text-blue-700',
    iconColor: '#2563EB',
    title: 'Manajemen Akademik',
    desc: 'Kelola seluruh data akademik siswa dalam satu tempat yang terstruktur dan mudah diakses.',
    features: ['Data lengkap tiap siswa', 'Modul pembelajaran bertahap', 'Tracking progress belajar', 'Penerbitan sertifikat'],
  },
  {
    icon: Calendar,
    gradient: 'from-violet-500 to-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    badge: 'bg-violet-100 text-violet-700',
    iconColor: '#7C3AED',
    title: 'Operasional Kelas',
    desc: 'Atur jadwal pertemuan, ruang kelas, absensi, dan reschedule dengan cepat tanpa chaos.',
    features: ['Penjadwalan kelas otomatis', 'Kalender akademik terpadu', 'Absensi digital praktis', 'Reschedule tanpa konflik'],
  },
  {
    icon: BarChart3,
    gradient: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    badge: 'bg-emerald-100 text-emerald-700',
    iconColor: '#059669',
    title: 'Monitoring & Evaluasi',
    desc: 'Pantau kemajuan siswa secara objektif melalui progress belajar, absensi, dan laporan analitik.',
    features: ['Progress belajar terstruktur', 'Absensi digital', 'Laporan performa lengkap', 'Statistik pertumbuhan siswa'],
  },
];

export function SolutionSection() {
  return (
    <section
      id='solusi'
      className='py-20 lg:py-28 overflow-hidden'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16'>
          <div className='flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0'>
            <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Solusi Kami</span>

            <h2
              className='text-slate-900 mb-5 tracking-tight'
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              Satu Sistem untuk Operasional, <span className='text-blue-600'>Akademik, dan Evaluasi</span>
            </h2>

            <p className='text-slate-500 leading-relaxed mb-6'>Platform terintegrasi yang menggantikan spreadsheet dan sistem terpisah menjadi satu dashboard cerdas yang mudah digunakan oleh seluruh tim.</p>

            <ul className='space-y-3 mb-8'>
              {['Semua data terpusat dalam satu platform', 'Diakses kapan saja dari perangkat apapun', 'Onboarding mudah, tanpa perlu pelatihan teknis'].map((point) => (
                <li
                  key={point}
                  className='flex items-start gap-2.5 text-sm text-slate-600'
                >
                  <div className='w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5'>
                    <Check className='w-3 h-3 text-blue-600' />
                  </div>
                  {point}
                </li>
              ))}
            </ul>

            <a
              href='#fitur'
              className='inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group'
            >
              Lihat semua fitur
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </a>
          </div>

          <div className='flex-1 w-full max-w-[560px] mx-auto lg:mx-0'>
            <div className='relative'>
              <div className='absolute left-10 top-12 h-52 w-52 rounded-full bg-blue-200/50 blur-3xl' />
              <div className='absolute right-6 top-16 h-40 w-40 rounded-full bg-sky-100/70 blur-3xl' />
              <div className='absolute left-24 bottom-8 h-40 w-40 rounded-full bg-indigo-100/60 blur-3xl' />

              <div className='relative z-10 flex justify-center'>
                <Image
                  src='/assets/klara-solusi.png'
                  alt='Tim KLARA membantu lembaga pendidikan berkembang'
                  width={1024}
                  height={1536}
                  sizes='(min-width: 1024px) 34rem, 100vw'
                  className='w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[430px] h-auto object-contain drop-shadow-[0_24px_48px_rgba(37,99,235,0.18)]'
                  priority
                />
              </div>

              <div className='absolute right-6 top-4 z-20 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg border border-blue-100'>
                <p className='text-xs font-bold text-blue-700'>✓ Solusi Terintegrasi</p>
              </div>

              <div className='absolute left-1/2 bottom-2 z-20 w-full max-w-[500px] -translate-x-1/2 px-2 sm:px-3'>
                <div className='grid grid-cols-3 gap-3'>
                  <div className='rounded-[22px] border border-white/40 bg-white/28 backdrop-blur-xl shadow-[0_10px_30px_rgba(37,99,235,0.14)] px-3 py-3 sm:px-4 sm:py-4 min-h-[106px] flex flex-col items-center justify-center text-center'>
                    <p className='text-blue-700 font-bold text-[18px] sm:text-[20px] leading-none'>3x</p>
                    <p className='mt-2 text-slate-600 text-[11px] sm:text-[12px] leading-snug'>lebih efisien</p>
                  </div>

                  <div className='rounded-[22px] border border-white/40 bg-white/28 backdrop-blur-xl shadow-[0_10px_30px_rgba(37,99,235,0.14)] px-3 py-3 sm:px-4 sm:py-4 min-h-[106px] flex flex-col items-center justify-center text-center'>
                    <p className='text-blue-700 font-bold text-[18px] sm:text-[20px] leading-[1.05]'>
                      1<span className='block mt-1'>Dashboard</span>
                    </p>
                    <p className='mt-2 text-slate-600 text-[11px] sm:text-[12px] leading-snug'>semua terpusat</p>
                  </div>

                  <div className='rounded-[22px] border border-white/40 bg-white/28 backdrop-blur-xl shadow-[0_10px_30px_rgba(37,99,235,0.14)] px-3 py-3 sm:px-4 sm:py-4 min-h-[106px] flex flex-col items-center justify-center text-center'>
                    <p className='text-blue-700 font-bold text-[18px] sm:text-[20px] leading-none'>Real-time</p>
                    <p className='mt-2 text-slate-600 text-[11px] sm:text-[12px] leading-snug'>update otomatis</p>
                  </div>
                </div>
              </div>
              <div className='absolute left-1/2 bottom-2 z-20 w-full max-w-[500px] -translate-x-1/2 px-2 sm:px-3'>
                <div className='grid grid-cols-3 gap-3'>
                  <div className='rounded-[22px] border border-white/40 bg-white/28 backdrop-blur-xl shadow-[0_10px_30px_rgba(37,99,235,0.14)] px-3 py-3 sm:px-4 sm:py-4 min-h-[106px] flex flex-col items-center justify-center text-center'>
                    <p className='text-blue-700 font-bold text-[18px] sm:text-[20px] leading-none'>3x</p>
                    <p className='mt-2 text-slate-600 text-[11px] sm:text-[12px] leading-snug'>lebih efisien</p>
                  </div>

                  <div className='rounded-[22px] border border-white/40 bg-white/28 backdrop-blur-xl shadow-[0_10px_30px_rgba(37,99,235,0.14)] px-3 py-3 sm:px-4 sm:py-4 min-h-[106px] flex flex-col items-center justify-center text-center'>
                    <p className='text-blue-700 font-bold text-[18px] sm:text-[20px] leading-[1.05]'>
                      1<span className='block mt-1'>Dashboard</span>
                    </p>
                    <p className='mt-2 text-slate-600 text-[11px] sm:text-[12px] leading-snug'>semua terpusat</p>
                  </div>

                  <div className='rounded-[22px] border border-white/40 bg-white/28 backdrop-blur-xl shadow-[0_10px_30px_rgba(37,99,235,0.14)] px-3 py-3 sm:px-4 sm:py-4 min-h-[106px] flex flex-col items-center justify-center text-center'>
                    <p className='text-blue-700 font-bold text-[18px] sm:text-[20px] leading-none'>Real-time</p>
                    <p className='mt-2 text-slate-600 text-[11px] sm:text-[12px] leading-snug'>update otomatis</p>
                  </div>
                </div>
              </div>
              <div className='h-16 sm:h-20' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`bg-white rounded-2xl border ${pillar.border} p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${pillar.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                <pillar.icon className='w-6 h-6 text-white' />
              </div>

              <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pillar.badge} uppercase tracking-wide`}>Pilar {idx + 1}</span>

              <h3
                className='text-slate-900 font-bold mt-3 mb-2'
                style={{ fontSize: '1.1rem' }}
              >
                {pillar.title}
              </h3>

              <p className='text-slate-500 text-sm leading-relaxed mb-5'>{pillar.desc}</p>

              <ul className='space-y-2'>
                {pillar.features.map((feat) => (
                  <li
                    key={feat}
                    className='flex items-center gap-2.5 text-sm text-slate-600'
                  >
                    <div className={`w-5 h-5 rounded-full ${pillar.bg} flex items-center justify-center shrink-0`}>
                      <Check
                        className='w-3 h-3'
                        style={{ color: pillar.iconColor }}
                      />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
