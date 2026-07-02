import { motion } from "motion/react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";

/* ─── Data ───────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

const SOCIALS = [
  {
    icon:  FiGithub,
    href:  "https://github.com/prajwaljm123",
    label: "GitHub",
    color: "hover:text-white hover:border-white/40",
  },
  {
    icon:  FiLinkedin,
    href:  "https://linkedin.com/in/prajwalmunnolli",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-400/40",
  },
  {
    icon:  FiMail,
    href:  "mailto:prajwalmunnolli@gmail.com",
    label: "Email",
    color: "hover:text-cyan-400 hover:border-cyan-400/40",
  },
];

/* ─── Animation variants ─────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ══════════════════════════════════════════════════════ */
export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">

      {/* ── Ambient glow ───────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2
                   w-[700px] h-[260px] rounded-full opacity-20 blur-3xl
                   bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"
      />

      {/* ── Glass card ─────────────────────────────────── */}
      <div
        className="relative border-t border-white/[0.07]
                   bg-slate-950/60 backdrop-blur-2xl"
      >
        {/* subtle top-edge shimmer */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px
                     bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        />

        {/* ── Main content ─────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto px-6 pt-16 pb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">

            {/* ── LEFT — brand + description ─────────── */}
            <motion.div variants={fadeUp} className="space-y-5 max-w-sm">
              {/* Logo */}
              <a
                href="#"
                className="inline-flex items-center gap-1 group"
                aria-label="Back to top"
              >
                <span
                  className="font-bold text-2xl tracking-wide
                             text-white group-hover:text-slate-200 transition-colors duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  PM
                </span>
                <span
                  className="text-cyan-400 text-xl leading-none
                             group-hover:animate-pulse transition-all duration-300"
                >
                  ●
                </span>
              </a>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                Building modern web applications with clean code, thoughtful design
                and scalable solutions.
              </p>

              {/* Decorative accent line */}
              <div className="w-12 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            </motion.div>

            {/* ── RIGHT — quick links ────────────────── */}
            <motion.div variants={fadeUp} className="md:justify-self-end">
              <h3
                className="text-xs font-semibold uppercase tracking-[0.18em]
                           text-slate-500 mb-5"
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group inline-flex items-center gap-1.5
                                 text-slate-400 hover:text-white text-sm
                                 transition-colors duration-300"
                    >
                      <span
                        className="w-0 opacity-0 group-hover:w-3 group-hover:opacity-100
                                   overflow-hidden transition-all duration-300"
                      >
                        <FiArrowUpRight size={12} className="text-cyan-400" />
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Divider ──────────────────────────────── */}
          <motion.div variants={fadeIn}>
            <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>

          {/* ── Bottom bar ───────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-1.5 text-center sm:text-left">
              <p className="text-slate-500 text-xs">
                © 2026 Prajwal Munnolli.
              </p>
              <p className="text-slate-600 text-xs hidden sm:block">·</p>
              <p className="text-slate-500 text-xs">
                Made with{" "}
                <span className="text-slate-400">React</span>,{" "}
                <span className="text-slate-400">Tailwind CSS</span> and{" "}
                <span className="text-slate-400">Motion</span>.
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`
                    flex items-center justify-center w-9 h-9 rounded-xl
                    border border-white/10 bg-white/5
                    text-slate-400 text-base
                    backdrop-blur-sm
                    transition-colors duration-300
                    ${color}
                  `}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
