import { useState } from "react";
import { Link } from "react-router";
import { MapPin, ArrowRight, Phone } from "lucide-react";

const FILTERS = ["All", "Ongoing", "Ready to Move", "Available", "Completed"];

const PROJECTS = [
  {
    name: "NGK Project 1",
    location: "VIZAG",
    type: "Premium Apartments",
    units: "575 Units",
    area: "6.5 Acres",
    config: "2 & 3 BHK",
    highlights: ["Adjacent to 5,000-hectare reserve forest", "Cellar & stilt parking", "Premium clubhouse", "24/7 security"],
    tag: "Adjacent to Reserve Forest",
    image: "/projects/vishal-estates-phase2/page1.jpg",
    status: "Ongoing",
    slug: "vishal-estates-phase-2",
    desc: "A landmark residential community set against the backdrop of a vast reserve forest. Vantara offers 575 thoughtfully designed 2 & 3 BHK apartments across 6.5 acres of prime land.",
  },
  {
    name: "NGK Project 2",
    location: "VIZAG",
    type: "Luxury Villas",
    units: "32 Villas",
    area: "8.26 Acres",
    config: "4BHK + Home Theatre",
    highlights: ["Private home theatre", "Individual villa plots", "Landscaped gardens", "Smart home features"],
    tag: "Premium Gated Community",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=560&fit=crop&auto=format",
    status: "Ready to Move",
    desc: "An exclusive collection of 32 ultra-luxury 4BHK villas with dedicated home theatres. Villa Palazzo redefines premium living in Vizag with meticulous craftsmanship and world-class amenities.",
  },
  {
    name: "NGK Project 3",
    location: "VIZAG",
    type: "Residential Apartments",
    units: "218 Flats",
    area: "3 Acres",
    config: "2 & 3 BHK",
    highlights: ["3 towers — Aster, Freesia, Peony", "Rooftop amenity deck", "EV charging stations", "Gym & swimming pool"],
    tag: "Aster · Freesia · Peony",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=560&fit=crop&auto=format",
    status: "Ongoing",
    desc: "Vista comprises 218 flats across three distinct towers — Aster, Freesia, and Peony. Each tower offers a unique floor plan variant to suit different lifestyle needs.",
  },
  {
    name: "NGK Project 4",
    location: "VIZAG",
    type: "Open Plots",
    units: "112 Plots",
    area: "8.5 Acres",
    config: "From 214 sq. yds",
    highlights: ["10 mins from ORR", "Wide internal roads", "Underground utilities", "Gated community"],
    tag: "10 mins from ORR",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=560&fit=crop&auto=format",
    status: "Available",
    desc: "Build your dream home on your terms. NGK Infra Kailash offers 112 open plots starting from 214 sq. yards — a rare plotted development with full infrastructure in place.",
  },
  {
    name: "NGK Project 5",
    location: "Gajuwaka, Vizag",
    type: "Residential Apartment",
    units: "96 Flats",
    area: "1.8 Acres",
    config: "2 & 3 BHK",
    highlights: ["Epitome of luxury living", "Sophisticated design", "Completed & handed over", "Premium finishes"],
    tag: "Completed",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=560&fit=crop&auto=format",
    status: "Completed",
    desc: "Elegance set a new benchmark for luxury apartments in Gajuwaka. Every unit was delivered with premium finishes and sophisticated design — a testament to NGK's quality promise.",
  },
  {
    name: "NGK Project 6",
    location: "Gajuwaka, Vizag",
    type: "Residential Apartment",
    units: "84 Flats",
    area: "1.5 Acres",
    config: "2 & 3 BHK",
    highlights: ["Serene green surroundings", "Modern amenities", "Completed & handed over", "Vastu compliant"],
    tag: "Completed",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=560&fit=crop&auto=format",
    status: "Completed",
    desc: "Blossom was designed as a sanctuary within the city. With serene landscapes and modern living spaces, all 84 flats were delivered to satisfied homeowners on schedule.",
  },
  {
    name: "NGK Project 7",
    location: "VIZAG",
    type: "Residential Apartment",
    units: "72 Flats",
    area: "1.2 Acres",
    config: "2 BHK",
    highlights: ["Elegant green-themed design", "Central courtyard", "Completed & handed over", "Award-winning project"],
    tag: "Completed",
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800&h=560&fit=crop&auto=format",
    status: "Completed",
    desc: "Flora was an award-winning project that combined elegant architecture with a nature-inspired design philosophy. The central courtyard became a beloved community space.",
  },
  {
    name: "NGK Project 8",
    location: "VIZAG",
    type: "Residential Apartment",
    units: "60 Flats",
    area: "1.1 Acres",
    config: "2 & 3 BHK",
    highlights: ["Contemporary luxury", "Detailed craftsmanship", "Completed & handed over", "Prime location"],
    tag: "Completed",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=560&fit=crop&auto=format",
    status: "Completed",
    desc: "Iris brought contemporary luxury and timeless elegance together. With meticulous attention to detail in every finish, Iris remains one of NGK Infra's most celebrated projects.",
  },
];

const STATUS_COLORS: Record<string, string> = {
  "Ongoing": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Ready to Move": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Available": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Completed": "bg-muted text-muted-foreground border-border",
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.status === filter);

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-72 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=500&fit=crop&auto=format"
            alt="NGK Infra Developers Projects"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-stone-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3 font-medium">Our Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            All Projects
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* FILTERS */}
      <section className="border-b border-[#E5E7EB] px-6 sticky top-16 bg-white/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-3 scrollbar-none">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-sm ${filter === f
                  ? "bg-primary text-primary-foreground"
                  : "text-[#6B7280] hover:text-primary border border-transparent hover:border-[#E5E7EB]"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <article key={i} className="bg-white border border-[#E5E7EB] group overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F4F6]">
                  {p.slug ? (
                    <Link to={`/projects/${p.slug}`}>
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                  ) : (
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent pointer-events-none" />
                  <span className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 border ${STATUS_COLORS[p.status]}`}>
                    {p.status}
                  </span>
                  {p.slug && (
                    <Link
                      to={`/projects/${p.slug}`}
                      className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full border border-white/20 hover:bg-black/70 transition-all"
                    >
                      View Details →
                    </Link>
                  )}
                </div>

                <div className="p-6">
                  <div className="h-0.5 w-8 bg-primary mb-4" />
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {p.slug ? <Link to={`/projects/${p.slug}`} className="hover:text-primary transition-colors">{p.name}</Link> : p.name}
                  </h3>
                  <p className="text-xs text-[#6B7280] flex items-center gap-1 mb-4">
                    <MapPin size={11} /> {p.location} · {p.type}
                  </p>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-5 line-clamp-2">{p.desc}</p>

                  <div className="grid grid-cols-3 gap-3 mb-5 pt-4 border-t border-[#E5E7EB]">
                    {[
                      { l: "Area", v: p.area },
                      { l: "Units", v: p.units },
                      { l: "Config", v: p.config },
                    ].map((d) => (
                      <div key={d.l}>
                        <div className="text-[10px] tracking-[0.15em] text-[#6B7280] uppercase">{d.l}</div>
                        <div className="text-xs text-[#1F2937] font-medium mt-0.5">{d.v}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {p.highlights.slice(0, 3).map((h, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {p.slug ? (
                    <Link
                      to={`/projects/${p.slug}`}
                      className="flex items-center gap-2 bg-primary text-primary-foreground text-sm px-4 py-2.5 hover:bg-[#EA580C] transition-all duration-200 group/btn justify-center rounded-sm font-medium"
                    >
                      View All Photos & Details
                      <ArrowRight size={13} className="ml-auto group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  ) : (
                    <a
                      href="tel:+919398691219"
                      className="flex items-center gap-2 border border-[#E5E7EB] text-sm text-[#6B7280] px-4 py-2.5 hover:border-primary hover:text-primary transition-all duration-200 group/btn justify-center rounded-sm"
                    >
                      <Phone size={13} /> Enquire Now
                      <ArrowRight size={13} className="ml-auto group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#6B7280]">
              No projects found for this filter.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F9FAFB] text-center border-t border-[#E5E7EB]">
        <h2 className="text-3xl font-semibold text-[#1F2937] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <p className="text-[#6B7280] mb-8">Our team can guide you to the perfect residence matching your needs and budget.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-[#EA580C] transition-all group rounded-sm">
          Talk to Our Team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
