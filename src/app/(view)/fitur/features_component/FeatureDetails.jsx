import { Check } from 'lucide-react';

function FeatureBlock({ idx, tag, tagColor, title, desc, points, mockup }) {
  const isEven = idx % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}>
      <div className='flex-1 max-w-md'>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${tagColor}`}>{tag}</span>
        <h3
          className='text-slate-900 mb-3 tracking-tight'
          style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', fontWeight: 800, lineHeight: 1.25 }}
        >
          {title}
        </h3>
        <p className='text-slate-500 text-sm leading-relaxed mb-5'>{desc}</p>
        <ul className='space-y-2.5'>
          {points.map((p) => (
            <li
              key={p}
              className='flex items-center gap-2.5 text-sm text-slate-700'
            >
              <div className='w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0'>
                <Check className='w-3 h-3 text-blue-600' />
              </div>
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className='flex-1 w-full max-w-lg'>
        <div
          className='bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden'
          style={{ boxShadow: '0 24px 60px -12px rgba(37,99,235,0.12)' }}
        >
          <div className='flex items-center gap-1.5 px-4 py-2.5 bg-slate-50 border-b border-slate-100'>
            <div className='w-2.5 h-2.5 rounded-full bg-red-400' />
            <div className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
            <div className='w-2.5 h-2.5 rounded-full bg-green-400' />
          </div>
          <div className='p-5'>{mockup}</div>
        </div>
      </div>
    </div>
  );
}

function JadwalMockup() {
  const items = [
    {
      time: '08.00',
      name: 'Matematika – Kelas A',
      tutor: 'Bpk. Hendra',
      status: 'Berlangsung',
      color: 'bg-emerald-50 text-emerald-700',
    },
    {
      time: '09.30',
      name: 'Bahasa Inggris – Kelas B',
      tutor: 'Ibu Sarah',
      status: 'Akan Datang',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      time: '11.00',
      name: 'Fisika – Kelas C',
      tutor: 'Bpk. Rizky',
      status: 'Akan Datang',
      color: 'bg-blue-50 text-blue-700',
    },
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <p className='text-sm font-bold text-slate-700'>Jadwal Hari Ini</p>
        <span className='text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium'>Selasa, 11 Mar</span>
      </div>
      <div className='space-y-3'>
        {items.map((it) => (
          <div
            key={it.name}
            className='flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50'
          >
            <div className='text-xs text-slate-400 font-medium w-10 shrink-0'>{it.time}</div>
            <div className='flex-1 min-w-0'>
              <p className='text-xs font-semibold text-slate-800 truncate'>{it.name}</p>
              <p className='text-xs text-slate-400'>{it.tutor}</p>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${it.color}`}>{it.status}</span>
          </div>
        ))}
      </div>
      <button className='mt-4 w-full py-2 rounded-xl border border-dashed border-blue-200 text-xs font-semibold text-blue-500 hover:bg-blue-50 transition-colors'>+ Tambah Jadwal</button>
    </div>
  );
}

function ModulMockup() {
  const modules = [
    { title: 'Modul 1 – Pengenalan Aljabar', progress: 100, status: 'Selesai' },
    { title: 'Modul 2 – Persamaan Linear', progress: 75, status: 'Berlangsung' },
    { title: 'Modul 3 – Fungsi Kuadrat', progress: 0, status: 'Terkunci' },
  ];

  return (
    <div>
      <p className='text-sm font-bold text-slate-700 mb-4'>Modul Pembelajaran</p>
      <div className='space-y-3'>
        {modules.map((m) => (
          <div
            key={m.title}
            className='p-3 rounded-xl border border-slate-100 bg-slate-50'
          >
            <div className='flex items-center justify-between mb-2'>
              <p className='text-xs font-semibold text-slate-700'>{m.title}</p>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${m.status === 'Selesai' ? 'bg-emerald-50 text-emerald-700' : m.status === 'Berlangsung' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                {m.status}
              </span>
            </div>
            <div className='h-1.5 bg-slate-200 rounded-full overflow-hidden'>
              <div
                className={`h-full rounded-full ${m.status === 'Selesai' ? 'bg-emerald-500' : 'bg-blue-500'}`}
                style={{ width: `${m.progress}%` }}
              />
            </div>
            <p className='text-[10px] text-slate-400 mt-1'>{m.progress}% selesai</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressMockup() {
  const students = [
    { name: 'Alya Rahmawati', session: 'Sesi 8 / 12', prog: 78, color: 'bg-blue-500' },
    { name: 'Farhan Maulana', session: 'Sesi 5 / 12', prog: 55, color: 'bg-amber-500' },
    { name: 'Nadia Putri', session: 'Sesi 11 / 12', prog: 91, color: 'bg-emerald-500' },
  ];

  return (
    <div>
      <p className='text-sm font-bold text-slate-700 mb-4'>Progress Belajar Siswa</p>
      <div className='space-y-4'>
        {students.map((s) => (
          <div key={s.name}>
            <div className='flex items-center justify-between mb-1.5'>
              <div>
                <p className='text-xs font-semibold text-slate-800'>{s.name}</p>
                <p className='text-[10px] text-slate-400'>{s.session}</p>
              </div>
              <span className='text-sm font-bold text-slate-700'>{s.prog}%</span>
            </div>
            <div className='h-2 bg-slate-100 rounded-full overflow-hidden'>
              <div
                className={`h-full rounded-full ${s.color}`}
                style={{ width: `${s.prog}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AbsensiMockup() {
  const data = [
    { name: 'Alya Rahmawati', hadir: 10, izin: 1, alpha: 0 },
    { name: 'Farhan Maulana', hadir: 8, izin: 2, alpha: 1 },
    { name: 'Nadia Putri', hadir: 12, izin: 0, alpha: 0 },
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <p className='text-sm font-bold text-slate-700'>Rekap Absensi – Maret 2026</p>
        <span className='text-xs bg-teal-50 text-teal-600 px-2.5 py-1 rounded-full font-medium'>12 Pertemuan</span>
      </div>
      <div className='overflow-hidden rounded-xl border border-slate-100'>
        <table className='w-full text-xs'>
          <thead className='bg-slate-50 border-b border-slate-100'>
            <tr>
              <th className='text-left px-3 py-2 text-slate-500 font-semibold'>Siswa</th>
              <th className='text-center px-3 py-2 text-emerald-600 font-semibold'>Hadir</th>
              <th className='text-center px-3 py-2 text-amber-600 font-semibold'>Izin</th>
              <th className='text-center px-3 py-2 text-red-500 font-semibold'>Alpha</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr
                key={d.name}
                className='border-b border-slate-50 last:border-0'
              >
                <td className='px-3 py-2.5 font-medium text-slate-700'>{d.name.split(' ')[0]}</td>
                <td className='px-3 py-2.5 text-center font-bold text-emerald-600'>{d.hadir}</td>
                <td className='px-3 py-2.5 text-center font-bold text-amber-600'>{d.izin}</td>
                <td className='px-3 py-2.5 text-center font-bold text-red-500'>{d.alpha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DataMockup() {
  return (
    <div>
      <p className='text-sm font-bold text-slate-700 mb-4'>Pusat Data Lembaga</p>
      <div className='grid grid-cols-2 gap-3 mb-4'>
        {[
          { label: 'Total Siswa', val: '248', color: 'bg-blue-50 text-blue-700' },
          { label: 'Total Guru', val: '32', color: 'bg-violet-50 text-violet-700' },
          { label: 'Program Aktif', val: '18', color: 'bg-emerald-50 text-emerald-700' },
          { label: 'Konsultan', val: '6', color: 'bg-amber-50 text-amber-700' },
        ].map((d) => (
          <div
            key={d.label}
            className={`p-3 rounded-xl ${d.color} border border-current/10`}
          >
            <p className='text-xl font-extrabold'>{d.val}</p>
            <p className='text-xs font-medium opacity-80'>{d.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LaporanMockup() {
  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <p className='text-sm font-bold text-slate-700'>Laporan & Dokumentasi</p>
        <span className='text-xs bg-rose-50 text-rose-600 px-2.5 py-1 rounded-full font-medium'>Q1 2026</span>
      </div>
      <div className='space-y-3'>
        {[
          {
            label: 'Rekap Progress Siswa',
            count: '248 siswa',
            icon: '📈',
            color: 'bg-emerald-50',
          },
          {
            label: 'Laporan Absensi Maret',
            count: '18 kelas',
            icon: '📋',
            color: 'bg-blue-50',
          },
          {
            label: 'Sertifikat Diterbitkan',
            count: '12 sertifikat',
            icon: '🏆',
            color: 'bg-amber-50',
          },
        ].map((r) => (
          <div
            key={r.label}
            className={`flex items-center gap-3 p-3 rounded-xl ${r.color} border border-current/10`}
          >
            <span className='text-xl'>{r.icon}</span>
            <div className='flex-1'>
              <p className='text-xs font-semibold text-slate-800'>{r.label}</p>
              <p className='text-xs text-slate-500'>{r.count}</p>
            </div>
            <button className='text-[10px] font-semibold text-blue-600 bg-white px-2 py-1 rounded-lg border border-blue-100'>Unduh</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const blocks = [
  {
    tag: 'Jadwal & Pertemuan',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Jadwal Pertemuan yang Lebih Fleksibel',
    desc: 'Sistem membantu admin, guru, dan siswa melihat, mengatur, serta menyesuaikan jadwal pertemuan dengan proses yang lebih cepat dan minim miskomunikasi.',
    points: ['Kalender pertemuan visual', 'Reschedule mudah tanpa konflik', 'Antrian kelas teratur', 'Pengingat otomatis via sistem'],
    mockup: <JadwalMockup />,
  },
  {
    tag: 'Modul Pembelajaran',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'Materi Belajar Terpusat dan Terstruktur',
    desc: 'Guru dapat mengelola materi dan assignment dalam satu tempat, sementara siswa dapat mengakses modul sesuai progres belajar mereka.',
    points: ['Modul terstruktur per level', 'Detail materi tiap sesi', 'Assignment & tugas siswa', 'Akses progresif per modul'],
    mockup: <ModulMockup />,
  },
  {
    tag: 'Progress Belajar',
    tagColor: 'bg-emerald-100 text-emerald-700',
    title: 'Progress Belajar yang Mudah Dipantau',
    desc: 'Setiap pertemuan dapat menghasilkan catatan progress yang membantu guru dan lembaga melihat perkembangan nyata setiap siswa.',
    points: ['Progress tiap sesi tercatat', 'Histori belajar lengkap', 'Catatan perkembangan dari tutor', 'Monitoring visual yang jelas'],
    mockup: <ProgressMockup />,
  },
  {
    tag: 'Absensi Digital',
    tagColor: 'bg-teal-100 text-teal-700',
    title: 'Absensi dan Operasional yang Lebih Tertib',
    desc: 'Kehadiran siswa dan guru dapat tercatat lebih rapi, terdokumentasi dengan baik, dan mudah ditinjau kapan saja.',
    points: ['Absensi digital cepat', 'Konfirmasi kehadiran', 'Rekap riwayat absensi', 'Transparansi ke orang tua'],
    mockup: <AbsensiMockup />,
  },
  {
    tag: 'Manajemen Data',
    tagColor: 'bg-indigo-100 text-indigo-700',
    title: 'Data dan Program dalam Satu Pusat Kendali',
    desc: 'Semua data penting seperti siswa, guru, program, akun, dan konsultan dapat dikelola tanpa berpindah-pindah sistem.',
    points: ['Data master siswa & guru', 'Manajemen program kursus', 'Konfirmasi akun baru', 'Data konsultan pendidikan'],
    mockup: <DataMockup />,
  },
  {
    tag: 'Laporan & Sertifikat',
    tagColor: 'bg-rose-100 text-rose-700',
    title: 'Laporan dan Dokumentasi Hasil Belajar',
    desc: 'Progress siswa, statistik operasional, sertifikat, dan testimoni terdokumentasi lebih rapi untuk evaluasi dan pengambilan keputusan.',
    points: ['Rekap progress belajar siswa', 'Statistik pertumbuhan siswa', 'Sertifikat digital otomatis', 'Insight data lembaga'],
    mockup: <LaporanMockup />,
  },
];

export function FeatureDetails() {
  return (
    <section className='py-20 lg:py-28 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Detail Fitur</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Penjelasan Fitur Secara <span className='text-blue-600'>Lebih Detail</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Lihat lebih dalam bagaimana setiap fitur bekerja dan memberikan manfaat nyata untuk operasional lembaga.</p>
        </div>

        <div className='space-y-20 lg:space-y-24'>
          {blocks.map((block, i) => (
            <FeatureBlock
              key={block.title}
              idx={i}
              {...block}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
