import { ArrowRight, Users, TrendingUp, Building2 } from 'lucide-react';

const recs = [
  {
    icon: Users,
    color: 'bg-blue-100 text-blue-700',
    borderHover: 'hover:border-blue-300',
    badge: 'Lite',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
    ctaColor: 'text-blue-700 border-blue-200 hover:bg-blue-50',
    price: 'Rp450.000/bln',
    capacity: 's/d 50 Siswa',
    title: 'Pilih Lite jika...',
    desc: 'Lembaga Anda adalah bimbel rumahan atau kursus privat dengan kapasitas kecil yang ingin mulai mengelola operasional secara digital.',
  },
  {
    icon: TrendingUp,
    color: 'bg-violet-100 text-violet-700',
    borderHover: 'hover:border-violet-300',
    badge: 'Pro',
    badgeColor: 'bg-violet-50 text-violet-700 border-violet-100',
    ctaColor: 'text-violet-700 border-violet-200 hover:bg-violet-50',
    price: 'Rp1.250.000/bln',
    capacity: 's/d 250 Siswa',
    title: 'Pilih Pro jika...',
    desc: 'Anda mengelola LPK atau sekolah menengah swasta yang membutuhkan fitur reschedule, data siswa selesai, program kursus, dan laporan operasional.',
  },
  {
    icon: Building2,
    color: 'bg-slate-100 text-slate-700',
    borderHover: 'hover:border-slate-400',
    badge: 'Enterprise',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
    ctaColor: 'text-slate-700 border-slate-300 hover:bg-slate-50',
    price: 'Rp3.500.000/bln',
    capacity: 's/d 1.000 Siswa',
    title: 'Pilih Enterprise jika...',
    desc: 'Lembaga Anda adalah sekolah besar atau yayasan pendidikan yang butuh kapasitas tinggi, multi admin, statistik mendalam, dan dukungan dedicated.',
  },
];

export function RecommendPicker() {
  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-xl mx-auto mb-12'>
          <span className='inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold mb-4 border border-amber-100'>Panduan Memilih</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Masih Bingung <span className='text-blue-600'>Memilih?</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Gunakan panduan singkat ini untuk menemukan paket yang paling sesuai dengan kondisi lembaga Anda saat ini.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto'>
          {recs.map((r) => (
            <div
              key={r.badge}
              className={`bg-white rounded-2xl border-2 border-slate-100 ${r.borderHover} p-6 flex flex-col hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-11 h-11 rounded-2xl ${r.color} flex items-center justify-center mb-4`}>
                <r.icon className='w-5 h-5' />
              </div>

              <div className='flex items-center gap-2 mb-3 flex-wrap'>
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border w-fit ${r.badgeColor}`}>{r.badge}</span>
                <span className='text-[10px] font-bold text-blue-600'>{r.price}</span>
              </div>

              <p className='text-[11px] font-semibold text-slate-400 mb-2'>{r.capacity}</p>

              <h3
                className='text-slate-900 font-bold mb-2 leading-snug'
                style={{ fontSize: '0.92rem' }}
              >
                {r.title}
              </h3>

              <p className='text-slate-500 text-xs leading-relaxed flex-1 mb-5'>{r.desc}</p>

              <a
                href='#mulai'
                className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-all ${r.ctaColor}`}
              >
                Pilih {r.badge}
                <ArrowRight className='w-3.5 h-3.5' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
