import Link from 'next/link';
import { MessageCircle, CalendarCheck, Phone, Mail } from 'lucide-react';

export function SupportCTA() {
  return (
    <section className='py-14 lg:py-20 bg-white'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 via-white to-sky-50 p-10 lg:p-14'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
            <div className='flex items-start gap-4 flex-1'>
              <div className='w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-200'>
                <MessageCircle className='w-7 h-7 text-white' />
              </div>
              <div>
                <h2
                  className='text-slate-900 font-extrabold mb-2 leading-snug'
                  style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)' }}
                >
                  Tidak Menemukan Jawaban yang Anda Cari?
                </h2>
                <p
                  className='text-slate-500 leading-relaxed'
                  style={{ fontSize: '0.95rem' }}
                >
                  Tim kami siap membantu menjelaskan fitur, paket, dan kebutuhan implementasi untuk lembaga Anda secara lebih spesifik.
                </p>

                <div className='flex flex-wrap gap-3 mt-5'>
                  <div className='flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-sm text-slate-600'>
                    <Mail className='w-4 h-4 text-blue-500' />
                    hello@klara.id
                  </div>
                  <div className='flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-sm text-slate-600'>
                    <Phone className='w-4 h-4 text-emerald-500' />
                    +62 812-3456-7890
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0'>
              <Link
                href='/#kontak'
                className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200 transition-all'
              >
                <Phone className='w-4 h-4' />
                Hubungi Kami
              </Link>
              <Link
                href='/demo'
                className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 transition-all'
              >
                <CalendarCheck className='w-4 h-4' />
                Jadwalkan Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
