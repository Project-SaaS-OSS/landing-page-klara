import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ibu Rina Kusumawati',
    role: 'Admin Operasional',
    org: 'Bimbel Cerdas Nusantara, Jakarta',
    avatar: 'RK',
    avatarBg: 'bg-blue-100 text-blue-700',
    rating: 5,
    text: 'Sebelum pakai KLARA, admin kami butuh 2-3 jam hanya untuk mengatur jadwal mingguan. Sekarang kurang dari 15 menit sudah beres. Fitur deteksi konflik jadwal benar-benar membantu banget!',
  },
  {
    name: 'Bpk. Denny Setiawan',
    role: 'Owner & Direktur',
    org: 'LKP Prima Mandiri, Surabaya',
    avatar: 'DS',
    avatarBg: 'bg-violet-100 text-violet-700',
    rating: 5,
    text: 'Sebagai owner, saya akhirnya bisa pantau jumlah siswa aktif, pendapatan, dan performa tutor kapan saja dari ponsel. Tidak perlu lagi minta laporan manual ke admin tiap akhir bulan.',
  },
  {
    name: 'Ibu Laila Santoso',
    role: 'Academic Coordinator',
    org: 'Kursus Bahasa Smart Academy, Bandung',
    avatar: 'LS',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    rating: 5,
    text: 'Sistem absensi dan timesheet gurunya sangat membantu. Dulu rekap kehadiran bisa makan waktu berjam-jam, sekarang semuanya otomatis tercatat dan bisa langsung dilihat kapan saja.',
  },
];

export function Testimonials() {
  return (
    <section
      className='py-20 lg:py-28'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold mb-4 border border-amber-100'>Testimoni</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Apa Kata <span className='text-blue-600'>Pengguna Kami?</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Ratusan lembaga kursus telah merasakan perubahan nyata dalam operasional mereka.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className='bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
            >
              <div className='w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-5'>
                <Quote className='w-4 h-4 text-blue-400' />
              </div>

              <div className='flex items-center gap-0.5 mb-4'>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 text-amber-400 fill-amber-400'
                  />
                ))}
              </div>

              <p className='text-slate-600 text-sm leading-relaxed mb-6'>&quot;{t.text}&quot;</p>

              <div className='flex items-center gap-3 pt-5 border-t border-slate-50'>
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} flex items-center justify-center text-sm font-bold shrink-0`}>{t.avatar}</div>
                <div>
                  <p className='text-sm font-semibold text-slate-800'>{t.name}</p>
                  <p className='text-xs text-slate-400'>
                    {t.role} · {t.org}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-3 gap-6 mt-14 max-w-lg mx-auto'>
          {[
            { val: '4.9/5', label: 'Rating Kepuasan' },
            { val: '500+', label: 'Lembaga Aktif' },
            { val: '97%', label: 'Rekomendasi' },
          ].map((s) => (
            <div
              key={s.label}
              className='text-center'
            >
              <p className='text-2xl font-extrabold text-slate-900'>{s.val}</p>
              <p className='text-xs text-slate-400 mt-1'>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
