import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
  FiUser,
  FiMessageSquare,
  FiFileText,
} from "react-icons/fi";

/* ─── Section label ──────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-slate-400 text-xs font-medium tracking-widest uppercase backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      {children}
    </span>
  );
}

/* ─── Contact info items ─────────────────────────────── */
const CONTACT_INFO = [
  {
    icon: FiMail,
    label: "Email",
    value: "prajwalmunnolli@gmail.com",
    href: "mailto:prajwalmunnolli@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 00000 00000",
    href: "tel:+910000000000",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Karnataka, India",
    href: null,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
];

/* ─── Social links ───────────────────────────────────── */
const SOCIALS = [
  {
    icon: FiGithub,
    href: "https://github.com/prajwaljm123",
    label: "GitHub",
    color: "hover:border-white/30 hover:text-white",
  },
  {
    icon: FiLinkedin,
    href: "https://linkedin.com/in/prajwalmunnolli",
    label: "LinkedIn",
    color: "hover:border-blue-500/50 hover:text-blue-400",
  },
  {
    icon: FiMail,
    href: "mailto:prajwalmunnolli@gmail.com",
    label: "Email",
    color: "hover:border-cyan-500/50 hover:text-cyan-400",
  },
];

/* ─── Form input wrapper ─────────────────────────────── */
function FormField({ label, icon: Icon, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-1.5 text-slate-400 text-xs font-medium tracking-wide uppercase">
        <Icon size={11} className="text-slate-600" />
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-rose-400 text-[11px] mt-0.5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const INPUT_BASE =
  "w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-blue-500/15 transition-all duration-200 backdrop-blur-sm";

/* ══════════════════════════════════════════════════════ */
export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  /* ── Form state ── */
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); /* idle | sending | success */

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  /* ── Validation ── */
  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 20)
      e.message = "Message must be at least 20 characters.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  /* ── Submit (mocked) ── */
  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("sending");
    /* Simulate async send */
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
    >
      {/* ── Ambient background ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-cyan-600/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center mb-6"
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Touch.
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
          {...fadeUp(0.08)}
          className="text-center text-slate-500 text-base max-w-xl mx-auto mb-16"
        >
          Have an opportunity, project or just want to say hi? My inbox is always open.
        </motion.p>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">

          {/* ════════════ LEFT — Info ════════════ */}
          <div className="flex flex-col gap-8">

            {/* Intro blurb */}
            <motion.div {...fadeUp(0.12)} className="space-y-3">
              <h3 className="text-white text-xl font-semibold tracking-tight">
                Let's build something together.
              </h3>
              <p className="text-slate-400 text-[15px] leading-relaxed">
                I'm currently open to full-time roles, freelance projects and
                internship opportunities. Whether you have a question or just
                want to connect — feel free to reach out.
              </p>
            </motion.div>

            {/* Contact info cards */}
            <div className="flex flex-col gap-3">
              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.18 + i * 0.08 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] backdrop-blur-sm transition-all duration-200"
                    >
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg border ${item.bg} shrink-0`}>
                        <item.icon size={16} className={item.color} />
                      </div>
                      <div>
                        <p className="text-slate-500 text-[11px] font-medium tracking-widest uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm">
                      <div className={`w-10 h-10 flex items-center justify-center rounded-lg border ${item.bg} shrink-0`}>
                        <item.icon size={16} className={item.color} />
                      </div>
                      <div>
                        <p className="text-slate-500 text-[11px] font-medium tracking-widest uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-slate-200 text-sm font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div {...fadeUp(0.42)} className="flex flex-col gap-3">
              <p className="text-slate-600 text-xs tracking-widest uppercase font-medium">
                Find me on
              </p>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 ${color} transition-all duration-200`}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              {...fadeUp(0.5)}
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-green-500/20 bg-green-500/[0.06] backdrop-blur-sm w-fit"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <p className="text-green-400 text-sm font-medium">
                Available for opportunities
              </p>
            </motion.div>
          </div>

          {/* ════════════ RIGHT — Form ════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 36, scale: 0.97 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative rounded-2xl border border-white/[0.08] bg-slate-900/55 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            {/* Inner ambient glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-600/8 blur-3xl" />

            <div className="relative p-6 sm:p-8">

              {/* Form header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 flex items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10">
                  <FiMessageSquare size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Send a Message</p>
                  <p className="text-slate-600 text-[11px]">I'll reply within 24 hours</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-slate-600 text-[10px] font-mono">online</span>
                </div>
              </div>

              {/* ── Success state ── */}
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center gap-4 py-14 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="w-16 h-16 flex items-center justify-center rounded-2xl border border-green-500/25 bg-green-500/10"
                    >
                      <FiCheckCircle size={30} className="text-green-400" />
                    </motion.div>
                    <div>
                      <p className="text-white text-lg font-semibold mb-1">Message Sent!</p>
                      <p className="text-slate-500 text-sm">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Name" icon={FiUser} error={errors.name}>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Prajwal Munnolli"
                          className={`${INPUT_BASE} ${errors.name ? "border-rose-500/50 focus:border-rose-500/60 focus:ring-rose-500/15" : ""}`}
                        />
                      </FormField>

                      <FormField label="Email" icon={FiMail} error={errors.email}>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`${INPUT_BASE} ${errors.email ? "border-rose-500/50 focus:border-rose-500/60 focus:ring-rose-500/15" : ""}`}
                        />
                      </FormField>
                    </div>

                    {/* Subject */}
                    <FormField label="Subject" icon={FiFileText} error={errors.subject}>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Collaboration / Opportunity / General Inquiry"
                        className={`${INPUT_BASE} ${errors.subject ? "border-rose-500/50 focus:border-rose-500/60 focus:ring-rose-500/15" : ""}`}
                      />
                    </FormField>

                    {/* Message */}
                    <FormField label="Message" icon={FiMessageSquare} error={errors.message}>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Hi Prajwal, I'd like to discuss..."
                        className={`${INPUT_BASE} resize-none leading-relaxed ${errors.message ? "border-rose-500/50 focus:border-rose-500/60 focus:ring-rose-500/15" : ""}`}
                      />
                      {/* Character count */}
                      <span className="self-end text-slate-700 text-[10px] font-mono -mt-1">
                        {form.message.length} / 1000
                      </span>
                    </FormField>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                      whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                      className="group relative w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-semibold text-sm tracking-wide overflow-hidden transition-colors duration-200 shadow-xl shadow-blue-700/25 disabled:cursor-not-allowed mt-1"
                    >
                      {/* Shine sweep */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      <AnimatePresence mode="wait">
                        {status === "sending" ? (
                          <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            {/* Spinner */}
                            <svg
                              className="animate-spin h-4 w-4 text-white/80"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <FiSend size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            Send Message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>

                    {/* Footer note */}
                    <p className="text-center text-slate-700 text-[11px]">
                      Your message is sent directly to my inbox. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-24 border-t border-white/[0.05] pt-8 text-center"
      >
        <p className="text-slate-700 text-sm">
          Designed &amp; built by{" "}
          <span className="text-slate-500 font-medium">Prajwal Munnolli</span>
          {" "}· {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
}
