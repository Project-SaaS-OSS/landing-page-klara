import { Zap, HeadphonesIcon, MousePointerClick } from 'lucide-react';

const chips = [
  {
    icon: Zap,
    color: 'bg-amber-100 text-amber-700',
    title: 'Jawaban cepat untuk pertanyaan umum',
    desc: 'Halaman FAQ kami dirancang agar Anda bisa menemukan jawaban dalam hitungan detik.',
  },
  {
    icon: HeadphonesIcon,
    color: 'bg-blue-100 text-blue-700',
    title: 'Tim siap bantu konsultasi',
    desc: 'Jika FAQ belum cukup, tim kami siap memberikan penjelasan lebih detail sesuai kebutuhan.',
  },
  {
    icon: MousePointerClick,
    color: 'bg-emerald-100 text-emerald-700',
    title: 'Sistem mudah dipahami dan digunakan',
    desc: 'Antarmuka yang intuitif membuat tim Anda bisa adaptasi lebih cepat sejak hari pertama.',
  },
];

export function MiniTrust() {
  return (
    <section className='py-12 lg:py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-xl mx-auto mb-10'>
          <h2
            className='text-slate-900 font-extrabold tracking-tight'
            style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)' }}
          >
            Dirancang untuk Membantu Operasional Lembaga <span className='text-blue-600'>Lebih Terstruktur</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {chips.map((c) => (
            <div
              key={c.title}
              className='flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-5 hover:bg-blue-50/40 hover:border-blue-100 transition-all'
            >
              <div className={`w-10 h-10 rounded-xl ${c.color} flex items-center justify-center shrink-0`}>
                <c.icon className='w-5 h-5' />
              </div>
              <div>
                <h3
                  className='text-slate-900 font-bold mb-1 leading-snug'
                  style={{ fontSize: '0.88rem' }}
                >
                  {c.title}
                </h3>
                <p className='text-slate-500 text-xs leading-relaxed'>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
