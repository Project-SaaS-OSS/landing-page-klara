import { Building2, Settings, GraduationCap, BookOpen, MessageSquare } from 'lucide-react';

const roles = [
  {
    icon: Building2,
    color: 'text-blue-600 bg-blue-50',
    border: 'border-blue-100 hover:border-blue-300',
    title: 'Owner Bimbel',
    subtitle: 'Pemilik Lembaga',
    desc: 'Pantau performa keseluruhan, pertumbuhan jumlah siswa, dan laporan keuangan lembaga dari satu dashboard eksekutif.',
    benefits: ['Laporan pertumbuhan siswa', 'Statistik performa lembaga', 'Monitoring semua program'],
  },
  {
    icon: Settings,
    color: 'text-violet-600 bg-violet-50',
    border: 'border-violet-100 hover:border-violet-300',
    title: 'Admin Operasional',
    subtitle: 'Staf Administrasi',
    desc: 'Atur jadwal kelas, data siswa, absensi, reschedule, dan pengelolaan ruang kelas dengan lebih efisien.',
    benefits: ['Manajemen jadwal kelas', 'Rekap absensi harian', 'Proses reschedule cepat'],
  },
  {
    icon: GraduationCap,
    color: 'text-emerald-600 bg-emerald-50',
    border: 'border-emerald-100 hover:border-emerald-300',
    title: 'Academic Coordinator',
    subtitle: 'Koordinator Akademik',
    desc: 'Kelola kurikulum, modul pembelajaran, progress siswa, dan koordinasikan absensi serta evaluasi perkembangan belajar.',
    benefits: ['Kurikulum & modul', 'Evaluasi progress belajar', 'Manajemen jadwal mengajar'],
  },
  {
    icon: BookOpen,
    color: 'text-amber-600 bg-amber-50',
    border: 'border-amber-100 hover:border-amber-300',
    title: 'Tutor / Pengajar',
    subtitle: 'Tenaga Pengajar',
    desc: 'Lihat jadwal mengajar, pantau progress belajar siswa di kelas, input nilai, dan kelola catatan pertemuan.',
    benefits: ['Jadwal mengajar personal', 'Progress siswa per kelas', 'Rekap kehadiran'],
  },
  {
    icon: MessageSquare,
    color: 'text-rose-600 bg-rose-50',
    border: 'border-rose-100 hover:border-rose-300',
    title: 'Konsultan Pendidikan',
    subtitle: 'Front Office',
    desc: 'Tangani antrian calon siswa, rekam kebutuhan, proses pendaftaran, dan pantau status follow-up secara sistematis.',
    benefits: ['Manajemen antrian siswa', 'Proses pendaftaran online', 'Tracking follow-up'],
  },
];

export function UserRoles() {
  return (
    <section
      id='pengguna'
      className='py-20 lg:py-28 bg-white'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 border border-slate-200'>User Roles</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Siapa yang Bisa <span className='text-blue-600'>Menggunakan Sistem Ini?</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Setiap anggota tim mendapatkan akses dan tampilan yang sesuai dengan peran dan tanggung jawabnya.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5'>
          {roles.map((role) => (
            <div
              key={role.title}
              className={`group p-6 rounded-2xl border ${role.border} bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-11 h-11 rounded-2xl ${role.color} flex items-center justify-center mb-4`}>
                <role.icon className='w-5 h-5' />
              </div>
              <div className='mb-3'>
                <h3
                  className='text-slate-900 font-bold'
                  style={{ fontSize: '0.95rem' }}
                >
                  {role.title}
                </h3>
                <p className='text-slate-400 text-xs font-medium'>{role.subtitle}</p>
              </div>
              <p className='text-slate-500 text-xs leading-relaxed mb-4'>{role.desc}</p>
              <ul className='space-y-1.5'>
                {role.benefits.map((b) => (
                  <li
                    key={b}
                    className='text-xs text-slate-600 flex items-center gap-1.5'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0' />
                    {b}
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
