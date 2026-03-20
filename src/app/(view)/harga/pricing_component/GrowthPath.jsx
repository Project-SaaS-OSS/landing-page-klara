import { Users, TrendingUp, Building2 } from 'lucide-react';

const steps = [
  {
    icon: Users,
    name: 'Lite',
    sub: 'Bimbel Rumahan / Kursus Privat',
    color: 'bg-blue-100 text-blue-700',
    ring: 'ring-blue-200',
    dot: 'bg-blue-500',
    desc: 'Kapasitas s/d 50 siswa. Fitur lengkap untuk operasional harian: Data Guru, Shift, Kalender, Absen, Konfirmasi Akun, dan Antrian.',
    label: 'Mulai di sini',
    labelColor: 'text-blue-700 bg-blue-50 border-blue-200',
    price: 'Rp450.000/bln',
  },
  {
    icon: TrendingUp,
    name: 'Pro',
    sub: 'LPK / Sekolah Menengah Swasta',
    color: 'bg-violet-100 text-violet-700',
    ring: 'ring-violet-200',
    dot: 'bg-violet-500',
    desc: 'Kapasitas s/d 250 siswa. Tambahan Data Siswa Selesai, Reschedule Kelas, Program Kursus, dan Laporan Operasional.',
    label: 'Paling populer',
    labelColor: 'text-violet-700 bg-violet-50 border-violet-200',
    price: 'Rp1.250.000/bln',
  },
  {
    icon: Building2,
    name: 'Enterprise',
    sub: 'Sekolah Besar / Yayasan',
    color: 'bg-slate-100 text-slate-700',
    ring: 'ring-slate-300',
    dot: 'bg-slate-700',
    desc: 'Kapasitas s/d 1.000 siswa. Fitur penuh dengan Multi Admin, Statistik Mendalam, Dedicated Support, dan SLA 99.9%.',
    label: 'Skala besar',
    labelColor: 'text-slate-700 bg-slate-100 border-slate-300',
    price: 'Rp3.500.000/bln',
  },
];

export function GrowthPath() {
  return (
    <section
      className='py-16 lg:py-24'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-14'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Pilihan Paket</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Pilih Sesuai <span className='text-blue-600'>Skala Lembaga Anda</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Tiga paket yang dirancang khusus untuk berbagai skala dan jenis lembaga pendidikan.</p>
        </div>

        <div className='hidden lg:flex items-start relative'>
          <div className='absolute top-9 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-blue-300 via-violet-300 to-slate-300' />

          {steps.map((step) => (
            <div
              key={step.name}
              className='flex-1 flex flex-col items-center text-center px-5 relative z-10'
            >
              <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-4 shadow-sm ring-4 ${step.ring}`}>
                <step.icon className='w-7 h-7' />
              </div>

              <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${step.labelColor} mb-3`}>{step.label}</span>

              <h3
                className='text-slate-900 font-extrabold mb-0.5'
                style={{ fontSize: '1rem' }}
              >
                {step.name}
              </h3>
              <p className='text-xs font-semibold text-slate-500 mb-1'>{step.sub}</p>
              <p className='text-xs font-bold text-blue-600 mb-3'>{step.price}</p>

              <div className='bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-md hover:border-blue-100 transition-all duration-300'>
                <p className='text-xs text-slate-500 leading-relaxed'>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='lg:hidden space-y-4'>
          {steps.map((step, i) => (
            <div
              key={step.name}
              className='flex gap-4 items-start'
            >
              <div className='flex flex-col items-center shrink-0'>
                <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shadow-sm`}>
                  <step.icon className='w-5 h-5' />
                </div>
                {i < steps.length - 1 && <div className='w-0.5 flex-1 bg-slate-200 my-2 min-h-4' />}
              </div>
              <div className='flex-1 pb-2'>
                <div className='flex items-center gap-2 mb-1 flex-wrap'>
                  <h3
                    className='font-bold text-slate-900'
                    style={{ fontSize: '0.95rem' }}
                  >
                    {step.name}
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${step.labelColor}`}>{step.label}</span>
                  <span className='text-[10px] font-bold text-blue-600'>{step.price}</span>
                </div>
                <p className='text-xs font-semibold text-slate-400 mb-1'>{step.sub}</p>
                <p className='text-sm text-slate-500 leading-relaxed'>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
