import { UserCog, CalendarDays, BookOpen, ClipboardCheck, BarChart3 } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: UserCog,
    color: 'bg-blue-600',
    ring: 'ring-blue-100',
    label: 'Kelola Akun & Data',
    title: 'Kelola Akun dan Data Pengguna',
    desc: 'Daftarkan siswa dan guru, konfirmasi akun, dan atur data awal program yang akan berjalan di lembaga.',
  },
  {
    num: '02',
    icon: CalendarDays,
    color: 'bg-violet-600',
    ring: 'ring-violet-100',
    label: 'Atur Jadwal',
    title: 'Atur Jadwal dan Pertemuan',
    desc: 'Susun jadwal kelas, tentukan ruang, atur antrian, dan pastikan tidak ada konflik jadwal antara guru dan siswa.',
  },
  {
    num: '03',
    icon: BookOpen,
    color: 'bg-sky-600',
    ring: 'ring-sky-100',
    label: 'Bagikan Materi',
    title: 'Bagikan Materi dan Akses Pembelajaran',
    desc: 'Guru mengunggah modul dan assignment. Siswa mengakses konten sesuai urutan progres belajar masing-masing.',
  },
  {
    num: '04',
    icon: ClipboardCheck,
    color: 'bg-amber-500',
    ring: 'ring-amber-100',
    label: 'Catat Absensi & Aktivitas',
    title: 'Catat Absensi dan Rekam Aktivitas Belajar',
    desc: 'Input kehadiran siswa dan guru, rekam aktivitas belajar harian, dan pantau timesheet pengajar secara otomatis.',
  },
  {
    num: '05',
    icon: BarChart3,
    color: 'bg-emerald-600',
    ring: 'ring-emerald-100',
    label: 'Pantau & Laporan',
    title: 'Pantau Progress, Absensi, dan Laporan Akhir',
    desc: 'Lihat perkembangan setiap siswa, rekap absensi, dan akses laporan lengkap untuk pengambilan keputusan lembaga.',
  },
];

export function WorkflowSection() {
  return (
    <section className='py-20 lg:py-28 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 border border-slate-200'>Alur Kerja</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Bagaimana Sistem Ini <span className='text-blue-600'>Bekerja?</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Lima langkah sederhana yang menggambarkan alur penggunaan sistem dari awal hingga laporan akhir.</p>
        </div>

        <div className='hidden lg:flex items-start relative'>
          <div className='absolute top-9 left-[calc(10%+28px)] right-[calc(10%+28px)] h-0.5 bg-linear-to-r from-blue-200 via-violet-200 to-emerald-200' />

          {steps.map((step) => (
            <div
              key={step.num}
              className='flex-1 flex flex-col items-center text-center px-3 relative z-10'
            >
              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-4 shadow-lg ring-4 ${step.ring} bg-white`}>
                <step.icon className='w-6 h-6 text-white' />
              </div>

              <span className='text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1'>{step.num}</span>
              <p className='text-xs font-bold text-slate-500 mb-3'>{step.label}</p>

              <div className='bg-slate-50 rounded-2xl border border-slate-100 p-4 hover:shadow-md hover:border-blue-100 transition-all duration-300'>
                <h3
                  className='text-slate-800 font-bold mb-2'
                  style={{ fontSize: '0.85rem', lineHeight: 1.3 }}
                >
                  {step.title}
                </h3>
                <p className='text-slate-500 text-xs leading-relaxed'>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='lg:hidden space-y-4'>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className='flex gap-4 items-start'
            >
              <div className='flex flex-col items-center'>
                <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shrink-0 shadow-md`}>
                  <step.icon className='w-5 h-5 text-white' />
                </div>
                {i < steps.length - 1 && <div className='w-0.5 flex-1 bg-slate-200 my-2 min-h-6' />}
              </div>

              <div className='flex-1 pb-4'>
                <span className='text-[10px] font-bold text-slate-400 uppercase tracking-widest'>{step.num}</span>
                <h3
                  className='text-slate-800 font-bold mt-1 mb-1.5'
                  style={{ fontSize: '0.9rem' }}
                >
                  {step.title}
                </h3>
                <p className='text-slate-500 text-sm leading-relaxed'>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
