import { Send, Search, PhoneCall, Lightbulb } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Send,
    iconBg: 'bg-blue-600',
    title: 'Kirim Form atau Hubungi Tim',
    desc: 'Isi form kontak, chat WhatsApp, atau kirim email dengan detail kebutuhan lembaga Anda.',
  },
  {
    number: '02',
    icon: Search,
    iconBg: 'bg-violet-600',
    title: 'Tim Meninjau Kebutuhan Anda',
    desc: 'Tim kami akan mempelajari informasi yang dikirimkan untuk mempersiapkan sesi yang relevan.',
  },
  {
    number: '03',
    icon: PhoneCall,
    iconBg: 'bg-emerald-600',
    title: 'Konsultasi atau Demo',
    desc: 'Kami akan menghubungi Anda untuk sesi konsultasi atau demo produk sesuai kebutuhan.',
  },
  {
    number: '04',
    icon: Lightbulb,
    iconBg: 'bg-amber-500',
    title: 'Arahan Paket & Solusi',
    desc: 'Anda mendapatkan rekomendasi paket dan solusi yang paling tepat untuk lembaga Anda.',
  },
];

export function ProcessSteps() {
  return (
    <section
      className='py-14 lg:py-20'
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-xl mx-auto mb-14'>
          <h2
            className='text-slate-900 font-extrabold tracking-tight mb-3'
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Apa yang Terjadi Setelah Anda <span className='text-blue-600'>Menghubungi Kami?</span>
          </h2>
          <p className='text-slate-500 text-sm leading-relaxed'>Proses yang jelas dan transparan agar Anda tahu apa yang bisa diharapkan selanjutnya.</p>
        </div>

        <div className='relative'>
          <div className='hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-blue-200 via-violet-200 to-amber-200 z-0' />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10'>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className='flex flex-col items-center text-center'
              >
                <div className={`w-20 h-20 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-lg mb-5 relative`}>
                  <step.icon className='w-9 h-9 text-white' />
                  <span className='absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-slate-200 text-slate-900 text-[10px] font-extrabold flex items-center justify-center'>{i + 1}</span>
                </div>

                <h3
                  className='text-slate-900 font-bold mb-2 leading-snug'
                  style={{ fontSize: '0.9rem' }}
                >
                  {step.title}
                </h3>

                <p className='text-slate-500 text-xs leading-relaxed max-w-45'>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
