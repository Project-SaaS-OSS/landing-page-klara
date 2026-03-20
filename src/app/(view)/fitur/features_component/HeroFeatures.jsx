import { CalendarDays, BookOpen, TrendingUp, CheckSquare, Users, Clock, RefreshCw, BarChart3, ArrowRight, Play } from 'lucide-react';

const featureTags = [
  {
    icon: CalendarDays,
    label: 'Jadwal Pertemuan',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    icon: BookOpen,
    label: 'Modul Pembelajaran',
    color: 'bg-violet-50 text-violet-700 border-violet-100',
  },
  {
    icon: TrendingUp,
    label: 'Progress Belajar',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    icon: CheckSquare,
    label: 'Absensi Digital',
    color: 'bg-teal-50 text-teal-700 border-teal-100',
  },
  {
    icon: Users,
    label: 'Data Siswa & Guru',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  },
  {
    icon: Clock,
    label: 'Timesheet Guru',
    color: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    icon: RefreshCw,
    label: 'Reschedule',
    color: 'bg-rose-50 text-rose-700 border-rose-100',
  },
  {
    icon: BarChart3,
    label: 'Laporan',
    color: 'bg-orange-50 text-orange-700 border-orange-100',
  },
];

export function HeroFeatures() {
  return (
    <section
      className='pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden'
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #ffffff 55%, #f0fdf4 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          <div className='flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0'>
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5'>
              <span className='w-1.5 h-1.5 rounded-full bg-blue-500' />
              Halaman Fitur — KLARA
            </div>

            <h1
              className='text-slate-900 mb-5 tracking-tight'
              style={{
                fontSize: 'clamp(1.9rem, 4vw, 2.9rem)',
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              Fitur Lengkap untuk Operasional dan Pembelajaran yang Lebih <span className='text-blue-600'>Terintegrasi</span>
            </h1>

            <p
              className='text-slate-500 mb-8 leading-relaxed'
              style={{ fontSize: '1.05rem' }}
            >
              Satu sistem untuk mengatur jadwal, materi, evaluasi, absensi, laporan, dan data operasional bimbel secara lebih rapi, cepat, dan terpusat.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6'>
              <a
                href='#coba'
                className='inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-200 transition-all'
              >
                Coba Gratis
                <ArrowRight className='w-4 h-4' />
              </a>
              <a
                href='#demo'
                className='inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-xl transition-all'
              >
                <Play className='w-4 h-4 fill-blue-600 text-blue-600' />
                Lihat Demo
              </a>
            </div>

            <p className='text-xs text-slate-400 font-medium'>Dirancang untuk admin, guru, dan siswa · Siap digunakan langsung</p>
          </div>

          <div className='flex-1 w-full max-w-xl'>
            <div className='grid grid-cols-2 gap-4'>
              {featureTags.map((feat) => (
                <div
                  key={feat.label}
                  className={`flex items-center gap-3 px-4 py-4 rounded-2xl border ${feat.color} bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <div
                    className='w-9 h-9 rounded-xl bg-current/10 flex items-center justify-center shrink-0'
                    style={{ background: 'rgba(0,0,0,0.06)' }}
                  >
                    <feat.icon className='w-4 h-4' />
                  </div>
                  <span className='text-sm font-semibold'>{feat.label}</span>
                </div>
              ))}
            </div>

            <div className='mt-5 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium'>
              <div className='h-px flex-1 bg-slate-200' />
              <span className='px-3 py-1.5 bg-slate-100 rounded-full'>Semua terhubung dalam satu platform</span>
              <div className='h-px flex-1 bg-slate-200' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
