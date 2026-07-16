import { Link } from "react-router-dom";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import BoulaiListDot from "@/components/BoulaiListDot";
import ContactCTA from "@/components/ContactCTA";
import EngineMark from "@/components/EngineMark";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productModules = [
  {
    name: "Atlas",
    mark: "atlas" as const,
    version: "1.0",
    image: "/brand/product-atlas-instrument.png",
    imageAlt: "Layered analytical interface for robust auditable statistical analysis.",
    title: "Run frontier analysis in minimal time.",
    desc: "Robust, auditable statistical and econometric analyses with transparent assumptions, uncertainty, and reproducible outputs.",
  },
  {
    name: "Icarus",
    mark: "icarus" as const,
    version: "1.0",
    image: "/brand/product-icarus-instrument.png",
    imageAlt: "Clinical signal layers mapping measured data to candidate external causes.",
    title: "Explain trial failures beyond measured data.",
    desc: "Surface candidate external or unmeasured causes that may explain trial failures, unexpected subgroup behavior, or weak replication.",
  },
  {
    name: "Locus",
    mark: "locus" as const,
    version: "1.0",
    image: "/brand/product-locus-instrument.png",
    imageAlt: "Causal graph instrument for stress-testing clinical theories and anomalies.",
    title: "Test clinical theories and spot anomalies.",
    desc: "Stress-test clinical theories encoded as causal DAGs and detect anomalous behavior against expected mechanisms.",
  },
];

const visionCards = [
  {
    title: "Human judgment",
    theme: "Human reasoning",
    image: "/brand/vision-card-human-judgment.png",
    x: 12,
    y: 22,
    desc: "Boulai is built to make expert judgment more powerful, not less necessary. The system exposes assumptions, alternatives, and uncertainty so scientists can reason with the model instead of accepting a black-box answer.",
  },
  {
    title: "Inspectable reasoning",
    theme: "Human reasoning",
    image: "/brand/vision-card-inspectable-reasoning.png",
    x: 29,
    y: 16,
    desc: "Scientific reasoning becomes stronger when each conclusion can be traced back to evidence, causal structure, and explicit assumptions.",
  },
  {
    title: "Research culture",
    theme: "Research world",
    image: "/brand/vision-card-research-culture.png",
    x: 49,
    y: 17,
    desc: "Boulai is a research-and-product company. Its methods are developed with academic and scientific partners so product work remains anchored in frontier methodology and real research practice.",
  },
  {
    title: "Frontier methods",
    theme: "Research world",
    image: "/brand/vision-card-frontier-methods.png",
    x: 67,
    y: 16,
    desc: "We turn causal inference, statistics, and machine learning into proprietary systems designed for clinical and translational research.",
  },
  {
    title: "Causal structure",
    theme: "Causal intelligence",
    image: "/brand/vision-card-causal-structure.png",
    x: 87,
    y: 25,
    desc: "Causal intelligence asks what could be driving a signal, which mechanisms are plausible, and which assumptions must hold. This is the difference between pattern recognition and scientific reasoning.",
  },
  {
    title: "Hidden mechanisms",
    theme: "Causal intelligence",
    image: "/brand/vision-card-hidden-mechanisms.png",
    x: 82,
    y: 52,
    desc: "Clinical data often contains symptoms of causes that were not directly measured. Boulai helps teams surface hidden structure and translate it into testable explanations.",
  },
  {
    title: "Scientific hypotheses",
    theme: "Scientific approach",
    image: "/brand/vision-card-scientific-hypotheses.png",
    x: 14,
    y: 55,
    desc: "Boulai is designed to generate testable hypotheses from clinical and real-world data before teams commit years of work to a weak signal or a misleading explanation.",
  },
  {
    title: "Anomaly review",
    theme: "Scientific approach",
    image: "/brand/vision-card-anomaly-review.png",
    x: 27,
    y: 80,
    desc: "Unexpected behavior becomes more useful when it is reviewed against explicit causal expectations rather than treated as unexplained noise.",
  },
  {
    title: "Auditable evidence",
    theme: "Clinical decisions",
    image: "/brand/vision-card-auditable-evidence.png",
    x: 56,
    y: 82,
    desc: "Scientific AI should produce evidence that can be inspected, reproduced, and challenged. Boulai keeps uncertainty, assumptions, and analytical choices visible.",
  },
  {
    title: "Costly decisions",
    theme: "Clinical decisions",
    image: "/brand/vision-card-costly-decisions.png",
    x: 82,
    y: 76,
    desc: "In clinical development, a confident but fragile conclusion can redirect years of investment. Boulai stress-tests causal assumptions before evidence becomes a portfolio or trial decision.",
  },
];

const methodPillars = [
  {
    title: "State-of-the-art research",
    desc: "We build on peer-reviewed causal inference, statistics, and machine learning — not off-the-shelf tooling.",
  },
  {
    title: "Proprietary models",
    desc: "That research becomes proprietary models embedded directly in our products, not a thin wrapper over generic AI.",
  },
  {
    title: "Built with partners",
    desc: "We develop and validate our methods together with academic and industry research partners.",
  },
];

const methodOutcomes = [
  "Scientific intelligence for organizing evidence around explicit causal questions.",
  "Causal reasoning for comparing mechanisms, pathways, and subgroup explanations.",
  "Machine learning, statistics, and agents working together without removing human scientific judgment.",
];

const visionPrinciples = [
  {
    title: "Human judgment + machine reasoning",
    desc: "Boulai is built around the idea that better discovery happens when domain expertise and machine intelligence work around the same evidence.",
  },
  {
    title: "Research-grade methods",
    desc: "We go beyond pattern-matching by combining causal reasoning, exploratory AI, and explainable statistical workflows teams can challenge and inspect.",
  },
  {
    title: "Discovery first",
    desc: "Boulai Discovery is the first system built on this vision, turning complex data into hypotheses, anomalies, and decision-grade causal evidence.",
  },
];

const industries = [
  {
    title: "Pharma",
    desc: "Clinical development and R&D decisions where evidence quality determines which programs move forward.",
  },
  {
    title: "Biotech",
    desc: "Translational and discovery-stage research, where early signals must hold up before they shape a pipeline.",
  },
  {
    title: "MedTech",
    desc: "Device and diagnostic development, where causal evidence separates a real effect from noise.",
  },
];

const Index = () => {
  const [activeVisionCard, setActiveVisionCard] = useState<(typeof visionCards)[number] | null>(null);
  const visionMapRef = useRef<HTMLDivElement>(null);
  const [isVisionMapExpanded, setIsVisionMapExpanded] = useState(false);

  useEffect(() => {
    const node = visionMapRef.current;
    if (!node || isVisionMapExpanded) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisionMapExpanded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "-18% 0px -30% 0px",
        threshold: 0.18,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisionMapExpanded]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="border-b border-white/10 bg-[#0B0E14] pt-32 pb-16 text-white md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="inverse-eyebrow mb-5">Boulai</p>
              <h1 className="font-sans text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.75rem]">
                Scientific AI for clinical decisions.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl lg:pt-16"
            >
              <p className="text-[1.15rem] leading-relaxed text-white/68 md:text-[1.25rem]">
                Boulai is a research and product company that builds causal AI systems for bio-pharma, and clinical
                research teams: turning clinical and real-world data into auditable evidence.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="bg-white text-[#0B0E14] hover:bg-white/88" size="lg" asChild>
                  <Link to="/product">Explore Product</Link>
                </Button>
                <Button className="border border-white/22 bg-transparent text-white hover:bg-white hover:text-[#0B0E14]" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={visionMapRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`vision-map-shell relative mt-20 overflow-hidden rounded-[28px] bg-[#070A10] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.055)] md:rounded-[34px] ${
              isVisionMapExpanded ? "vision-map-shell-expanded" : ""
            }`}
          >
            <div className="relative min-h-[700px] py-10 md:min-h-[740px]">
              <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                {visionCards.map((card, index) => (
                  <line
                    key={`${card.title}-center`}
                    x1="50"
                    y1="48"
                    x2={card.x}
                    y2={card.y}
                    stroke="rgba(255,255,255,0.085)"
                    strokeWidth={index % 3 === 0 ? "0.075" : "0.055"}
                    className="vision-line-float"
                    style={
                      {
                        "--line-rotate": `${index % 2 === 0 ? 0.42 : -0.34}deg`,
                        "--line-duration": `${9.8 + (index % 4) * 0.7}s`,
                        "--line-delay": `${index * -0.48}s`,
                      } as CSSProperties
                    }
                  />
                ))}
                {visionCards.map((card) => {
                  const linked = visionCards.find(
                    (candidate) => candidate.theme === card.theme && candidate.title !== card.title,
                  );
                  if (!linked) return null;

                  return (
                    <line
                      key={`${card.title}-theme`}
                      x1={card.x}
                      y1={card.y}
                      x2={linked.x}
                      y2={linked.y}
                      stroke="rgba(255,255,255,0.055)"
                      strokeWidth="0.045"
                      className="vision-line-float vision-line-float-soft"
                      style={
                        {
                          "--line-rotate": `${card.x > linked.x ? -0.5 : 0.5}deg`,
                          "--line-duration": "12.6s",
                          "--line-delay": `${card.x * -0.08}s`,
                        } as CSSProperties
                      }
                    />
                  );
                })}
                {visionCards.slice(0, 5).map((card, index) => {
                  const linked = visionCards[index + 5];
                  return (
                    <line
                      key={`${card.title}-cross`}
                      x1={card.x}
                      y1={card.y}
                      x2={linked.x}
                      y2={linked.y}
                      stroke="rgba(255,255,255,0.035)"
                      strokeWidth="0.04"
                      className="vision-line-float vision-line-float-soft"
                      style={
                        {
                          "--line-rotate": `${index % 2 === 0 ? -0.26 : 0.26}deg`,
                          "--line-duration": `${13 + index * 0.8}s`,
                          "--line-delay": `${index * -0.6}s`,
                        } as CSSProperties
                      }
                    />
                  );
                })}
              </svg>

              <div className="absolute inset-x-4 top-1/2 z-20 hidden -translate-y-1/2 text-center md:block">
                <div className="mx-auto max-w-[530px] bg-[#070A10]/95 px-8 py-7">
                  <h2 className="font-display text-[2.75rem] font-normal leading-[1.02] text-white md:text-[3.5rem]">
                    Scientific reasoning at scale.
                  </h2>
                  <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/58">
                    Human judgment, causal models, and scientific evidence working around the same inspectable system.
                  </p>
                </div>
              </div>

              <div className="hidden md:block">
                {visionCards.map((card, index) => (
                  <button
                    key={card.title}
                    type="button"
                    onClick={() => setActiveVisionCard(card)}
                    className="vision-float-card group absolute z-30 bg-transparent text-left focus:outline-none focus:ring-2 focus:ring-white/45"
                    style={{
                      left: `${card.x}%`,
                      top: `${card.y}%`,
                      width: index % 4 === 0 ? 64 : 58,
                      "--float-x": `${index % 2 === 0 ? 4 : -3}px`,
                      "--float-y": `${index % 3 === 0 ? 5 : -4}px`,
                      "--float-rotate": `${index % 2 === 0 ? 2.4 : -2.1}deg`,
                      "--float-duration": `${8.8 + (index % 5) * 0.55}s`,
                      "--float-delay": `${index * -0.7}s`,
                    } as CSSProperties}
                    aria-label={`Open ${card.title}`}
                  >
                    <span className="block transition-transform duration-300 group-hover:scale-[1.06]">
                      <span className="block p-0.5 opacity-90 transition group-hover:opacity-100">
                        <img
                          src={card.image}
                          alt=""
                          width={720}
                          height={720}
                          loading="lazy"
                          decoding="async"
                          className="aspect-square w-full object-cover opacity-[0.9] mix-blend-screen saturate-[1.08] contrast-[1.12]"
                        />
                      </span>
                      <span className="mt-2 block bg-[#070A10]/86 py-1 text-[7px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/60 transition group-hover:text-white/82">
                        {card.title}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="md:hidden">
                <h2 className="font-display text-[2.35rem] font-normal leading-[1.05] text-white">
                  Scientific reasoning at scale.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/62">
                  Tap a card to open the idea behind Boulai's vision.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {visionCards.map((card) => (
                    <button
                      key={card.title}
                      type="button"
                      onClick={() => setActiveVisionCard(card)}
                      className="flex items-center gap-3 bg-white/[0.025] p-3 text-left transition hover:bg-white/[0.055] focus:outline-none focus:ring-2 focus:ring-white/45"
                      aria-label={`Open ${card.title}`}
                    >
                      <img
                        src={card.image}
                        alt=""
                        width={720}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        className="h-11 w-11 shrink-0 object-cover opacity-[0.9] mix-blend-screen saturate-[1.08] contrast-[1.12]"
                      />
                      <span className="block text-[9px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/68">
                        {card.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-8 left-4 hidden text-[11px] text-white/42 lg:left-8 md:block">
                Click an image to read more
              </div>

              <AnimatePresence>
                {activeVisionCard && (
                  <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0E14]/78 p-5 backdrop-blur-[4px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActiveVisionCard(null)}
                  >
                    <motion.article
                      className="w-full max-w-[380px] overflow-hidden border border-white/12 bg-white text-[#0B0E14] shadow-[0_28px_90px_rgba(0,0,0,0.34)]"
                      initial={{ opacity: 0, y: 18, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <figure className="relative aspect-[1.18] bg-white">
                        <img
                          src={activeVisionCard.image}
                          alt=""
                          width={720}
                          height={720}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover opacity-[0.94] mix-blend-multiply saturate-[0.82] contrast-[1.08]"
                        />
                        <button
                          type="button"
                          onClick={() => setActiveVisionCard(null)}
                          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0B0E14] text-sm text-white transition hover:bg-foreground"
                          aria-label="Close popup"
                        >
                          ×
                        </button>
                      </figure>
                      <div className="p-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/48">
                          {activeVisionCard.theme}
                        </p>
                        <h3 className="mt-3 font-display text-[1.6rem] font-normal leading-[1.08] text-foreground">
                          {activeVisionCard.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {activeVisionCard.desc}
                        </p>
                      </div>
                    </motion.article>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-mid border-b border-border py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div>
            <p className="eyebrow mb-5">Product modules</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {productModules.map((engine, index) => (
                <FadeIn key={engine.name} delay={index * 0.08}>
                  <article className="premium-panel h-full overflow-hidden">
                    <figure className="h-56 border-b border-border/70 bg-white md:h-48">
                      <img
                        src={engine.image}
                        alt={engine.imageAlt}
                        width={720}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full select-none object-cover object-center opacity-[0.92] mix-blend-multiply saturate-[0.78] contrast-[1.03]"
                      />
                    </figure>
                    <div className="flex items-start gap-5 p-8">
                      <EngineMark name={engine.mark} className="mt-0.5 h-8 w-8 shrink-0 text-muted-foreground" />
                      <div>
                        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          {engine.name} {engine.version}
                        </p>
                        <h3 className="card-title mb-4">{engine.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{engine.desc}</p>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="section-deep border-b border-border py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <FadeIn>
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">Vision</p>
                <h2 className="section-title">
                  A modern Boulē
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Boulai takes its name from the ancient Greek <em>Boulē</em>: a place where collective judgment was
                  formed. We reinterpret that idea for high-complexity discovery, bringing human expertise and machine
                  intelligence around the same evidence.
                </p>
                <figure className="-mx-4 mt-8 max-w-none sm:mx-0 sm:mt-12 sm:max-w-[560px] md:max-w-[600px]">
                  <img
                    src="/brand/vision-boule-line-instrument.png"
                    alt="A modern research Boulē with a causal reasoning instrument at its center."
                    width={1180}
                    height={554}
                    loading="lazy"
                    decoding="async"
                    className="w-full select-none opacity-[0.96] mix-blend-multiply saturate-[0.9] contrast-[1.24] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] sm:opacity-[0.88] sm:saturate-[0.82] sm:contrast-[1.18] sm:[mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
                  />
                </figure>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="premium-panel p-8 md:p-10">
                <p className="eyebrow mb-6">What this means in practice</p>
                <div className="space-y-6">
                  {visionPrinciples.map((item, index) => (
                    <div key={item.title} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                      <div className="flex items-start gap-4">
                        <BoulaiListDot count={index + 1} className="mt-1 text-primary" />
                        <div>
                          <h3 className="card-title">{item.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-mid border-b border-border py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">Methodological foundation</p>
                <h2 className="section-title">
                  Research becomes proprietary product.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  Boulai is a research-and-product startup. We work with academic and scientific partners to bring
                  state-of-the-art causal inference, statistics, and machine learning into proprietary models — the
                  ones that power our products today, and what comes next.
                </p>
                <p className="mt-5 text-base leading-relaxed text-foreground/[78%]">
                  Boulai Discovery is the first product built on that vision. It helps teams turn clinical and
                  real-world data into testable hypotheses, explainable anomalies, and causal evidence they can inspect
                  before committing to expensive decisions.
                </p>
              </div>
              <div className="premium-panel p-8 md:p-10">
                <p className="eyebrow mb-6">What Boulai integrates</p>
                <div className="space-y-6">
                  {methodOutcomes.map((item, index) => (
                    <div key={item} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                      <div className="flex items-start gap-4">
                        <BoulaiListDot count={index + 1} className="mt-2 text-primary" />
                        <p className="max-w-md text-base leading-relaxed text-foreground/[84%]">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodPillars.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="premium-panel p-7 h-full">
                  <div className="flex items-start gap-5">
                    <BoulaiListDot count={i + 1} className="mt-1 text-primary" />
                    <div>
                      <h3 className="card-title mb-3">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-deep py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <FadeIn>
              <p className="eyebrow mb-4">Where we work</p>
              <h2 className="section-title">
                Built for the industries where wrong answers are expensive.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                In Pharma, Biotech, and MedTech, a false positive wastes years and budget chasing a dead end, and a
                false negative means missing the signal that mattered. Boulai is built to reduce both risks.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid sm:grid-cols-3 gap-4">
                {industries.map((item, index) => (
                  <div key={item.title} className="premium-panel p-6 h-full">
                    <div className="flex items-start gap-4">
                      <BoulaiListDot count={index + 1} className="mt-1 text-primary" />
                      <div>
                        <h3 className="card-title">{item.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-mid py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="premium-panel p-8 md:p-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">First solution</p>
                <h2 className="section-title">
                  Boulai Discovery is the first product built on this approach.
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  It helps teams analyze scientific datasets, explore causal hypotheses, and identify patterns that
                  deserve deeper validation.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Button size="lg" asChild>
                  <Link to="/product">Explore Boulai Discovery</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
