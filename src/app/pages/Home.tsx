import { Link } from "react-router";
import { Phone, ArrowRight, Award, Home as HomeIcon, Calendar, ChevronRight, MapPin, X, ChevronLeft, ZoomIn } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=900&fit=crop&auto=format",
    alt: "Luxury villa with pool",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=900&fit=crop&auto=format",
    alt: "Premium apartment exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=900&fit=crop&auto=format",
    alt: "Villa Palazzo night view",
  },
  {
    src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&h=900&fit=crop&auto=format",
    alt: "Residential tower view",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop&auto=format",
    alt: "Premium interior living room",
  },
];

const STATS = [
  { value: "150+", label: "Properties Sold" },
  { value: "3+", label: "Awards Won" },
  { value: "9+", label: "Years of Excellence" },
  { value: "32", label: "Villa Units" },
];

const VISHAL_GALLERY = [
  { src: "/projects/vishal-estates-phase2/page1.jpg", caption: "Brochure Cover Page" },
  { src: "/projects/vishal-estates-phase2/page2.jpg", caption: "Salient Features & Vastu" },
  { src: "/projects/vishal-estates-phase2/page3.jpg", caption: "Amenities & Clubhouse" },
  { src: "/projects/vishal-estates-phase2/page4.jpg", caption: "Layout Plan" },
  { src: "/projects/vishal-estates-phase2/page5.jpg", caption: "Location Map" },
  { src: "/projects/vishal-estates-phase2/page6.jpg", caption: "Project Overview" },
  { src: "/projects/vishal-estates-phase2/page7.jpg", caption: "Additional Details" },
];

const PROJECTS = [
  {
    name: "NGK Project 1",
    location: "Pusapatirega, Vizianagaram",
    type: "Open Plots – Vishal Estates Phase-II",
    units: "Plots Available",
    area: "Spacious Layout",
    config: "Multiple Sizes",
    tag: "Very close to Bhogapuram Airport",
    image: "/projects/vishal-estates-phase2/page3.jpg",
    status: "Ongoing",
    slug: "vishal-estates-phase-2",
    gallery: VISHAL_GALLERY,
  },
  {
    name: "NGK Project 2",
    location: "VIZAG",
    type: "Luxury Villas",
    units: "32 Villas",
    area: "8.26 Acres",
    config: "4BHK + Home Theatre",
    tag: "Premium Gated Community",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=560&fit=crop&auto=format",
    status: "Ready to Move",
  },
  {
    name: "NGK Project 3",
    location: "VIZAG",
    type: "Residential Apartments",
    units: "218 Flats",
    area: "3 Acres",
    config: "2 & 3 BHK",
    tag: "Aster · Freesia · Peony",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=560&fit=crop&auto=format",
    status: "Ongoing",
  },
  {
    name: "NGK Project 4",
    location: "VIZAG",
    type: "Open Plots",
    units: "112 Plots",
    area: "8.5 Acres",
    config: "From 214 sq. yds",
    tag: "10 mins from ORR",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=560&fit=crop&auto=format",
    status: "Available",
  },
  {
    name: "NGK Project 5",
    location: "Gajuwaka, Vizag",
    type: "Residential Apartment",
    units: "96 Flats",
    area: "1.8 Acres",
    config: "2 & 3 BHK",
    tag: "Completed",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=560&fit=crop&auto=format",
    status: "Completed",
  },
  {
    name: "NGK Project 6",
    location: "Gajuwaka, Vizag",
    type: "Residential Apartment",
    units: "84 Flats",
    area: "1.5 Acres",
    config: "2 & 3 BHK",
    tag: "Completed",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=560&fit=crop&auto=format",
    status: "Completed",
  },
];


/* ── Inline Lightbox for home page gallery ── */
function HomeLightbox({ images, startIndex, onClose }: { images: { src: string; caption: string }[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowLeft") prev(); if (e.key === "ArrowRight") next(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose, prev, next]);
  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
        <span className="text-white/60 text-sm font-medium">{current + 1} / {images.length}</span>
        <p className="text-white/80 text-sm text-center flex-1 mx-4 truncate">{images[current].caption}</p>
        <button onClick={onClose} className="text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"><X size={22} /></button>
      </div>
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-16">
        <button onClick={prev} className="absolute left-4 z-10 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-full p-3 transition-all duration-200"><ChevronLeft size={24} /></button>
        <img key={current} src={images[current].src} alt={images[current].caption} className="max-h-full max-w-full object-contain rounded-md shadow-2xl" style={{ animation: "fadeIn 0.25s ease" }} />
        <button onClick={next} className="absolute right-4 z-10 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-full p-3 transition-all duration-200"><ChevronRight size={24} /></button>
      </div>
      <div className="shrink-0 border-t border-white/10 py-3 px-6 overflow-x-auto">
        <div className="flex gap-2 justify-center min-w-max mx-auto">
          {images.map((img, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-16 h-12 rounded overflow-hidden border-2 transition-all duration-200 shrink-0 ${i === current ? "border-primary scale-105" : "border-white/20 opacity-50 hover:opacity-80"}`}>
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0; transform:scale(0.97);} to { opacity:1; transform:scale(1);}}`}</style>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [gallerySlide, setGallerySlide] = useState(0);

  // Auto-advance project gallery every 5 seconds
  useEffect(() => {
    setGallerySlide(0);
    const gallery = PROJECTS[activeProject].gallery;
    if (!gallery) return;
    const timer = setInterval(() => {
      setGallerySlide((prev) => (prev + 1) % gallery.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeProject]);

  // Auto-advance hero slideshow every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* LIGHTBOX */}
      {lightboxIndex !== null && PROJECTS[activeProject].gallery && (
        <HomeLightbox
          images={PROJECTS[activeProject].gallery!}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* HERO */}
      <section className="bg-white pt-24 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">

            {/* LEFT — Text */}
            <div className="flex flex-col justify-center py-12 lg:py-20">
              <p className="text-[#1F2937] text-sm font-semibold mb-4 tracking-wide">
                NGK Infra Developers
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-[#1F2937] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Home is where
                <br />
                <span className="text-primary">the heart is.</span>
              </h1>
              <p className="text-[#6B7280] text-base leading-relaxed mb-10 max-w-md">
                We build you your heart with all our hearts — crafting premium
                residences across Vizag that blend contemporary design with
                enduring values.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+919398691219"
                  className="flex items-center gap-2 bg-primary text-white px-7 py-3.5 font-semibold hover:bg-[#EA580C] transition-all duration-200 rounded-full"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <Link
                  to="/projects"
                  className="flex items-center gap-2 border-2 border-[#E5E7EB] text-[#1F2937] px-7 py-3.5 font-semibold hover:border-primary hover:text-primary transition-all duration-200 rounded-full group"
                >
                  View More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* RIGHT — Auto Slideshow */}
            <div className="relative h-[480px] lg:h-[calc(100vh-80px)] overflow-hidden rounded-tl-[3rem] rounded-bl-[3rem] lg:rounded-tl-[4rem] lg:rounded-bl-[4rem]">
              {HERO_SLIDES.map((slide, idx) => (
                <img
                  key={idx}
                  src={slide.src}
                  alt={slide.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === heroSlide ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
              {/* Orange accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-primary" />
              {/* Dot indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === heroSlide
                        ? "bg-primary w-6"
                        : "bg-white/60 hover:bg-white"
                      }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div key={i} className={`py-10 px-8 text-center ${
                // On md+: border-r on all but last. On mobile 2-col: border-r only on odd indices (left column)
                i < STATS.length - 1 ? (i % 2 === 0 ? "border-r border-border" : "md:border-r border-border") : ""
                }`}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs tracking-[0.2em] text-[#6B7280] uppercase font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-semibold">01 — About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#1F2937]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Building dreams<br /><span className="text-primary">across Vizag</span>
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              NGK Infra Developers is a real estate development and construction company that blends contemporary ideas
              with historical values. Founded by Mr. Shreedhra Rao, we have delivered more than 30 projects
              with unwavering focus on quality and timely possession.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-10">
              From premium gated apartments adjacent to reserve forests to sprawling villa townships —
              we craft spaces that evolve with Vizag's skyline while honoring every neighborhood's character.
            </p>
            <Link to="/about-us" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold hover:bg-[#EA580C] transition-all duration-200 rounded-sm group">
              Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-xl bg-[#F3F4F6]">
              <img
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=700&h=875&fit=crop&auto=format"
                alt="NGK Infra Developers"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#E5E7EB] p-6 w-48 shadow-lg">
              <Award className="text-primary mb-2" size={22} />
              <div className="text-2xl font-bold text-[#1F2937]" style={{ fontFamily: "'Montserrat', sans-serif" }}>3+</div>
              <div className="text-xs text-[#6B7280] tracking-wide mt-1">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-semibold">02 — Our Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F2937]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Featured<br />Residences
              </h2>
            </div>
            <Link to="/projects" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 self-start md:self-auto group">
              View all projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-5 border border-[#E5E7EB]">
            <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-auto overflow-hidden group bg-[#F3F4F6] min-h-[360px]">
              {/* Main preview image — auto-scrolling gallery or static image */}
              {PROJECTS[activeProject].gallery ? (
                PROJECTS[activeProject].gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.caption}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 cursor-zoom-in ${
                      idx === gallerySlide ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={() => setLightboxIndex(idx)}
                  />
                ))
              ) : (
                <img
                  src={PROJECTS[activeProject].image}
                  alt={PROJECTS[activeProject].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />

              {/* "View All Photos" button — only for projects with a gallery */}
              {PROJECTS[activeProject].gallery && (
                <button
                  onClick={() => setLightboxIndex(0)}
                  className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full border border-white/20 hover:bg-black/70 transition-all z-10"
                >
                  <ZoomIn size={12} /> View All {PROJECTS[activeProject].gallery.length} Photos
                </button>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 mb-3 rounded-sm">
                  {PROJECTS[activeProject].status}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {PROJECTS[activeProject].name}
                </h3>
                <p className="text-white/70 text-sm flex items-center gap-1.5 mb-3">
                  <MapPin size={12} /> {PROJECTS[activeProject].location}
                </p>

                {/* Thumbnail strip — visible only when gallery project is active */}
                {PROJECTS[activeProject].gallery && (
                  <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {PROJECTS[activeProject].gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                        className={`w-12 h-9 rounded shrink-0 overflow-hidden border-2 ${idx === gallerySlide ? "border-primary" : "border-white/30"} hover:border-primary transition-all duration-200 focus:outline-none`}
                        title={img.caption}
                      >
                        <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 divide-y divide-[#E5E7EB]">
              {PROJECTS.map((p, i) => (
                <button key={i} onClick={() => { setActiveProject(i); setLightboxIndex(null); }}
                  className={`w-full text-left p-5 flex items-start gap-4 transition-colors duration-200 ${activeProject === i ? "bg-orange-50" : "bg-white hover:bg-[#F9FAFB]"}`}
                >
                  <div className={`w-0.5 self-stretch mt-1 shrink-0 transition-colors ${activeProject === i ? "bg-primary" : "bg-[#E5E7EB]"}`} />
                  <div className="min-w-0">
                    <div className={`font-semibold text-sm truncate ${activeProject === i ? "text-primary" : "text-[#1F2937]"}`}>{p.name}</div>
                    <div className="text-xs text-[#6B7280] mt-0.5">{p.type}</div>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs text-[#9CA3AF]">{p.units}</span>
                      <span className="text-xs text-[#9CA3AF]">{p.config}</span>
                    </div>
                  </div>
                  <ChevronRight size={14} className={`shrink-0 mt-1 ml-auto ${activeProject === i ? "text-primary" : "text-[#D1D5DB]"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#F9FAFB] border border-t-0 border-[#E5E7EB] p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Area", value: PROJECTS[activeProject].area },
              { label: "Units", value: PROJECTS[activeProject].units },
              { label: "Configuration", value: PROJECTS[activeProject].config },
              { label: "Highlight", value: PROJECTS[activeProject].tag },
            ].map((d, i) => (
              <div key={i}>
                <div className="text-xs tracking-[0.15em] text-[#6B7280] uppercase mb-1 font-medium">{d.label}</div>
                <div className="text-sm text-[#1F2937] font-semibold">{d.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-semibold">03 — Our Promise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Why NGK Infra Developers?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <HomeIcon size={28} />, title: "Prime Locations", desc: "Every project is carefully positioned near infrastructure corridors, schools, and natural reserves — ensuring lasting value for your family." },
              { icon: <Award size={28} />, title: "RERA Certified", desc: "Full regulatory compliance and transparent disclosures on every project. Your investment is protected at every stage of construction." },
              { icon: <Calendar size={28} />, title: "On-Time Delivery", desc: "Nine years of consistent delivery without compromise. We meet our commitments because we plan them honestly from day one." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] p-8 group hover:shadow-lg hover:border-primary/30 transition-all duration-300 rounded-sm">
                <div className="w-14 h-14 bg-orange-50 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 rounded-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10+ AREAS SECTION ── */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3 font-semibold">Our Reach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              We are available in{" "}
              <span className="text-primary">10+ Areas</span>
            </h2>
            <p className="text-[#6B7280] mt-3 text-sm">
              Building trust and delivering quality constructions across{" "}
              <span className="text-primary font-semibold">Visakhapatnam</span>{" "}
              and surrounding areas.
            </p>
          </div>

          {/* 4 per row × 3 rows = 12 cities, centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl">
              {[
                { name: "Gajuwaka",        img: "/areas/gajuwaka.png" },
                { name: "Kommadi",         img: "/areas/kommadi.png" },
                { name: "Rushikonda",      img: "/areas/rushikonda.png" },
                { name: "Madhurawada",     img: "/areas/madhurawada.png" },
                { name: "Bheemunipatnam",  img: "/areas/bheemunipatnam.png" },
                { name: "Pendurthi",       img: "/areas/pendurthi.png" },
                { name: "Duvvada",         img: "/areas/duvvada.png" },
                { name: "Sabbavaram",      img: "/areas/sabbavaram.png",      filter: true },
                { name: "Beach Oriented",  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=450&fit=crop&auto=format", filter: true },
                { name: "Tagarapuvalasa",  img: "/areas/tagarapuvalasa.png" },
                { name: "Anakapalle",      img: "/areas/anakapalle.png" },
                { name: "Vizag City",      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=450&fit=crop&auto=format", filter: true },
              ].map((area) => (
                <Link
                  key={area.name}
                  to="/contact"
                  className="bg-white border border-[#E5E7EB] rounded-sm overflow-hidden hover:border-primary hover:shadow-md transition-all duration-200 group"
                >
                  {/* Image — smaller aspect ratio */}
                  <div className="relative overflow-hidden bg-orange-50" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={area.img}
                      alt={area.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={area.filter ? {
                        filter: "sepia(70%) saturate(200%) hue-rotate(330deg) brightness(1.2) contrast(0.9)"
                      } : undefined}
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  </div>
                  {/* Footer */}
                  <div className="flex items-center gap-1.5 px-2.5 py-2">
                    <MapPin size={12} className="text-primary shrink-0" />
                    <span className="text-xs font-semibold text-[#1F2937] group-hover:text-primary transition-colors duration-200 truncate">
                      {area.name}
                    </span>
                    <ArrowRight size={11} className="ml-auto text-[#D1D5DB] group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA CONTACT BAND */}
      <section className="relative py-24 px-6 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop&auto=format"
            alt="NGK Infra Developers office"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-semibold">04 — Get in Touch</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Ready to find<br /><span className="text-primary">your home?</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-12 leading-relaxed">
            Speak with our sales team and explore the right residence for your family. We&apos;re here every step of the way.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-semibold hover:bg-[#EA580C] transition-all duration-200 rounded-sm group">
            Contact Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
