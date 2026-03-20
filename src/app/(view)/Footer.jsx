import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const links = {
  Produk: [
    { label: 'Fitur', href: '/fitur' },
    { label: 'Harga', href: '/harga' },
  ],
  Perusahaan: [
    { label: 'Beranda', href: '/' },
    { label: 'Blog', href: '#' },
  ],
  Bantuan: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontak', href: '/kontak' },
    { label: 'Jadwalkan Demo', href: '/demo' },
  ],
};

export function Footer() {
  return (
    <footer
      id='kontak'
      className='bg-slate-900 text-slate-400'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12'>
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-2.5 mb-5'>
              <Image
                src='/assets/klara-resize.png'
                alt='KLARA logo'
                width={50}
                height={56}
                className='h-10 w-auto object-contain'
                priority
              />
              <span
                className='text-white font-bold tracking-tight'
                style={{ fontSize: '1.05rem' }}
              >
                KLARA
              </span>
            </div>

            <p className='text-sm leading-relaxed mb-6 max-w-xs'>Platform manajemen operasional bimbel dan lembaga kursus modern. Satu sistem untuk semua kebutuhan akademik, operasional, dan evaluasi.</p>

            <div className='space-y-2.5'>
              {[
                { icon: Mail, text: 'hello@klara.id' },
                { icon: Phone, text: '+62 812-3456-7890 (WhatsApp)' },
                { icon: MapPin, text: 'Jakarta Selatan, Indonesia' },
              ].map((c) => (
                <div
                  key={c.text}
                  className='flex items-center gap-2.5 text-sm'
                >
                  <c.icon className='w-4 h-4 text-blue-400 shrink-0' />
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className='text-white text-sm font-semibold mb-4'>{group}</h4>
              <ul className='space-y-2.5'>
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className='text-sm hover:text-white transition-colors'
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4'>
          <p className='text-xs'>&copy; 2026 KLARA - Kelola Ruang Ajar. Hak cipta dilindungi undang-undang.</p>

          <div className='flex items-center gap-3'>
            {[
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter/X' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Youtube, label: 'YouTube' },
            ].map((s) => (
              <a
                key={s.label}
                href='#'
                aria-label={s.label}
                className='w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors'
              >
                <s.icon className='w-4 h-4' />
              </a>
            ))}
          </div>

          <div className='flex items-center gap-4 text-xs'>
            <a
              href='#'
              className='hover:text-white transition-colors'
            >
              Kebijakan Privasi
            </a>
            <a
              href='#'
              className='hover:text-white transition-colors'
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
