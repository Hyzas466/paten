import { useSiteData } from '../context/SiteDataContext';

export default function About() {
  const { about } = useSiteData();

  if (!about) return null;

  return (
    <section id="tentang" className="py-16 md:py-24 bg-warm-50 border-b border-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs text-leaf-600 font-medium uppercase tracking-widest mb-2">
            {about.subtitle}
          </p>
          <h2 className="text-2xl md:text-[1.7rem] font-semibold text-leaf-900">
            {about.title}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Image → Sejarah → Visi */}
          <div className="flex flex-col gap-6">
            {about.image ? (
              <div className="rounded-xl overflow-hidden shadow-sm border border-warm-200 aspect-[16/10]">
                <img
                  src={about.image}
                  alt={about.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="rounded-xl bg-warm-100 border border-warm-200 aspect-[16/10] flex flex-col items-center justify-center text-center p-6">
                <svg
                  className="w-12 h-12 text-warm-300 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75zm3.5-10.5h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75zm3.5-10.5h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75zm0 3.5h.75v.75h-.75v-.75z"
                  />
                </svg>
                <span className="text-xs text-leaf-700 font-medium">Foto Profil Padukuhan</span>
                <span className="text-[10px] text-gray-400 mt-1">Tambahkan berkas gambar di siteData.js</span>
              </div>
            )}

            <div className="space-y-3">
              <h3 className="text-base font-semibold text-gray-800">Sejarah Singkat</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                {about.sejarah}
              </p>
            </div>

            {/* Visi – quote card */}
            <div className="bg-warm-100/60 rounded-xl p-6 border-l-4 border-leaf-500 mt-auto">
              <h3 className="text-xs font-bold text-leaf-600 uppercase tracking-wider mb-3">
                Visi
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed italic font-medium">
                "{about.visi}"
              </p>
            </div>
          </div>

          {/* Right Column: Misi – full height card */}
          <div className="bg-white rounded-xl border border-warm-200 shadow-sm p-6 lg:p-8 flex flex-col">
            <h3 className="text-xs font-bold text-leaf-600 uppercase tracking-wider mb-5">
              Misi
            </h3>
            <ol className="flex-1 flex flex-col">
              {about.misi.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-4 py-4 ${
                    idx !== about.misi.length - 1
                      ? 'border-b border-leaf-100'
                      : ''
                  }`}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-[13px] text-gray-600 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
