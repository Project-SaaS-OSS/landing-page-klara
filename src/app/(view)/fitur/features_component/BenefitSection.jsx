import { Settings, CalendarCheck, Zap, Database, Eye, GraduationCap } from 'lucide-react';

const benefits = [
  {
    icon: Settings,
    color: 'text-blue-600 bg-blue-50',
    title: 'Administrasi Lebih Efisien',
    desc: 'Kurangi pekerjaan admin yang repetitif. Sistem mengotomatiskan pengelolaan data, jadwal, dan konfirmasi.',
    stat: '3x',
    statLabel: 'lebih cepat dari proses manual',
  },
  {
    icon: CalendarCheck,
    color: 'text-violet-600 bg-violet-50',
    title: 'Jadwal Lebih Rapi',
    desc: 'Tidak ada lagi bentrok jadwal atau miskomunikasi. Semua pertemuan tercatat dan bisa disesuaikan dengan mudah.',
    stat: '0',
    statLabel: 'konflik jadwal dengan sistem deteksi otomatis',
  },
  {
    icon: Zap,
    color: 'text-amber-600 bg-amber-50',
    title: 'Evaluasi Lebih Cepat',
    desc: 'Hasil placement test dan mock test langsung tersedia setelah ujian tanpa perlu koreksi manual.',
    stat: '100%',
    statLabel: 'otomatis, hasil tersedia instan',
  },
  {
    icon: Database,
    color: 'text-indigo-600 bg-indigo-50',
    title: 'Data Lebih Terpusat',
    desc: 'Satu database untuk semua data siswa, guru, program, dan laporan. Tidak perlu lagi spreadsheet terpisah.',
    stat: '1',
    statLabel: 'sistem untuk semua kebutuhan data',
  },
  {
    icon: Eye,
    color: 'text-teal-600 bg-teal-50',
    title: 'Progress Terpantau',
    desc: 'Perkembangan siswa dan absensi terekam otomatis di setiap sesi sehingga evaluasi lebih cepat dan akurat.',
    stat: 'Real-time',
    statLabel: 'data dan progress selalu terbarui',
  },
  {
    icon: GraduationCap,
    color: 'text-emerald-600 bg-emerald-50',
    title: 'Pengalaman Belajar Lebih Terstruktur',
    desc: 'Siswa mendapat akses materi yang terurut, jadwal yang jelas, dan feedback yang terdokumentasi dengan baik.',
    stat: '94%',
    statLabel: 'tingkat kepuasan siswa di lembaga pengguna',
  },
];

export function BenefitSection() {
  return (
    <section
      className='py-20 lg:py-28'
      style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Dampak Nyata</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Dampak yang Bisa Dirasakan <span className='text-blue-600'>Lembaga Anda</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Setiap fitur dirancang untuk memberikan manfaat operasional yang nyata dan terukur bagi lembaga kursus.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {benefits.map((b) => (
            <div
              key={b.title}
              className='bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
            >
              <div className={`w-11 h-11 rounded-2xl ${b.color} flex items-center justify-center mb-4`}>
                <b.icon className='w-5 h-5' />
              </div>

              <h3
                className='text-slate-900 font-bold mb-2'
                style={{ fontSize: '0.95rem' }}
              >
                {b.title}
              </h3>
              <p className='text-slate-500 text-sm leading-relaxed mb-4'>{b.desc}</p>

              <div className='pt-4 border-t border-slate-50'>
                <span className='text-xl font-extrabold text-blue-600'>{b.stat}</span>
                <p className='text-xs text-slate-400 mt-0.5'>{b.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
