import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FiExternalLink, FiAward, FiCheckCircle } from "react-icons/fi";

/* ─── Reusable section label ─────────────────────────── */
function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      {children}
    </span>
  );
}

/* ─── Certificate data ───────────────────────────────── */
const CERTIFICATES = [
  {
    icon: "☕",
    name: "Java Full Stack Development",
    issuer: "Besant Technologies",
    year: "2024",
    credential: "BT-JAVA-2024-001",
    category: "Full Stack",
    categoryColor: "text-blue-400",
    categoryBg: "bg-blue-500/10 border-blue-500/20",
    border: "border-blue-500/15",
    glow: "bg-blue-600/6",
    topLine: "via-blue-500/45",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    verifyUrl: "#",
    skills: ["Java", "Spring Boot", "React", "MySQL"],
    highlight: "Core certification",
  },
  {
    icon: "🤖",
    name: "Machine Learning with Python",
    issuer: "Coursera — Stanford University",
    year: "2024",
    credential: "COURSERA-ML-2024",
    category: "AI / ML",
    categoryColor: "text-violet-400",
    categoryBg: "bg-violet-500/10 border-violet-500/20",
    border: "border-violet-500/15",
    glow: "bg-violet-600/6",
    topLine: "via-violet-500/45",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    verifyUrl: "#",
    skills: ["Python", "NumPy", "Scikit-learn", "TensorFlow"],
    highlight: "Top 10% of class",
  },
  {
    icon: "🛡️",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    credential: "CISCO-CYB-2024",
    category: "Cybersecurity",
    categoryColor: "text-emerald-400",
    categoryBg: "bg-emerald-500/10 border-emerald-500/20",
    border: "border-emerald-500/15",
    glow: "bg-emerald-600/6",
    topLine: "via-emerald-500/45",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    verifyUrl: "#",
    skills: ["Network Security", "Threats & Attacks", "Firewalls", "Encryption"],
    highlight: "Industry recognised",
  },
  {
    icon: "⚛️",
    name: "React — The Complete Guide",
    issuer: "Udemy",
    year: "2023",
    credential: "UDEMY-REACT-2023",
    category: "Frontend",
    categoryColor: "text-cyan-400",
    categoryBg: "bg-cyan-500/10 border-cyan-500/20",
    border: "border-cyan-500/15",
    glow: "bg-cyan-600/6",
    topLine: "via-cyan-500/45",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    verifyUrl: "#",
    skills: ["React 18", "Hooks", "Redux", "React Router"],
    highlight: "Bestseller course",
  },
];

/* ─── Individual certificate card ───────────────────── */
function CertCard({ cert, index, isInView }) {
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
      className={`group relative rounded-2xl border ${cert.border} bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/[0.13] transition-shadow duration-300`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${cert.topLine} to-transparent`} />

      {/* Inner ambient glow */}
      <div className={`pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full ${cert.glow} blur-2xl`} />

      {/* Shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-10" />

      <div className="relative p-6 flex flex-col gap-5">

        {/* ── Header row ── */}
        <div className="flex items-start justify-between gap-3">
          {/* Icon */}
          <div className={`w-12 h-12 flex items-center justify-center rounded-xl border ${cert.iconBg} text-2xl shrink-0 shadow-inner`}>
            {cert.icon}
          </div>

          {/* Category + year */}
          <div className="flex flex-col items-end gap-1.5">
            <span className={`px-2.5 py-0.5 rounded-md border text-[10px] font-semibold tracking-wide ${cert.categoryBg} ${cert.categoryColor}`}>
              {cert.category}
            </span>
            <span className="text-slate-600 text-[11px] font-mono">{cert.year}</span>
          </div>
        </div>

        {/* ── Certificate name ── */}
        <div className="space-y-1">
          <h3 className="text-white font-semibold text-[16px] leading-snug tracking-tight">
            {cert.name}
          </h3>
          {/* Issuer row */}
          <div className="flex items-center gap-1.5">
            <FiAward size={12} className="text-slate-600 shrink-0" />
            <p className="text-slate-500 text-sm">{cert.issuer}</p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/[0.05]" />

        {/* ── Skill chips ── */}
        <div className="flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded-md border border-white/8 bg-white/[0.03] text-slate-400 text-[10px] font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* ── Credential ID ── */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <FiCheckCircle size={12} className="text-green-500/70 shrink-0" />
          <span className="text-slate-600 text-[10px] font-mono truncate">
            ID: {cert.credential}
          </span>
          <span className="ml-auto shrink-0 text-[9px] font-medium text-green-500/70 tracking-wide uppercase">
            Verified
          </span>
        </div>

        {/* ── Highlight badge + Verify button ── */}
        <div className="flex items-center justify-between gap-3 pt-0.5">
          <span className="text-slate-600 text-[11px] italic">
            ✦ {cert.highlight}
          </span>

          <motion.a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className={`group/btn relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border ${cert.categoryBg} ${cert.categoryColor} text-[11px] font-semibold tracking-wide overflow-hidden transition-colors duration-200 shrink-0`}
          >
            {/* Shine on hover */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <FiExternalLink size={11} />
            Verify
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function Certificates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-cyan-600/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center mb-6"
        >
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Certifications.
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
          className="text-center text-slate-500 text-base max-w-xl mx-auto mb-16"
        >
          Courses and certifications that strengthened my technical skills.
        </motion.p>

        {/* ── Cards grid — 2×2 desktop, 1 col mobile ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <CertCard
              key={cert.name}
              cert={cert}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Bottom summary strip ── */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
        >
          {[
            { value: "4", label: "Certifications" },
            { value: "3+", label: "Platforms" },
            { value: "2023–24", label: "Active Years" },
            { value: "100%", label: "Verified" },
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
