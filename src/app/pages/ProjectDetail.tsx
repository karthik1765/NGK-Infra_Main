import { useState, useEffect, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router";
import { MapPin, ArrowLeft, X, ChevronLeft, ChevronRight, Phone, ZoomIn, ArrowRight } from "lucide-react";

const PROJECT_DATA = {
  "vishal-estates-phase-2": {
    name: "Sai Infra's Vishal Estates Phase-II",
    subtitle: "To Live In Peace Is To Have Nature Up-close!",
    location: "Pusapatirega, Vizianagaram District",
    type: "Open Plots",
    units: "Plots Available",
    area: "Spacious Layout",
    config: "Multiple Sizes",
    status: "Ongoing",
    tag: "Very close to Bhogapuram Airport",
    desc: "Vishal Estates Phase-II is a selective venture raised amidst the greenery — a beautiful spot very far from pollution. Coming with perfect Vastu, all necessary legalities have been taken care of so that our customers can have a hassle-free investment.",
    highlights: [
      "Very close to Bhogapuram International Airport",
      "Three districts Hub",
      "15 min drive to Vizianagaram",
      "15 min drive to NRI Medical College",
      "2.5 km distance to NH-16",
      "10 min drive to Tagarapuvalasa",
      "20 min drive to Bheemili Beach",
      "Surrounded by Engineering colleges & International Schools",
    ],
    coverImage: "/projects/vishal-estates-phase2/page3.jpg",
    gallery: [
      { src: "/projects/vishal-estates-phase2/page1.jpg", caption: "Vishal Estates Phase-II – Brochure Cover" },
      { src: "/projects/vishal-estates-phase2/page2.jpg", caption: "Symbol of Trust – Grand Entrance" },
      { src: "/projects/vishal-estates-phase2/page3.jpg", caption: "Hassle Free – Amenities & Clubhouse" },
      { src: "/projects/vishal-estates-phase2/page4.jpg", caption: "Family Come First – Layout Plan" },
      { src: "/projects/vishal-estates-phase2/page5.jpg", caption: "Location Map & Highlights" },
      { src: "/projects/vishal-estates-phase2/page6.jpg", caption: "Project Overview" },
      { src: "/projects/vishal-estates-phase2/page7.jpg", caption: "Additional Details" },
    ],
  },
};

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
        <span className="text-white/60 text-sm font-medium">{current + 1} / {images.length}</span>
        <p className="text-white/80 text-sm text-center flex-1 mx-4 truncate">{images[current].caption}</p>
        <button onClick={onClose} className="text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
          <X size={22} />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-16">
        <button onClick={prev} className="absolute left-4 z-10 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-full p-3 transition-all duration-200">
          <ChevronLeft size={24} />
        </button>
        <img key={current} src={images[current].src} alt={images[current].caption} className="max-h-full max-w-full object-contain rounded-md shadow-2xl" style={{ animation: "fadeIn 0.25s ease" }} />
        <button onClick={next} className="absolute right-4 z-10 text-white/60 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 rounded-full p-3 transition-all duration-200">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="shrink-0 border-t border-white/10 py-3 px-6 overflow-x-auto">
        <div className="flex gap-2 justify-center min-w-max mx-auto">
          {images.map((img, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-16 h-12 rounded overflow-hidden border-2 transition-all duration-200 shrink-0 ${i === current ? "border-primary scale-105 shadow-lg shadow-primary/30" : "border-white/20 opacity-50 hover:opacity-80 hover:border-white/40"}`}>
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? PROJECT_DATA[slug] : null;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!project) return <Navigate to="/projects" replace />;

  const STATUS_COLORS = {
    "Ongoing": "bg-amber-500/20 text-amber-400 border-amber-500/30",
    "Ready to Move": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    "Available": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Completed": "bg-muted text-muted-foreground border-border",
  };

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox images={project.gallery} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}

      <div className="border-b border-[#E5E7EB] bg-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-[#6B7280]">
          <Link to="/projects" className="flex items-center gap-1.5 hover:text-primary transition-colors font-medium">
            <ArrowLeft size={14} /> All Projects
          </Link>
          <span>/</span>
          <span className="text-[#1F2937] truncate">{project.name}</span>
        </div>
      </div>

      <section className="relative h-[55vh] min-h-[380px] max-h-[600px] overflow-hidden bg-[#111]">
        <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover opacity-80 hover:scale-[1.02] transition-transform duration-700 cursor-zoom-in" onClick={() => { const idx = project.gallery.findIndex((g) => g.src === project.coverImage); setLightboxIndex(idx >= 0 ? idx : 0); }} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/30 to-transparent" />
        <span className={`absolute top-6 left-6 text-xs font-medium px-3 py-1 border ${STATUS_COLORS[project.status]}`}>{project.status}</span>
        <button onClick={() => { const idx = project.gallery.findIndex((g) => g.src === project.coverImage); setLightboxIndex(idx >= 0 ? idx : 0); }} className="absolute top-6 right-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white/80 text-xs px-3 py-2 rounded-full border border-white/20 hover:bg-black/70 hover:text-white transition-all">
          <ZoomIn size={13} /> View All Photos
        </button>
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-7xl mx-auto">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-2 font-medium">{project.type}</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{project.name}</h1>
          <p className="text-white/60 flex items-center gap-1.5 text-sm"><MapPin size={13} /> {project.location}</p>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white border border-[#E5E7EB] p-8 rounded-sm">
              <div className="h-0.5 w-8 bg-primary mb-5" />
              <h2 className="text-2xl font-semibold text-[#1F2937] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>About This Project</h2>
              <p className="text-[#6B7280] leading-relaxed text-sm mb-3">{project.desc}</p>
              <p className="text-[#4B5563] italic text-sm font-medium">"{project.subtitle}"</p>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-8 rounded-sm">
              <div className="h-0.5 w-8 bg-primary mb-5" />
              <h2 className="text-2xl font-semibold text-[#1F2937] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Location Highlights</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#4B5563]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#E5E7EB] p-8 rounded-sm">
              <div className="h-0.5 w-8 bg-primary mb-5" />
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-[#1F2937]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Project Gallery</h2>
                <span className="text-xs text-[#6B7280] bg-[#F3F4F6] px-3 py-1 rounded-full border border-[#E5E7EB]">{project.gallery.length} photos</span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm cursor-zoom-in group mb-3" onClick={() => setLightboxIndex(2)}>
                <img src={project.gallery[2].src} alt={project.gallery[2].caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3"><ZoomIn size={22} className="text-white" /></div>
                </div>
                <div className="absolute bottom-3 left-3 text-white/80 text-xs bg-black/40 backdrop-blur-sm px-2 py-1 rounded">{project.gallery[2].caption}</div>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {project.gallery.map((img, i) => (
                  <button key={i} onClick={() => setLightboxIndex(i)} className="relative aspect-square overflow-hidden rounded-sm group border border-[#E5E7EB] hover:border-primary/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40" title={img.caption}>
                    <img src={img.src} alt={img.caption} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <ZoomIn size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute top-1 right-1 bg-black/50 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full leading-none">{i + 1}</div>
                  </button>
                ))}
              </div>
              <p className="text-center text-xs text-[#9CA3AF] mt-3">Click any photo to open full-screen gallery · Use arrow keys to navigate</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-sm sticky top-24">
              <div className="h-0.5 w-8 bg-primary mb-5" />
              <h3 className="text-lg font-semibold text-[#1F2937] mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>Project Specifications</h3>
              <div className="space-y-4">
                {[
                  { label: "Type", value: project.type },
                  { label: "Units", value: project.units },
                  { label: "Area", value: project.area },
                  { label: "Configuration", value: project.config },
                  { label: "Location", value: project.location },
                  { label: "Status", value: project.status },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-start border-b border-[#F3F4F6] pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] tracking-[0.15em] text-[#9CA3AF] uppercase font-medium">{spec.label}</span>
                    <span className="text-xs text-[#1F2937] font-medium text-right max-w-[55%]">{spec.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <a href="tel:+919398691219" className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-[#EA580C] transition-all rounded-sm group">
                  <Phone size={14} /> Call Us Now <ArrowRight size={13} className="ml-auto group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link to="/contact" className="flex items-center justify-center gap-2 w-full border border-[#E5E7EB] text-[#6B7280] px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-all rounded-sm group">
                  Send Enquiry <ArrowRight size={13} className="ml-auto group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 p-5 rounded-sm text-center">
              <MapPin size={18} className="text-primary mx-auto mb-2" />
              <p className="text-primary text-xs font-semibold tracking-wide">{project.tag}</p>
            </div>
          </div>
        </div>
      </section>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }`}</style>
    </>
  );
}
