import { Link } from "react-router";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-6 text-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Decorative top bar */}
      <div className="w-16 h-1 bg-primary mb-10 rounded-full" />

      <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
        Error 404
      </p>
      <h1
        className="text-6xl md:text-8xl font-bold text-[#1F2937] mb-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        404
      </h1>
      <h2
        className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Page Not Found
      </h2>
      <p className="text-[#6B7280] max-w-md leading-relaxed mb-10">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 bg-primary text-white px-7 py-3.5 font-semibold hover:bg-[#EA580C] transition-all duration-200 rounded-sm group"
        >
          <Home size={16} />
          Back to Home
        </Link>
        <Link
          to="/projects"
          className="flex items-center gap-2 border-2 border-[#E5E7EB] text-[#374151] px-7 py-3.5 font-semibold hover:border-primary hover:text-primary transition-all duration-200 rounded-sm group"
        >
          View Projects
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Decorative bottom */}
      <div className="mt-16 text-xs text-[#9CA3AF] tracking-widest uppercase">
        NGK Infra · Vizag
      </div>
    </div>
  );
}
