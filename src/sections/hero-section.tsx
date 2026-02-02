import { ArrowRightIcon, StarIcon, VideoIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f9fafb] px-6 sm:px-16 pt-10 pb-10 overflow-hidden">
      {/* ================= GRID BACKGROUND (DARKER) ================= */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ================= AMBIENT BLURS ================= */}
      <div className="absolute -top-40 -left-40 w-130 h-130 bg-green-300/20 blur-[280px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-0 w-130 h-130 bg-green-400/10 blur-[280px] -z-10 rounded-full" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[80px_1fr] gap-14">
        {/* ===== LEFT BRAND RAIL ===== */}
        <motion.div
          className="hidden lg:flex flex-col items-center gap-6 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-px h-32 bg-green-400/40" />
          <span className="text-green-600 text-[10px] tracking-[0.4em] rotate-180 [writing-mode:vertical-rl]">
            PURE CLEAN SOLUTIONS
          </span>
          <div className="w-px h-32 bg-green-400/20" />
        </motion.div>

        {/* ===== MAIN CONTENT ===== */}
        <div>
          {/* AVATARS + RATINGS */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex -space-x-4 flex-wrap justify-center sm:justify-start">
              {[
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200",
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&h=200",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200",
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=80&h=80&auto=format&fit=crop",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`client-${i}`}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-md object-cover hover:scale-105 transition-transform z-[i]"
                />
              ))}
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="flex gap-1 mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-green-600" />
                  ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 text-center sm:text-left">
                Trusted by 12,000+ happy clients
              </p>
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center sm:text-left mb-4 sm:mb-6 leading-snug max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Professional Cleaning Services{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-green-700 to-green-500">
              for Homes & Businesses
            </span>
          </motion.h1>

          {/* SUBHEADING */}
          <motion.p
            className="text-center sm:text-left text-zinc-600 text-sm sm:text-base mb-8 max-w-md sm:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Pure Clean Solutions delivers expert cleaning services tailored for
            your home or office. Reliable, eco-friendly, and affordable —
            creating spotless spaces with care.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#contact"
              className="px-10 py-4 rounded-xl bg-blue-500 text-white font-semibold shadow-lg hover:-translate-y-1 transition w-full sm:w-auto text-center"
            >
              Get a Quote <ArrowRightIcon className="inline w-5 h-5 ml-2" />
            </a>
            <button className="px-10 py-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-green-50 transition w-full sm:w-auto mt-2 sm:mt-0">
              <VideoIcon className="inline w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </motion.div>

          {/* TRUSTED BY TEXT */}
          <motion.p
            className="text-sm sm:text-base text-zinc-500 text-center sm:text-left mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Trusted by homes and businesses across the UK
          </motion.p>

        </div>
      </div>
    </section>
  );
}
