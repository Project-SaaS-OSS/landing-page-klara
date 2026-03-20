import Link from 'next/link';
import { useState } from 'react';
import { Search, HelpCircle, CalendarCheck, Phone } from 'lucide-react';

const floatingTags = ['Fitur', 'Harga', 'Demo', 'Implementasi', 'Akun', 'Laporan'];

export function HeroFAQ({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    onSearch(tag);
  };

  return (
    <section
      className='pt-24 pb-16 lg:pt-28 lg:pb-20 relative overflow-hidden'
      style={{ background: 'linear-gradient(160deg, #eff6ff 0%, #ffffff 55%, #f0fdf4 100%)' }}
    >
      <div className='absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none' />
      <div className='absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-emerald-100 opacity-40 blur-3xl pointer-events-none' />

      <div className='hidden lg:block absolute top-28 left-10 rotate-[-8deg] opacity-60'>
        <span className='px-3 py-1.5 bg-white border border-blue-100 rounded-full text-xs text-blue-600 font-semibold shadow-sm'>Fitur</span>
      </div>
      <div className='hidden lg:block absolute top-40 right-14 rotate-6 opacity-60'>
        <span className='px-3 py-1.5 bg-white border border-violet-100 rounded-full text-xs text-violet-600 font-semibold shadow-sm'>Harga</span>
      </div>
      <div className='hidden lg:block absolute bottom-24 left-20 rotate-[4deg] opacity-50'>
        <span className='px-3 py-1.5 bg-white border border-emerald-100 rounded-full text-xs text-emerald-600 font-semibold shadow-sm'>Demo</span>
      </div>
      <div className='hidden lg:block absolute bottom-20 right-24 rotate-[-5deg] opacity-50'>
        <span className='px-3 py-1.5 bg-white border border-amber-100 rounded-full text-xs text-amber-600 font-semibold shadow-sm'>Implementasi</span>
      </div>

      <div className='relative max-w-3xl mx-auto px-4 sm:px-6 text-center'>
        <div className='inline-flex w-14 h-14 rounded-2xl bg-blue-100 items-center justify-center mb-5 shadow-sm'>
          <HelpCircle className='w-7 h-7 text-blue-600' />
        </div>

        <h1
          className='text-slate-900 mb-4 tracking-tight'
          style={{ fontSize: 'clamp(1.9rem, 5vw, 3rem)', fontWeight: 800, lineHeight: 1.12 }}
        >
          Pertanyaan yang <span className='text-blue-600'>Sering Diajukan</span>
        </h1>

        <p
          className='text-slate-500 leading-relaxed mb-8 max-w-xl mx-auto'
          style={{ fontSize: '1.05rem' }}
        >
          Temukan jawaban seputar fitur, paket, implementasi, dan penggunaan sistem untuk membantu Anda memahami produk dengan lebih cepat.
        </p>

        <div className='relative max-w-xl mx-auto mb-6'>
          <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none'>
            <Search className='w-5 h-5 text-slate-400' />
          </div>
          <input
            type='text'
            value={query}
            onChange={handleChange}
            placeholder='Cari pertanyaan, fitur, atau topik lainnya...'
            className='w-full pl-12 pr-5 py-4 rounded-2xl border-2 border-slate-200 bg-white text-slate-800 text-sm shadow-sm
              focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all'
          />
        </div>

        <div className='flex flex-wrap justify-center gap-2 mb-8'>
          {floatingTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className='px-3.5 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-semibold
                hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all shadow-sm'
            >
              {tag}
            </button>
          ))}
        </div>

        <p className='text-sm text-slate-400 mb-4'>Masih bingung? Anda juga bisa jadwalkan demo atau hubungi tim kami.</p>

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Link
            href='/demo'
            className='inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-100 transition-all'
          >
            <CalendarCheck className='w-4 h-4' />
            Jadwalkan Demo
          </Link>
          <Link
            href='/#kontak'
            className='inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all'
          >
            <Phone className='w-4 h-4' />
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
