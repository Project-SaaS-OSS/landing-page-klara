import { Users, UserCheck, CalendarDays, TrendingUp, CheckSquare, RefreshCw, BarChart3, PieChart, BookOpen, Clock, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Users,
    color: 'text-blue-600 bg-blue-50',
    title: 'Data Siswa',
    desc: 'Kelola data siswa aktif, selesai, dan histori pembelajaran secara terstruktur.',
    tag: 'Akademik',
  },
  {
    icon: UserCheck,
    color: 'text-violet-600 bg-violet-50',
    title: 'Data Guru',
    desc: 'Atur profil tutor, jadwal mengajar, dan timesheet kehadiran dalam satu panel.',
    tag: 'SDM',
  },
  {
    icon: CalendarDays,
    color: 'text-indigo-600 bg-indigo-50',
    title: 'Jadwal Pertemuan',
    desc: 'Susun jadwal kelas lebih rapi dengan deteksi konflik otomatis.',
    tag: 'Operasional',
  },
  {
    icon: TrendingUp,
    color: 'text-emerald-600 bg-emerald-50',
    title: 'Progress Belajar',
    desc: 'Pantau perkembangan siswa per modul secara real-time dan visual.',
    tag: 'Monitoring',
  },
  {
    icon: BookOpen,
    color: 'text-sky-600 bg-sky-50',
    title: 'Modul Pembelajaran',
    desc: 'Kelola materi dan konten belajar dalam satu sistem terstruktur per level.',
    tag: 'Akademik',
  },
  {
    icon: Clock,
    color: 'text-amber-600 bg-amber-50',
    title: 'Timesheet Guru',
    desc: 'Rekam kehadiran dan jam mengajar guru secara otomatis dan akurat.',
    tag: 'Operasional',
  },
  {
    icon: CheckSquare,
    color: 'text-teal-600 bg-teal-50',
    title: 'Absensi Digital',
    desc: 'Catat kehadiran siswa dan guru secara praktis, akurat, dan terekam.',
    tag: 'Operasional',
  },
  {
    icon: RefreshCw,
    color: 'text-rose-600 bg-rose-50',
    title: 'Reschedule',
    desc: 'Ubah jadwal kelas tanpa mengganggu jadwal lain dengan mudah.',
    tag: 'Operasional',
  },
  {
    icon: BarChart3,
    color: 'text-orange-600 bg-orange-50',
    title: 'Laporan',
    desc: 'Akses laporan aktivitas operasional dan progress siswa kapan saja.',
    tag: 'Laporan',
  },
  {
    icon: PieChart,
    color: 'text-purple-600 bg-purple-50',
    title: 'Statistik Siswa',
    desc: 'Lihat gambaran pertumbuhan dan performa lembaga secara visual.',
    tag: 'Laporan',
  },
];

export function FeaturesSection() {
  return (
    <section
      id='fitur'
      className='py-20 lg:py-28 bg-white'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Fitur Unggulan</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Fitur Lengkap untuk Kebutuhan <span className='text-blue-600'>Bimbel Modern</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Semua yang dibutuhkan untuk menjalankan operasional lembaga kursus ada di satu tempat.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5'>
          {features.map((feat) => (
            <div
              key={feat.title}
              className='group p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300 cursor-pointer'
            >
              <div className={`w-10 h-10 rounded-xl ${feat.color} flex items-center justify-center mb-3`}>
                <feat.icon className='w-5 h-5' />
              </div>
              <div className='flex items-center justify-between mb-1'>
                <h3
                  className='text-slate-800 font-semibold'
                  style={{ fontSize: '0.9rem' }}
                >
                  {feat.title}
                </h3>
              </div>
              <p className='text-slate-400 text-xs leading-relaxed mb-3'>{feat.desc}</p>
              <span className='text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500'>{feat.tag}</span>
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <a
            href='#demo'
            className='inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline'
          >
            Lihat Semua Fitur <ArrowRight className='w-4 h-4' />
          </a>
        </div>
      </div>
    </section>
  );
}
