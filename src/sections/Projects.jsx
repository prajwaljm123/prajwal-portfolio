import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { FiExternalLink, FiGithub, FiArrowRight, FiX, FiCode, FiZap, FiBookOpen, FiAlertCircle, FiUser } from "react-icons/fi";

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
    title: "AI Resume Analyzer & ATS Optimizer",
    description:
      "An AI-powered web application that analyzes resumes against job descriptions, extracts key information, identifies missing skills, and provides intelligent ATS-focused recommendations to improve resume quality.",
    problem:
      "Many job seekers struggle to optimize their resumes for Applicant Tracking Systems (ATS). This application helps users upload their resume, compare it with a target job description, identify missing skills, analyze resume quality, and receive AI-powered suggestions for improvement.",
    features: [
      "Resume PDF Upload",
      "Resume Text Extraction",
      "Personal Information Parsing",
      "Resume Section Detection",
      "Skill Extraction",
      "Job Description Analysis",
      "Resume vs Job Description Comparison",
      "Missing Skill Detection",
      "AI-Powered Resume Review",
      "ATS Optimization Suggestions",
      "Modular Resume Parsing Architecture",
    ],
    techStack: {
      Frontend: ["React", "Tailwind CSS", "Axios"],
      Backend: ["Python", "FastAPI"],
      AI: ["OpenRouter API", "Large Language Models"],
      "Document Processing": ["PDF Parsing", "Text Extraction"],
      Tools: ["Git", "GitHub", "VS Code"],
    },
    challenges: [
      "Parsing resumes with different formats",
      "Extracting structured information accurately",
      "Comparing resume skills with job descriptions",
      "Prompt engineering for AI analysis",
      "Building a modular backend architecture",
    ],
    learnings: [
      "FastAPI Backend Development",
      "REST API Design",
      "React Integration",
      "Prompt Engineering",
      "PDF Processing",
      "AI Workflow Design",
      "Modular Software Architecture",
    ],
    tags: ["React", "Tailwind CSS", "Python", "FastAPI", "OpenRouter API", "LLMs", "PDF Parsing"],
    demo: null,
    github: "https://github.com/prajwaljm123/ai-resume-analyzer",
    viewDetails: true,
    image: "/images/projects/ai-resume-analyzer.png",
    gradient: "from-violet-600/30 via-violet-900/20 to-slate-900/80",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    icon: "🤖",
    accentColor: "text-violet-400",
    tagStyle: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    glowColor: "shadow-violet-500/10",
    topLine: "via-violet-500/50",
    status: "In Progress",
    statusColor: "bg-amber-400",
    year: "2025",
  },
  {
    title: "Prayaan Vihar – Fleet Management System",
    description:
      "A full-stack Fleet Management System developed during my internship at SherpaVector Pvt. Ltd. to streamline vehicle operations, trip management, driver management and administrative workflows.",
    problem:
      "Fleet management involves tracking vehicles, drivers, trips and operational records efficiently. This project provides an integrated platform for administrators and drivers to manage daily transportation operations through a centralized dashboard.",
    features: [
      "Secure Authentication",
      "Admin Dashboard",
      "Driver Dashboard",
      "Vehicle Management",
      "Trip Management",
      "Driver Assignment",
      "Earnings Management",
      "Profile Management",
      "Alerts & Notifications",
      "REST API Integration",
      "MySQL Database Integration"
    ],
    techStack: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MySQL"],
      Tools: ["Git", "VS Code", "Postman"]
    },
    contribution: [
      "Developed responsive React user interfaces.",
      "Built RESTful APIs using Node.js and Express.",
      "Designed and integrated MySQL database.",
      "Implemented multiple Admin and Driver modules.",
      "Worked on frontend-backend integration."
    ],
    challenges: [
      "Designing scalable backend APIs.",
      "Managing relational database structure.",
      "Integrating multiple modules efficiently.",
      "Building responsive dashboards."
    ],
    learnings: [
      "Full Stack Development",
      "Database Design",
      "REST API Development",
      "Backend Architecture",
      "Team Collaboration"
    ],
    tags: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    demo: null,
    github: null,
    viewDetails: true,
    image: "/images/projects/fleet-management.png",
    gradient: "from-blue-600/30 via-blue-900/20 to-slate-900/80",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    icon: "🚛",
    accentColor: "text-blue-400",
    tagStyle: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    glowColor: "shadow-blue-500/10",
    topLine: "via-blue-500/50",
    status: "Internship",
    statusColor: "bg-blue-400",
    year: "2024",
  },
  {
    title: "MealMingle – AI Recipe Generator",
    description:
      "An AI-powered recipe generation application that creates personalized recipes using the ingredients provided by the user.",
    problem:
      "People often have limited ingredients available at home and struggle to decide what to cook. MealMingle generates creative recipes using only the available ingredients, reducing food waste and simplifying meal planning.",
    features: [
      "Ingredient Based Recipe Generation",
      "AI Powered Recipe Suggestions",
      "React Frontend",
      "Flask Backend",
      "Interactive Chatbot",
      "Clean User Interface",
      "Responsive Design",
      "Fast API Communication"
    ],
    techStack: {
      Frontend: ["React"],
      Backend: ["Python", "Flask"],
      AI: ["Large Language Model API"],
      Tools: ["Git", "VS Code"]
    },
    contribution: [
      "Developed the complete React frontend.",
      "Built Flask backend APIs.",
      "Integrated AI recipe generation.",
      "Implemented chatbot functionality.",
      "Improved overall user experience."
    ],
    challenges: [
      "Prompt engineering.",
      "Backend API integration.",
      "Managing AI responses.",
      "Structuring recipe outputs."
    ],
    learnings: [
      "AI Integration",
      "Flask Development",
      "React State Management",
      "REST APIs"
    ],
    tags: ["React", "Python", "Flask", "AI"],
    demo: null,
    github: "https://github.com/prajwaljm123/MealMingle",
    viewDetails: true,
    image: "/images/projects/mealmingle.png",
    gradient: "from-cyan-600/30 via-cyan-900/20 to-slate-900/80",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    icon: "🍳",
    accentColor: "text-cyan-400",
    tagStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    glowColor: "shadow-cyan-500/10",
    topLine: "via-cyan-500/50",
    status: "Completed",
    statusColor: "bg-green-400",
    year: "2024",
  },
  {
    title: "Book Recommendation System",
    description:
      "An AI-powered book recommendation platform that recommends books based on user interests and reading preferences.",
    problem:
      "Readers often spend a lot of time searching for books that match their interests. This application provides personalized recommendations using AI to improve the book discovery experience.",
    features: [
      "AI Powered Book Recommendations",
      "Interest Based Search",
      "Personalized Suggestions",
      "React Frontend",
      "Flask Backend",
      "Clean Responsive Interface",
      "Fast Recommendation Generation"
    ],
    techStack: {
      Frontend: ["React"],
      Backend: ["Python", "Flask"],
      AI: ["Large Language Model API"],
      Tools: ["Git", "VS Code"]
    },
    contribution: [
      "Developed the React frontend.",
      "Built Flask backend.",
      "Integrated AI recommendation engine.",
      "Designed user-friendly interface."
    ],
    challenges: [
      "AI prompt engineering.",
      "Parsing recommendation responses.",
      "Frontend-backend integration."
    ],
    learnings: [
      "Recommendation Systems",
      "AI APIs",
      "Flask",
      "React"
    ],
    tags: ["React", "Python", "Flask", "AI"],
    demo: null,
    github: "https://github.com/prajwaljm123/BookRecomendationSystem",
    viewDetails: true,
    image: "/images/projects/book-recommendation.png",
    gradient: "from-slate-800/60 via-slate-900/40 to-slate-950/80",
    iconBg: "bg-white/5 border-white/10",
    icon: "📚",
    accentColor: "text-slate-400",
    tagStyle: "bg-white/5 border-white/10 text-slate-400",
    glowColor: "shadow-white/5",
    topLine: "via-white/10",
    status: "Completed",
    statusColor: "bg-green-400",
    year: "2025",
  },
];

/* ─── Preview illustration inside the image area ─────── */
function ProjectPreview({ project, isFeatured }) {
  const isComingSoon = project.title === "Coming Soon";

  /* ── Real screenshot ── */
  if (project.image && !isComingSoon) {
    return (
      <div className={`relative w-full ${isFeatured ? "aspect-video md:aspect-auto md:h-full md:min-h-[400px]" : "aspect-video"} overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[10px] text-slate-300/70 font-mono bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
            {project.year}
          </span>
        </div>
        {/* Floating icon */}
        <div
          className={`absolute -bottom-3 -right-3 w-9 h-9 rounded-xl border ${project.iconBg} flex items-center justify-center text-lg shadow-xl backdrop-blur-sm`}
        >
          {project.icon}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${isFeatured ? "aspect-video md:aspect-auto md:h-full md:min-h-[400px]" : "aspect-video"} overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
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

/* ─── Project Details Modal ────────────────────── */
function ProjectDetailsModal({ project, onClose }) {
  /* ESC to close */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    /* Lock body scroll */
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const ACCENT = project.accentColor ?? "text-blue-400";
  const TAG    = project.tagStyle    ?? "bg-blue-500/10 border-blue-500/20 text-blue-300";

  return (
    /* ── Backdrop ── */
    <motion.div
      key="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
      style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(2,6,23,0.75)" }}
      onMouseDown={onClose}          /* click outside closes */
    >
      {/* ── Modal panel ── */}
      <motion.div
        key="modal-panel"
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onMouseDown={(e) => e.stopPropagation()} /* prevent backdrop close */
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
                   rounded-2xl border border-white/[0.09]
                   bg-slate-900/80 backdrop-blur-2xl
                   shadow-2xl shadow-black/60"
        style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(59,130,246,.25) transparent" }}
      >
        {/* shimmer top line */}
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${project.topLine ?? "via-blue-500/50"} to-transparent`} />

        {/* ── Header: screenshot ── */}
        <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
              <span className="text-6xl">{project.icon}</span>
            </div>
          )}
          {/* Dark gradient over image bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/90 to-transparent" />
          {/* Status badge */}
          <div className="absolute bottom-4 left-5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-[10px] font-medium text-slate-300">
              <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
              {project.status}
            </span>
          </div>
        </div>

        {/* ── Close button ── */}
        <motion.button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 right-4 z-10 flex items-center justify-center
                     w-8 h-8 rounded-full border border-white/10
                     bg-black/50 backdrop-blur-sm text-slate-400
                     hover:text-white hover:border-white/25 transition-colors duration-200"
        >
          <FiX size={15} />
        </motion.button>

        {/* ── Body ── */}
        <div className="p-6 sm:p-8 space-y-8">

          {/* Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
              {project.title}
            </h2>
            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium ${TAG}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <Section icon={<FiBookOpen />} title="Overview" accent={ACCENT}>
            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
            {project.problem && (
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">{project.problem}</p>
            )}
          </Section>

          {/* Features */}
          {project.features?.length > 0 && (
            <Section icon={<FiZap />} title="Key Features" accent={ACCENT}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className={`mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full ${project.statusColor ?? "bg-blue-400"}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <Section icon={<FiCode />} title="Tech Stack" accent={ACCENT}>
              <div className="space-y-3">
                {Object.entries(project.techStack).map(([category, items]) => (
                  <div key={category} className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 w-28 shrink-0">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((item) => (
                        <span key={item} className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium ${TAG}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* My Contribution */}
          {project.contribution?.length > 0 && (
            <Section icon={<FiUser />} title="My Contribution" accent={ACCENT}>
              <ul className="space-y-2">
                {project.contribution.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="mt-1 shrink-0 text-slate-600">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Challenges */}
          {project.challenges?.length > 0 && (
            <Section icon={<FiAlertCircle />} title="Challenges" accent={ACCENT}>
              <ul className="space-y-2">
                {project.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="mt-1 shrink-0 text-slate-600">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Learnings */}
          {project.learnings?.length > 0 && (
            <Section icon={<FiBookOpen />} title="Learnings" accent={ACCENT}>
              <div className="flex flex-wrap gap-2">
                {project.learnings.map((l) => (
                  <span key={l} className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 text-xs font-medium">
                    {l}
                  </span>
                ))}
              </div>
            </Section>
          )}

          {/* ── Footer buttons ── */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 border-t border-white/[0.07]">
            {project.github ? (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group/btn relative flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                           bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold
                           overflow-hidden transition-colors duration-200 shadow-lg shadow-blue-700/20"
              >
                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <FiGithub size={15} />
                GitHub Repository
              </motion.a>
            ) : !project.demo ? (
              <div className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-slate-500 text-sm font-semibold cursor-not-allowed">
                Internship Project
              </div>
            ) : null}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                           border border-white/12 bg-white/[0.04] hover:bg-white/[0.08]
                           text-slate-300 hover:text-white text-sm font-semibold
                           transition-all duration-200"
              >
                <FiExternalLink size={15} />
                Live Demo
              </motion.a>
            )}
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                         border border-white/10 bg-white/[0.04] hover:bg-white/[0.07]
                         text-slate-400 hover:text-white text-sm font-medium transition-all duration-200"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Reusable modal section block ───────────────────── */
function Section({ icon, title, accent, children }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className={`text-base ${accent}`}>{icon}</span>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">{title}</h3>
      </div>
      <div className="pl-6 border-l border-white/[0.07]">{children}</div>
    </div>
  );
}

/* ─── Single project card ────────────────────────────── */
function ProjectCard({ project, index, isInView, onViewDetails, isFeatured }) {
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
        delay: isFeatured ? 0.1 : 0.1 + index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`group relative rounded-2xl border ${isFeatured ? "border-white/[0.12] bg-slate-900/60" : "border-white/[0.08] bg-slate-900/50"} backdrop-blur-xl overflow-hidden
        shadow-xl ${project.glowColor} hover:shadow-2xl hover:border-white/[0.18]
        transition-shadow duration-300 ${isFeatured ? "flex flex-col md:flex-row md:items-stretch min-h-[500px]" : "flex flex-col"}`}
    >
      {/* Top accent gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${project.topLine} to-transparent`}
      />

      {/* Shimmer sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-10" />

      {/* ── Image area ── */}
      <div className={`overflow-hidden border-b border-white/[0.06] ${isFeatured ? "md:border-b-0 md:border-r md:w-3/5" : ""}`}>
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full"
        >
          <ProjectPreview project={project} isFeatured={isFeatured} />
        </motion.div>
      </div>

      {/* ── Card body ── */}
      <div className={`p-5 flex flex-col gap-4 ${isFeatured ? "md:w-2/5 md:justify-center md:p-8" : ""}`}>

        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className={`text-white font-semibold leading-snug tracking-tight ${isFeatured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
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
            {project.demo ? (
              /* Live Demo (primary) */
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
            ) : project.viewDetails ? (
              /* GitHub Repository (primary) — no Live Demo */
              project.github ? (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn relative flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide overflow-hidden transition-colors duration-200 shadow-lg shadow-blue-700/20"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <FiGithub size={13} />
                  GitHub Repository
                </motion.a>
              ) : (
                <div className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-slate-500 text-xs font-semibold tracking-wide cursor-not-allowed">
                  Internship Project
                </div>
              )
            ) : null}

            {project.demo && (
              /* GitHub (secondary) — shown alongside Live Demo */
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
            )}

            {project.viewDetails && (
              /* View Details (secondary) */
              <motion.button
                type="button"
                onClick={() => onViewDetails(project)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-semibold tracking-wide transition-all duration-200"
              >
                <FiArrowRight size={13} />
                View Details
              </motion.button>
            )}
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
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

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

        {/* ── Projects Layout ── */}
        <div className="flex flex-col gap-6">
          {/* Row 1: Featured Project */}
          {PROJECTS.length > 0 && (
            <ProjectCard
              key={PROJECTS[0].title}
              project={PROJECTS[0]}
              index={0}
              isInView={isInView}
              onViewDetails={setSelectedProject}
              isFeatured={true}
            />
          )}
          
          {/* Row 2: Two Equal Cards */}
          {PROJECTS.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.slice(1, 3).map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={i + 1}
                  isInView={isInView}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          )}

          {/* Row 3: Centered Card */}
          {PROJECTS.length > 3 && (
            <div className="flex justify-center">
              <div className="w-full md:w-[70%]">
                <ProjectCard
                  key={PROJECTS[3].title}
                  project={PROJECTS[3]}
                  index={3}
                  isInView={isInView}
                  onViewDetails={setSelectedProject}
                />
              </div>
            </div>
          )}
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

      {/* ── Project Details Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
