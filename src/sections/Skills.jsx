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

/* ─── Skill groups ───────────────────────────────────── */
const SKILL_GROUPS = [
  {
    group: "Programming Languages",
    icon: "💻",
    accent: "blue",
    border: "border-blue-500/20",
    glow: "bg-blue-600/6",
    dot: "bg-blue-400",
    tag: "text-blue-300",
    tagBg: "bg-blue-500/10 border-blue-500/25",
    skills: ["Java", "Core Java", "Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    icon: "🎨",
    accent: "cyan",
    border: "border-cyan-500/20",
    glow: "bg-cyan-600/6",
    dot: "bg-cyan-400",
    tag: "text-cyan-300",
    tagBg: "bg-cyan-500/10 border-cyan-500/25",
    skills: ["React", "Tailwind CSS", "Responsive Design"],
  },
  {
    group: "Backend",
    icon: "⚙️",
    accent: "violet",
    border: "border-violet-500/20",
    glow: "bg-violet-600/6",
    dot: "bg-violet-400",
    tag: "text-violet-300",
    tagBg: "bg-violet-500/10 border-violet-500/25",
    skills: ["Node.js", "Express.js", "REST APIs", "API Integration", "Postman"],
  },
  {
    group: "Database",
    icon: "🗄️",
    accent: "emerald",
    border: "border-emerald-500/20",
    glow: "bg-emerald-600/6",
    dot: "bg-emerald-400",
    tag: "text-emerald-300",
    tagBg: "bg-emerald-500/10 border-emerald-500/25",
    skills: ["MySQL"],
  },
  {
    group: "Developer Tools",
    icon: "🔧",
    accent: "amber",
    border: "border-amber-500/20",
    glow: "bg-amber-600/6",
    dot: "bg-amber-400",
    tag: "text-amber-300",
    tagBg: "bg-amber-500/10 border-amber-500/25",
    skills: ["Git", "GitHub", "VS Code", "Eclipse", "Figma", "Canva"],
  },
  {
    group: "AI & Productivity",
    icon: "🤖",
    accent: "rose",
    border: "border-rose-500/20",
    glow: "bg-rose-600/6",
    dot: "bg-rose-400",
    tag: "text-rose-300",
    tagBg: "bg-rose-500/10 border-rose-500/25",
    skills: ["ChatGPT", "Claude", "AI Agents", "Prompt Engineering", "OpenRouter API", "API Keys", "Antigravity IDE"],
  },
  {
    group: "Additional Knowledge",
    icon: "📚",
    accent: "indigo",
    border: "border-indigo-500/20",
    glow: "bg-indigo-600/6",
    dot: "bg-indigo-400",
    tag: "text-indigo-300",
    tagBg: "bg-indigo-500/10 border-indigo-500/25",
    skills: ["Cybersecurity Fundamentals", "Problem Solving", "Data Structures & Algorithms", "Software Development", "Team Collaboration"],
  },
];

/* ─── Group card ─────────────────────────────────────── */
function GroupCard({ group, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.97 }
      }
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + index * 0.08,
      }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
      className={`relative group flex flex-col h-full rounded-2xl border ${group.border} bg-slate-900/55 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/[0.13] transition-shadow duration-300`}
    >
      {/* Ambient glow inside card */}
      <div
        className={`pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full ${group.glow} blur-2xl z-0`}
      />

      {/* Shimmer on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-10" />

      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${group.accent}-500/50 to-transparent z-20`}
      />

      {/* Card content */}
      <div className="relative p-6 flex flex-col flex-grow z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-11 h-11 flex items-center justify-center rounded-xl border ${group.border} bg-white/[0.03] text-xl shadow-inner shrink-0`}
          >
            {group.icon}
          </div>
          <div>
            <h3 className="text-white font-semibold text-[17px] tracking-tight leading-tight">
              {group.group}
            </h3>
          </div>
        </div>

        {/* Skill Chips Container */}
        <div className="flex flex-wrap gap-2.5 mt-auto">
          {group.skills.map((skill, si) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 + si * 0.05 }}
              whileHover={{ 
                y: -3, 
                scale: 1.05, 
                boxShadow: "0 6px 20px rgba(59, 130, 246, 0.25)" 
              }}
              className={`px-3 py-1.5 rounded-lg border text-[12px] font-medium backdrop-blur-sm cursor-default transition-all duration-200 ${group.tagBg} ${group.tag} hover:border-blue-500/50 hover:bg-blue-500/15 hover:text-blue-100 hover:z-10`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-blue-600/5 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center mb-6"
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack.
            </span>
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500/60" />
            <div className="w-2 h-2 rounded-full bg-blue-500/60" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500/60" />
          </div>
        </motion.div>

        {/* ── Short description ── */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-center text-slate-500 text-base max-w-xl mx-auto mb-16"
        >
          Technologies and tools I work with — from full stack development and
          databases to AI and security.
        </motion.p>

        {/* ── Skills grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <GroupCard key={group.group} group={group} index={i} isInView={isInView} />
          ))}
        </div>

        {/* ── Bottom summary strip ── */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-12 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { value: "6", label: "Skill Categories" },
            { value: "18+", label: "Technologies" },
            { value: "100+", label: "DSA Problems" },
            { value: "10+", label: "Projects Built" },
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
