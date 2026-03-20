import { Target, Puzzle, CheckSquare, MessageSquare } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    title: 'Pendekatan Sesuai Kebutuhan Lembaga',
    desc: 'Kami memahami bahwa setiap lembaga memiliki kebutuhan yang berbeda. Konsultasi disesuaikan dengan kondisi dan skala operasional Anda.',
  },
  {
    icon: Puzzle,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    title: 'Penjelasan Fitur yang Relevan',
    desc: 'Kami tidak sekadar mendaftarkan fitur — kami menjelaskan fitur mana yang paling bermanfaat untuk masalah yang Anda hadapi.',
  },
  {
    icon: CheckSquare,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Bantuan Memilih Paket yang Tepat',
    desc: 'Tim kami membantu Anda memilih paket yang paling cost-effective tanpa membayar lebih dari yang Anda butuhkan.',
  },
  {
    icon: MessageSquare,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    title: 'Komunikasi yang Jelas dan Profesional',
    desc: 'Proses komunikasi kami terstruktur dan transparan sehingga Anda selalu tahu langkah berikutnya.',
  },
];

export function WhyContact() {
  return (
    <section className='py-14 lg:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-lg mx-auto mb-12'>
          <h2
            className='text-slate-900 font-extrabold tracking-tight mb-3'
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Mengapa Konsultasi <span className='text-blue-600'>dengan Kami?</span>
          </h2>
          <p className='text-slate-500 text-sm leading-relaxed'>Kami bukan hanya tim penjualan — kami adalah mitra yang membantu lembaga Anda menemukan solusi terbaik.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {benefits.map((b) => (
            <div
              key={b.title}
              className='bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md p-6 transition-all duration-300 group'
            >
              <div className={`w-11 h-11 rounded-xl ${b.iconBg} flex items-center justify-center mb-4`}>
                <b.icon className={`w-5 h-5 ${b.iconColor}`} />
              </div>
              <h3
                className='text-slate-900 font-bold mb-2 leading-snug group-hover:text-blue-700 transition-colors'
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
