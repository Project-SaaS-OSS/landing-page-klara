import { useState } from 'react';
import { CheckCircle2, Send, User, Building2, Mail, Phone, Users, Package, Tag, FileText } from 'lucide-react';

const benefits = ['Konsultasi kebutuhan lembaga secara gratis', 'Rekomendasi fitur yang relevan untuk tim Anda', 'Penjelasan paket dan alur penggunaan sistem', 'Opsi demo produk langsung bersama tim kami'];

const jumlahSiswaOptions = ['Pilih jumlah siswa...', '< 50 siswa', '50 – 100 siswa', '100 – 300 siswa', '300 – 500 siswa', '> 500 siswa'];

const paketOptions = ['Pilih paket yang diminati...', 'Gratis (1 Bulan)', 'Reguler', 'Plus', 'Pro', 'Enterprise', 'Belum Tahu'];

const topikOptions = ['Pilih topik pertanyaan...', 'Fitur Produk', 'Harga & Paket', 'Demo', 'Implementasi', 'Dukungan Operasional', 'Kerja Sama', 'Lainnya'];

export function ContactForm() {
  const [form, setForm] = useState({
    nama: '',
    lembaga: '',
    email: '',
    whatsapp: '',
    jumlahSiswa: '',
    paket: '',
    topik: '',
    pesan: '',
    setuju: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.nama.trim()) newErrors.nama = 'Nama lengkap wajib diisi';
    if (!form.lembaga.trim()) newErrors.lembaga = 'Nama lembaga wajib diisi';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email tidak valid';
    }
    if (!form.pesan.trim()) newErrors.pesan = 'Pesan wajib diisi';
    if (!form.setuju) newErrors.setuju = 'Centang persetujuan untuk melanjutkan';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputBase = 'w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all';
  const inputNormal = `${inputBase} border-slate-200 focus:border-blue-400 focus:ring-blue-50`;
  const inputError = `${inputBase} border-red-300 focus:border-red-400 focus:ring-red-50`;

  return (
    <section
      id='form-kontak'
      className='py-14 lg:py-20'
      style={{ background: '#f8fafc' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-5 gap-12 items-start'>
          <div className='lg:col-span-2'>
            <h2
              className='text-slate-900 font-extrabold tracking-tight mb-4 leading-snug'
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
            >
              Ceritakan Kebutuhan <span className='text-blue-600'>Lembaga Anda</span>
            </h2>

            <p className='text-slate-500 leading-relaxed mb-8 text-sm'>Kami akan membantu memahami kebutuhan operasional, fitur yang relevan, dan pilihan paket yang paling sesuai untuk tim Anda.</p>

            <div className='space-y-4 mb-8'>
              {benefits.map((b) => (
                <div
                  key={b}
                  className='flex items-start gap-3'
                >
                  <div className='w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5'>
                    <CheckCircle2 className='w-3.5 h-3.5 text-blue-600' />
                  </div>
                  <p className='text-slate-700 text-sm leading-snug'>{b}</p>
                </div>
              ))}
            </div>

            <div className='bg-white rounded-2xl border border-slate-100 p-5 shadow-sm'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-9 h-9 rounded-full bg-linear-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white text-xs font-bold shrink-0'>AR</div>
                <div>
                  <p className='text-slate-900 text-xs font-bold'>Andika R.</p>
                  <p className='text-slate-400 text-[11px]'>Owner Bimbel Prestasi Jakarta</p>
                </div>
              </div>
              <p className='text-slate-500 text-xs leading-relaxed italic'>&quot;Tim KLARA sangat responsif dan membantu kami memilih paket yang paling sesuai untuk operasional bimbel kami. Prosesnya mudah dan tidak membingungkan.&quot;</p>
            </div>
          </div>

          <div className='lg:col-span-3'>
            {submitted ? (
              <div className='bg-white rounded-3xl border border-emerald-200 shadow-lg p-12 text-center'>
                <div className='w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5'>
                  <CheckCircle2 className='w-8 h-8 text-emerald-600' />
                </div>
                <h3
                  className='text-slate-900 font-extrabold mb-2'
                  style={{ fontSize: '1.3rem' }}
                >
                  Permintaan Terkirim!
                </h3>
                <p className='text-slate-500 text-sm leading-relaxed mb-6'>Terima kasih telah menghubungi kami. Tim kami akan meninjau kebutuhan Anda dan menghubungi kembali dalam 1 hari kerja.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className='px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all'
                >
                  Kirim Permintaan Lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='bg-white rounded-3xl border border-slate-100 shadow-lg p-8'
              >
                <div className='grid sm:grid-cols-2 gap-4 mb-4'>
                  <div>
                    <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                      <User className='w-3.5 h-3.5 inline mr-1' />
                      Nama Lengkap <span className='text-red-400'>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Contoh: Budi Santoso'
                      value={form.nama}
                      onChange={(e) => setForm({ ...form, nama: e.target.value })}
                      className={errors.nama ? inputError : inputNormal}
                    />
                    {errors.nama && <p className='text-red-500 text-[11px] mt-1'>{errors.nama}</p>}
                  </div>

                  <div>
                    <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                      <Building2 className='w-3.5 h-3.5 inline mr-1' />
                      Nama Lembaga <span className='text-red-400'>*</span>
                    </label>
                    <input
                      type='text'
                      placeholder='Contoh: Bimbel Prestasi'
                      value={form.lembaga}
                      onChange={(e) => setForm({ ...form, lembaga: e.target.value })}
                      className={errors.lembaga ? inputError : inputNormal}
                    />
                    {errors.lembaga && <p className='text-red-500 text-[11px] mt-1'>{errors.lembaga}</p>}
                  </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-4 mb-4'>
                  <div>
                    <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                      <Mail className='w-3.5 h-3.5 inline mr-1' />
                      Email <span className='text-red-400'>*</span>
                    </label>
                    <input
                      type='email'
                      placeholder='budi@bimbel.com'
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={errors.email ? inputError : inputNormal}
                    />
                    {errors.email && <p className='text-red-500 text-[11px] mt-1'>{errors.email}</p>}
                  </div>

                  <div>
                    <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                      <Phone className='w-3.5 h-3.5 inline mr-1' />
                      Nomor WhatsApp
                    </label>
                    <input
                      type='tel'
                      placeholder='0812-3456-7890'
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      className={inputNormal}
                    />
                  </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-4 mb-4'>
                  <div>
                    <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                      <Users className='w-3.5 h-3.5 inline mr-1' />
                      Jumlah Siswa
                    </label>
                    <select
                      value={form.jumlahSiswa}
                      onChange={(e) => setForm({ ...form, jumlahSiswa: e.target.value })}
                      className={`${inputNormal} cursor-pointer`}
                    >
                      {jumlahSiswaOptions.map((o) => (
                        <option
                          key={o}
                          value={o === jumlahSiswaOptions[0] ? '' : o}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                      <Package className='w-3.5 h-3.5 inline mr-1' />
                      Paket yang Diminati
                    </label>
                    <select
                      value={form.paket}
                      onChange={(e) => setForm({ ...form, paket: e.target.value })}
                      className={`${inputNormal} cursor-pointer`}
                    >
                      {paketOptions.map((o) => (
                        <option
                          key={o}
                          value={o === paketOptions[0] ? '' : o}
                        >
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className='mb-4'>
                  <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                    <Tag className='w-3.5 h-3.5 inline mr-1' />
                    Topik Pertanyaan
                  </label>
                  <select
                    value={form.topik}
                    onChange={(e) => setForm({ ...form, topik: e.target.value })}
                    className={`${inputNormal} cursor-pointer`}
                  >
                    {topikOptions.map((o) => (
                      <option
                        key={o}
                        value={o === topikOptions[0] ? '' : o}
                      >
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='mb-5'>
                  <label className='block text-xs font-bold text-slate-700 mb-1.5'>
                    <FileText className='w-3.5 h-3.5 inline mr-1' />
                    Pesan / Kebutuhan Anda <span className='text-red-400'>*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder='Ceritakan kebutuhan operasional lembaga Anda, fitur yang ingin diketahui, atau pertanyaan yang ingin didiskusikan...'
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    className={`${errors.pesan ? inputError : inputNormal} resize-none`}
                  />
                  {errors.pesan && <p className='text-red-500 text-[11px] mt-1'>{errors.pesan}</p>}
                </div>

                <div className='mb-6'>
                  <label className='flex items-start gap-3 cursor-pointer group'>
                    <input
                      type='checkbox'
                      checked={form.setuju}
                      onChange={(e) => setForm({ ...form, setuju: e.target.checked })}
                      className='w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-400 mt-0.5 cursor-pointer'
                    />
                    <span className='text-xs text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors'>Saya setuju dihubungi oleh tim KLARA untuk konsultasi dan informasi lebih lanjut sesuai kebutuhan lembaga saya.</span>
                  </label>
                  {errors.setuju && <p className='text-red-500 text-[11px] mt-1 ml-7'>{errors.setuju}</p>}
                </div>

                <button
                  type='submit'
                  className='w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-200 transition-all'
                >
                  <Send className='w-4 h-4' />
                  Kirim Permintaan
                </button>

                <p className='text-center text-slate-400 text-[11px] mt-3'>Tim kami akan meninjau kebutuhan Anda dan menghubungi kembali secepatnya.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
