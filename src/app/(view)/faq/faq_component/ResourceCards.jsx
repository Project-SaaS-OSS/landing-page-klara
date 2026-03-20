import { Layers, CreditCard, PlayCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    icon: Layers,
    color: 'bg-violet-100 text-violet-700',
    borderHover: 'hover:border-violet-200',
    iconBg: 'bg-violet-600',
    title: 'Lihat Fitur',
    desc: 'Pelajari kemampuan sistem secara lebih detail dan temukan fitur yang paling relevan.',
    href: '/fitur',
    cta: 'Jelajahi Fitur',
    ctaColor: 'text-violet-700 hover:text-violet-800',
  },
  {
    icon: CreditCard,
    color: 'bg-blue-100 text-blue-700',
    borderHover: 'hover:border-blue-200',
    iconBg: 'bg-blue-600',
    title: 'Bandingkan Harga',
    desc: 'Temukan paket yang paling sesuai dengan skala dan kebutuhan lembaga Anda.',
    href: '/harga',
    cta: 'Lihat Paket',
    ctaColor: 'text-blue-700 hover:text-blue-800',
  },
  {
    icon: PlayCircle,
    color: 'bg-emerald-100 text-emerald-700',
    borderHover: 'hover:border-emerald-200',
    iconBg: 'bg-emerald-600',
    title: 'Minta Demo',
    desc: 'Lihat bagaimana sistem bekerja secara nyata untuk kebutuhan operasional lembaga Anda.',
    href: '/demo',
    cta: 'Jadwalkan Demo',
    ctaColor: 'text-emerald-700 hover:text-emerald-800',
  },
];

export function ResourceCards() {
  return (
    <section
      className='py-14 lg:py-20'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-xl mx-auto mb-12'>
          <h2
            className='text-slate-900 font-extrabold mb-3 tracking-tight'
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Butuh Informasi <span className='text-blue-600'>Lainnya?</span>
          </h2>
          <p className='text-slate-500 text-sm leading-relaxed'>Halaman lain yang mungkin berguna untuk keputusan Anda.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
          {resources.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className={`group bg-white rounded-2xl border-2 border-slate-100 ${r.borderHover} p-7 flex flex-col hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-2xl ${r.iconBg} flex items-center justify-center mb-5 shadow-md`}>
                <r.icon className='w-6 h-6 text-white' />
              </div>
              <h3
                className='text-slate-900 font-bold mb-2'
                style={{ fontSize: '1rem' }}
              >
                {r.title}
              </h3>
              <p className='text-slate-500 text-xs leading-relaxed flex-1 mb-5'>{r.desc}</p>
              <div className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${r.ctaColor}`}>
                {r.cta}
                <ArrowRight className='w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform' />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
