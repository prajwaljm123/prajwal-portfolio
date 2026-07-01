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
    group: "Languages",
    icon: "🧠",
    accent: "blue",
    border: "border-blue-500/20",
    glow: "bg-blue-600/6",
    dot: "bg-blue-400",
    tag: "text-blue-400",
    tagBg: "bg-blue-500/10 border-blue-500/25",
    skills: [
      { name: "Java",       level: 90, icon: "☕" },
      { name: "Python",     level: 80, icon: "🐍" },
      { name: "JavaScript", level: 85, icon: "⚡" },
      { name: "SQL",        level: 75, icon: "🗄️" },
    ],
  },
  {
    group: "Frontend",
    icon: "🎨",
    accent: "cyan",
    border: "border-cyan-500/20",
    glow: "bg-cyan-600/6",
    dot: "bg-cyan-400",
    tag: "text-cyan-400",
    tagBg: "bg-cyan-500/10 border-cyan-500/25",
    skills: [
      { name: "React",       level: 88, icon: "⚛️" },
      { name: "HTML",        level: 95, icon: "📄" },
      { name: "CSS",         level: 85, icon: "🎨" },
      { name: "Tailwind CSS",level: 82, icon: "💨" },
    ],
  },
  {
    group: "Backend",
    icon: "⚙️",
    accent: "violet",
    border: "border-violet-500/20",
    glow: "bg-violet-600/6",
    dot: "bg-violet-400",
    tag: "text-violet-400",
    tagBg: "bg-violet-500/10 border-violet-500/25",
    skills: [
      { name: "Node.js",    level: 82, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚂" },
    ],
  },
  {
    group: "Database",
    icon: "🗄️",
    accent: "emerald",
    border: "border-emerald-500/20",
    glow: "bg-emerald-600/6",
    dot: "bg-emerald-400",
    tag: "text-emerald-400",
    tagBg: "bg-emerald-500/10 border-emerald-500/25",
    skills: [
      { name: "MySQL", level: 78, icon: "🐬" },
    ],
  },
  {
    group: "Tools",
    icon: "🔧",
    accent: "amber",
    border: "border-amber-500/20",
    glow: "bg-amber-600/6",
    dot: "bg-amber-400",
    tag: "text-amber-400",
    tagBg: "bg-amber-500/10 border-amber-500/25",
    skills: [
      { name: "Git",     level: 88, icon: "🌿" },
      { name: "GitHub",  level: 85, icon: "🐙" },
      { name: "VS Code", level: 92, icon: "🖥️" },
      { name: "Postman", level: 75, icon: "📮" },
    ],
  },
  {
    group: "Other",
    icon: "🌐",
    accent: "rose",
    border: "border-rose-500/20",
    glow: "bg-rose-600/6",
    dot: "bg-rose-400",
    tag: "text-rose-400",
    tagBg: "bg-rose-500/10 border-rose-500/25",
    skills: [
      { name: "AI / ML",       level: 70, icon: "🤖" },
      { name: "Cybersecurity", level: 65, icon: "🛡️" },
      { name: "REST APIs",     level: 85, icon: "🔗" },
    ],
  },
];

/* ─── Progress bar colours by accent ────────────────── */
const BAR_COLOR = {
  blue:    "bg-blue-500",
  cyan:    "bg-cyan-500",
  violet:  "bg-violet-500",
  emerald: "bg-emerald-500",
  amber:   "bg-amber-500",
  rose:    "bg-rose-500",
};

/* ─── Individual skill row ───────────────────────────── */
function SkillRow({ skill, accent, isInView, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      className="space-y-1.5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-[13px]">{skill.icon}</span>
          <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-slate-600 text-[11px] font-mono">{skill.level}%</span>
      </div>
      {/* Track */}
      <div className="h-1.5 w-full rounded-full bg-white/[0.08] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: delay + 0.15 }}
          className={`h-full rounded-full ${BAR_COLOR[accent]}`}
        />
      </div>
    </motion.div>
  );
}

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
      className={`relative group rounded-2xl border ${group.border} bg-slate-900/55 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/[0.13] transition-shadow duration-300`}
    >
      {/* Ambient glow inside card */}
      <div
        className={`pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full ${group.glow} blur-2xl`}
      />

      {/* Shimmer on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${group.accent}-500/50 to-transparent`}
      />

      {/* Card content */}
      <div className="relative p-6 space-y-5">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-xl border ${group.border} bg-white/[0.03] text-lg`}
          >
            {group.icon}
          </div>
          <div>
            <p className={`text-xs font-mono font-medium tracking-widest uppercase ${group.tag}`}>
              {group.group}
            </p>
            <p className="text-slate-500 text-[10px]">
              {group.skills.length} {group.skills.length === 1 ? "skill" : "skills"}
            </p>
          </div>
          <span className={`ml-auto w-2 h-2 rounded-full ${group.dot} opacity-70`} />
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Skill rows */}
        <div className="space-y-4">
          {group.skills.map((skill, si) => (
            <SkillRow
              key={skill.name}
              skill={skill}
              accent={group.accent}
              isInView={isInView}
              delay={0.2 + index * 0.08 + si * 0.07}
            />
          ))}
        </div>

        {/* Skill chips (bottom) */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {group.skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-2 py-0.5 rounded-md border text-[10px] font-medium ${group.tagBg} ${group.tag}`}
            >
              {skill.name}
            </span>
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
