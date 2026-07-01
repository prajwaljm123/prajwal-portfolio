import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

/* ─── Reusable section label ─────────────────────────── */
function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      {children}
    </span>
  );
}

/* ─── Project data ───────────────────────────────────── */
const PROJECTS = [
  {
    title: "TaskFlow Pro",
    description:
      "Modern task management application with real-time updates, priority queues, and team collaboration features built for productivity.",
    tags: ["React", "FastAPI", "SQLite"],
    demo: "#",
    github: "#",
    gradient: "from-blue-600/30 via-blue-900/20 to-slate-900/80",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    icon: "📋",
    accentColor: "text-blue-400",
    tagStyle: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    glowColor: "shadow-blue-500/10",
    topLine: "via-blue-500/50",
    status: "Live",
    statusColor: "bg-green-400",
    year: "2024",
  },
  {
    title: "Fleet Management System",
    description:
      "Comprehensive vehicle and driver management platform with real-time tracking, maintenance scheduling and analytics dashboard.",
    tags: ["React", "Node.js", "MySQL"],
    demo: "#",
    github: "#",
    gradient: "from-cyan-600/30 via-cyan-900/20 to-slate-900/80",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    icon: "🚛",
    accentColor: "text-cyan-400",
    tagStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    glowColor: "shadow-cyan-500/10",
    topLine: "via-cyan-500/50",
    status: "Live",
    statusColor: "bg-green-400",
    year: "2024",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Intelligent resume analysis tool powered by AI that extracts skills, scores candidates and provides actionable improvement suggestions.",
    tags: ["React", "Python", "AI"],
    demo: "#",
    github: "#",
    gradient: "from-violet-600/30 via-violet-900/20 to-slate-900/80",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    icon: "🤖",
    accentColor: "text-violet-400",
    tagStyle: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    glowColor: "shadow-violet-500/10",
    topLine: "via-violet-500/50",
    status: "Live",
    statusColor: "bg-green-400",
    year: "2024",
  },
  {
    title: "Coming Soon",
    description:
      "The next project is currently in development. Building something exciting with modern technologies. Stay tuned.",
    tags: ["Next Project"],
    demo: null,
    github: null,
    gradient: "from-slate-800/60 via-slate-900/40 to-slate-950/80",
    iconBg: "bg-white/5 border-white/10",
    icon: "🔮",
    accentColor: "text-slate-400",
    tagStyle: "bg-white/5 border-white/10 text-slate-400",
    glowColor: "shadow-white/5",
    topLine: "via-white/10",
    status: "Soon",
    statusColor: "bg-amber-400",
    year: "2025",
  },
];

/* ─── Preview illustration inside the image area ─────── */
function ProjectPreview({ project }) {
  const isComingSoon = project.title === "Coming Soon";

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial glow centre */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-40 h-40 rounded-full bg-gradient-radial blur-3xl opacity-30 bg-white/5`} />
      </div>

      {isComingSoon ? (
        /* Coming Soon state */
        <div className="relative flex flex-col items-center gap-3 select-none">
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-5xl"
          >
            🔮
          </motion.div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-[11px] font-medium tracking-widest uppercase">
              In Development
            </span>
          </div>
        </div>
      ) : (
        /* Mockup UI for real projects */
        <div className="relative w-[85%] select-none">
          {/* Mini browser window */}
          <div className="rounded-lg border border-white/10 bg-slate-950/70 backdrop-blur-sm overflow-hidden shadow-2xl">
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/80 border-b border-white/[0.06]">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-3 h-4 rounded bg-white/5 flex items-center px-2">
                <span className="text-slate-600 text-[8px] font-mono">
                  localhost:3000
                </span>
              </div>
            </div>
            {/* Browser content placeholder */}
            <div className="p-3 space-y-2">
              <div className="flex gap-2">
                <div className="w-1/3 h-16 rounded bg-white/[0.04] border border-white/[0.05]" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2.5 w-3/4 rounded bg-white/[0.06]" />
                  <div className="h-2 w-1/2 rounded bg-white/[0.04]" />
                  <div className="h-2 w-2/3 rounded bg-white/[0.04]" />
                  <div className="mt-2 h-5 w-20 rounded bg-blue-500/20 border border-blue-500/20" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-8 rounded bg-white/[0.03] border border-white/[0.05]" />
                ))}
              </div>
            </div>
          </div>
          {/* Project icon floating */}
          <div
            className={`absolute -top-3 -right-3 w-9 h-9 rounded-xl border ${project.iconBg} flex items-center justify-center text-lg shadow-xl backdrop-blur-sm`}
          >
            {project.icon}
          </div>
        </div>
      )}

      {/* Screenshot label */}
      <div className="absolute bottom-3 left-3">
        <span className="text-[10px] text-slate-600 font-mono tracking-wider">
          Project Screenshot
        </span>
      </div>

      {/* Year badge */}
      <div className="absolute top-3 right-3">
        <span className="text-[10px] text-slate-600 font-mono">{project.year}</span>
      </div>
    </div>
  );
}

/* ─── Single project card ────────────────────────────── */
function ProjectCard({ project, index, isInView }) {
  const isComingSoon = project.title === "Coming Soon";

  return (
    <motion.article
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 36, scale: 0.97 }
      }
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`group relative rounded-2xl border border-white/[0.08] bg-slate-900/50 backdrop-blur-xl overflow-hidden
        shadow-xl ${project.glowColor} hover:shadow-2xl hover:border-white/[0.14]
        transition-shadow duration-300`}
    >
      {/* Top accent gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${project.topLine} to-transparent`}
      />

      {/* Shimmer sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-10" />

      {/* ── Image area ── */}
      <div className="overflow-hidden border-b border-white/[0.06]">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ProjectPreview project={project} />
        </motion.div>
      </div>

      {/* ── Card body ── */}
      <div className="p-5 flex flex-col gap-4">

        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-white font-semibold text-lg leading-snug tracking-tight">
              {project.title}
            </h3>
          </div>
          {/* Status badge */}
          <span className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-medium text-slate-400">
            <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium ${project.tagStyle}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Action buttons ── */}
        {!isComingSoon ? (
          <div className="flex items-center gap-2 pt-1">
            {/* Live Demo */}
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn relative flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide overflow-hidden transition-colors duration-200 shadow-lg shadow-blue-700/20"
            >
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <FiExternalLink size={13} />
              Live Demo
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-semibold tracking-wide transition-all duration-200"
            >
              <FiGithub size={13} />
              GitHub
            </motion.a>
          </div>
        ) : (
          /* Coming Soon placeholder button */
          <div className="flex items-center gap-2 pt-1">
            <div className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] text-amber-400/60 text-xs font-semibold tracking-wide cursor-not-allowed">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 animate-pulse" />
              In Development
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

/* ══════════════════════════════════════════════════════ */
export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full bg-cyan-600/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center mb-6"
        >
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects.
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
          className="text-center text-slate-500 text-base max-w-2xl mx-auto mb-16"
        >
          A collection of projects showcasing my skills in Full Stack
          Development, AI/ML and Software Engineering.
        </motion.p>

        {/* ── Projects 2×2 grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="https://github.com/prajwaljm123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] text-slate-300 hover:text-white text-sm font-medium backdrop-blur-sm transition-all duration-200"
          >
            <FiGithub size={16} />
            View all projects on GitHub
            <FiArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
