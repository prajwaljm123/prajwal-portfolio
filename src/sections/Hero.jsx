import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from "react-icons/fi";

/* ─── Animated roles ─────────────────────────────────── */
const ROLES = [
  "Java Developer",
  "Full Stack Developer",
  "React Developer",
];

/* ─── Code lines shown in the editor card ───────────── */
const CODE_LINES = [
  {
    indent: 0,
    tokens: [
      { t: "const ", c: "text-cyan-400" },
      { t: "developer", c: "text-blue-300" },
      { t: " = {", c: "text-slate-300" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "name", c: "text-blue-300" },
      { t: ": ", c: "text-slate-300" },
      { t: '"Prajwal Munnolli"', c: "text-green-400" },
      { t: ",", c: "text-slate-300" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "role", c: "text-blue-300" },
      { t: ": ", c: "text-slate-300" },
      { t: '"Full Stack Developer"', c: "text-green-400" },
      { t: ",", c: "text-slate-300" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "skills", c: "text-blue-300" },
      { t: ": [", c: "text-slate-300" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { t: '"Java"', c: "text-amber-400" },
      { t: ", ", c: "text-slate-300" },
      { t: '"React"', c: "text-amber-400" },
      { t: ", ", c: "text-slate-300" },
      { t: '"Node.js"', c: "text-amber-400" },
    ],
  },
  {
    indent: 1,
    tokens: [{ t: "],", c: "text-slate-300" }],
  },
  {
    indent: 1,
    tokens: [
      { t: "passion", c: "text-blue-300" },
      { t: ": ", c: "text-slate-300" },
      { t: '"Building the future"', c: "text-green-400" },
    ],
  },
  {
    indent: 0,
    tokens: [{ t: "};", c: "text-slate-300" }],
  },
  { indent: 0, tokens: [] },
  {
    indent: 0,
    tokens: [
      { t: "developer", c: "text-blue-300" },
      { t: ".", c: "text-slate-400" },
      { t: "deploy", c: "text-yellow-300" },
      { t: "(", c: "text-slate-300" },
      { t: "🚀", c: "" },
      { t: ");", c: "text-slate-300" },
    ],
  },
];

/* ─── Animation helpers ──────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

/* ─── Social links data ──────────────────────────────── */
const SOCIALS = [
  { icon: FiGithub, href: "https://github.com/prajwaljm123", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/prajwalmunnolli", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:prajwalmunnolli@gmail.com", label: "Email" },
];

/* ══════════════════════════════════════════════════════ */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % ROLES.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Blue glow – top left */}
        <div className="absolute -top-32 -left-40 w-[650px] h-[650px] rounded-full bg-blue-600/10 blur-[130px]" />
        {/* Cyan glow – bottom right */}
        <div className="absolute -bottom-20 -right-20 w-[550px] h-[550px] rounded-full bg-cyan-500/8 blur-[130px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-screen lg:min-h-0 lg:py-32">

          {/* ════════════ LEFT COLUMN ════════════ */}
          <div className="flex flex-col items-start max-lg:items-center max-lg:text-center">

            {/* Status badge */}
            <motion.div {...fadeIn(0.05)}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 text-xs font-medium tracking-widest uppercase backdrop-blur-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              {...fadeUp(0.15)}
              className="text-slate-500 text-base font-medium mb-3 tracking-widest uppercase"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.25)}
              className="font-bold leading-[1.06] tracking-tight text-white mb-6 text-5xl sm:text-6xl xl:text-[4.5rem]"
            >
              Prajwal
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Munnolli
              </span>
            </motion.h1>

            {/* Animated role ticker */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex items-center gap-2 h-9 mb-8 overflow-hidden"
            >
              <span className="text-slate-600 text-lg font-mono shrink-0">{"<"}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent whitespace-nowrap"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="text-slate-600 text-lg font-mono shrink-0">{" />"}</span>
            </motion.div>

            {/* Bio paragraph */}
            <motion.p
              {...fadeUp(0.45)}
              className="text-slate-400 text-base sm:text-lg leading-[1.8] max-w-[480px] mb-10"
            >
              Full Stack Developer with a strong foundation in{" "}
              <span className="text-slate-300 font-medium">Java</span>,{" "}
              <span className="text-slate-300 font-medium">React</span>,{" "}
              <span className="text-slate-300 font-medium">Node.js</span> and{" "}
              <span className="text-slate-300 font-medium">Python</span>. Solved
              100+ DSA problems in Java and love building scalable web
              applications, AI-powered solutions and clean software. Passionate
              about problem solving and continuous learning.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-wrap gap-3 mb-10 max-lg:justify-center"
            >
              {/* Primary */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm tracking-wide overflow-hidden transition-colors duration-200 hover:bg-blue-500 shadow-xl shadow-blue-700/25"
              >
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                View Projects
                <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </motion.a>

              {/* Secondary */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-sm tracking-wide backdrop-blur-sm transition-colors duration-200"
              >
                <FiDownload className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              {...fadeIn(0.7)}
              className="flex items-center gap-2"
            >
              <span className="text-slate-600 text-xs mr-2 tracking-wider uppercase">
                Find me
              </span>
              <div className="w-px h-4 bg-white/10 mr-2" />
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.18, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ════════════ RIGHT COLUMN ════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex items-center justify-center py-8"
          >
            {/* Radial glow behind card */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-blue-600/25 via-cyan-500/12 to-transparent blur-3xl" />
            </div>

            {/* ── Floating badge – DSA ── */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-4 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border border-white/10 bg-slate-900/85 backdrop-blur-lg shadow-2xl"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/15 text-base">
                ☕
              </div>
              <div>
                <p className="text-white text-[11px] font-semibold leading-none mb-0.5">
                  100+ DSA Solved
                </p>
                <p className="text-blue-400 text-[10px] font-mono">Java </p>
              </div>
            </motion.div>

            {/* ── Main code editor card ── */}
            <div className="relative w-full max-w-[420px] rounded-2xl border border-white/10 bg-slate-900/55 backdrop-blur-2xl shadow-2xl shadow-black/70 overflow-hidden">

              {/* Thin top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/[0.07] bg-slate-950/40">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/75 hover:bg-red-500 transition-colors cursor-default" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/75 hover:bg-yellow-500 transition-colors cursor-default" />
                  <span className="w-3 h-3 rounded-full bg-green-500/75 hover:bg-green-500 transition-colors cursor-default" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-slate-500 text-[11px] font-mono tracking-wide">
                    developer.js
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                  <span className="text-slate-600 text-[10px] font-mono">live</span>
                </div>
              </div>

              {/* Tab bar */}
              <div className="flex items-center gap-0 px-4 border-b border-white/[0.05] bg-slate-950/20">
                <div className="flex items-center gap-2 px-3 py-2 border-b-2 border-blue-500 text-blue-400">
                  <div className="w-2 h-2 rounded-sm bg-yellow-400/80" />
                  <span className="text-[10px] font-mono">developer.js</span>
                </div>
              </div>

              {/* Code body */}
              <div className="p-5 font-mono text-[12.5px] leading-7 select-none">
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.55 + i * 0.06, ease: "easeOut" }}
                    className="flex gap-4 group"
                  >
                    {/* Line number */}
                    <span className="text-slate-700 w-4 shrink-0 text-right text-[10px] leading-7 group-hover:text-slate-500 transition-colors">
                      {i + 1}
                    </span>
                    {/* Code tokens */}
                    <span
                      className="group-hover:bg-white/[0.02] -mx-1 px-1 rounded transition-colors w-full"
                      style={{ paddingLeft: `${line.indent * 14 + 4}px` }}
                    >
                      {line.tokens.map((tok, j) => (
                        <span key={j} className={tok.c}>
                          {tok.t}
                        </span>
                      ))}
                      {/* Blinking cursor on last real line */}
                      {i === CODE_LINES.length - 1 && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                          className="inline-block w-[2px] h-[14px] bg-blue-400 ml-0.5 align-middle rounded-sm"
                        />
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.06] bg-blue-600/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-blue-400 text-[10px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    JavaScript
                  </span>
                  <span className="text-slate-700 text-[10px]">UTF-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-500/70 text-[10px]">✓ No errors</span>
                  <span className="text-slate-600 text-[10px] font-mono">Ln 10</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        {...fadeIn(1.3)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-slate-700 text-[10px] tracking-[0.2em] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[18px] h-[30px] rounded-full border border-white/12 flex items-start justify-center pt-1.5"
        >
          <div className="w-[3px] h-[6px] rounded-full bg-blue-400/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
