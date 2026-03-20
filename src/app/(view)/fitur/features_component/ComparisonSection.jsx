import { X, Check, ArrowRight } from 'lucide-react';

const before = [
  'Jadwal dikelola di Excel & Google Sheet',
  'Materi tersebar di WhatsApp dan Drive',
  'Evaluasi dilakukan secara manual',
  'Absensi dicatat di kertas atau form manual',
  'Data siswa dan guru tidak terpusat',
  'Laporan dibuat manual akhir bulan',
];

const after = [
  'Jadwal terpusat dengan deteksi konflik otomatis',
  'Materi tersimpan rapi dalam satu sistem',
  'Test & review terintegrasi penuh',
  'Absensi digital cepat dan terdokumentasi',
  'Data lengkap dan mudah dicari dalam sistem',
  'Laporan otomatis tersedia kapan saja',
];

export function ComparisonSection() {
  return (
    <section className='py-20 lg:py-28 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 border border-slate-200'>Sebelum vs Sesudah</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Dari Proses Manual ke <span className='text-blue-600'>Sistem Terintegrasi</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Lihat perbedaan nyata antara cara kerja lama yang manual dengan sistem KLARA yang terintegrasi.</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 items-stretch max-w-4xl mx-auto'>
          <div className='flex-1 bg-rose-50 border-2 border-rose-100 rounded-2xl p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center'>
                <X className='w-5 h-5 text-rose-500' />
              </div>
              <div>
                <p className='text-xs font-bold text-rose-400 uppercase tracking-wider'>Sebelum</p>
                <h3
                  className='text-rose-900 font-bold'
                  style={{ fontSize: '1rem' }}
                >
                  Proses Manual
                </h3>
              </div>
            </div>

            <ul className='space-y-3.5'>
              {before.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-3'
                >
                  <div className='w-5 h-5 rounded-full bg-rose-200 flex items-center justify-center shrink-0 mt-0.5'>
                    <X className='w-3 h-3 text-rose-600' />
                  </div>
                  <span className='text-sm text-rose-800 leading-relaxed'>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200'>
              <ArrowRight className='w-5 h-5 text-white' />
            </div>
          </div>

          <div className='flex-1 bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center'>
                <Check className='w-5 h-5 text-emerald-600' />
              </div>
              <div>
                <p className='text-xs font-bold text-emerald-500 uppercase tracking-wider'>Sesudah</p>
                <h3
                  className='text-emerald-900 font-bold'
                  style={{ fontSize: '1rem' }}
                >
                  KLARA — Sistem Terintegrasi
                </h3>
              </div>
            </div>

            <ul className='space-y-3.5'>
              {after.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-3'
                >
                  <div className='w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center shrink-0 mt-0.5'>
                    <Check className='w-3 h-3 text-emerald-700' />
                  </div>
                  <span className='text-sm text-emerald-900 leading-relaxed'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
