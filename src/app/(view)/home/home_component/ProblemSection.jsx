import { CalendarX2, LineChart, FileWarning, Clock3, BarChart2, Database } from 'lucide-react';
import Image from 'next/image';

const problems = [
  {
    icon: CalendarX2,
    color: 'text-red-500 bg-red-50',
    title: 'Jadwal Guru & Siswa Sering Bentrok',
    desc: 'Pengaturan kelas manual membuat bentrok jadwal tak terhindarkan dan menyulitkan semua pihak.',
  },
  {
    icon: LineChart,
    color: 'text-orange-500 bg-orange-50',
    title: 'Progress Belajar Sulit Dipantau',
    desc: 'Tidak ada rekap terpusat membuat tim sulit mengetahui perkembangan setiap siswa secara real-time.',
  },
  {
    icon: FileWarning,
    color: 'text-yellow-600 bg-yellow-50',
    title: 'Data Tidak Tersentralisasi',
    desc: 'Informasi siswa dan guru tersebar di berbagai file sehingga sulit dikelola dan rentan hilang.',
  },
  {
    icon: Clock3,
    color: 'text-rose-500 bg-rose-50',
    title: 'Reschedule Kelas Memakan Waktu Admin',
    desc: 'Setiap perubahan jadwal membutuhkan koordinasi manual yang menguras waktu dan energi admin.',
  },
  {
    icon: BarChart2,
    color: 'text-purple-500 bg-purple-50',
    title: 'Laporan Tidak Real-Time',
    desc: 'Owner harus menunggu rekap manual setiap akhir bulan untuk melihat performa lembaga.',
  },
  {
    icon: Database,
    color: 'text-blue-500 bg-blue-50',
    title: 'Sistem Terpisah & Tidak Terhubung',
    desc: 'Absensi, jadwal, dan data siswa dikelola di sistem berbeda sehingga menyulitkan koordinasi.',
  },
];

export function ProblemSection() {
  return (
    <section
      id='masalah'
      className='py-14 sm:py-16 lg:py-24 bg-white overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold mb-4 border border-red-100'>Masalah Umum</span>

          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Masih Mengelola Bimbel Secara Manual?
          </h2>

          <p className='text-slate-500 leading-relaxed'>Ketika jumlah siswa bertambah, operasional makin kompleks dan spreadsheet mulai terasa menyiksa.</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 lg:gap-14 items-start'>
          <div className='w-full lg:w-[420px] shrink-0'>
            <div className='relative'>
              <div className='absolute left-4 top-16 h-44 w-44 rounded-full bg-blue-100/80 blur-3xl' />
              <div className='absolute right-0 bottom-10 h-36 w-36 rounded-full bg-red-100/80 blur-3xl' />

              <div className='relative z-10'>
                <div className='inline-flex items-center rounded-full bg-red-500 text-white text-xs font-bold px-3 py-1.5 shadow-md mb-3 sm:mb-2 lg:absolute lg:left-0 lg:top-0 lg:z-20 lg:mb-0'>Tanpa Sistem Terpadu</div>

                <div className='flex justify-center lg:justify-start -mt-14 -mb-7 sm:-mt-12 sm:-mb-5 lg:-mt-12 lg:-mb-4'>
                  <Image
                    src='/assets/klara-problem.png'
                    alt='Admin bimbel kewalahan dengan operasional manual'
                    width={1024}
                    height={1536}
                    sizes='(min-width: 1024px) 420px, 100vw'
                    className='w-full max-w-[300px] sm:max-w-[330px] lg:max-w-[360px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(15,23,42,0.16)]'
                    priority
                  />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-3 -mt-2 sm:mt-0'>
              <div className='bg-red-50 border border-red-100 rounded-2xl p-4 text-center shadow-sm'>
                <p className='text-red-600 font-bold text-2xl'>73%</p>
                <p className='text-slate-500 text-xs mt-1'>pengelola bimbel masih pakai spreadsheet</p>
              </div>

              <div className='bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center shadow-sm'>
                <p className='text-orange-600 font-bold text-2xl'>12 jam</p>
                <p className='text-slate-500 text-xs mt-1'>rata-rata terbuang untuk admin manual/minggu</p>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {problems.map((item) => (
                <div
                  key={item.title}
                  className='group p-5 rounded-2xl border border-slate-100 bg-white hover:border-red-100 hover:shadow-lg hover:shadow-red-50 transition-all duration-300'
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                    <item.icon className='w-5 h-5' />
                  </div>

                  <h3
                    className='text-slate-800 font-semibold mb-1.5'
                    style={{ fontSize: '0.92rem' }}
                  >
                    {item.title}
                  </h3>

                  <p className='text-slate-500 text-sm leading-relaxed'>{item.desc}</p>
                </div>
              ))}
            </div>

            <p className='mt-6 text-sm text-slate-400'>
              Semua masalah di atas bisa diatasi dengan <span className='text-blue-600 font-semibold'>satu sistem terpadu</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
