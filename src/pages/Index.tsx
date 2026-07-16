import { Link } from "react-router-dom";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import BoulaiListDot from "@/components/BoulaiListDot";
import ContactCTA from "@/components/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const productModules = [
  {
    name: "Atlas",
    logo: "/brand/module-atlas-logo.png",
    logoAlt: "Atlas logo",
    version: "1.0",
    title: "Analysis workbench.",
    desc: "Compress statistical and econometric workflows into guided, audit-ready analyses.",
  },
  {
    name: "Icarus",
    logo: "/brand/module-icarus-logo.png",
    logoAlt: "Icarus logo",
    version: "1.0",
    title: "Discovery engine.",
    desc: "Find hidden drivers, responder structure, and candidate explanations in biomedical data.",
  },
  {
    name: "Locus",
    logo: "/brand/module-locus-logo.png",
    logoAlt: "Locus logo",
    version: "1.0",
    title: "Causal stress-testing.",
    desc: "Test clinical hypotheses against data and surface where assumptions fail.",
  },
];

const visionTileColors = ["#E6E8EB", "#A9B0BC", "#E6E8EB", "#D4A11E"];

const mobileVisionPositions = [
  { x: 16, y: 36, w: 26 },
  { x: 35, y: 23, w: 24 },
  { x: 52, y: 17, w: 25 },
  { x: 70, y: 24, w: 24 },
  { x: 84, y: 38, w: 25 },
  { x: 76, y: 56, w: 23 },
  { x: 26, y: 58, w: 24 },
  { x: 43, y: 47, w: 22 },
  { x: 58, y: 66, w: 23 },
  { x: 18, y: 72, w: 22 },
];

const getVisionLineDrift = (index: number, scale = 1) => {
  const horizontal = (index % 2 === 0 ? 0.42 : -0.38) * scale;
  const vertical = (index % 3 === 0 ? 0.46 : -0.34) * scale;
  return {
    x: Number(horizontal.toFixed(2)),
    y: Number(vertical.toFixed(2)),
  };
};

const visionCards = [
  {
    title: "Human judgment",
    theme: "Human reasoning",
    image: "/brand/vision-card-human-judgment.png",
    x: 14,
    y: 22,
    desc: "Boulai is built to make expert judgment more powerful, not less necessary. The system exposes assumptions, alternatives, and uncertainty so scientists can reason with the model instead of accepting a black-box answer.",
  },
  {
    title: "Inspectable reasoning",
    theme: "Human reasoning",
    image: "/brand/vision-card-inspectable-reasoning.png",
    x: 29,
    y: 15,
    desc: "Scientific reasoning becomes stronger when each conclusion can be traced back to evidence, causal structure, and explicit assumptions.",
  },
  {
    title: "Research culture",
    theme: "Research world",
    image: "/brand/vision-card-research-culture.png",
    x: 48,
    y: 13,
    desc: "Boulai is a research-and-product company. Its methods are developed with academic and scientific partners so product work remains anchored in frontier methodology and real research practice.",
  },
  {
    title: "Frontier methods",
    theme: "Research world",
    image: "/brand/vision-card-frontier-methods.png",
    x: 68,
    y: 15,
    desc: "We turn causal inference, statistics, and machine learning into proprietary systems designed for clinical and translational research.",
  },
  {
    title: "Causal structure",
    theme: "Causal intelligence",
    image: "/brand/vision-card-causal-structure.png",
    x: 84,
    y: 24,
    desc: "Causal intelligence asks what could be driving a signal, which mechanisms are plausible, and which assumptions must hold. This is the difference between pattern recognition and scientific reasoning.",
  },
  {
    title: "Hidden mechanisms",
    theme: "Causal intelligence",
    image: "/brand/vision-card-hidden-mechanisms.png",
    x: 84,
    y: 54,
    desc: "Clinical data often contains symptoms of causes that were not directly measured. Boulai helps teams surface hidden structure and translate it into testable explanations.",
  },
  {
    title: "Scientific hypotheses",
    theme: "Scientific approach",
    image: "/brand/vision-card-scientific-hypotheses.png",
    x: 15,
    y: 58,
    desc: "Boulai is designed to generate testable hypotheses from clinical and real-world data before teams commit years of work to a weak signal or a misleading explanation.",
  },
  {
    title: "Anomaly review",
    theme: "Scientific approach",
    image: "/brand/vision-card-anomaly-review.png",
    x: 30,
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
    x: 80,
    y: 78,
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
    if (!node) return;

    let frame = 0;

    const updateVisionMapState = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const shouldExpand = rect.top <= viewportHeight * 0.28 && rect.bottom >= viewportHeight * 0.58;
      const shouldCollapse =
        window.scrollY <= 12 || rect.top >= viewportHeight * 0.42 || rect.bottom <= viewportHeight * 0.28;

      setIsVisionMapExpanded((current) => {
        if (!current && shouldExpand) return true;
        if (current && shouldCollapse) return false;
        return current;
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateVisionMapState();
        frame = 0;
      });
    };

    updateVisionMapState();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-hero pt-36 pb-20 text-white md:pt-48 md:pb-24 lg:pt-52">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="page-title max-w-4xl text-[#E6E8EB]">
                Scientific AI for clinical decisions.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <p className="font-display text-[1.2rem] font-normal leading-[1.24] text-[#E6E8EB]/72 md:text-[1.34rem]">
                Boulai is a research and product company building causal AI systems for biopharma and clinical research
                teams: turning clinical and real-world data into auditable analyses and evidence-backed next steps.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="bg-[#E6E8EB] text-[#0B0E14] hover:bg-[#A9B0BC]" size="lg" asChild>
                  <Link to="/product">Explore Discovery</Link>
                </Button>
                <Button className="border border-[#A9B0BC]/35 bg-transparent text-[#E6E8EB] hover:bg-[#E6E8EB] hover:text-[#0B0E14]" size="lg" asChild>
                  <Link to="/contact">Book a Demo</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            ref={visionMapRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`vision-map-shell relative mx-auto mt-24 w-full overflow-hidden rounded-[28px] bg-[#1B2A41] text-white shadow-[inset_0_0_0_1px_rgba(169,176,188,0.28)] md:mt-32 md:rounded-[34px] ${
              isVisionMapExpanded ? "vision-map-shell-expanded" : ""
            }`}
          >
            <div className="relative min-h-[560px] py-10 md:min-h-[620px]">
              <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                {visionCards.map((card, index) => {
                  const drift = getVisionLineDrift(index);
                  const duration = 8.2 + (index % 5) * 0.5;

                  return (
                    <line
                      key={`${card.title}-connector`}
                      x1="50"
                      y1="50"
                      x2={card.x}
                      y2={card.y}
                      stroke="rgba(230,232,235,0.32)"
                      strokeWidth="0.11"
                      className="vision-connector-line"
                    >
                      <animate
                        attributeName="x2"
                        values={`${card.x};${card.x + drift.x};${card.x - drift.x * 0.55};${card.x}`}
                        dur={`${duration}s`}
                        begin={`${index * -0.7}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y2"
                        values={`${card.y};${card.y + drift.y};${card.y - drift.y * 0.55};${card.y}`}
                        dur={`${duration}s`}
                        begin={`${index * -0.7}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                  );
                })}
              </svg>

              <div className="vision-map-copy absolute left-1/2 top-1/2 z-20 hidden w-[min(530px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 text-center md:block">
                <div className="bg-[#1B2A41]/95 px-8 py-7">
                  <h2 className="font-display text-[2.15rem] font-normal leading-[1.04] text-white md:text-[2.65rem]">
                    Boulai is built on scientific intelligence
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
                      width: index % 4 === 0 ? 54 : 50,
                      "--float-x": `${index % 2 === 0 ? 7 : -6}px`,
                      "--float-y": `${index % 3 === 0 ? 8 : -7}px`,
                      "--float-rotate": `${index % 2 === 0 ? 3.4 : -3}deg`,
                      "--float-duration": `${8.2 + (index % 5) * 0.5}s`,
                      "--float-delay": `${index * -0.7}s`,
                    } as CSSProperties}
                    aria-label={`Open ${card.title}`}
                  >
                    <span className="block transition-transform duration-300 group-hover:scale-[1.06]">
                      <span
                        className="block overflow-hidden rounded-[11px] p-1 shadow-[0_10px_26px_rgba(0,0,0,0.3)] ring-1 ring-[#E6E8EB]/35 transition group-hover:opacity-100"
                        style={{ backgroundColor: visionTileColors[index % visionTileColors.length] }}
                      >
                        <img
                          src={card.image}
                          alt=""
                          width={720}
                          height={720}
                          loading="lazy"
                          decoding="async"
                          className="aspect-square w-full scale-[1.84] rounded-[8px] object-cover opacity-100 mix-blend-multiply brightness-[0.58] saturate-[1.55] contrast-[2.35]"
                        />
                      </span>
                      <span className="mt-2 block bg-[#1B2A41]/86 py-1 text-[7px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/72 transition group-hover:text-white/90">
                        {card.title}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              <div className="px-5 pb-14 pt-5 text-center md:hidden">
                <div className="relative mx-auto h-[310px] max-w-[360px] overflow-hidden">
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    {visionCards.map((card, index) => {
                      const position = mobileVisionPositions[index];
                      const drift = getVisionLineDrift(index, 0.8);
                      const duration = 8.4 + (index % 5) * 0.5;
                      return (
                        <line
                          key={`${card.title}-mobile-center`}
                          x1="50"
                          y1="78"
                          x2={position.x}
                          y2={position.y}
                          stroke="rgba(230,232,235,0.34)"
                          strokeWidth="0.16"
                          className="vision-connector-line"
                        >
                          <animate
                            attributeName="x2"
                            values={`${position.x};${position.x + drift.x};${position.x - drift.x * 0.55};${position.x}`}
                            dur={`${duration}s`}
                            begin={`${index * -0.6}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="y2"
                            values={`${position.y};${position.y + drift.y};${position.y - drift.y * 0.55};${position.y}`}
                            dur={`${duration}s`}
                            begin={`${index * -0.6}s`}
                            repeatCount="indefinite"
                          />
                        </line>
                      );
                    })}
                  </svg>

                  {visionCards.map((card, index) => {
                    const position = mobileVisionPositions[index];
                    return (
                      <button
                        key={card.title}
                        type="button"
                        onClick={() => setActiveVisionCard(card)}
                        className="vision-float-card group absolute z-10 bg-transparent text-left focus:outline-none focus:ring-2 focus:ring-white/45"
                        style={{
                          left: `${position.x}%`,
                          top: `${position.y}%`,
                          width: position.w,
                          "--float-x": `${index % 2 === 0 ? 5 : -5}px`,
                          "--float-y": `${index % 3 === 0 ? 6 : -5}px`,
                          "--float-rotate": `${index % 2 === 0 ? 3 : -2.8}deg`,
                          "--float-duration": `${8.4 + (index % 5) * 0.5}s`,
                          "--float-delay": `${index * -0.6}s`,
                        } as CSSProperties}
                        aria-label={`Open ${card.title}`}
                      >
                        <span
                          className="block overflow-hidden rounded-[7px] p-0.5 shadow-[0_8px_20px_rgba(0,0,0,0.34)] ring-1 ring-[#E6E8EB]/30"
                          style={{ backgroundColor: visionTileColors[index % visionTileColors.length] }}
                        >
                          <img
                            src={card.image}
                            alt=""
                            width={720}
                            height={720}
                            loading="lazy"
                            decoding="async"
                            className="aspect-square w-full scale-[1.72] rounded-[5px] object-cover opacity-100 mix-blend-multiply brightness-[0.64] saturate-[1.5] contrast-[2.1]"
                          />
                        </span>
                      </button>
                    );
                  })}
                </div>

                <h2 className="mx-auto mt-1 max-w-[320px] font-display text-[2.12rem] font-normal leading-[1.05] text-white">
                  Boulai is built on scientific intelligence
                </h2>
                <p className="mx-auto mt-7 max-w-[315px] text-[1.08rem] leading-[1.48] text-white/72">
                  Human judgment, causal models, and scientific evidence working around the same inspectable system.
                </p>
                <Button className="mt-8 bg-[#E6E8EB] px-7 text-[#0B0E14] hover:bg-[#A9B0BC]" size="lg" asChild>
                  <Link to="/product">Explore Discovery</Link>
                </Button>
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
                      className="w-full max-w-[380px] overflow-hidden rounded-[18px] border border-[#A9B0BC]/40 bg-[#E6E8EB] text-[#0B0E14] shadow-[0_28px_90px_rgba(0,0,0,0.34)]"
                      initial={{ opacity: 0, y: 18, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <figure className="relative aspect-[1.18] bg-[#E6E8EB]">
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
                          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0B0E14] text-sm text-[#E6E8EB] transition hover:bg-[#1B2A41]"
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

      <section className="section-mid py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Latest releases</p>
              <h2 className="section-title">Latest releases from Boulai Discovery.</h2>
            </div>
            <Button className="w-fit border border-border bg-transparent text-foreground hover:bg-[#0B0E14] hover:text-[#E6E8EB]" asChild>
              <Link to="/product">Explore Discovery</Link>
            </Button>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {productModules.map((engine, index) => (
                <FadeIn key={engine.name} delay={index * 0.08}>
                  <article className="premium-panel h-full border-[#A9B0BC]/70 bg-[#E6E8EB] p-8 text-[#0B0E14]">
                    <div className="flex items-start gap-5">
                      <img
                        src={engine.logo}
                        alt={engine.logoAlt}
                        width={512}
                        height={512}
                        loading="lazy"
                        decoding="async"
                        className="mt-0.5 h-8 w-8 shrink-0 select-none object-contain opacity-75 brightness-0"
                      />
                      <div>
                        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#3A3F45]/75">
                          {engine.name} {engine.version}
                        </p>
                        <h3 className="card-title mb-4">{engine.title}</h3>
                        <p className="text-sm leading-relaxed text-[#3A3F45]/85">{engine.desc}</p>
                      </div>
                    </div>
                    <div className="mt-8 grid gap-3 border-t border-[#0B0E14]/15 pt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#3A3F45]/70">
                      <div className="flex items-center justify-between gap-4">
                        <span>Release</span>
                        <span>{engine.version}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>System</span>
                        <span>Boulai Discovery</span>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="section-deep py-24">
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

      <section className="section-mid py-24">
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

      <section className="section-deep py-24">
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
                  It helps teams use clinical, real-world, and translational data to find responder structure,
                  stress-test causal hypotheses, and produce traceable next steps.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Button size="lg" asChild>
                  <Link to="/product">Explore Discovery</Link>
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
