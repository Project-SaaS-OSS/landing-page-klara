import { useState } from 'react';
import { Settings, BookOpen, GraduationCap, Check } from 'lucide-react';

const roles = [
  {
    id: 'admin',
    label: 'Admin',
    icon: Settings,
    color: 'text-blue-600',
    bg: 'bg-blue-600',
    activeBg: 'bg-blue-50 border-blue-200 text-blue-700',
    inactiveBg: 'bg-white border-slate-200 text-slate-600',
    desc: 'Admin mengelola seluruh operasional lembaga — mulai dari data guru, siswa, shift, hingga konfirmasi akun dan antrian pendaftaran.',
    features: ['Data Guru', 'Data Shift', 'Kalender', 'Absen', 'Data Siswa', 'Data Siswa Selesai', 'Konfirmasi Akun', 'Reschedule', 'Program', 'Antrian'],
    highlight: 'Pusat kendali operasional lengkap',
    mockup: [
      { label: 'Siswa Aktif', val: '248', color: 'bg-blue-50 text-blue-700' },
      { label: 'Guru Aktif', val: '32', color: 'bg-violet-50 text-violet-700' },
      { label: 'Antrian Baru', val: '14', color: 'bg-amber-50 text-amber-700' },
      { label: 'Reschedule', val: '3', color: 'bg-rose-50 text-rose-700' },
    ],
  },
  {
    id: 'guru',
    label: 'Guru',
    icon: GraduationCap,
    color: 'text-violet-600',
    bg: 'bg-violet-600',
    activeBg: 'bg-violet-50 border-violet-200 text-violet-700',
    inactiveBg: 'bg-white border-slate-200 text-slate-600',
    desc: 'Guru mengelola modul, jadwal mengajar, timesheet kehadiran, dan memantau aktivitas belajar siswa secara terstruktur.',
    features: ['Dashboard', 'Module', 'Timesheet', 'Schedule', 'Activity Tracking'],
    highlight: 'Alat pengajar profesional terintegrasi',
    mockup: [
      { label: 'Kelas Aktif', val: '6', color: 'bg-violet-50 text-violet-700' },
      { label: 'Siswa Diajar', val: '48', color: 'bg-blue-50 text-blue-700' },
      { label: 'Modul Dibuat', val: '12', color: 'bg-emerald-50 text-emerald-700' },
      { label: 'Timesheet', val: '20j', color: 'bg-amber-50 text-amber-700' },
    ],
  },
  {
    id: 'siswa',
    label: 'Siswa',
    icon: BookOpen,
    color: 'text-emerald-600',
    bg: 'bg-emerald-600',
    activeBg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    inactiveBg: 'bg-white border-slate-200 text-slate-600',
    desc: 'Siswa mengakses dashboard belajar, jadwal pertemuan, progress pembelajaran, dan modul materi yang telah disiapkan guru.',
    features: ['Dashboard', 'Jadwal Pertemuan', 'Progress Belajar', 'Module'],
    highlight: 'Pengalaman belajar mandiri terstruktur',
    mockup: [
      { label: 'Modul Selesai', val: '4/6', color: 'bg-emerald-50 text-emerald-700' },
      { label: 'Sesi Belajar', val: '18', color: 'bg-blue-50 text-blue-700' },
      { label: 'Nilai Rata-rata', val: '88', color: 'bg-amber-50 text-amber-700' },
      { label: 'Jadwal Aktif', val: '3', color: 'bg-violet-50 text-violet-700' },
    ],
  },
];

export function RoleSection() {
  const [active, setActive] = useState('admin');
  const role = roles.find((r) => r.id === active) || roles[0];

  return (
    <section
      className='py-20 lg:py-28'
      style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Fitur Pengguna</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Dirancang untuk <span className='text-blue-600'>Setiap Peran dalam Lembaga</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Fitur disusun agar setiap pengguna mendapatkan alur kerja yang relevan sesuai perannya.</p>
        </div>

        <div className='flex justify-center mb-10'>
          <div className='flex gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm'>
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setActive(r.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${active === r.id ? r.activeBg : r.inactiveBg}`}
              >
                <r.icon className='w-4 h-4' />
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          <div className='flex-1'>
            <div className='bg-white rounded-2xl border border-slate-100 p-8 shadow-sm'>
              <div className='flex items-start gap-4 mb-6'>
                <div className={`w-12 h-12 rounded-2xl ${role.bg} flex items-center justify-center shrink-0`}>
                  <role.icon className='w-6 h-6 text-white' />
                </div>
                <div>
                  <div className='text-xs font-bold text-slate-400 uppercase tracking-wider mb-1'>{role.label}</div>
                  <p className='text-sm text-slate-600 leading-relaxed'>{role.desc}</p>
                </div>
              </div>

              <div className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5'>
                <Check className='w-3.5 h-3.5' />
                {role.highlight}
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {role.features.map((f) => (
                  <div
                    key={f}
                    className='flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100'
                  >
                    <div className='w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0'>
                      <Check className='w-3 h-3 text-emerald-600' />
                    </div>
                    <span className='text-xs font-medium text-slate-700'>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='lg:w-72 w-full'>
            <div className='bg-white rounded-2xl border border-slate-100 p-6 shadow-sm'>
              <p className='text-xs font-bold text-slate-500 uppercase tracking-wider mb-4'>Ringkasan {role.label}</p>
              <div className='grid grid-cols-2 gap-3 mb-5'>
                {role.mockup.map((m) => (
                  <div
                    key={m.label}
                    className={`p-4 rounded-xl border border-current/10 ${m.color}`}
                  >
                    <p className='text-2xl font-extrabold leading-none'>{m.val}</p>
                    <p className='text-xs font-medium opacity-70 mt-1'>{m.label}</p>
                  </div>
                ))}
              </div>
              <a
                href='#coba'
                className={`block text-center py-3 rounded-xl text-sm font-semibold text-white transition-colors ${role.bg} hover:opacity-90`}
              >
                Mulai sebagai {role.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
