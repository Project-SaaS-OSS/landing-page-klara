import { CalendarDays, BookOpen, TrendingUp, CheckSquare, Database, Award, Check, Activity } from 'lucide-react';

const categories = [
  {
    icon: CalendarDays,
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
    badge: 'bg-blue-100 text-blue-700',
    tag: 'Jadwal',
    title: 'Jadwal & Pertemuan',
    desc: 'Kelola jadwal kelas, booking pertemuan, antrian, perubahan jadwal, dan reschedule dengan alur yang lebih jelas dan minim konflik.',
    points: ['Jadwal pertemuan', 'Antrian kelas', 'Reschedule kelas', 'Konfirmasi perubahan jadwal', 'Pengingat jadwal otomatis'],
  },
  {
    icon: BookOpen,
    color: 'from-violet-500 to-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-100 hover:border-violet-300',
    badge: 'bg-violet-100 text-violet-700',
    tag: 'Konten',
    title: 'Modul & Konten Pembelajaran',
    desc: 'Simpan dan bagikan materi belajar dalam satu sistem agar pengajar lebih mudah mengatur konten dan siswa lebih siap belajar.',
    points: ['Modul pembelajaran', 'Detail materi per sesi', 'Assignment / tugas', 'Akses konten siswa', 'Progress modul'],
  },
  {
    icon: TrendingUp,
    color: 'from-emerald-500 to-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100 hover:border-emerald-300',
    badge: 'bg-emerald-100 text-emerald-700',
    tag: 'Monitoring',
    title: 'Progress Belajar',
    desc: 'Pantau perkembangan siswa dari setiap pertemuan agar pembelajaran lebih terukur dan dapat dievaluasi secara berkala.',
    points: ['Progress siswa per sesi', 'Histori pembelajaran', 'Catatan perkembangan', 'Pemantauan hasil belajar'],
  },
  {
    icon: Activity,
    color: 'from-sky-500 to-sky-700',
    bg: 'bg-sky-50',
    border: 'border-sky-100 hover:border-sky-300',
    badge: 'bg-sky-100 text-sky-700',
    tag: 'Aktivitas',
    title: 'Activity Tracking',
    desc: 'Rekam dan pantau aktivitas belajar siswa serta kehadiran guru secara otomatis dalam satu sistem yang terpusat.',
    points: ['Rekam aktivitas siswa', 'Timesheet guru', 'Log kehadiran digital', 'Riwayat aktivitas lengkap'],
  },
  {
    icon: CheckSquare,
    color: 'from-teal-500 to-teal-700',
    bg: 'bg-teal-50',
    border: 'border-teal-100 hover:border-teal-300',
    badge: 'bg-teal-100 text-teal-700',
    tag: 'Operasional',
    title: 'Absensi & Operasional',
    desc: 'Catat kehadiran guru dan siswa dengan lebih rapi serta dukung operasional harian lembaga kursus.',
    points: ['Absensi guru digital', 'Absensi siswa digital', 'Konfirmasi absensi', 'Riwayat kehadiran', 'Data shift / jam pelajaran'],
  },
  {
    icon: Database,
    color: 'from-indigo-500 to-indigo-700',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100 hover:border-indigo-300',
    badge: 'bg-indigo-100 text-indigo-700',
    tag: 'Data',
    title: 'Manajemen Data & Program',
    desc: 'Kelola data siswa, guru, program kursus, akun, dan data operasional lainnya dalam satu dashboard terpusat.',
    points: ['Data siswa', 'Data guru', 'Konfirmasi akun', 'Program kursus', 'Data konsultan pendidikan'],
  },
  {
    icon: Award,
    color: 'from-rose-500 to-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-100 hover:border-rose-300',
    badge: 'bg-rose-100 text-rose-700',
    tag: 'Laporan',
    title: 'Laporan, Sertifikat & Testimoni',
    desc: 'Akses laporan progress belajar, statistik operasional, sertifikat, dan masukan dari siswa dalam satu alur yang terorganisir.',
    points: ['Laporan progress siswa', 'Statistik jumlah siswa', 'Sertifikat digital', 'Testimoni siswa', 'Rekap operasional'],
  },
];

export function FeatureCategories() {
  return (
    <section
      className='py-20 lg:py-28'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Kategori Fitur</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Kelompok <span className='text-blue-600'>Fitur Utama</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Setiap fitur dirancang untuk menjawab kebutuhan operasional dan pembelajaran di lembaga kursus modern.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`bg-white rounded-2xl border-2 ${cat.border} p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className={`w-11 h-11 rounded-2xl bg-linear-to-br ${cat.color} flex items-center justify-center mb-4 shadow-sm`}>
                <cat.icon className='w-5 h-5 text-white' />
              </div>

              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${cat.badge} uppercase tracking-wide`}>{cat.tag}</span>

              <h3
                className='text-slate-900 font-bold mt-3 mb-2'
                style={{ fontSize: '0.95rem' }}
              >
                {cat.title}
              </h3>
              <p className='text-slate-500 text-xs leading-relaxed mb-4'>{cat.desc}</p>

              <ul className='space-y-1.5'>
                {cat.points.map((pt) => (
                  <li
                    key={pt}
                    className='flex items-center gap-2 text-xs text-slate-600'
                  >
                    <Check className='w-3.5 h-3.5 text-emerald-500 shrink-0' />
                    {pt}
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
