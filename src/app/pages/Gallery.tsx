import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router";
import { X, ZoomIn } from "lucide-react";

const CATEGORIES = ["All", "Apartments", "Villas", "Plots", "Interiors"];

const GALLERY_ITEMS = [
  { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&auto=format", title: "NGK", cat: "Apartments", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=600&fit=crop&auto=format", title: "Villa Palazzo — Night View", cat: "Villas", span: "" },
  { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=600&fit=crop&auto=format", title: "Villa Palazzo — Day View", cat: "Villas", span: "" },
  { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=600&fit=crop&auto=format", title: "NGK Elegance — Lobby", cat: "Interiors", span: "" },
  { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=600&fit=crop&auto=format", title: "NGK — Kitchen", cat: "Interiors", span: "" },
  { src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=600&fit=crop&auto=format", title: "NGK — Tower View", cat: "Apartments", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=600&fit=crop&auto=format", title: "NGK — Plot Layout", cat: "Plots", span: "" },
  { src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=600&fit=crop&auto=format", title: "NGK — Garden", cat: "Apartments", span: "" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format", title: "NGK Iris — Living Room", cat: "Interiors", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600&h=600&fit=crop&auto=format", title: "NGK Flora — Facade", cat: "Apartments", span: "" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop&auto=format", title: "Villa Palazzo — Master Suite", cat: "Interiors", span: "" },
  { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=600&fit=crop&auto=format", title: "NGK  — Road View", cat: "Plots", span: "" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop&auto=format", title: "NGK — Bathroom", cat: "Interiors", span: "" },
  { src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop&auto=format", title: "NGK  — Pool View", cat: "Apartments", span: "col-span-2" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.cat === activeFilter);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImage = useCallback(() => setLightbox((lb) => lb === null ? null : (lb - 1 + filtered.length) % filtered.length), [filtered.length]);
  const nextImage = useCallback(() => setLightbox((lb) => lb === null ? null : (lb + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, prevImage, nextImage]);

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-72 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=500&fit=crop&auto=format"
            alt="Gallery header"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-stone-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3 font-medium">Visual Tour</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Gallery
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* FILTERS */}
      <section className="border-b border-[#E5E7EB] px-6 sticky top-16 bg-white/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-sm ${activeFilter === c
                  ? "bg-primary text-primary-foreground"
                  : "text-[#6B7280] hover:text-primary border border-transparent hover:border-[#E5E7EB]"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-12 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[240px]">
            {filtered.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-[#F3F4F6] group cursor-pointer ${item.span === "col-span-2" ? "col-span-2" : ""
                  }`}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="text-white" size={28} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-white/60 text-xs mt-0.5">{item.cat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox]?.src.replace("w=800", "w=1200")}
              alt={filtered[lightbox]?.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-medium">{filtered[lightbox]?.title}</p>
              <p className="text-white/40 text-sm mt-1">{filtered[lightbox]?.cat}</p>
            </div>
          </div>
          <button
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-primary text-3xl px-2 py-4 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-primary text-3xl px-2 py-4 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            ›
          </button>
        </div>
      )}

      {/* CONTACT STRIP */}
      <section className="py-16 px-6 bg-[#F9FAFB] border-t border-[#E5E7EB] text-center">
        <p className="text-[#6B7280] mb-2 text-sm">To see more than just images and plans</p>
        <h2 className="text-2xl font-semibold text-[#1F2937] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Visit a site — <em className="text-primary">experience it in person</em>
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:bg-[#EA580C] transition-all rounded-sm"
        >
          Schedule a Site Visit
        </Link>
      </section>
    </>
  );
}
