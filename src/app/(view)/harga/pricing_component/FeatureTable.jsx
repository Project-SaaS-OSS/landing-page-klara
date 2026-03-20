import React from 'react';
import { Check, Minus } from 'lucide-react';

const categories = [
  {
    label: 'Kapasitas',
    features: [
      { name: 'Maks. Siswa', lite: '50 Siswa', pro: '250 Siswa', enterprise: '1.000 Siswa' },
      {
        name: 'Target Lembaga',
        lite: 'Bimbel / Kursus Privat',
        pro: 'LPK / Sekolah Swasta',
        enterprise: 'Sekolah Besar / Yayasan',
      },
    ],
  },
  {
    label: 'Admin',
    features: [
      { name: 'Data Guru', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Data Shift', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Kalender', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Absen', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Data Siswa', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Data Siswa Selesai', lite: 'minus', pro: 'check', enterprise: 'check' },
      { name: 'Konfirmasi Akun', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Reschedule', lite: 'minus', pro: 'check', enterprise: 'check' },
      { name: 'Program', lite: 'minus', pro: 'check', enterprise: 'check' },
      { name: 'Antrian', lite: 'check', pro: 'check', enterprise: 'check' },
    ],
  },
  {
    label: 'Guru',
    features: [
      { name: 'Dashboard', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Module', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Timesheet', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Schedule', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Activity Tracking', lite: 'check', pro: 'check', enterprise: 'check' },
    ],
  },
  {
    label: 'Siswa',
    features: [
      { name: 'Dashboard', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Jadwal Pertemuan', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Progress Belajar', lite: 'check', pro: 'check', enterprise: 'check' },
      { name: 'Module', lite: 'check', pro: 'check', enterprise: 'check' },
    ],
  },
  {
    label: 'Dukungan & Lainnya',
    features: [
      { name: 'Laporan Operasional', lite: 'minus', pro: 'check', enterprise: 'check' },
      { name: 'Multi Admin', lite: 'minus', pro: 'minus', enterprise: 'check' },
      { name: 'Statistik & Insight Mendalam', lite: 'minus', pro: 'minus', enterprise: 'check' },
      { name: 'Dedicated Support', lite: 'minus', pro: 'minus', enterprise: 'check' },
      { name: 'Penyesuaian Implementasi', lite: 'minus', pro: 'minus', enterprise: 'check' },
      { name: 'SLA Premium 99.9%', lite: 'minus', pro: 'minus', enterprise: 'check' },
    ],
  },
];

const columns = [
  { key: 'lite', label: 'Lite', sub: 's/d 50 Siswa', popular: false, dark: false },
  { key: 'pro', label: 'Pro', sub: 's/d 250 Siswa', popular: true, dark: false },
  { key: 'enterprise', label: 'Enterprise', sub: 's/d 1.000 Siswa', popular: false, dark: true },
];

function Cell({ value, popular, dark }) {
  if (value === 'check') {
    return (
      <div className='flex justify-center'>
        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${dark ? 'bg-slate-600' : popular ? 'bg-blue-100' : 'bg-emerald-50 border border-emerald-100'}`}>
          <Check className={`w-3 h-3 ${dark ? 'text-emerald-400' : popular ? 'text-blue-600' : 'text-emerald-600'}`} />
        </div>
      </div>
    );
  }

  if (value === 'minus') {
    return (
      <div className='flex justify-center'>
        <Minus className='w-4 h-4 text-slate-300' />
      </div>
    );
  }

  return <span className={`text-xs font-semibold ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{value}</span>;
}

export function FeatureTable() {
  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <span className='inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4 border border-blue-100'>Perbandingan Fitur</span>
          <h2
            className='text-slate-900 mb-4 tracking-tight'
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Bandingkan Fitur <span className='text-blue-600'>Setiap Paket</span>
          </h2>
          <p className='text-slate-500 leading-relaxed'>Lihat fitur yang tersedia di setiap paket untuk menemukan pilihan terbaik bagi lembaga Anda.</p>
        </div>

        <div className='overflow-x-auto rounded-2xl border border-slate-100 shadow-sm'>
          <table className='w-full min-w-140'>
            <thead>
              <tr>
                <th className='text-left px-6 py-5 bg-slate-50 border-b border-slate-100 w-56'>
                  <span className='text-xs font-bold text-slate-400 uppercase tracking-wider'>Fitur</span>
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`px-4 py-5 border-b text-center ${col.dark ? 'bg-slate-800 border-slate-700' : col.popular ? 'bg-blue-600 border-blue-500' : 'bg-slate-50 border-slate-100'}`}
                  >
                    <div className='flex flex-col items-center gap-0.5'>
                      {col.popular && <span className='text-[9px] font-bold px-2 py-0.5 bg-white/20 rounded-full text-white mb-1'>Populer</span>}
                      <span
                        className={`font-extrabold ${col.dark || col.popular ? 'text-white' : 'text-slate-800'}`}
                        style={{ fontSize: '0.95rem' }}
                      >
                        {col.label}
                      </span>
                      <span className={`text-[10px] font-medium ${col.dark ? 'text-slate-400' : col.popular ? 'text-blue-200' : 'text-slate-400'}`}>{col.sub}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {categories.map((cat, ci) => (
                <React.Fragment key={`cat-${ci}`}>
                  <tr>
                    <td
                      colSpan={4}
                      className='px-6 py-3 bg-slate-50 border-y border-slate-100'
                    >
                      <span className='text-[10px] font-bold text-slate-400 uppercase tracking-widest'>{cat.label}</span>
                    </td>
                  </tr>
                  {cat.features.map((feat, fi) => (
                    <tr
                      key={`feat-${ci}-${fi}`}
                      className={`border-b border-slate-50 last:border-0 ${fi % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}
                    >
                      <td className='px-6 py-3.5'>
                        <span className='text-sm text-slate-700 font-medium'>{feat.name}</span>
                      </td>
                      {columns.map((col) => (
                        <td
                          key={col.key}
                          className={`px-4 py-3.5 text-center ${col.popular ? 'bg-blue-50/40' : col.dark ? 'bg-slate-800/5' : ''}`}
                        >
                          <Cell
                            value={feat[col.key]}
                            popular={col.popular}
                            dark={col.dark}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td className='px-6 py-5 bg-slate-50 border-t border-slate-100' />
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-5 text-center border-t ${col.dark ? 'bg-slate-800 border-slate-700' : col.popular ? 'bg-blue-50 border-blue-100' : 'bg-slate-50 border-slate-100'}`}
                  >
                    <a
                      href='#mulai'
                      className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        col.dark
                          ? 'text-white bg-slate-700 hover:bg-slate-600'
                          : col.popular
                            ? 'text-white bg-blue-600 hover:bg-blue-700 shadow-sm'
                            : 'text-slate-700 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700'
                      }`}
                    >
                      {col.key === 'enterprise' ? 'Hubungi Kami' : `Pilih ${col.label}`}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
