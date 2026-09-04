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
    // Bhogapuram International Airport construction site / aerial view
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Gajuwaka — urban residential apartments corridor Vizag
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=560&fit=crop&auto=format",
    projects: 2,
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
    // Tagarapuvalasa — green suburb township
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Rushikonda beach — golden sandy beach, blue ocean waves
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Modern tech park / university campus aerial
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Lush green residential neighbourhood
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Bheemili coastline — serene beach with greenery
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Urban city centre skyline / busy commercial streets
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Heritage fort / cultural architecture
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Suburban residential area with wide roads
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Open land / agricultural plots with horizon
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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
    // Railway station / transport hub
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=560&fit=crop&auto=format",
    projects: 1,
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

      {/* AREAS GRID — compact 4-per-row, image + name + region only */}
      <section className="py-14 px-6 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {filtered.map((area, i) => (
              <Link
                to="/contact"
                key={i}
                className="group rounded-lg overflow-hidden border border-[#E5E7EB] bg-white hover:border-primary hover:shadow-lg transition-all duration-300 block"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={area.image}
                    alt={area.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Name overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-2">
                    <h3 className="text-white text-sm font-bold leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {area.name}
                    </h3>
                  </div>
                </div>
                {/* Region below image */}
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <MapPin size={11} className="text-primary shrink-0" />
                  <span className="text-[11px] text-[#6B7280] font-medium truncate">{area.region}</span>
                </div>
              </Link>
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
