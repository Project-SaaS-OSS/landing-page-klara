import { Monitor, Activity, Layers } from 'lucide-react';

const points = [
  {
    icon: Monitor,
    color: 'bg-blue-100 text-blue-700',
    title: 'Fitur Lengkap untuk Bimbel & Kursus Privat',
    desc: 'Paket Lite menyediakan semua yang dibutuhkan untuk operasional harian: data guru, shift, kalender, absen, data siswa, konfirmasi akun, dan antrian — kapasitas s/d 50 siswa.',
    tag: 'Lite',
    tagColor: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: Activity,
    color: 'bg-violet-100 text-violet-700',
    title: 'Fitur Lanjutan untuk LPK & Sekolah Swasta',
    desc: 'Paket Pro menambahkan data siswa selesai, reschedule kelas, program kursus, dan laporan operasional untuk lembaga berkembang — kapasitas s/d 250 siswa.',
    tag: 'Pro',
    tagColor: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    icon: Layers,
    color: 'bg-slate-100 text-slate-700',
    title: 'Fitur Penuh untuk Sekolah Besar & Yayasan',
    desc: 'Paket Enterprise membuka multi admin, statistik mendalam, dedicated support, dan penyesuaian implementasi untuk institusi pendidikan skala besar — kapasitas s/d 1.000 siswa.',
    tag: 'Enterprise',
    tagColor: 'bg-slate-100 text-slate-600 border-slate-200',
  },
];

export function WhyDifferent() {
  return (
    <section
      className='py-16 lg:py-24'
      style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 border border-slate-200'>Perbedaan Paket</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Mengapa Setiap Paket <span className='text-blue-600'>Berbeda?</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Setiap paket dirancang untuk kapasitas dan jenis lembaga yang berbeda, dari bimbel kecil hingga sekolah besar.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto'>
          {points.map((p) => (
            <div
              key={p.title}
              className='bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
            >
              <div className={`w-11 h-11 rounded-2xl ${p.color} flex items-center justify-center mb-4`}>
                <p.icon className='w-5 h-5' />
              </div>
              <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3 ${p.tagColor}`}>{p.tag}</span>
              <h3
                className='text-slate-900 font-bold mb-2 leading-snug'
                style={{ fontSize: '0.9rem' }}
              >
                {p.title}
              </h3>
              <p className='text-slate-500 text-xs leading-relaxed'>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
