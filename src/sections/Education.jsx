import { useRef } from "react";
import { motion, useInView } from "motion/react";

/* ─── Reusable section label ─────────────────────────── */
function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      {children}
    </span>
  );
}

/* ─── Education data ─────────────────────────────────── */
const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kristu Jayanti College, Bengaluru",
    duration: "2023 – 2025",
    score: "72.80%",
    description:
      "Completed a Master's degree in Computer Applications with a focus on Full Stack Development, Software Engineering, Database Management, Artificial Intelligence, Machine Learning, and Cybersecurity. Built multiple academic and real-world software projects while strengthening problem-solving and software development skills.",
    badge: "Master's Degree",
    border: "border-blue-500/15",
    glow: "bg-blue-600/6",
    topLine: "via-blue-500/45",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLE S RLSI Institute, Belagavi",
    duration: "2020 – 2023",
    score: "71.30%",
    description:
      "Built a strong foundation in programming, database systems, web technologies, software engineering, and object-oriented programming. Developed several full-stack and AI-based academic projects during the program.",
    badge: "Bachelor's Degree",
    border: "border-cyan-500/15",
    glow: "bg-cyan-600/6",
    topLine: "via-cyan-500/45",
  },
];

/* ─── Individual education card ──────────────────────── */
function EduCard({ item, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 36, scale: 0.97 }
      }
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + index * 0.1,
      }}
      whileHover={{ y: -7, scale: 1.02, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
      className={`group relative flex flex-col h-full rounded-2xl border ${item.border} bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/[0.13] transition-all duration-300`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${item.topLine} to-transparent z-20`} />

      {/* Inner ambient glow */}
      <div className={`pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full ${item.glow} blur-2xl z-0`} />

      {/* Shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-10" />

      {/* Card body */}
      <div className="relative p-6 sm:p-8 flex flex-col flex-grow gap-5 z-10">
        
        {/* Header row (Icon + Badge) */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-2xl shrink-0 shadow-inner">
            🎓
          </div>
          <span className="inline-flex px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.04] text-xs font-semibold tracking-wide text-blue-300">
            {item.badge}
          </span>
        </div>

        {/* Degree Name */}
        <div>
          <h3 className="text-white font-semibold text-xl leading-snug tracking-tight">
            {item.degree}
          </h3>
        </div>

        {/* Inst, Duration, Score */}
        <div className="space-y-2.5 bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <span className="text-slate-300 font-medium text-sm">{item.institution}</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] text-slate-400 font-mono">
              {item.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-semibold tracking-wide">
              Score: {item.score}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-grow mt-1">
          {item.description}
        </p>

      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[480px] h-[480px] rounded-full bg-blue-600/5 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-600/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center mb-6"
        >
          <SectionLabel>Education</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Academic{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey.
            </span>
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2 h-2 rounded-full bg-blue-500/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500/60" />
          </div>
        </motion.div>

        {/* ── Subheading ── */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-center text-slate-500 text-base max-w-xl mx-auto mb-20"
        >
          My academic background and the institutions that shaped my knowledge and skills.
        </motion.p>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((item, i) => (
            <EduCard
              key={item.degree}
              item={item}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Bottom summary strip ── */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        >
          {[
            { value: "2",       label: "Qualifications" },
            { value: "MCA",     label: "Current Degree" },
            { value: "2020–25", label: "Academic Span" },
            { value: "CS",      label: "Specialisation" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="text-xl font-bold text-white">{value}</span>
              <span className="text-slate-500 text-sm">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
