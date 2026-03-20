import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Apakah fitur dapat digunakan oleh admin, guru, dan siswa?',
    a: 'Ya. Sistem KLARA dirancang dengan role-based access, sehingga setiap pengguna hanya melihat fitur yang relevan dengan perannya. Admin punya akses penuh ke data dan laporan, guru mengelola materi dan jadwal, sedangkan siswa mengakses pembelajaran dan progres mereka.',
  },
  {
    q: 'Apakah jadwal dapat diubah melalui reschedule?',
    a: 'Tentu. Fitur reschedule tersedia dan dapat digunakan oleh siswa maupun admin. Permintaan reschedule masuk ke sistem dan diproses dengan konfirmasi. Sistem juga memastikan tidak ada konflik jadwal saat reschedule disetujui.',
  },
  {
    q: 'Apakah materi pembelajaran bisa diakses sesuai progres siswa?',
    a: 'Ya. Modul pembelajaran dirancang bersifat progresif — siswa hanya bisa mengakses modul berikutnya setelah menyelesaikan modul sebelumnya. Guru dan admin dapat mengatur urutan dan hak akses setiap modul.',
  },
  {
    q: 'Apakah absensi dapat dilihat kembali?',
    a: 'Ya. Semua data absensi guru dan siswa tersimpan dan bisa diakses kembali kapan saja. Admin dapat melihat rekap kehadiran per kelas, per siswa, maupun per guru dalam rentang waktu tertentu.',
  },
  {
    q: 'Apakah laporan operasional tersedia?',
    a: 'Ya. Sistem menyediakan laporan rekap progress siswa, statistik pertumbuhan, dan rekap absensi yang dapat diakses oleh admin dan owner. Laporan juga bisa diunduh dalam format PDF.',
  },
  {
    q: 'Apakah activity tracking guru tersedia?',
    a: 'Ya. Setiap guru memiliki fitur timesheet dan activity tracking yang merekam jam mengajar, sesi pertemuan, dan aktivitas harian secara otomatis dan mudah dipantau oleh admin.',
  },
];

export function FAQFeatures() {
  const [open, setOpen] = useState(0);

  return (
    <section className='py-20 lg:py-28 bg-white'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>FAQ Fitur</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Pertanyaan tentang <span className='text-blue-600'>Fitur</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Jawaban singkat untuk pertanyaan umum seputar kemampuan sistem KLARA.</p>
        </div>

        <div className='space-y-3'>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 ${open === i ? 'border-blue-200 shadow-sm' : 'border-slate-100'} bg-white overflow-hidden`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className='w-full flex items-center justify-between px-6 py-4 text-left'
              >
                <span className={`text-sm font-semibold pr-4 leading-snug ${open === i ? 'text-blue-700' : 'text-slate-800'}`}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
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
