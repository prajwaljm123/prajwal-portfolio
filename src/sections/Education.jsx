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
    level: "Post-Graduate",
    degree: "Master of Computer Applications",
    short: "MCA",
    institution: "Your University Name",
    location: "Karnataka, India",
    year: "2024 – 2026",
    status: "Pursuing",
    statusColor: "bg-blue-400",
    statusText: "text-blue-400",
    description:
      "Specialising in Full Stack Development, Artificial Intelligence and Software Engineering. Focusing on advanced algorithms, cloud computing and modern web technologies.",
    highlights: ["Data Structures & Algorithms", "Cloud Computing", "AI & ML", "Software Engineering"],
    icon: "🎓",
    accent: "blue",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    glow: "bg-blue-600/8",
    dotRing: "ring-blue-500/40",
    dotBg: "bg-blue-500",
    tagStyle: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    lineGlow: "bg-blue-500",
  },
  {
    level: "Under-Graduate",
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    institution: "Your College Name",
    location: "Karnataka, India",
    year: "2021 – 2024",
    status: "Completed",
    statusColor: "bg-green-400",
    statusText: "text-green-400",
    description:
      "Studied core computer science fundamentals including programming, databases, networking and web development. Built strong foundations in Java, Python and full stack web technologies.",
    highlights: ["Java Programming", "Database Management", "Web Development", "Python"],
    icon: "🏫",
    accent: "cyan",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    glow: "bg-cyan-600/8",
    dotRing: "ring-cyan-500/40",
    dotBg: "bg-cyan-500",
    tagStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    lineGlow: "bg-cyan-500",
  },
  {
    level: "Pre-University",
    degree: "Pre-University Course",
    short: "PUC",
    institution: "Your PU College Name",
    location: "Karnataka, India",
    year: "2019 – 2021",
    status: "Completed",
    statusColor: "bg-green-400",
    statusText: "text-green-400",
    description:
      "Completed Science stream with Computer Science, Mathematics and Physics. Developed an interest in programming and logical problem solving during this period.",
    highlights: ["Computer Science", "Mathematics", "Physics", "Science Stream"],
    icon: "📚",
    accent: "violet",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    glow: "bg-violet-600/8",
    dotRing: "ring-violet-500/40",
    dotBg: "bg-violet-500",
    tagStyle: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    lineGlow: "bg-violet-500",
  },
  {
    level: "Secondary",
    degree: "Secondary School Leaving Certificate",
    short: "SSLC",
    institution: "Your School Name",
    location: "Karnataka, India",
    year: "2018 – 2019",
    status: "Completed",
    statusColor: "bg-green-400",
    statusText: "text-green-400",
    description:
      "Completed secondary education with strong academic results. Developed foundational skills in mathematics, sciences and languages that shaped future academic success.",
    highlights: ["Mathematics", "Science", "English", "Social Studies"],
    icon: "🏫",
    accent: "emerald",
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    glow: "bg-emerald-600/8",
    dotRing: "ring-emerald-500/40",
    dotBg: "bg-emerald-500",
    tagStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    lineGlow: "bg-emerald-500",
  },
];

/* ─── Card interior (shared by left and right slots) ─── */
function CardContent({ item }) {
  return (
    <>
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${item.accent}-500/50 to-transparent`} />
      {/* Inner ambient glow */}
      <div className={`pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full ${item.glow} blur-2xl`} />
      {/* Shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-10" />

      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className={`w-11 h-11 flex items-center justify-center rounded-xl border ${item.iconBg} text-xl shrink-0`}>
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-[10px] font-mono font-semibold tracking-widest uppercase mb-0.5 text-${item.accent}-400`}>
              {item.level}
            </p>
            <h3 className="text-white font-semibold text-[15px] leading-snug tracking-tight">
              {item.degree}
            </h3>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.05]" />

        {/* Institution & year row */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div>
            <p className="text-slate-300 text-sm font-medium">{item.institution}</p>
            <p className="text-slate-600 text-[11px] mt-0.5">{item.location}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="px-2.5 py-1 rounded-lg border border-white/8 bg-white/[0.03] text-slate-400 text-[11px] font-mono whitespace-nowrap">
              {item.year}
            </span>
            <span className={`flex items-center gap-1 text-[10px] font-medium ${item.statusText}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${item.statusColor} ${item.status === "Pursuing" ? "animate-pulse" : ""}`} />
              {item.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

        {/* Subject chips */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {item.highlights.map((h) => (
            <span key={h} className={`px-2 py-0.5 rounded-md border text-[10px] font-medium ${item.tagStyle}`}>
              {h}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Individual timeline entry ──────────────────────── */
function TimelineEntry({ item, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isLeft = index % 2 === 0; /* alternate sides on desktop */

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-[1fr_48px_1fr] gap-0 items-start">

      {/* ── COL 1: card when isLeft, empty when isRight ── */}
      <div className={`lg:col-span-1 max-lg:pl-12 pb-10 ${isLeft ? "lg:pr-10" : ""}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -40, scale: 0.96 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
            className={`relative group rounded-2xl border ${item.border} bg-slate-900/55 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/[0.13] transition-shadow duration-300`}
          >
            <CardContent item={item} />
          </motion.div>
        )}
      </div>


      {/* ── COL 2: dot + connector line ── */}
      <div className="hidden lg:flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className={`relative z-10 w-4 h-4 rounded-full ${item.dotBg} ring-4 ${item.dotRing} shadow-lg mt-7`}
        >
          {/* Pulse ring for pursuing */}
          {item.status === "Pursuing" && (
            <span className={`absolute inset-0 rounded-full ${item.dotBg} animate-ping opacity-40`} />
          )}
        </motion.div>

        {/* Connecting line (hidden for last) */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            style={{ originY: 0 }}
            className="w-px flex-1 mt-2 bg-gradient-to-b from-white/15 via-white/8 to-transparent min-h-[60px]"
          />
        )}
      </div>

      {/* ── COL 3: card when isRight, empty when isLeft ── */}
      <div className={`lg:col-span-1 max-lg:hidden pb-10 ${!isLeft ? "lg:pl-10" : ""}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 40, scale: 0.96 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
            className={`relative group rounded-2xl border ${item.border} bg-slate-900/55 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/[0.13] transition-shadow duration-300`}
          >
            <CardContent item={item} />
          </motion.div>
        )}
      </div>
    </div>
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

        {/* ── Mobile: plain vertical stack with left border ── */}
        {/* ── Desktop: alternating timeline ── */}
        <div className="relative">

          {/* Desktop centre spine line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-white/10 via-white/6 to-transparent -translate-x-1/2 pointer-events-none" />

          {/* Mobile left spine */}
          <div className="lg:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/6 to-transparent pointer-events-none" />

          {/* Entries */}
          <div className="space-y-0">
            {EDUCATION.map((item, i) => (
              <TimelineEntry
                key={item.short}
                item={item}
                index={i}
                isLast={i === EDUCATION.length - 1}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom summary strip ── */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        >
          {[
            { value: "4",       label: "Qualifications" },
            { value: "MCA",     label: "Current Degree" },
            { value: "2019–26", label: "Academic Span" },
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
