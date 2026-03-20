const logos = ['Edu Nusantara', 'BimBel Prima', 'Kursus Mandiri', 'Smart Academy', 'Belajar.id', 'EduCentre', 'Pintar Institute'];

export function TrustStrip() {
  return (
    <section className='py-12 border-y border-slate-100 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <p className='text-center text-sm text-slate-400 font-medium mb-8'>Dirancang untuk membantu operasional lembaga kursus lebih efisien</p>
        <div className='flex flex-wrap items-center justify-center gap-8 lg:gap-12'>
          {logos.map((name) => (
            <div
              key={name}
              className='flex items-center gap-2 px-4 py-2 rounded-lg opacity-50 hover:opacity-80 transition-opacity'
            >
              <div
                className='w-7 h-7 rounded-md bg-slate-300 flex items-center justify-center'
                style={{ fontSize: 11, color: '#fff', fontWeight: 700 }}
              >
                {name[0]}
              </div>
              <span className='text-sm font-semibold text-slate-500'>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
