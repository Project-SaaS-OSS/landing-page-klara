'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Fitur', href: '/fitur' },
  { label: 'Harga', href: '/harga' },
  { label: 'Demo', href: '/demo' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontak', href: '/kontak' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Link
            href='/'
            onClick={() => setMobileOpen(false)}
            className='flex items-center gap-2.5'
          >
            <Image
              src='/assets/klara-resize.png'
              alt='KLARA logo'
              width={50}
              height={56}
              className='h-9 w-auto object-contain'
              priority
            />
            <div className='flex flex-col'>
              <span
                className='text-slate-900 font-bold tracking-tight leading-none'
                style={{ fontSize: '1.05rem' }}
              >
                KLARA
              </span>
              <span
                className='text-slate-400 font-medium leading-none'
                style={{ fontSize: '0.6rem' }}
              >
                Kelola Ruang Ajar
              </span>
            </div>
          </Link>

          <div className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm rounded-lg font-medium transition-colors ${isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className='hidden md:flex items-center gap-3'>
            <Link
              href='/kontak'
              className='px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors'
            >
              Login
            </Link>
            <Link
              href='/demo'
              className='px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm'
            >
              Coba Gratis
            </Link>
          </div>

          <button
            type='button'
            className='md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100'
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className='md:hidden bg-white border-t border-slate-100 px-4 pb-4 pt-2 space-y-1'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className='block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'
            >
              {link.label}
            </Link>
          ))}
          <div className='pt-3 flex flex-col gap-2'>
            <Link
              href='/kontak'
              onClick={() => setMobileOpen(false)}
              className='block text-center px-4 py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50'
            >
              Login
            </Link>
            <Link
              href='/demo'
              onClick={() => setMobileOpen(false)}
              className='block text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg'
            >
              Coba Gratis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
