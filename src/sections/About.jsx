import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* ─── Section label component ────────────────────────── */
function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      {children}
    </span>
  );
}

/* ─── Stat card data ──────────────────────────────────── */
const STATS = [
  {
    value: "100+",
    label: "DSA Problems Solved",
    sub: "Java · LeetCode",
    accent: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
    valueColor: "text-blue-400",
    icon: "☕",
  },
  {
    value: "10+",
    label: "Projects Completed",
    sub: "Full Stack · AI · ML",
    accent: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    dot: "bg-cyan-400",
    valueColor: "text-cyan-400",
    icon: "🚀",
  },
  {
    value: "Java",
    label: "Full Stack Developer",
    sub: "React · Node.js · MySQL",
    accent: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
    valueColor: "text-violet-400",
    icon: "⚙️",
  },
  {
    value: "AI & Cyber",
    label: "Continuous Learner",
    sub: "Security · ML · Python",
    accent: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
    valueColor: "text-emerald-400",
    icon: "🛡️",
  },
];

/* ─── Bio paragraphs ──────────────────────────────────── */
const BIO = [
  {
    text: (
      <>
        I am a passionate{" "}
        <span className="text-white font-medium">Full Stack Developer</span>{" "}
        who enjoys building scalable web applications and solving real-world
        problems.
      </>
    ),
  },
  {
    text: (
      <>
        My primary skills include{" "}
        <span className="text-white font-medium">Java</span>,{" "}
        <span className="text-white font-medium">React</span>,{" "}
        <span className="text-white font-medium">Node.js</span>,{" "}
        <span className="text-white font-medium">Express.js</span>,{" "}
        <span className="text-white font-medium">MySQL</span> and{" "}
        <span className="text-white font-medium">Python</span>.
      </>
    ),
  },
  {
    text: (
      <>
        I have solved{" "}
        <span className="text-white font-medium">100+ DSA problems</span> using
        Java and continuously improve my problem-solving skills.
      </>
    ),
  },
  {
    text: (
      <>
        I also enjoy learning{" "}
        <span className="text-white font-medium">AI/ML</span> and{" "}
        <span className="text-white font-medium">Cybersecurity</span> and
        applying modern technologies in practical projects.
      </>
    ),
  },
];

/* ─── Skill tags ──────────────────────────────────────── */
const SKILLS = [
  "Java", "React", "Node.js", "Express.js",
  "MySQL", "Python", "Git", "AI / ML",
];

/* ══════════════════════════════════════════════════════ */
export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center mb-6"
        >
          <SectionLabel>About Me</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Get to know{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              me.
            </span>
          </h2>
          {/* Decorative divider */}
          <div className="mt-4 flex items-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2 h-2 rounded-full bg-blue-500/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500/60" />
          </div>
        </motion.div>

        {/* ── Subheading ── */}
        <motion.p
          {...fadeUp(0.08)}
          className="text-center text-slate-500 text-base max-w-xl mx-auto mb-16"
        >
          Passionate developer blending clean code, creativity and continuous
          learning to build meaningful products.
        </motion.p>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">

          {/* ════════════ LEFT — Content ════════════ */}
          <div className="flex flex-col gap-6">

            {/* Bio paragraphs */}
            {BIO.map((item, i) => (
              <motion.p
                key={i}
                {...fadeUp(0.1 + i * 0.08)}
                className="text-slate-400 text-base sm:text-[17px] leading-[1.85]"
              >
                {item.text}
              </motion.p>
            ))}

            {/* Skill tags */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap gap-2 mt-2"
            >
              {SKILLS.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 text-sm font-medium backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/8 hover:text-white transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Terminal-style experience block */}
            <motion.div
              {...fadeUp(0.55)}
              className="mt-2 rounded-xl border border-white/[0.07] bg-slate-900/50 backdrop-blur-lg overflow-hidden"
            >
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-slate-950/40">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-slate-600 text-[11px] font-mono tracking-wide">
                  about.sh
                </span>
              </div>
              {/* Terminal body */}
              <div className="px-5 py-4 font-mono text-[12.5px] leading-7 space-y-0.5">
                <p>
                  <span className="text-green-400">prajwal</span>
                  <span className="text-slate-500">@portfolio</span>
                  <span className="text-slate-600">:~$</span>
                  <span className="text-slate-300 ml-2">whoami</span>
                </p>
                <p className="text-slate-400 pl-0">Full Stack Developer · Java · React · Node.js</p>
                <p className="mt-1">
                  <span className="text-green-400">prajwal</span>
                  <span className="text-slate-500">@portfolio</span>
                  <span className="text-slate-600">:~$</span>
                  <span className="text-slate-300 ml-2">cat goals.txt</span>
                </p>
                <p className="text-slate-400">Build impactful products · Solve hard problems · Keep learning</p>
                <p className="mt-1">
                  <span className="text-green-400">prajwal</span>
                  <span className="text-slate-500">@portfolio</span>
                  <span className="text-slate-600">:~$</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[7px] h-[13px] bg-blue-400/80 ml-2 align-middle rounded-sm"
                  />
                </p>
              </div>
            </motion.div>
          </div>

          {/* ════════════ RIGHT — Stat Cards ════════════ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 32, scale: 0.96 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2 + i * 0.1,
                }}
                whileHover={{ scale: 1.035, y: -5, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                className={`relative group rounded-2xl border ${stat.border} bg-gradient-to-br ${stat.accent} backdrop-blur-xl p-6 overflow-hidden cursor-default shadow-xl hover:shadow-2xl hover:border-white/[0.13] transition-shadow duration-300`}
              >
                {/* Shimmer on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                {/* Top row: icon + dot */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className={`w-2 h-2 rounded-full ${stat.dot} opacity-80`} />
                </div>

                {/* Value */}
                <p className={`text-3xl font-bold tracking-tight ${stat.valueColor} mb-1`}>
                  {stat.value}
                </p>

                {/* Label */}
                <p className="text-white text-sm font-semibold leading-snug mb-1">
                  {stat.label}
                </p>

                {/* Sub-label */}
                <p className="text-slate-500 text-[11px] font-mono tracking-wide">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
