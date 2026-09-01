import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Instagram, Youtube, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Property Enquiry — ${form.interest || "General"} | ${form.name}`);
    const body = encodeURIComponent(
      `New enquiry from NGK Infra website.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email || "Not provided"}\n` +
      `Interested In: ${form.interest || "Not specified"}\n\n` +
      `Message:\n${form.message || "No message provided"}`
    );
    window.location.href = `mailto:ngkinfra99@gmail.com?subject=${subject}&body=${body}`;
    // Delay success state so the mailto link can open before UI changes
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative h-72 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=500&fit=crop&auto=format"
            alt="Contact us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-stone-900/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3 font-medium">We're Here for You</p>
          <h1 className="text-5xl md:text-6xl font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Contact Us
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">

          {/* LEFT — INFO */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-medium">Get In Touch</p>
              <h2 className="text-3xl font-semibold text-[#1F2937] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Let our team guide<br /><em className="text-primary">you home</em>
              </h2>
              <p className="text-[#6B7280] leading-relaxed text-sm">
                Whether you&apos;re looking for a 2 BHK apartment, a luxury villa, or an open plot —
                our experts are ready to help you find the perfect match within your budget.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: <Phone size={18} className="text-primary" />,
                  label: "Sales",
                  value: "+91 93986 91219",
                  href: "tel:+919398691219",
                },
                {
                  icon: <Phone size={18} className="text-primary" />,
                  label: "Customer Support",
                  value: "+91 93925 52843",
                  href: "tel:+919392552843",
                },
                {
                  icon: <Mail size={18} className="text-primary" />,
                  label: "Email",
                  value: "ngkinfra99@gmail.com",
                  href: "mailto:ngkinfra99@gmail.com",

                },
                {
                  icon: <MapPin size={18} className="text-primary" />,
                  label: "Office",
                  value: "Vizag, Andhra Pradesh",
                  href: "#",
                },
                {
                  icon: <Clock size={18} className="text-primary" />,
                  label: "Office Hours",
                  value: "Mon – Sat, 9 AM – 7 PM",
                  href: null,
                },
              ].map((c, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 border border-[#E5E7EB] flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.15em] text-[#6B7280] uppercase mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-[#1F2937] hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <span className="text-sm text-[#1F2937]">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="text-xs tracking-[0.25em] text-[#6B7280] uppercase mb-4">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { icon: <Instagram size={16} />, label: "Instagram", href: "https://www.instagram.com/ngk_infra99?igsh=bm5sZHlqd20xZ2g2" },
                  { icon: <Youtube size={16} />, label: "YouTube", href: "https://youtube.com/@ngkinfra?si=EntM3gufJ5sRoXsR" },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-primary hover:border-primary transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="lg:col-span-3 bg-white border border-[#E5E7EB] p-8 md:p-10 hover:shadow-md transition-shadow duration-300">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-5">
                <CheckCircle className="text-primary" size={48} />
                <h3 className="text-2xl font-semibold text-[#1F2937]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thank you for reaching out!
                </h3>
                <p className="text-[#6B7280] max-w-sm leading-relaxed">
                  Our team will get back to you within 24 hours. Meanwhile, explore our projects.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="text-primary text-xs tracking-[0.25em] uppercase mb-6 font-medium">Enquiry Form</p>
                  <h3 className="text-2xl font-semibold text-[#1F2937] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Tell us about your requirements
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs tracking-[0.15em] text-[#6B7280] uppercase block mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.15em] text-[#6B7280] uppercase block mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] text-[#6B7280] uppercase block mb-2">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] text-[#6B7280] uppercase block mb-2">Interested In</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1F2937] focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a project type</option>
                    <option>2 BHK Apartment</option>
                    <option>3 BHK Apartment</option>
                    <option>Open Plot</option>
                    <option>Villa</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] text-[#6B7280] uppercase block mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us your requirements, preferred location, budget range..."
                    className="w-full bg-white border border-[#E5E7EB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-medium tracking-wide hover:bg-[#EA580C] transition-all duration-200 group rounded-sm"
                >
                  <Send size={16} />
                  Send Enquiry
                </button>

                <p className="text-xs text-[#6B7280] text-center">
                  We respect your privacy. Your details will not be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP — centered & compact */}
      <section className="py-12 px-6 bg-[#F9FAFB] border-t border-[#E5E7EB]">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-primary shrink-0" size={18} />
            <div>
              <p className="text-sm font-semibold text-[#1F2937]">NGK Infra Developers Office</p>
              <p className="text-xs text-[#6B7280]">Vizag, Andhra Pradesh</p>
            </div>
          </div>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-sm border border-[#E5E7EB] shadow-md">
            <iframe
              title="NGK Infra Office Location"
              src="https://www.google.com/maps?q=17.6835656,83.1987270&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
