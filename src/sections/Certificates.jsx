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
    title: "Java Full Stack Development",
    organization: "Tap Academy, BTM Layout, Bengaluru",
    duration: "6 Months",
    description:
      "Successfully completed an intensive 6-month Java Full Stack Development program covering Core Java, Advanced Java, JDBC, Servlets, JSP, Spring Boot fundamentals, SQL, HTML, CSS, JavaScript and React. Developed multiple full-stack applications while gaining practical experience in frontend and backend development.",
    image: "/images/certificates/Java-FullStack.png",
    badge: "Featured Certificate",
    border: "border-blue-500/15",
    glow: "bg-blue-600/6",
    topLine: "via-blue-500/45",
  },
  {
    title: "AWS Academy Cloud Foundations",
    organization: "AWS Academy",
    year: "2024",
    description:
      "Successfully completed the AWS Academy Cloud Foundations course, gaining knowledge of cloud computing fundamentals, AWS core services, cloud architecture, security, pricing models and best practices for deploying scalable cloud solutions.",
    image: "/images/certificates/aws.png",
    badge: "Cloud Computing",
    border: "border-orange-500/15",
    glow: "bg-orange-600/6",
    topLine: "via-orange-500/45",
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
      className={`group relative flex flex-col h-full rounded-2xl border ${cert.border} bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/[0.13] transition-all duration-300`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${cert.topLine} to-transparent z-20`} />

      {/* Inner ambient glow */}
      <div className={`pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full ${cert.glow} blur-2xl z-0`} />

      {/* Shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent z-10" />

      {/* Image at the top */}
      <div className="relative w-full aspect-[4/3] sm:aspect-video overflow-hidden border-b border-white/[0.06] bg-slate-800/50 z-10">
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* Card body */}
      <div className="relative p-6 flex flex-col flex-grow gap-4 z-10">

        {/* Title */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold text-lg leading-snug tracking-tight">
            {cert.title}
          </h3>
        </div>

        {/* Badge */}
        <div className="flex">
          <span className="inline-flex px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.04] text-[11px] font-semibold tracking-wide text-blue-300">
            {cert.badge}
          </span>
        </div>

        {/* Org & Duration */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FiAward size={14} className="text-slate-500 shrink-0" />
            <p className="text-slate-400 text-sm">{cert.organization}</p>
          </div>
          <div className="flex items-center gap-2">
            <FiCheckCircle size={14} className="text-slate-500 shrink-0" />
            <p className="text-slate-400 text-sm">{cert.duration || cert.year}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-2 flex-grow">
          {cert.description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.05]" />

        {/* View Certificate Button (Disabled + Tooltip) */}
        <div className="pt-1 relative group/tooltip w-fit">
          <button
            disabled
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-slate-500 text-xs font-semibold tracking-wide cursor-not-allowed transition-colors"
          >
            <FiExternalLink size={13} />
            View Certificate
          </button>

          {/* Tooltip */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-3 py-1.5 bg-slate-800 text-slate-300 text-[10px] font-medium rounded-md opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-lg">
            Verification link will be added soon.
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-slate-800" />
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <CertCard
              key={cert.title}
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
            { value: "2", label: "Certifications" },
            { value: "2", label: "Platforms" },
            { value: "2024", label: "Active Years" },
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
