import { useState, useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext';

/* ── Image Lightbox Modal ── */
function ImageLightbox({ src, alt, onClose }) {
  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_200ms_ease-out]" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
        aria-label="Tutup"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-[slideUp_300ms_ease-out]"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ── Reusable map card — supports embed iframe, static image, or placeholder ── */
function MapCard({ data, onImageClick }) {
  const hasEmbed = Boolean(data.embedUrl);
  const hasImage = Boolean(data.image);

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-800 mb-3">{data.title}</h3>

      <div className="rounded-xl overflow-hidden border border-leaf-200 bg-white">
        {hasEmbed ? (
          <iframe
            src={data.embedUrl}
            className="w-full h-[320px] md:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={data.title}
          />
        ) : hasImage ? (
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-[320px] md:h-[400px] object-cover cursor-pointer hover:opacity-90 transition-opacity duration-200"
            onClick={() => onImageClick(data.image, data.title)}
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        ) : (
          <div className="w-full h-[320px] md:h-[400px] bg-leaf-50 flex flex-col items-center justify-center text-center px-6">
            <svg
              className="w-10 h-10 text-leaf-300 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>
            <p className="text-sm text-leaf-500 font-medium">Belum tersedia</p>
            <p className="text-xs text-leaf-400 mt-1">
              Tambahkan gambar atau embed URL di siteData.js
            </p>
          </div>
        )}
      </div>

      {/* Click hint for images */}
      <div className="flex items-center justify-between mt-2.5">
        <p className="text-xs text-gray-400">{data.description}</p>
        {hasImage && (
          <button
            onClick={() => onImageClick(data.image, data.title)}
            className="text-xs text-leaf-600 hover:text-leaf-700 font-medium flex items-center gap-1 shrink-0 ml-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg>
            Perbesar
          </button>
        )}
      </div>
    </div>
  );
}

export default function MapSection() {
  const { map } = useSiteData();
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, alt) => setLightbox({ src, alt });
  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <section id="peta" className="py-16 md:py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-xl mb-12">
            <p className="text-sm text-leaf-600 font-medium mb-1.5">
              Lokasi &amp; Wilayah
            </p>
            <h2 className="text-2xl md:text-[1.7rem] font-semibold text-leaf-900">
              Peta Padukuhan Paten
            </h2>
          </div>

          {/* Two-column map grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MapCard data={map.wilayah} onImageClick={openLightbox} />
            <MapCard data={map.administrasi} onImageClick={openLightbox} />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
