import { useSiteData } from '../context/SiteDataContext';

const footerNav = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Demografi', href: '#demografi' },
  { label: 'UMKM', href: '#umkm' },
  { label: 'Peta', href: '#peta' },
];

export default function Footer() {
  const { padukuhan, contact, leadership } = useSiteData();
  const year = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-leaf-950 text-white">
      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* ── Column 1 : About ── */}
          <div>
            <p className="text-lg font-semibold mb-4">
              Desa {padukuhan.name}
            </p>
            <p className="text-leaf-200/60 text-sm leading-relaxed">
              Portal informasi resmi Desa {padukuhan.name}, Kelurahan{' '}
              {padukuhan.desa}, Kecamatan {padukuhan.kecamatan}, Kabupaten{' '}
              {padukuhan.kabupaten}, {padukuhan.provinsi}.
            </p>
          </div>

          {/* ── Column 2 : Navigation + Perangkat ── */}
          <div>
            <h3 className="text-xs font-semibold text-leaf-400 uppercase tracking-widest mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-leaf-200/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 : Contact ── */}
          <div>
            <h3 className="text-xs font-semibold text-leaf-400 uppercase tracking-widest mb-5">
              Medsos
            </h3>
            <ul className="space-y-5">
              {/* YouTube */}
              <li className="flex items-center gap-3 text-sm text-leaf-200/60">
                <svg
                  className="w-5 h-5 text-leaf-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <a
                  href="https://youtube.com/@patenofficial5242?si=ofQXizmBfTG0fCD9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  @patenofficial5242
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-3 text-sm text-leaf-200/60">
                <svg
                  className="w-5 h-5 text-leaf-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                <a
                  href="https://www.instagram.com/paten.official_?igsh=ZzZkaTFjM2JmMDFl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  @paten.official_
                </a>
              </li>

              {/* TikTok */}
              <li className="flex items-center gap-3 text-sm text-leaf-200/60">
                <svg
                  className="w-5 h-5 text-leaf-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.49a8.24 8.24 0 004.78 1.53V7.57a4.84 4.84 0 01-1.02-.88z" />
                </svg>
                <a
                  href="https://www.tiktok.com/@kartarpemudapemudipaten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  @kartarpemudapemudipaten
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-leaf-200/40">
            &copy; {year} Desa {padukuhan.name}, Kelurahan {padukuhan.desa}
          </p>
        </div>
      </div>
    </footer>
  );
}
