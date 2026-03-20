import { Monitor, Database, Workflow, GraduationCap, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Monitor,
    color: 'bg-blue-100 text-blue-700',
    title: 'Antarmuka Mudah Dipahami',
    desc: 'Dirancang agar admin, guru, dan siswa bisa langsung paham tanpa pelatihan panjang.',
  },
  {
    icon: Database,
    color: 'bg-violet-100 text-violet-700',
    title: 'Data Lebih Terpusat',
    desc: 'Satu tempat untuk semua data siswa, guru, jadwal, dan laporan — tidak tersebar di berbagai file.',
  },
  {
    icon: Workflow,
    color: 'bg-sky-100 text-sky-700',
    title: 'Alur Kerja Lebih Rapi',
    desc: 'Proses operasional harian berjalan lebih terstruktur dengan alur yang sudah tersistem.',
  },
  {
    icon: GraduationCap,
    color: 'bg-emerald-100 text-emerald-700',
    title: 'Dukungan Operasional Bimbel',
    desc: 'Sistem dibangun khusus memahami kebutuhan nyata lembaga kursus dan bimbingan belajar.',
  },
  {
    icon: TrendingUp,
    color: 'bg-amber-100 text-amber-700',
    title: 'Sistem Siap Berkembang',
    desc: 'Upgrade paket kapan saja seiring pertumbuhan lembaga tanpa perlu migrasi atau setup ulang.',
  },
];

export function TrustBenefits() {
  return (
    <section
      className='py-16 lg:py-24'
      style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-xl mx-auto mb-12'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Berlaku di Semua Paket</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Apa yang Anda Dapatkan di <span className='text-blue-600'>Semua Paket</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Terlepas dari paket yang Anda pilih, setiap pelanggan mendapatkan fondasi yang sama.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5'>
          {benefits.map((b) => (
            <div
              key={b.title}
              className='bg-white rounded-2xl border border-slate-100 p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300'
            >
              <div className={`w-12 h-12 rounded-2xl ${b.color} flex items-center justify-center mx-auto mb-4`}>
                <b.icon className='w-5 h-5' />
              </div>
              <h3
                className='text-slate-900 font-bold mb-2 leading-snug'
                style={{ fontSize: '0.88rem' }}
              >
                {b.title}
              </h3>
              <p className='text-slate-500 text-xs leading-relaxed'>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
