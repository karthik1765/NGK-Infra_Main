import { useState } from "react";

import { Calendar } from "lucide-react";

const NEWS = [
  {
    title: "Celebrating 9 Years of Excellence",
    date: "March 2017",
    category: "Company Milestone",
    excerpt: "NGK Infra Developers marks nine years of delivering premium residences across Vizag. From our first project in 2015 to over 30 completed developments — we reflect on a journey built on quality, trust, and community.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&auto=format",
    featured: true,
  },
  {
    title: "NGK Project 2",
    date: "January 2024",
    category: "Project Launch",
    excerpt: "Our most exclusive offering yet — 32 ultra-luxury 4BHK villas with private home theatres. The Villa Palazzo grand opening celebrated a new benchmark for premium living in Vizag.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    title: "NGK Project 3",
    date: "November 2023",
    category: "Possession",
    excerpt: "Homeowners of NGK Elegance received their keys at a joyful possession ceremony. The project, located in Gajuwaka, was delivered ahead of schedule — continuing NGK Infra's tradition of on-time handovers.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    title: "The Rise of Sustainable Living in Vizag",
    date: "October 2020",
    category: "Industry Insight",
    excerpt: "Vizag is rapidly emerging as an eco-friendly housing hub. We explore how green building practices, solar energy integration, and natural ventilation design are reshaping residential development in the city.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    title: "Infrastructure Trends 2024 — What's Next for Real Estate",
    date: "September 2023",
    category: "Industry Insight",
    excerpt: "Green building certifications, smart city integration, and renewable energy are no longer optional — they are the new baseline for premium residential projects. NGK Infra leads the way.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    title: "NGK Project 6",
    date: "August 2025",
    category: "Project Update",
    excerpt: "The NGK Vista project in Kompally is nearly sold out across all three towers — Aster, Freesia, and Peony. A limited number of 3 BHK units remain. Register your interest before possession begins.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
  {
    title: "The Future of Urban Mobility in Tier-2 Cities",
    date: "July 2026",
    category: "Industry Insight",
    excerpt: "Electric buses, autonomous vehicles, and integrated transit networks are transforming how residents experience city living. We examine what this means for residential location value in Vizag.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop&auto=format",
    featured: false,
  },
];

const CAT_COLORS: Record<string, string> = {
  "Company Milestone": "text-amber-400 border-amber-400/40 bg-amber-400/10",
  "Project Launch": "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
  "Possession": "text-blue-400 border-blue-400/40 bg-blue-400/10",
  "Industry Insight": "text-violet-400 border-violet-400/40 bg-violet-400/10",
  "Project Update": "text-sky-400 border-sky-400/40 bg-sky-400/10",
  "Awards": "text-primary border-primary/40 bg-primary/10",
};

export default function News() {
  const [email, setEmail] = useState("");
  const featured = NEWS[0];
  const rest = NEWS.slice(1);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter Subscription — NGK Infra Developers");
    const body = encodeURIComponent(`New newsletter subscription request.\n\nEmail: ${email}\n\nPlease add this subscriber to your mailing list.`);
    window.location.href = `mailto:ngkinfra99@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-72 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=500&fit=crop&auto=format"
            alt="NGK Infra Developers News"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-stone-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3 font-medium">Stay Informed</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            News &amp; Updates
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* FEATURED */}
          <div className="grid lg:grid-cols-2 gap-px bg-[#E5E7EB] mb-6">
            <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden bg-[#F3F4F6]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>
            <div className="bg-white p-10 flex flex-col justify-center">
              <span className={`inline-block text-xs font-medium px-3 py-1 border self-start mb-5 ${CAT_COLORS[featured.category] || "text-[#6B7280] border-[#E5E7EB]"}`}>
                {featured.category}
              </span>
              <h2 className="text-3xl font-semibold text-[#1F2937] mb-4 leading-snug" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {featured.title}
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">{featured.excerpt}</p>
              <p className="flex items-center gap-2 text-xs text-[#6B7280]">
                <Calendar size={12} /> {featured.date}
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {rest.map((article, i) => {
              const subject = encodeURIComponent(`Enquiry: ${article.title} — NGK Infra Developers`);
              const body = encodeURIComponent(`Hello NGK Infra Developers,\n\nI read your article "${article.title}" and would like to know more.\n\nPlease get in touch with me.`);
              return (
                <a
                  key={i}
                  href={`mailto:ngkinfra99@gmail.com?subject=${subject}&body=${body}`}
                  className="bg-white border border-[#E5E7EB] group hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer block no-underline"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-[#F3F4F6]">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-medium px-2.5 py-0.5 border ${CAT_COLORS[article.category] || "text-[#6B7280] border-[#E5E7EB]"}`}>
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                        <Calendar size={11} /> {article.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1F2937] mb-2 leading-snug group-hover:text-primary transition-colors" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <p className="text-xs text-primary mt-3 font-medium group-hover:underline">Read more →</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <section className="py-16 px-6 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#1F2937] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Stay up to date
          </h2>
          <p className="text-[#6B7280] text-sm mb-8">Get notified about new project launches, possession updates, and industry insights.</p>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:border-primary transition-colors"
            />
            <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-[#EA580C] transition-colors shrink-0 rounded-sm">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
