import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah tersedia masa trial?',
    a: 'Ya. Paket Gratis memberikan akses penuh selama 1 bulan tanpa biaya dan tanpa perlu kartu kredit. Selama periode ini Anda bisa mencoba semua fitur sistem untuk memastikan kesesuaiannya dengan lembaga.',
  },
  {
    q: 'Apakah saya bisa mulai dari paket Gratis?',
    a: 'Tentu. Kami merekomendasikan untuk memulai dari paket Gratis agar Anda bisa mengenal sistem, alur kerja, dan fitur-fitur utama sebelum memutuskan berlangganan. Tidak ada kewajiban setelah masa gratis berakhir.',
  },
  {
    q: 'Apakah paket dapat di-upgrade?',
    a: 'Ya. Anda bisa upgrade ke paket lebih tinggi kapan saja seiring kebutuhan lembaga berkembang. Transisi antar paket tidak memerlukan setup ulang — data dan konfigurasi Anda tetap tersimpan.',
  },
  {
    q: 'Apakah Enterprise bisa disesuaikan?',
    a: 'Tentu. Paket Enterprise dirancang untuk lembaga dengan kebutuhan khusus, baik dari sisi skala, fitur tambahan, maupun penyesuaian implementasi. Hubungi tim kami untuk konsultasi lebih lanjut.',
  },
  {
    q: 'Apakah harga sudah termasuk semua fitur dalam paket?',
    a: 'Ya. Setiap paket mencakup semua fitur yang tercantum sesuai deskripsi masing-masing. Tidak ada biaya tersembunyi. Untuk fitur di luar cakupan paket, upgrade ke paket yang lebih lengkap tersedia kapan saja.',
  },
  {
    q: 'Apakah ada demo sebelum berlangganan?',
    a: 'Ada. Anda bisa menjadwalkan sesi demo langsung bersama tim kami untuk melihat sistem bekerja secara nyata, mengajukan pertanyaan, dan mengetahui paket yang paling sesuai sebelum memulai.',
  },
  {
    q: 'Apakah paket cocok untuk bimbel kecil?',
    a: 'Sangat cocok. Sistem ini dirancang untuk lembaga dari skala kecil hingga besar. Bimbel dengan 1–2 pengajar pun bisa memanfaatkan paket Reguler atau Plus untuk langsung merasakan manfaat digitalisasi operasional.',
  },
];

export function FAQPricing() {
  const [open, setOpen] = useState(0);

  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>FAQ</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Pertanyaan Seputar <span className='text-blue-600'>Harga dan Paket</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Temukan jawaban cepat untuk pertanyaan umum seputar paket, harga, dan cara memulai.</p>
        </div>

        <div className='space-y-3'>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open === i ? 'border-blue-200 shadow-sm' : 'border-slate-100 hover:border-slate-200'} bg-white`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className='w-full flex items-center justify-between px-6 py-4 text-left'
              >
                <span className={`text-sm font-semibold pr-4 leading-snug ${open === i ? 'text-blue-700' : 'text-slate-800'}`}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-blue-500' : 'text-slate-400'}`} />
              </button>

              {open === i && (
                <div className='px-6 pb-5'>
                  <p className='text-sm text-slate-500 leading-relaxed'>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
