import { Layers, CreditCard, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    icon: Layers,
    iconBg: 'bg-violet-600',
    borderHover: 'hover:border-violet-200',
    title: 'Lihat Fitur',
    desc: 'Pelajari kemampuan sistem lebih detail sebelum memutuskan untuk menghubungi kami.',
    href: '/fitur',
    cta: 'Jelajahi Fitur',
    ctaColor: 'text-violet-700',
  },
  {
    icon: CreditCard,
    iconBg: 'bg-blue-600',
    borderHover: 'hover:border-blue-200',
    title: 'Bandingkan Harga',
    desc: 'Temukan paket yang paling sesuai dengan skala dan kebutuhan operasional lembaga.',
    href: '/harga',
    cta: 'Lihat Paket',
    ctaColor: 'text-blue-700',
  },
  {
    icon: HelpCircle,
    iconBg: 'bg-emerald-600',
    borderHover: 'hover:border-emerald-200',
    title: 'Baca FAQ',
    desc: 'Temukan jawaban atas pertanyaan umum seputar fitur, harga, dan implementasi sistem.',
    href: '/faq',
    cta: 'Buka FAQ',
    ctaColor: 'text-emerald-700',
  },
];

export function ResourceLinks() {
  return (
    <section className='py-14 lg:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-lg mx-auto mb-12'>
          <h2
            className='text-slate-900 font-extrabold tracking-tight mb-3'
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Mau Lihat Dulu Sebelum <span className='text-blue-600'>Menghubungi?</span>
          </h2>
          <p className='text-slate-500 text-sm leading-relaxed'>Jelajahi halaman-halaman berikut untuk memahami produk lebih dalam sebelum berkonsultasi.</p>
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
