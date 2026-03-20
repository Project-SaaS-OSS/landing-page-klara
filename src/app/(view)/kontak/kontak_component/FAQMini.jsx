import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah saya bisa minta demo terlebih dahulu?',
    a: 'Ya, tentu. Demo justru kami rekomendasikan sebelum Anda memutuskan untuk berlangganan. Demo dapat dilakukan secara online dan disesuaikan dengan kebutuhan lembaga Anda.',
  },
  {
    q: 'Apakah konsultasi ini berbayar?',
    a: 'Tidak. Konsultasi dan sesi demo sepenuhnya gratis dan tanpa kewajiban untuk melanjutkan ke berlangganan.',
  },
  {
    q: 'Apakah saya harus sudah memilih paket terlebih dahulu?',
    a: 'Tidak perlu. Anda bisa menghubungi kami tanpa harus mengetahui paket mana yang cocok. Tim kami akan membantu memberikan rekomendasi yang paling sesuai.',
  },
  {
    q: 'Apakah tim bisa membantu menjelaskan fitur yang sesuai dengan kebutuhan saya?',
    a: 'Ya. Itulah tujuan utama sesi konsultasi kami — menjelaskan fitur yang benar-benar relevan untuk operasional dan kebutuhan spesifik lembaga Anda.',
  },
  {
    q: 'Berapa lama biasanya tim merespons?',
    a: 'Kami berusaha merespons semua permintaan dalam 1 hari kerja. Untuk keperluan mendesak, menghubungi kami via WhatsApp adalah pilihan tercepat.',
  },
];

export function FAQMini() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section
      className='py-14 lg:py-20'
      style={{ background: '#f8fafc' }}
    >
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10'>
          <h2
            className='text-slate-900 font-extrabold tracking-tight mb-3'
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Pertanyaan Sebelum <span className='text-blue-600'>Menghubungi Kami</span>
          </h2>
          <p className='text-slate-500 text-sm leading-relaxed'>Jawaban singkat untuk keraguan yang mungkin Anda miliki sebelum memutuskan menghubungi tim.</p>
        </div>

        <div className='space-y-2.5'>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-blue-200 bg-blue-50/30 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className='w-full flex items-center justify-between gap-3 px-6 py-4 text-left'
                >
                  <span className={`text-sm font-semibold leading-snug pr-2 ${isOpen ? 'text-blue-700' : 'text-slate-800'}`}>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </button>

                {isOpen && (
                  <div className='px-6 pb-5'>
                    <p className='text-sm text-slate-500 leading-relaxed'>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
