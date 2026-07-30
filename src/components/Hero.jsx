import { useSiteData } from '../context/SiteDataContext';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const { hero, padukuhan } = useSiteData();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setScrollY(window.scrollY * 0.3);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Full-screen background image with parallax ── */}
      {hero.backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{ transform: `translateY(${scrollY}px)` }}
        >
          <img
            src={hero.backgroundImage}
            alt="Gapura Padukuhan Paten"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.5) saturate(1.2)',
              transition: 'filter 0.5s ease',
            }}
          />
        </div>
      )}

      {/* ── Gradient overlays ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(45,10,10,0.7) 0%, rgba(26,5,5,0.4) 40%, rgba(26,5,5,0.6) 70%, rgba(26,5,5,0.9) 100%)',
        }}
      />

      {/* ── Decorative grain texture overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* ── Content ── */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* Location breadcrumb */}
        <div
          className="inline-flex items-center gap-2 mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
          }}
        >
          <span className="w-8 h-[1px] bg-white/30" />
          <p className="text-white/50 text-[11px] font-medium uppercase tracking-[0.3em]">
            {padukuhan.desa} · {padukuhan.kecamatan} · {padukuhan.kabupaten}
          </p>
          <span className="w-8 h-[1px] bg-white/30" />
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s',
          }}
        >
          {hero.subtitle}
        </p>

        {/* CTA Button */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s',
          }}
        >
          <a
            href="#umkm"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-leaf-900 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10"
          >
            {hero.ctaText}
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-leaf-600 group-hover:text-white transition-all duration-300">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>


      {/* ── Bottom fade into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-50 to-transparent pointer-events-none" />
    </section>
  );
}
