import { useState } from 'react';
import { Users, CalendarDays, BookOpen, BarChart3, CheckSquare, Layers, Activity } from 'lucide-react';

const screens = [
  { id: 'siswa', label: 'Data Siswa', icon: Users },
  { id: 'jadwal', label: 'Jadwal', icon: CalendarDays },
  { id: 'modul', label: 'Modul', icon: BookOpen },
  { id: 'laporan', label: 'Laporan', icon: BarChart3 },
  { id: 'absensi', label: 'Absensi', icon: CheckSquare },
  { id: 'program', label: 'Program', icon: Layers },
  { id: 'aktivitas', label: 'Aktivitas', icon: Activity },
];

function SiswaScreen() {
  const students = [
    {
      name: 'Alya Rahmawati',
      program: 'UTBK Intensif',
      level: 'Advanced',
      status: 'Aktif',
      join: '01 Jan 2026',
    },
    {
      name: 'Farhan Maulana',
      program: 'TOEFL Prep',
      level: 'Intermediate',
      status: 'Aktif',
      join: '15 Jan 2026',
    },
    {
      name: 'Nadia Putri',
      program: 'Olimpiade Fisika',
      level: 'Advanced',
      status: 'Aktif',
      join: '03 Feb 2026',
    },
    {
      name: 'Rizky F.',
      program: 'UTBK Reguler',
      level: 'Level 2',
      status: 'Aktif',
      join: '10 Feb 2026',
    },
    {
      name: 'Sinta Dewi',
      program: 'English Course',
      level: 'Beginner',
      status: 'Selesai',
      join: '01 Nov 2025',
    },
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h4 className='font-bold text-slate-700 text-sm'>Data Siswa</h4>
        <button className='text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg font-semibold'>+ Tambah Siswa</button>
      </div>
      <div className='overflow-hidden rounded-xl border border-slate-100'>
        <table className='w-full text-xs'>
          <thead className='bg-slate-50 border-b border-slate-100'>
            <tr>
              <th className='text-left px-3 py-2.5 text-slate-500 font-semibold'>Nama</th>
              <th className='text-left px-3 py-2.5 text-slate-500 font-semibold hidden sm:table-cell'>Program</th>
              <th className='text-left px-3 py-2.5 text-slate-500 font-semibold hidden md:table-cell'>Level</th>
              <th className='text-center px-3 py-2.5 text-slate-500 font-semibold'>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr
                key={s.name}
                className='border-b border-slate-50 last:border-0 hover:bg-slate-50'
              >
                <td className='px-3 py-3'>
                  <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[9px] font-bold shrink-0'>
                      {s.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <span className='font-medium text-slate-700'>{s.name}</span>
                  </div>
                </td>
                <td className='px-3 py-3 text-slate-500 hidden sm:table-cell'>{s.program}</td>
                <td className='px-3 py-3 text-slate-500 hidden md:table-cell'>{s.level}</td>
                <td className='px-3 py-3 text-center'>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${s.status === 'Aktif' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{s.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function JadwalScreen() {
  const jadwal = [
    {
      time: '08.00–09.30',
      subject: 'Matematika Dasar',
      tutor: 'Bpk. Hendra',
      room: 'R-101',
      cap: '8/10',
    },
    {
      time: '09.30–11.00',
      subject: 'Bahasa Inggris',
      tutor: 'Ibu Sarah',
      room: 'R-202',
      cap: '6/8',
    },
    {
      time: '11.00–12.30',
      subject: 'Fisika Mekanika',
      tutor: 'Bpk. Rizky',
      room: 'R-103',
      cap: '10/10',
    },
    {
      time: '13.00–14.30',
      subject: 'Kimia Organik',
      tutor: 'Ibu Dewi',
      room: 'R-201',
      cap: '7/10',
    },
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h4 className='font-bold text-slate-700 text-sm'>Jadwal Pertemuan</h4>
        <span className='text-xs bg-violet-50 text-violet-600 px-3 py-1.5 rounded-lg font-semibold border border-violet-100'>Selasa, 11 Mar 2026</span>
      </div>
      <div className='space-y-2'>
        {jadwal.map((j) => (
          <div
            key={j.subject}
            className='flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-colors'
          >
            <div className='text-xs text-slate-400 font-medium w-24 shrink-0'>{j.time}</div>
            <div className='flex-1 min-w-0'>
              <p className='text-xs font-semibold text-slate-800'>{j.subject}</p>
              <p className='text-xs text-slate-400'>
                {j.tutor} · {j.room}
              </p>
            </div>
            <div className='text-xs text-slate-500 font-medium shrink-0'>
              <Users className='w-3 h-3 inline mr-1' />
              {j.cap}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModulScreen() {
  const modules = [
    { title: 'Modul 1 – Pengenalan Aljabar', sessions: 4, progress: 100, status: 'Selesai' },
    { title: 'Modul 2 – Persamaan Linear', sessions: 4, progress: 75, status: 'Berlangsung' },
    { title: 'Modul 3 – Fungsi Kuadrat', sessions: 3, progress: 0, status: 'Belum Dimulai' },
    { title: 'Modul 4 – Statistika Dasar', sessions: 3, progress: 0, status: 'Terkunci' },
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h4 className='font-bold text-slate-700 text-sm'>Modul Pembelajaran</h4>
        <button className='text-xs bg-violet-600 text-white px-3 py-1.5 rounded-lg font-semibold'>+ Buat Modul</button>
      </div>
      <div className='space-y-3'>
        {modules.map((m) => (
          <div
            key={m.title}
            className='p-4 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-all'
          >
            <div className='flex items-start justify-between mb-2'>
              <div>
                <p className='text-xs font-bold text-slate-800'>{m.title}</p>
                <p className='text-xs text-slate-400 mt-0.5'>{m.sessions} sesi</p>
              </div>
              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded-lg shrink-0 ml-2 ${m.status === 'Selesai' ? 'bg-emerald-50 text-emerald-700' : m.status === 'Berlangsung' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-400'}`}
              >
                {m.status}
              </span>
            </div>
            <div className='h-1.5 bg-slate-100 rounded-full overflow-hidden'>
              <div
                className={`h-full rounded-full ${m.status === 'Selesai' ? 'bg-emerald-500' : m.status === 'Berlangsung' ? 'bg-blue-500' : 'bg-slate-200'}`}
                style={{ width: `${m.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LaporanScreen() {
  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h4 className='font-bold text-slate-700 text-sm'>Laporan</h4>
        <button className='text-xs bg-rose-600 text-white px-3 py-1.5 rounded-lg font-semibold'>Unduh PDF</button>
      </div>
      <div className='grid grid-cols-2 gap-3 mb-4'>
        {[
          { l: 'Progress Siswa', v: '248', c: 'bg-blue-50 text-blue-700' },
          { l: 'Sertifikat', v: '12', c: 'bg-emerald-50 text-emerald-700' },
          { l: 'Absensi Bulan Ini', v: '95%', c: 'bg-teal-50 text-teal-700' },
          { l: 'Statistik Siswa', v: '248', c: 'bg-violet-50 text-violet-700' },
        ].map((s) => (
          <div
            key={s.l}
            className={`p-3 rounded-xl border border-current/10 ${s.c}`}
          >
            <p className='text-xl font-extrabold'>{s.v}</p>
            <p className='text-xs font-medium opacity-70'>{s.l}</p>
          </div>
        ))}
      </div>
      <div className='p-3 rounded-xl bg-slate-50 border border-slate-100'>
        <p className='text-xs font-semibold text-slate-600 mb-2'>Pertumbuhan Siswa (6 Bulan)</p>
        <div className='flex items-end gap-1.5 h-16'>
          {[40, 65, 90, 75, 55, 88].map((h, i) => (
            <div
              key={i}
              className='flex-1 bg-blue-500 rounded-sm opacity-80'
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className='flex justify-between mt-1'>
          {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'].map((l) => (
            <span
              key={l}
              className='text-[9px] text-slate-400'
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AbsensiScreen() {
  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h4 className='font-bold text-slate-700 text-sm'>Absensi Digital</h4>
        <span className='text-xs bg-teal-50 text-teal-600 px-2.5 py-1 rounded-lg font-bold border border-teal-100'>Hari Ini</span>
      </div>
      <div className='grid grid-cols-3 gap-2 mb-4'>
        {[
          { l: 'Hadir', v: '22', c: 'bg-emerald-50 text-emerald-700' },
          { l: 'Izin', v: '2', c: 'bg-amber-50 text-amber-700' },
          { l: 'Alpha', v: '1', c: 'bg-red-50 text-red-600' },
        ].map((s) => (
          <div
            key={s.l}
            className={`text-center p-3 rounded-xl border border-current/10 ${s.c}`}
          >
            <p className='text-xl font-extrabold'>{s.v}</p>
            <p className='text-xs font-medium opacity-70'>{s.l}</p>
          </div>
        ))}
      </div>
      <div className='space-y-2'>
        {[
          { name: 'Alya Rahmawati', time: '08.03', status: 'Hadir' },
          { name: 'Farhan Maulana', time: '08.10', status: 'Hadir' },
          { name: 'Nadia Putri', time: '–', status: 'Izin' },
          { name: 'Rizky F.', time: '08.25', status: 'Hadir' },
        ].map((a) => (
          <div
            key={a.name}
            className='flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100'
          >
            <div className='flex items-center gap-2'>
              <div className='w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-[9px] font-bold flex items-center justify-center'>
                {a.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <span className='text-xs font-medium text-slate-700'>{a.name}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-slate-400'>{a.time}</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${a.status === 'Hadir' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{a.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgramScreen() {
  const programs = [
    {
      name: 'UTBK Intensif 2026',
      students: 48,
      sessions: 24,
      status: 'Aktif',
      color: 'bg-blue-50 text-blue-700',
    },
    {
      name: 'TOEFL Preparation',
      students: 32,
      sessions: 20,
      status: 'Aktif',
      color: 'bg-sky-50 text-sky-700',
    },
    {
      name: 'Olimpiade Fisika',
      students: 15,
      sessions: 16,
      status: 'Aktif',
      color: 'bg-violet-50 text-violet-700',
    },
    {
      name: 'Kursus Bahasa Inggris',
      students: 60,
      sessions: 12,
      status: 'Aktif',
      color: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h4 className='font-bold text-slate-700 text-sm'>Program Kursus</h4>
        <button className='text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-lg font-semibold'>+ Program Baru</button>
      </div>
      <div className='space-y-3'>
        {programs.map((p) => (
          <div
            key={p.name}
            className='p-4 rounded-xl border border-slate-100 bg-white hover:shadow-sm transition-all'
          >
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-xs font-bold text-slate-800'>{p.name}</p>
                <p className='text-xs text-slate-400 mt-0.5'>
                  {p.students} siswa · {p.sessions} sesi
                </p>
              </div>
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg ${p.color}`}>{p.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AktivitasScreen() {
  const activities = [
    { name: 'Alya Rahmawati', activity: 'Mengerjakan Modul 1', time: '08.00' },
    { name: 'Farhan Maulana', activity: 'Mengerjakan Modul 2', time: '08.30' },
    { name: 'Nadia Putri', activity: 'Mengerjakan Modul 3', time: '09.00' },
    { name: 'Rizky F.', activity: 'Mengerjakan Modul 4', time: '09.30' },
  ];

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h4 className='font-bold text-slate-700 text-sm'>Aktivitas Siswa</h4>
        <span className='text-xs bg-teal-50 text-teal-600 px-2.5 py-1 rounded-lg font-bold border border-teal-100'>Hari Ini</span>
      </div>
      <div className='space-y-2'>
        {activities.map((a) => (
          <div
            key={a.name}
            className='flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100'
          >
            <div className='flex items-center gap-2'>
              <div className='w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-[9px] font-bold flex items-center justify-center'>
                {a.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <span className='text-xs font-medium text-slate-700'>{a.name}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-slate-400'>{a.time}</span>
              <span className='text-[10px] font-bold px-2 py-0.5 rounded-lg bg-teal-50 text-teal-700'>{a.activity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const screenComponents = {
  siswa: <SiswaScreen />,
  jadwal: <JadwalScreen />,
  modul: <ModulScreen />,
  laporan: <LaporanScreen />,
  absensi: <AbsensiScreen />,
  program: <ProgramScreen />,
  aktivitas: <AktivitasScreen />,
};

export function ScreenPreview() {
  const [active, setActive] = useState('siswa');

  return (
    <section
      className='py-20 lg:py-28'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Preview Tampilan</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Tampilan Sistem yang <span className='text-blue-600'>Mudah Dipahami</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Dirancang agar tim admin, guru, dan siswa dapat bekerja lebih cepat tanpa antarmuka yang membingungkan.</p>
        </div>

        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                active === s.id ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              <s.icon className='w-3.5 h-3.5' />
              {s.label}
            </button>
          ))}
        </div>

        <div
          className='bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden max-w-4xl mx-auto'
          style={{ boxShadow: '0 40px 100px -20px rgba(37,99,235,0.15)' }}
        >
          <div className='flex items-center gap-1.5 px-5 py-3 bg-slate-100 border-b border-slate-200'>
            <div className='w-3 h-3 rounded-full bg-red-400' />
            <div className='w-3 h-3 rounded-full bg-yellow-400' />
            <div className='w-3 h-3 rounded-full bg-green-400' />
            <div className='flex-1 mx-4'>
              <div className='bg-white rounded-lg px-3 py-1 text-xs text-slate-400 text-center max-w-xs mx-auto border border-slate-200'>app.klara.id/{active}</div>
            </div>
          </div>
          <div className='p-6 bg-slate-50 min-h-80'>{screenComponents[active]}</div>
        </div>
      </div>
    </section>
  );
}
