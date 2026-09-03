import { useState, useEffect } from "react";
import { Link } from "react-router";
import { MapPin, ArrowRight, Home, Trees, Building2, Waves } from "lucide-react";

const AREA_TYPES = ["All", "Residential", "Plots", "Villas", "Apartments"];

const AREAS = [
  {
    name: "Bhogapuram",
    region: "Vizianagaram District",
    type: "Plots",
    highlight: "International Airport Hub",
    description:
      "Strategically located near the upcoming Bhogapuram International Airport, this area is rapidly appreciating and ideal for long-term investment in open plots.",
    tags: ["Near International Airport", "NH-16 Connectivity", "High Growth Zone"],
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 5L – ₹ 20L",
    distance: "Near Bhogapuram Airport",
  },
  {
    name: "Gajuwaka",
    region: "Visakhapatnam",
    type: "Apartments",
    highlight: "Industrial & Residential Hub",
    description:
      "One of Vizag's fastest-growing industrial and residential corridors, Gajuwaka offers excellent connectivity and a strong social infrastructure.",
    tags: ["Industrial Zone", "Port Connectivity", "Prime Location"],
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=560&fit=crop&auto=format",
    projects: 2,
    priceRange: "₹ 40L – ₹ 90L",
    distance: "12 km from City Centre",
  },
  {
    name: "Tagarapuvalasa",
    region: "Visakhapatnam District",
    type: "Plots",
    highlight: "Emerging Township Zone",
    description:
      "A rapidly developing township near NH-16 with excellent land appreciation and proximity to Bhogapuram Airport and key educational institutions.",
    tags: ["NH-16 Adjacent", "Township Development", "Growing Zone"],
    icon: "Trees",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 8L – ₹ 25L",
    distance: "Near Bhogapuram",
  },
  {
    name: "Rushikonda",
    region: "Visakhapatnam",
    type: "Villas",
    highlight: "Beachside Luxury Living",
    description:
      "Known for its pristine beach and IT corridor, Rushikonda is Vizag's premium luxury zone with scenic ocean views and world-class infrastructure.",
    tags: ["Beach Proximity", "IT Corridor", "Luxury Living"],
    icon: "Waves",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 1.5Cr – ₹ 4Cr",
    distance: "15 km from City Centre",
  },
  {
    name: "Madhurawada",
    region: "Visakhapatnam",
    type: "Apartments",
    highlight: "IT & Tech Park Zone",
    description:
      "Home to the GITAM University, IT SEZ, and a booming residential market. Madhurawada is Vizag's most sought-after address for professionals.",
    tags: ["IT SEZ Zone", "GITAM University", "High Demand"],
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 50L – ₹ 1.2Cr",
    distance: "18 km from City Centre",
  },
  {
    name: "Kommadi",
    region: "Visakhapatnam",
    type: "Residential",
    highlight: "Green & Serene Living",
    description:
      "A peaceful residential belt with lush surroundings, excellent schools, and a growing social ecosystem. Perfect for families seeking quality living.",
    tags: ["Schools & Colleges", "Peaceful Environment", "Family-Friendly"],
    icon: "Home",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 45L – ₹ 85L",
    distance: "20 km from City Centre",
  },
  {
    name: "Bheemili",
    region: "Visakhapatnam District",
    type: "Villas",
    highlight: "Coastal Retreat",
    description:
      "A scenic coastal town with historic fort, pristine beaches, and premium villa plots. Bheemili is the ultimate coastal retreat for weekend homes and investments.",
    tags: ["Coastal Location", "Historic Town", "Premium Villas"],
    icon: "Waves",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 80L – ₹ 2Cr",
    distance: "35 km from City Centre",
  },
  {
    name: "MVP Colony",
    region: "Visakhapatnam",
    type: "Apartments",
    highlight: "Central Business District",
    description:
      "The heart of Vizag's residential and commercial activity. MVP Colony offers unmatched connectivity, upscale living, and premium investment potential.",
    tags: ["City Centre", "Premium Locality", "High Connectivity"],
    icon: "Building2",
    image:
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 80L – ₹ 2Cr",
    distance: "City Centre",
  },
  {
    name: "Vizianagaram",
    region: "Vizianagaram District",
    type: "Plots",
    highlight: "Heritage City Growth",
    description:
      "The cultural capital of North Andhra is witnessing robust real estate growth driven by educational hubs, infrastructure projects, and proximity to Vizag.",
    tags: ["Educational Hub", "Cultural City", "Affordable Land"],
    icon: "Trees",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 6L – ₹ 22L",
    distance: "42 km from Vizag",
  },
  {
    name: "Pendurthi",
    region: "Visakhapatnam",
    type: "Residential",
    highlight: "Affordable Residential Zone",
    description:
      "A fast-emerging residential corridor along the outskirts of Vizag offering affordable homes and plots with all modern amenities and excellent road connectivity.",
    tags: ["Affordable Housing", "Road Connectivity", "Growing Area"],
    icon: "Home",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 20L – ₹ 60L",
    distance: "25 km from City Centre",
  },
  {
    name: "Anakapalle",
    region: "Visakhapatnam District",
    type: "Plots",
    highlight: "Industrial Growth Corridor",
    description:
      "An upcoming industrial and residential zone with rapid development, excellent NH-16 access, and strong investment potential in open plots.",
    tags: ["Industrial Corridor", "NH-16 Access", "Investment Zone"],
    icon: "Trees",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 4L – ₹ 15L",
    distance: "50 km from Vizag",
  },
  {
    name: "Duvvada",
    region: "Visakhapatnam",
    type: "Residential",
    highlight: "Connectivity & Infrastructure",
    description:
      "Located near Vizag's railway junction and industrial zone, Duvvada is a strategically positioned residential area with excellent transport and infrastructure.",
    tags: ["Railway Junction", "Industrial Proximity", "Transport Hub"],
    icon: "Home",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=560&fit=crop&auto=format",
    projects: 1,
    priceRange: "₹ 30L – ₹ 70L",
    distance: "15 km from City Centre",
  },
];

const TYPE_COLORS: Record<string, string> = {
  Plots: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  Villas: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  Apartments: "bg-blue-500/15 text-blue-700 border-blue-500/30",
  Residential: "bg-purple-500/15 text-purple-700 border-purple-500/30",
};

export default function Areas() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? AREAS : AREAS.filter((a) => a.type === filter);

  useEffect(() => {
    document.title = "10+ Areas | NGK Infra Developers";
    return () => { document.title = "NGK Infra Developers | Premium Residences & Plots in Vizag"; };
  }, []);

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-80 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&h=500&fit=crop&auto=format"
            alt="Vizag city areas"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/70 to-stone-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3 font-medium">
            Our Presence
          </p>
          <h1
            className="text-5xl md:text-6xl font-semibold text-white mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            10+ Areas
          </h1>
          <p className="text-white/60 text-base max-w-xl">
            Strategically located projects across Vizag and surrounding districts — find your perfect location.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary text-white py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "12+", label: "Areas Covered" },
            { value: "3", label: "Districts" },
            { value: "8+", label: "Active Projects" },
            { value: "150+", label: "Families Served" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-white/70 tracking-wider uppercase mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="border-b border-[#E5E7EB] px-6 sticky top-16 bg-white/95 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-3 scrollbar-none">
          {AREA_TYPES.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-sm ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "text-[#6B7280] hover:text-primary border border-transparent hover:border-[#E5E7EB]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* AREAS GRID */}
      <section className="py-16 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((area, i) => (
              <article
                key={i}
                className="bg-white border border-[#E5E7EB] group overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F4F6]">
                  <img
                    src={area.image}
                    alt={area.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent pointer-events-none" />

                  {/* Type badge */}
                  <span
                    className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 border rounded-sm ${TYPE_COLORS[area.type]} bg-white/90 backdrop-blur-sm`}
                  >
                    {area.type}
                  </span>

                  {/* Projects count */}
                  <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full border border-white/20">
                    {area.projects} Project{area.projects > 1 ? "s" : ""}
                  </span>

                  {/* Area name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {area.name}
                    </h3>
                    <p className="text-white/70 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin size={10} />
                      {area.region}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="h-0.5 w-8 bg-primary mb-4" />

                  {/* Highlight */}
                  <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-2">
                    {area.highlight}
                  </p>

                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4 line-clamp-2">
                    {area.description}
                  </p>

                  {/* Info row */}
                  <div className="grid grid-cols-2 gap-3 mb-4 pt-4 border-t border-[#E5E7EB]">
                    <div>
                      <div className="text-[10px] tracking-[0.15em] text-[#6B7280] uppercase">
                        Price Range
                      </div>
                      <div className="text-xs text-[#1F2937] font-semibold mt-0.5">
                        {area.priceRange}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.15em] text-[#6B7280] uppercase">
                        Distance
                      </div>
                      <div className="text-xs text-[#1F2937] font-medium mt-0.5">
                        {area.distance}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {area.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] px-2 py-0.5 bg-[#F3F4F6] text-[#6B7280] rounded-sm border border-[#E5E7EB]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/projects"
                    className="flex items-center gap-2 border border-[#E5E7EB] text-sm text-[#6B7280] px-4 py-2.5 hover:border-primary hover:text-primary transition-all duration-200 group/btn justify-center rounded-sm"
                  >
                    View Projects in {area.name}
                    <ArrowRight
                      size={13}
                      className="ml-auto group-hover/btn:translate-x-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#6B7280]">
              No areas found for this filter.
            </div>
          )}
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 px-6 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3 font-medium">
            Our Reach
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#1F2937] mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Across Vizag &amp; Beyond
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-sm leading-relaxed">
            From the beachside luxury of Rushikonda to the airport-adjacent plots near Bhogapuram —
            NGK Infra has a presence across the most promising zones in North Andhra Pradesh.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-sm overflow-hidden border border-[#E5E7EB] shadow-sm">
          <iframe
            title="NGK Infra Areas Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240916.11299614688!2d83.21836!3d17.72589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680000000000"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F9FAFB] text-center border-t border-[#E5E7EB]">
        <h2
          className="text-3xl font-semibold text-[#1F2937] mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Not Sure Which Area Suits You?
        </h2>
        <p className="text-[#6B7280] mb-8">
          Our location experts will help you find the perfect area based on your budget, lifestyle, and goals.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-[#EA580C] transition-all group rounded-sm"
        >
          Talk to a Location Expert{" "}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </section>
    </>
  );
}
