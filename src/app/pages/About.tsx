import { Link } from "react-router";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  Star,
  Users,
  CheckCircle,
} from "lucide-react";

const TEAM = [
  {
    name: "Mr. Shreedhra Rao Yandrapu",
    role: "Executive Chairman & MD / Marketing Head",
    desc: "Over 12 years in real estate. Delivered more than 30 projects across Vizag, Parvathipuram and Bobbili with an uncompromising focus on quality.",
  },
];

const VALUES = [
  {
    icon: <Shield size={20} />,
    title: "Transparency",
    desc: "Honest property pricing and clear documentation — no hidden surprises for our buyers.",
  },
  {
    icon: <Star size={20} />,
    title: "Quality",
    desc: "Premium materials, certified contractors, and stringent quality checks at every stage.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Integrity",
    desc: "We build lasting trust through consistent actions, not just promises on paper.",
  },
  {
    icon: <Users size={20} />,
    title: "Client First",
    desc: "Every decision — from site selection to handover — is made with the homebuyer at the center.",
  },
];

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-80 flex items-end pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=600&fit=crop&auto=format"
            alt="NGK Infra Developers building"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-stone-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3 font-medium">
            Who We Are
          </p>
          <h1
            className="text-5xl md:text-6xl font-semibold text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            About NGK Infra Developers
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* STORY */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-medium">
              Our Story
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Nine years of building
              <br />
              <em className="text-primary">
                homes that matter
              </em>
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-5">
              NGK Infra Developers was founded with a single belief: that
              every family deserves a home built with integrity.
              Starting from the northern corridor of Vizag, we
              have grown to become one of the most trusted real
              estate developers — delivering over 30 projects
              and 150+ properties to satisfied homeowners.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-5">
              Our founder, Mr. Shreedhra Rao, brought over two
              decades of industry expertise to shape a company
              where quality is non-negotiable and transparency
              is standard practice. From the first brick to the
              final handover, every NGK project reflects that
              founding commitment.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              Today, NGK Infra Developers is a dominant force in Vizag real
              estate — known for premium gated apartments,
              luxury villa communities, and thoughtfully
              designed plotted developments that grow in value
              alongside the city itself.
            </p>
          </div>

          <div className="space-y-6">
            <div className="aspect-video bg-[#F3F4F6] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop&auto=format"
                alt="NGK Infra Developers project site"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "150+", label: "Properties Sold" },
                { value: "30+", label: "Projects Delivered" },
                { value: "9+", label: "Years Experience" },
                { value: "3+", label: "Industry Awards" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E5E7EB] p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className="text-3xl font-bold text-primary mb-1"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs tracking-[0.15em] text-[#6B7280] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-[#E5E7EB]">
            <div className="bg-[#F9FAFB] p-12">
              <Target className="text-primary mb-5" size={28} />
              <h3
                className="text-2xl font-semibold text-[#1F2937] mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Our Mission
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                To deliver quality Plots & Residential projects with
                timely handover and an outstanding purchase
                journey — ensuring that every homebuyer feels
                valued, informed, and proud of their investment.
              </p>
            </div>
            <div className="bg-[#F9FAFB] p-12">
              <Eye className="text-primary mb-5" size={28} />
              <h3
                className="text-2xl font-semibold text-[#1F2937] mb-4"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Our Vision
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                To become Vizag's leading developer known for
                excellence, innovation, and the lasting pride of
                resident communities — where every NGK Infra Developers address
                is synonymous with quality living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-medium">
              What Guides Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1F2937]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-[#E5E7EB]">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="bg-white p-8 group hover:bg-[#F3F4F6] transition-colors duration-300"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {v.icon}
                </div>
                <h4
                  className="text-lg font-semibold text-[#1F2937] mb-2"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {v.title}
                </h4>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-medium">
              The People Behind NGK Infra Developers
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1F2937]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Our Leadership
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {TEAM.map((member, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] p-10 hover:shadow-md transition-shadow duration-300">
                <div className="h-0.5 w-12 bg-primary mb-6" />
                <h4
                  className="text-2xl font-semibold text-[#1F2937] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {member.name}
                </h4>
                <p className="text-sm text-primary mb-5 tracking-wide">{member.role}</p>
                <p className="text-[#6B7280] leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center border-t border-[#E5E7EB] bg-white">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl font-semibold text-[#1F2937] mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Ready to explore our projects?
          </h2>
          <p className="text-[#6B7280] mb-8">
            Browse our portfolio of premium apartments, luxury
            villas, and open plots across Vizag.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-[#EA580C] transition-all group rounded-sm"
          >
            View Projects{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </>
  );
}