import { useState } from 'react';
import { Check, Star, Building2, ArrowRight, Phone, Users } from 'lucide-react';

const plans = [
  {
    id: 'lite',
    name: 'Lite',
    label: 'Bimbel Rumahan / Kursus Privat',
    capacity: 's/d 50 Siswa',
    price: 'Rp450.000',
    priceAnnual: 'Rp382.500',
    priceNote: '/ bulan',
    target: 'Bimbel Rumahan / Kursus Privat',
    desc: 'Ideal untuk lembaga kecil yang ingin mulai mengelola operasional secara digital dengan fitur lengkap.',
    cta: 'Pilih Lite',
    ctaStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-50',
    features: [
      'Kapasitas s/d 50 Siswa',
      'Dashboard Admin',
      'Data Guru & Shift',
      'Kalender & Absen',
      'Data Siswa',
      'Konfirmasi Akun',
      'Antrian Pendaftaran',
      'Dashboard Guru',
      'Module & Schedule',
      'Timesheet & Activity Tracking',
      'Dashboard Siswa',
      'Jadwal Pertemuan',
      'Progress Belajar & Module',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    label: 'LPK / Sekolah Menengah Swasta',
    capacity: 's/d 250 Siswa',
    price: 'Rp1.250.000',
    priceAnnual: 'Rp1.062.500',
    priceNote: '/ bulan',
    target: 'LPK / Sekolah Menengah Swasta',
    desc: 'Untuk lembaga yang berkembang dengan kebutuhan pengelolaan lebih lengkap termasuk data siswa selesai, program, dan reschedule.',
    cta: 'Pilih Pro',
    ctaStyle: 'text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200',
    badge: 'Paling Populer',
    popular: true,
    features: ['Kapasitas s/d 250 Siswa', 'Semua fitur Lite', 'Data Siswa Selesai', 'Reschedule Kelas', 'Program Kursus', 'Laporan Operasional', 'Dukungan Prioritas'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    label: 'Sekolah Besar / Yayasan',
    capacity: 's/d 1.000 Siswa',
    price: 'Rp3.500.000',
    priceAnnual: 'Rp2.975.000',
    priceNote: '/ bulan',
    target: 'Sekolah Besar / Yayasan',
    desc: 'Untuk institusi pendidikan besar dengan kapasitas tinggi, fitur penuh, dan dukungan implementasi khusus.',
    cta: 'Hubungi Kami',
    ctaStyle: 'text-white bg-slate-800 hover:bg-slate-900 shadow-md',
    features: ['Kapasitas s/d 1.000 Siswa', 'Semua fitur Pro', 'Multi Admin', 'Statistik & Insight Mendalam', 'Dedicated Support', 'Penyesuaian Implementasi', 'SLA Premium 99.9%'],
  },
];

export function PricingCards() {
  const [billing, setBilling] = useState('monthly');

  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center gap-4 mb-12'>
          <div className='flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200'>
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${billing === 'yearly' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Tahunan
              <span className='text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700'>Hemat 15%</span>
            </button>
          </div>
          <p className='text-xs text-slate-400 text-center max-w-md'>Semua paket sudah termasuk akses semua fitur sesuai kapasitas. Upgrade kapan saja sesuai pertumbuhan lembaga.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto'>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 p-7 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? 'border-blue-500 bg-linear-to-b from-blue-50 to-white shadow-2xl shadow-blue-100 scale-105 z-10'
                  : plan.id === 'enterprise'
                    ? 'border-slate-800 bg-slate-900 text-white'
                    : 'border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg'
              }`}
            >
              {plan.badge && (
                <div className='absolute -top-3.5 left-1/2 -translate-x-1/2'>
                  <span className='flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold shadow-md whitespace-nowrap'>
                    <Star className='w-3 h-3 fill-white' />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className='mb-5'>
                {plan.id === 'enterprise' && <Building2 className='w-5 h-5 text-slate-400 mb-2' />}

                <h3
                  className={`font-extrabold mb-1 ${plan.id === 'enterprise' ? 'text-white' : 'text-slate-900'}`}
                  style={{ fontSize: '1.35rem' }}
                >
                  {plan.name}
                </h3>

                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold mb-3 ${
                    plan.id === 'enterprise' ? 'bg-slate-700 text-slate-300' : plan.popular ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Users className='w-3 h-3' />
                  {plan.capacity}
                </div>

                <div className='flex items-baseline gap-1 mt-3 mb-1'>
                  <span className={`font-extrabold tracking-tight text-2xl ${plan.id === 'enterprise' ? 'text-white' : 'text-slate-900'}`}>{billing === 'yearly' ? plan.priceAnnual : plan.price}</span>
                  <span className={`text-xs font-medium ${plan.id === 'enterprise' ? 'text-slate-400' : 'text-slate-400'}`}>{plan.priceNote}</span>
                </div>

                {billing === 'yearly' && <p className={`text-[11px] font-medium mb-2 ${plan.id === 'enterprise' ? 'text-emerald-400' : 'text-emerald-600'}`}>Hemat 15% vs bulanan</p>}

                <p className={`text-xs font-semibold mt-1 mb-2 ${plan.id === 'enterprise' ? 'text-slate-400' : 'text-slate-500'}`}>🎯 {plan.target}</p>

                <p className={`text-xs leading-relaxed ${plan.id === 'enterprise' ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
              </div>

              <a
                href='#mulai'
                className={`w-full flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-bold transition-all mb-5 ${plan.ctaStyle}`}
              >
                {plan.id === 'enterprise' ? <Phone className='w-3.5 h-3.5' /> : <ArrowRight className='w-3.5 h-3.5' />}
                {plan.cta}
              </a>

              <div className={`border-t mb-4 ${plan.id === 'enterprise' ? 'border-slate-700' : 'border-slate-100'}`} />

              <ul className='space-y-2.5 flex-1'>
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className='flex items-start gap-2.5'
                  >
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-blue-100' : plan.id === 'enterprise' ? 'bg-slate-700' : 'bg-emerald-50'}`}>
                      <Check className={`w-2.5 h-2.5 ${plan.popular ? 'text-blue-600' : plan.id === 'enterprise' ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    </div>
                    <span className={`text-xs leading-snug ${plan.id === 'enterprise' ? 'text-slate-300' : 'text-slate-600'}`}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='text-center mt-10 text-sm text-slate-400'>Semua paket sudah termasuk update berkala, dukungan teknis, dan enkripsi data.</p>
      </div>
    </section>
  );
}
