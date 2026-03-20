import { CalendarCheck, MessageCircle, Mail, FileText, ArrowRight } from 'lucide-react';

const options = [
  {
    icon: CalendarCheck,
    iconBg: 'bg-blue-600',
    badge: 'Rekomendasi',
    badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Jadwalkan Demo',
    desc: 'Lihat bagaimana sistem bekerja secara langsung untuk kebutuhan operasional lembaga Anda.',
    cta: 'Jadwalkan Sekarang',
    href: '#form-kontak',
    border: 'hover:border-blue-200',
    ctaColor: 'text-blue-700 hover:text-blue-900',
  },
  {
    icon: MessageCircle,
    iconBg: 'bg-emerald-600',
    badge: 'Respons Cepat',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    title: 'Konsultasi via WhatsApp',
    desc: 'Tanyakan kebutuhan fitur, paket, atau implementasi secara langsung dan cepat.',
    cta: 'Chat Sekarang',
    href: 'https://wa.me/6281234567890',
    border: 'hover:border-emerald-200',
    ctaColor: 'text-emerald-700 hover:text-emerald-900',
  },
  {
    icon: Mail,
    iconBg: 'bg-violet-600',
    badge: 'Formal',
    badgeColor: 'bg-violet-100 text-violet-700',
    title: 'Email',
    desc: 'Kirim pertanyaan atau kebutuhan kerja sama secara lebih terstruktur dan formal.',
    cta: 'Kirim Email',
    href: 'mailto:hello@klara.id',
    border: 'hover:border-violet-200',
    ctaColor: 'text-violet-700 hover:text-violet-900',
  },
  {
    icon: FileText,
    iconBg: 'bg-amber-500',
    badge: 'Detail Kebutuhan',
    badgeColor: 'bg-amber-100 text-amber-700',
    title: 'Form Kontak',
    desc: 'Tinggalkan detail kebutuhan lembaga Anda dan tim kami akan menghubungi kembali.',
    cta: 'Isi Form',
    href: '#form-kontak',
    border: 'hover:border-amber-200',
    ctaColor: 'text-amber-700 hover:text-amber-900',
  },
];

export function ContactOptionCards() {
  return (
    <section className='py-14 lg:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-lg mx-auto mb-12'>
          <h2
            className='text-slate-900 font-extrabold tracking-tight mb-3'
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Pilih Cara yang Paling <span className='text-blue-600'>Nyaman</span>
          </h2>
          <p className='text-slate-500 text-sm leading-relaxed'>Hubungi kami melalui saluran yang paling sesuai dengan kebutuhan dan kenyamanan Anda.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {options.map((opt) => (
            <a
              key={opt.title}
              href={opt.href}
              target={opt.href.startsWith('http') ? '_blank' : undefined}
              rel={opt.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group bg-white rounded-2xl border-2 border-slate-100 ${opt.border} p-6 flex flex-col hover:shadow-lg transition-all duration-300`}
            >
              <div className='flex items-start justify-between mb-4'>
                <div className={`w-11 h-11 rounded-xl ${opt.iconBg} flex items-center justify-center shadow-md`}>
                  <opt.icon className='w-5 h-5 text-white' />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${opt.badgeColor}`}>{opt.badge}</span>
              </div>

              <h3
                className='text-slate-900 font-bold mb-2'
                style={{ fontSize: '0.9rem' }}
              >
                {opt.title}
              </h3>

              <p className='text-slate-500 text-xs leading-relaxed flex-1 mb-4'>{opt.desc}</p>

              <div className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${opt.ctaColor}`}>
                {opt.cta}
                <ArrowRight className='w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform' />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
