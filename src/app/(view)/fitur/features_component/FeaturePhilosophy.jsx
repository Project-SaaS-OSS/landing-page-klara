import { Layers, Zap, Eye } from 'lucide-react';

const points = [
  {
    icon: Layers,
    color: 'bg-blue-100 text-blue-600',
    title: 'Terpusat',
    desc: 'Semua data, jadwal, materi, dan laporan ada dalam satu sistem — tidak perlu berpindah-pindah aplikasi.',
  },
  {
    icon: Zap,
    color: 'bg-amber-100 text-amber-600',
    title: 'Efisien',
    desc: 'Proses yang sebelumnya memakan berjam-jam kini bisa diselesaikan dalam hitungan menit dengan alur kerja otomatis.',
  },
  {
    icon: Eye,
    color: 'bg-emerald-100 text-emerald-600',
    title: 'Mudah Dipantau',
    desc: 'Owner, admin, dan guru dapat memonitor kondisi lembaga secara real-time tanpa perlu rekap manual.',
  },
];

export function FeaturePhilosophy() {
  return (
    <section className='py-16 lg:py-20 bg-white border-b border-slate-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-start gap-12 lg:gap-20'>
          <div className='flex-1 max-w-lg'>
            <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Filosofi Produk</span>
            <h2
              className='text-slate-900 mb-4 tracking-tight'
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              Bukan Sekadar Banyak Fitur, Tapi <span className='text-blue-600'>Alur Kerja yang Lebih Rapi</span>
            </h2>
            <p className='text-slate-500 text-sm leading-relaxed'>
              Sistem ini dirancang untuk membantu lembaga kursus menghubungkan proses operasional dan pembelajaran dalam satu platform — mulai dari penjadwalan, materi, evaluasi, absensi, hingga pelaporan. Setiap fitur saling terintegrasi,
              bukan berdiri sendiri.
            </p>
          </div>

          <div className='flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5 w-full'>
            {points.map((p) => (
              <div
                key={p.title}
                className='p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all duration-300'
              >
                <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center mb-4`}>
                  <p.icon className='w-5 h-5' />
                </div>
                <h3
                  className='text-slate-900 font-bold mb-1.5'
                  style={{ fontSize: '0.95rem' }}
                >
                  {p.title}
                </h3>
                <p className='text-slate-500 text-xs leading-relaxed'>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
