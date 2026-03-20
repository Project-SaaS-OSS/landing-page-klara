import { Check, Zap, Users } from 'lucide-react';

const plans = [
  {
    name: 'Lite',
    sub: 'Bimbel Rumahan / Kursus Privat',
    capacity: 's/d 50 Siswa',
    price: 'Rp450.000',
    period: '/ bulan',
    desc: 'Fitur lengkap untuk operasional harian bimbel kecil: data guru, shift, absen, kalender, dan antrian.',
    cta: 'Pilih Lite',
    ctaStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-50',
    popular: false,
    color: 'border-slate-200',
    features: [
      'Kapasitas s/d 50 Siswa',
      'Data Guru & Shift',
      'Kalender & Absen',
      'Data Siswa & Konfirmasi Akun',
      'Antrian Pendaftaran',
      'Dashboard Guru (Module, Timesheet, Schedule, Activity Tracking)',
      'Dashboard Siswa (Jadwal Pertemuan, Progress Belajar, Module)',
    ],
  },
  {
    name: 'Pro',
    sub: 'LPK / Sekolah Menengah Swasta',
    capacity: 's/d 250 Siswa',
    price: 'Rp1.250.000',
    period: '/ bulan',
    desc: 'Tambahkan data siswa selesai, reschedule, program kursus, dan laporan operasional untuk lembaga berkembang.',
    cta: 'Pilih Pro',
    ctaStyle: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200',
    popular: true,
    color: 'border-blue-500',
    features: ['Kapasitas s/d 250 Siswa', 'Semua fitur Lite', 'Data Siswa Selesai', 'Reschedule Kelas', 'Program Kursus', 'Laporan Operasional', 'Dukungan Prioritas'],
  },
  {
    name: 'Enterprise',
    sub: 'Sekolah Besar / Yayasan',
    capacity: 's/d 1.000 Siswa',
    price: 'Rp3.500.000',
    period: '/ bulan',
    desc: 'Kapasitas besar, multi admin, statistik mendalam, dedicated support, dan SLA premium untuk institusi skala besar.',
    cta: 'Hubungi Kami',
    ctaStyle: 'border border-slate-800 text-slate-800 hover:bg-slate-900 hover:text-white',
    popular: false,
    color: 'border-slate-300',
    features: ['Kapasitas s/d 1.000 Siswa', 'Semua fitur Pro', 'Multi Admin', 'Statistik & Insight Mendalam', 'Dedicated Support', 'Penyesuaian Implementasi', 'SLA Premium 99.9%'],
  },
];

export function Pricing() {
  return (
    <section
      id='harga'
      className='py-20 lg:py-28'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Paket Harga</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Pilih Paket yang <span className='text-blue-600'>Sesuai Lembaga Anda</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Tiga pilihan paket berdasarkan kapasitas siswa dan jenis lembaga pendidikan.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 items-start max-w-5xl mx-auto'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 ${plan.color} p-6 shadow-sm ${plan.popular ? 'shadow-blue-100 shadow-xl scale-105 z-10' : ''} transition-all hover:-translate-y-1 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2'>
                  <span className='flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white text-[11px] font-bold rounded-full shadow-md whitespace-nowrap'>
                    <Zap className='w-3 h-3 fill-white' />
                    Paling Populer
                  </span>
                </div>
              )}

              <div className='mb-4'>
                <h3
                  className='text-slate-900 font-bold'
                  style={{ fontSize: '1.15rem' }}
                >
                  {plan.name}
                </h3>
                <p className='text-xs text-slate-400 font-medium'>{plan.sub}</p>
              </div>

              <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-bold mb-4'>
                <Users className='w-3 h-3' />
                {plan.capacity}
              </div>

              <div className='mb-2'>
                <span className='text-2xl font-extrabold text-slate-900'>{plan.price}</span>
                {plan.period && <span className='text-sm text-slate-400'> {plan.period}</span>}
              </div>

              <p className='text-xs text-slate-500 leading-relaxed mb-5'>{plan.desc}</p>

              <a
                href='#coba'
                className={`block text-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-all mb-5 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              <ul className='space-y-2'>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className='flex items-start gap-2 text-xs text-slate-600'
                  >
                    <Check className='w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0' />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='text-center mt-8 text-sm text-slate-400'>Semua paket termasuk update berkala, dukungan teknis, dan enkripsi data.</p>
      </div>
    </section>
  );
}
