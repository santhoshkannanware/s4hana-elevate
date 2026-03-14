import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRegion } from "@/contexts/RegionContext";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Rocket, Heart, Lightbulb, Users, Globe, ChevronRight } from "lucide-react";

/* ─── Animated Section Wrapper ─── */
function RevealSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Parallax Image Block ─── */
function ParallaxImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} className="w-full h-[120%] object-cover" style={{ y }} />
    </div>
  );
}

/* ─── Counter Component ─── */
function AnimatedCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <motion.span
        className="block text-[clamp(2.5rem,5vw,4rem)] font-bold text-gradient-gold leading-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        {isInView ? value : 0}{suffix}
      </motion.span>
      <span className="text-sm text-muted-foreground tracking-widest uppercase mt-2 block">{label}</span>
    </div>
  );
}

/* ─── Value Card ─── */
function ValueCard({ icon: Icon, motto, description, details, index }: {
  icon: React.ElementType;
  motto: string;
  description: string;
  details: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-card border border-border rounded-sm p-8 md:p-10 overflow-hidden"
      initial={{ opacity: 0, y: 50, rotateX: 8 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Gold accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: index * 0.15 + 0.3 }}
      />

      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <p className="text-primary text-sm font-bold tracking-wide italic">"{motto}"</p>
      </div>

      <p className="text-foreground/80 text-[.95rem] leading-relaxed mb-5">{description}</p>

      <ul className="space-y-2.5">
        {details.map((d, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
            <ChevronRight className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
            <span>{d}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ─── Timeline Milestone ─── */
function TimelineMilestone({ year, title, description, index, align }: {
  year: string; title: string; description: string; index: number; align: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={`flex items-center gap-8 md:gap-16 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
      {/* Content */}
      <motion.div
        className={`flex-1 ${align === "right" ? "md:text-right" : ""}`}
        initial={{ opacity: 0, x: align === "left" ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-primary text-sm font-bold tracking-widest">{year}</span>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mt-1 mb-3">{title}</h3>
        <p className="text-muted-foreground text-[.95rem] leading-relaxed max-w-md">{description}</p>
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="relative shrink-0 hidden md:flex"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      >
        <div className="w-5 h-5 rounded-full bg-primary relative z-10" />
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/30"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Spacer on other side */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
/* ─── MAIN PAGE ─── */
/* ═══════════════════════════════════════════════ */
export default function OurStoryPage() {
  const { regionPath } = useRegion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroScale = useTransform(heroScroll, [0, 0.6], [1, 0.92]);
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineScroll } = useScroll({ target: timelineRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(timelineScroll, [0, 1], ["0%", "100%"]);

  const milestones = [
    { year: "2018", title: "The Spark", description: "Founded in Chennai with a bold vision — transform SAP consulting for the modern enterprise. Started with a team of 3 passionate finance consultants." },
    { year: "2019", title: "Startup India Recognition", description: "Recognized by Startup India and registered as an MSME enterprise, validating our innovative approach to SAP advisory services." },
    { year: "2021", title: "Expanding Horizons", description: "Established footprints in UAE, serving Middle Eastern enterprises with world-class SAP FICO consulting and transformation services." },
    { year: "2022", title: "US Operations", description: "Launched operations in the United States, bringing our proven methodology to North American enterprises seeking SAP excellence." },
    { year: "2024", title: "KIN AI Platform", description: "Launched our proprietary AI-powered talent and consulting platform, redefining how enterprises find and deploy SAP expertise." },
  ];

  const values = [
    {
      icon: Lightbulb,
      motto: "Adapt, Thrive, Succeed",
      description: "Commitment to adapt, openness to change, and willingness to accommodate varying needs and circumstances.",
      details: [
        "Flexible work arrangements and agile decision-making processes",
        "A culture that embraces innovation and experimentation",
      ],
    },
    {
      icon: Rocket,
      motto: "Opportunity Awaits, Seize the Moment",
      description: "We provide unparalleled opportunities with the latest technology, expert guidance, and a supportive environment.",
      details: [
        "Creating pathways for career progression",
        "Offering continuous learning and development opportunities",
      ],
    },
    {
      icon: Heart,
      motto: "Balance, Harmony, Well-being",
      description: "We support employees in achieving a healthy balance between work responsibilities and personal life.",
      details: [
        "Fostering a culture of psychological safety",
        "Prioritizing well-being across every level of the organization",
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Bg */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
          <img src="/src/assets/consulting-team.jpg" alt="" className="w-full h-full object-cover opacity-40" />
        </motion.div>

        {/* Animated grid dots */}
        <div className="absolute inset-0 z-[5]" style={{ backgroundImage: "radial-gradient(hsl(var(--gold) / .12) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <motion.div className="relative z-20 section-container" style={{ opacity: heroOpacity, scale: heroScale }}>
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to={regionPath("/")} className="hover:text-foreground transition-colors no-underline text-muted-foreground">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary">Our Story</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Kannanware
            </motion.div>

            <motion.h1
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-foreground mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Discovery,{" "}
              <span className="text-gradient-gold">Invention</span>
              <br />& Innovation
            </motion.h1>

            <motion.p
              className="sec-p text-lg max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              We're redefining SAP consulting through relentless innovation, deep expertise, and a commitment to transforming enterprises worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button
                onClick={() => document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-sm border-none cursor-none hover:brightness-110 transition-all"
              >
                Explore Our Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5">
            <motion.div className="w-1 h-2 rounded-full bg-primary" animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* ═══ WHO WE ARE ═══ */}
      <section id="who-we-are" className="section-spacing bg-background relative">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <RevealSection>
                <div className="eyebrow">Who We Are</div>
                <h2 className="sec-h">A New Age <em>SAP Consulting</em> Powerhouse</h2>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="text-muted-foreground leading-relaxed text-[1.05rem] mb-6">
                  Kannanware is a new age, Chennai based IT organization rendering top notch services in the critical areas of SAP Finance Consulting, Project Management and continuum.
                </p>
                <p className="text-muted-foreground leading-relaxed text-[1.05rem] mb-6">
                  A <span className="text-primary font-semibold">Startup India</span> recognized entity and an MSME enterprise, we have proven expertise in SAP Advisory Services, Enterprise Performance Services and Managed Staffing Services with core focus on SAP FICO.
                </p>
                <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
                  Brand Kannanware has distinct footprints across <span className="text-foreground font-semibold">India, UAE and USA</span>, with further expansion on the cards, fuelled by an aggressive growth agenda.
                </p>
              </RevealSection>
            </div>

            <RevealSection delay={0.3}>
              <div className="relative">
                <ParallaxImage src="/src/assets/team-collab.jpg" alt="Team collaboration" className="rounded-sm aspect-[4/3]" />
                {/* Floating stat card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-card border border-border rounded-sm p-5 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">3</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Countries</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT NUMBERS ═══ */}
      <section className="py-20 bg-card border-y border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <AnimatedCounter value={50} suffix="+" label="SAP Experts" />
            <AnimatedCounter value={3} suffix="" label="Countries" />
            <AnimatedCounter value={100} suffix="+" label="Engagements" />
            <AnimatedCounter value={6} suffix="+" label="Years" />
          </div>
        </div>
      </section>

      {/* ═══ HOW WE ACHIEVE ═══ */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <RevealSection delay={0.1}>
              <div className="relative">
                <ParallaxImage src="/src/assets/team-design.jpg" alt="Team training" className="rounded-sm aspect-[4/3]" />
                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-5 py-3 rounded-sm shadow-xl"
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest">Transformation</p>
                  <p className="text-lg font-bold">Specialists</p>
                </motion.div>
              </div>
            </RevealSection>

            <div>
              <RevealSection>
                <div className="eyebrow">How We Achieve This</div>
                <h2 className="sec-h">Building <em>Transformation</em> Specialists</h2>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="text-muted-foreground leading-relaxed text-[1.05rem] mb-6">
                  We recruit smart talents from all parts of the country and provide them with rigorous up-skilling opportunity with our very own innovative coaching methodology, curated mentoring and technologically advanced tools.
                </p>
                <p className="text-muted-foreground leading-relaxed text-[1.05rem] mb-8">
                  Our in-house developed staff are referred as <span className="text-primary font-semibold">Transformation Specialists</span> for their potential to transform the client's business functions into high performing functions — always industry ready with advanced solutions.
                </p>
              </RevealSection>
              <RevealSection delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  {["Innovative Coaching", "Curated Mentoring", "Advanced Tools", "Industry Ready"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-semibold rounded-sm tracking-wide uppercase border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VISION & MISSION ═══ */}
      <section className="section-spacing bg-card border-y border-border relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ backgroundImage: "url(/src/assets/consulting-team.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />

        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Vision */}
            <RevealSection>
              <div className="relative">
                <motion.div
                  className="absolute -top-2 -left-6 text-[8rem] font-bold text-primary/[0.06] leading-none select-none pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  V
                </motion.div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-[1.9] text-[1.05rem]">
                    To be the leading force in empowering businesses with innovative and sustainable SAP Finance solutions, driving growth, efficiency, and inclusivity. We envision a world where advanced technology is seamlessly integrated into every enterprise, fostering a culture of <span className="text-foreground font-medium">collaboration, equity, and continuous improvement</span>.
                  </p>
                </div>
              </div>
            </RevealSection>

            {/* Mission */}
            <RevealSection delay={0.2}>
              <div className="relative">
                <motion.div
                  className="absolute -top-2 -left-6 text-[8rem] font-bold text-primary/[0.06] leading-none select-none pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  M
                </motion.div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-[1.9] text-[1.05rem] mb-6">
                    At Kannanware, our mission is to transform the business experience with exceptional Advisory and SAP finance consulting. We are committed to:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Delivering innovative, tailored solutions for business growth and continuity.",
                      "Advancing sustainable practices for a greener future.",
                      "Continuously refining our expertise to surpass client expectations.",
                      "Cultivating a collaborative and inclusive environment that drives collective success.",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground text-[.95rem] leading-relaxed"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section ref={timelineRef} className="section-spacing bg-background relative">
        <div className="section-container">
          <RevealSection>
            <div className="text-center mb-20">
              <div className="eyebrow justify-center">Our Journey</div>
              <h2 className="sec-h">From <em>Startup</em> to Global SAP Partner</h2>
            </div>
          </RevealSection>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Animated center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block">
              <motion.div
                className="w-full bg-gradient-to-b from-primary via-primary to-transparent origin-top"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-16 md:space-y-20">
              {milestones.map((m, i) => (
                <TimelineMilestone
                  key={m.year}
                  year={m.year}
                  title={m.title}
                  description={m.description}
                  index={i}
                  align={i % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="section-spacing bg-card border-y border-border">
        <div className="section-container">
          <RevealSection>
            <div className="text-center mb-16">
              <div className="eyebrow justify-center">Our Values</div>
              <h2 className="sec-h">What <em>Drives</em> Us Forward</h2>
              <p className="sec-p mx-auto text-center">
                Our values aren't just words — they're the principles that guide every decision, every project, and every relationship.
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ValueCard key={v.motto} {...v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL PRESENCE ═══ */}
      <section className="section-spacing bg-background relative overflow-hidden">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <RevealSection>
                <div className="eyebrow">Global Presence</div>
                <h2 className="sec-h">Distinct Footprints <em>Worldwide</em></h2>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="text-muted-foreground leading-relaxed text-[1.05rem] mb-10">
                  From our headquarters in Chennai to operations across the UAE and United States, we bring local expertise with a global perspective to every engagement.
                </p>
              </RevealSection>

              <div className="space-y-6">
                {[
                  { flag: "🇮🇳", location: "Chennai, India", role: "Global HQ & Delivery Center" },
                  { flag: "🇦🇪", location: "UAE", role: "Middle East Operations" },
                  { flag: "🇺🇸", location: "United States", role: "North America Operations" },
                ].map((office, i) => (
                  <RevealSection key={office.location} delay={0.3 + i * 0.1}>
                    <motion.div
                      className="flex items-center gap-5 p-5 bg-card border border-border rounded-sm group"
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    >
                      <span className="text-3xl">{office.flag}</span>
                      <div>
                        <p className="text-foreground font-semibold">{office.location}</p>
                        <p className="text-sm text-muted-foreground">{office.role}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </RevealSection>
                ))}
              </div>
            </div>

            <RevealSection delay={0.2}>
              <ParallaxImage src="/src/assets/consulting-team.jpg" alt="Global team" className="rounded-sm aspect-[4/3]" />
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-28 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(var(--gold)) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="section-container relative z-10 text-center">
          <RevealSection>
            <div className="eyebrow justify-center">Ready to Transform?</div>
            <h2 className="sec-h max-w-2xl mx-auto">Let's Write the <em>Next Chapter</em> Together</h2>
            <p className="sec-p mx-auto text-center">
              Partner with Kannanware and experience SAP consulting that delivers real, measurable transformation.
            </p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide rounded-sm border-none cursor-none hover:brightness-110 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to={regionPath("/products/cloud-erp/s4hana")}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-foreground text-sm font-semibold tracking-wide rounded-sm border border-border cursor-none hover:border-primary/50 transition-all no-underline"
              >
                Explore Solutions
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
