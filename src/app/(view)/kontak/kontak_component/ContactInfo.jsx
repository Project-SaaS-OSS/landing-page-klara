import { Mail, MessageCircle, MapPin, Clock, Info } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    label: 'Email',
    value: 'hello@klara.id',
    sub: 'Untuk pertanyaan formal dan kerja sama',
    href: 'mailto:hello@klara.id',
  },
  {
    icon: MessageCircle,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    label: 'WhatsApp',
    value: '+62 812-3456-7890',
    sub: 'Respons cepat hari kerja',
    href: 'https://wa.me/6281234567890',
  },
  {
    icon: MapPin,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    label: 'Lokasi',
    value: 'Jakarta Selatan, Indonesia',
    sub: 'Konsultasi juga tersedia secara online',
    href: null,
  },
  {
    icon: Clock,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    label: 'Jam Operasional',
    value: 'Senin – Jumat, 09.00 – 17.00',
    sub: 'Diluar jam kerja, balasan mungkin tertunda',
    href: null,
  },
];

export function ContactInfo() {
  return (
    <section className='py-14 lg:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-xl mb-10'>
          <h2
            className='text-slate-900 font-extrabold tracking-tight mb-3'
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Informasi <span className='text-blue-600'>Kontak</span>
          </h2>
          <p className='text-slate-500 text-sm leading-relaxed'>Pilih saluran komunikasi yang paling sesuai dengan kebutuhan Anda.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6'>
          {contactDetails.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className='group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md p-6 transition-all duration-300'
              >
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <p className='text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1'>{item.label}</p>
                <p className='text-slate-900 font-bold text-sm mb-1 group-hover:text-blue-700 transition-colors'>{item.value}</p>
                <p className='text-slate-400 text-[11px] leading-snug'>{item.sub}</p>
              </a>
            ) : (
              <div
                key={item.label}
                className='bg-white rounded-2xl border border-slate-100 p-6'
              >
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <p className='text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1'>{item.label}</p>
                <p className='text-slate-900 font-bold text-sm mb-1'>{item.value}</p>
                <p className='text-slate-400 text-[11px] leading-snug'>{item.sub}</p>
              </div>
            ),
          )}
        </div>

        <div className='flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4'>
          <Info className='w-4 h-4 text-blue-500 shrink-0 mt-0.5' />
          <p className='text-blue-700 text-xs leading-relaxed'>
            Untuk demo dan konsultasi, kami sarankan mengisi{' '}
            <a
              href='#form-kontak'
              className='font-bold underline underline-offset-2'
            >
              form kontak
            </a>{' '}
            atau menghubungi kami melalui{' '}
            <a
              href='https://wa.me/6281234567890'
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold underline underline-offset-2'
            >
              WhatsApp
            </a>{' '}
            agar tim dapat mempersiapkan sesi yang paling relevan untuk kebutuhan lembaga Anda.
          </p>
        </div>
      </div>
    </section>
  );
}
