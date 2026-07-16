import { Link } from "react-router-dom";
import { useState } from "react";
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
    role: "Robust auditable analysis",
    image: "/brand/product-atlas-instrument.png",
    imageAlt: "Layered analytical interface for robust auditable statistical analysis.",
    title: "Run frontier analysis in minimal time.",
    desc: "Robust, auditable statistical and econometric analyses with transparent assumptions, uncertainty, and reproducible outputs.",
  },
  {
    name: "Icarus",
    role: "External cause discovery",
    image: "/brand/product-icarus-instrument.png",
    imageAlt: "Clinical signal layers mapping measured data to candidate external causes.",
    title: "Explain trial failures beyond measured data.",
    desc: "Surface candidate external or unmeasured causes that may explain trial failures, unexpected subgroup behavior, or weak replication.",
  },
  {
    name: "Locus",
    role: "Auditable theory testing",
    image: "/brand/product-locus-instrument.png",
    imageAlt: "Causal graph instrument for stress-testing clinical theories and anomalies.",
    title: "Test clinical theories and spot anomalies.",
    desc: "Stress-test clinical theories encoded as causal DAGs and detect anomalous behavior against expected mechanisms.",
  },
];

const visionQuestions = [
  {
    id: "human-reasoning",
    question: "How should AI strengthen human reasoning?",
    sub: "By making assumptions, uncertainty, and alternatives easier to inspect.",
    x: 23,
    y: 34,
  },
  {
    id: "research-world",
    question: "How should AI work with the research world?",
    sub: "By staying close to scientific practice, peer review, and domain expertise.",
    x: 50,
    y: 24,
  },
  {
    id: "causal-intelligence",
    question: "What makes intelligence causal?",
    sub: "The ability to reason about mechanisms, counterfactuals, and hidden structure.",
    x: 77,
    y: 34,
  },
  {
    id: "scientific-approach",
    question: "What should scientific AI produce?",
    sub: "Hypotheses, anomalies, and evidence that teams can challenge.",
    x: 32,
    y: 72,
  },
  {
    id: "clinical-decisions",
    question: "How should costly decisions be made?",
    sub: "With auditable reasoning before trial and portfolio commitments.",
    x: 72,
    y: 74,
  },
];

const visionCards = [
  {
    title: "Human judgment stays central",
    questionId: "human-reasoning",
    theme: "Human reasoning",
    image: "/brand/vision-boule-line-instrument.png",
    x: 10,
    y: 24,
    desc: "Boulai is built to make expert judgment more powerful, not less necessary. The system exposes assumptions, alternatives, and uncertainty so scientists can reason with the model instead of accepting a black-box answer.",
  },
  {
    title: "Reasoning should be inspectable",
    questionId: "human-reasoning",
    theme: "Human reasoning",
    image: "/brand/product-locus-instrument.png",
    x: 31,
    y: 22,
    desc: "Scientific reasoning becomes stronger when each conclusion can be traced back to evidence, causal structure, and explicit assumptions. Boulai turns reasoning into something teams can review and contest.",
  },
  {
    title: "Built with scientific partners",
    questionId: "research-world",
    theme: "Research world",
    image: "/brand/product-atlas-instrument.png",
    x: 38,
    y: 10,
    desc: "Boulai is a research-and-product company. Its methods are developed with academic and scientific partners so product work remains anchored in frontier methodology and real research practice.",
  },
  {
    title: "Research becomes product",
    questionId: "research-world",
    theme: "Research world",
    image: "/brand/product-icarus-instrument.png",
    x: 63,
    y: 10,
    desc: "The goal is not to wrap generic AI around scientific workflows. Boulai turns causal inference, statistics, and machine learning into proprietary systems designed for clinical and translational research.",
  },
  {
    title: "Mechanisms over correlations",
    questionId: "causal-intelligence",
    theme: "Causal intelligence",
    image: "/brand/product-locus-instrument.png",
    x: 91,
    y: 22,
    desc: "Causal intelligence asks what could be driving a signal, which mechanisms are plausible, and which assumptions must hold. This is the difference between pattern recognition and scientific reasoning.",
  },
  {
    title: "Hidden structure matters",
    questionId: "causal-intelligence",
    theme: "Causal intelligence",
    image: "/brand/product-icarus-instrument.png",
    x: 66,
    y: 23,
    desc: "Clinical data often contains symptoms of causes that were not directly measured. Boulai helps teams surface hidden structure and translate it into hypotheses scientists can test.",
  },
  {
    title: "Hypotheses before commitment",
    questionId: "scientific-approach",
    theme: "Scientific approach",
    image: "/brand/product-icarus-instrument.png",
    x: 16,
    y: 66,
    desc: "Boulai is designed to generate testable hypotheses from clinical and real-world data before teams commit years of work to a weak signal or a misleading explanation.",
  },
  {
    title: "Evidence must be auditable",
    questionId: "scientific-approach",
    theme: "Scientific approach",
    image: "/brand/product-atlas-instrument.png",
    x: 41,
    y: 84,
    desc: "Scientific AI should produce evidence that can be inspected, reproduced, and challenged. Boulai keeps uncertainty, assumptions, and analytical choices visible.",
  },
  {
    title: "False confidence is expensive",
    questionId: "clinical-decisions",
    theme: "Clinical decisions",
    image: "/brand/product-locus-instrument.png",
    x: 62,
    y: 88,
    desc: "In clinical development, a confident but fragile conclusion can redirect years of investment. Boulai stress-tests causal assumptions before evidence becomes a portfolio or trial decision.",
  },
  {
    title: "Missed opportunities are expensive too",
    questionId: "clinical-decisions",
    theme: "Clinical decisions",
    image: "/brand/product-atlas-instrument.png",
    x: 87,
    y: 69,
    desc: "A false negative can bury the signal that mattered. Boulai helps teams look for patient-level effects, heterogeneous responses, and anomalies that deserve deeper validation.",
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
  const questionById = Object.fromEntries(visionQuestions.map((question) => [question.id, question]));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-mid border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow mb-5">Boulai</p>
              <h1 className="font-sans text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.75rem]">
                Scientific AI for clinical decisions.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl lg:pt-16"
            >
              <p className="text-[1.15rem] leading-relaxed text-foreground/[78%] md:text-[1.25rem]">
                Boulai builds causal AI systems for CROs, pharma, and clinical research teams: turning clinical and
                real-world data into auditable evidence before expensive trial and portfolio decisions.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to="/product">Explore Product</Link>
                </Button>
                <Button className="border border-border bg-transparent text-foreground hover:bg-foreground hover:text-background" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 overflow-hidden border border-[#0B0E14] bg-[#0B0E14] text-white"
          >
            <div className="relative min-h-[760px] p-6 md:p-10">
              <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                {visionQuestions.map((question) => (
                  <line
                    key={question.id}
                    x1="50"
                    y1="47"
                    x2={question.x}
                    y2={question.y}
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="0.12"
                  />
                ))}
                {visionCards.map((card) => {
                  const question = questionById[card.questionId];
                  return (
                    <line
                      key={card.title}
                      x1={question.x}
                      y1={question.y}
                      x2={card.x}
                      y2={card.y}
                      stroke="rgba(255,255,255,0.16)"
                      strokeWidth="0.11"
                    />
                  );
                })}
              </svg>

              <div className="absolute left-1/2 top-[47%] hidden w-[min(470px,64%)] -translate-x-1/2 -translate-y-1/2 text-center md:block">
                <p className="inverse-eyebrow mb-5">Boulai vision</p>
                <h2 className="font-display text-[2.5rem] font-normal leading-[1.03] text-white md:text-[3.15rem]">
                  Human reasoning at scientific scale.
                </h2>
                <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-white/54">
                  A map of the questions behind Boulai: judgment, research culture, causal intelligence, and auditable evidence.
                </p>
              </div>

              <div className="hidden md:block">
                {visionQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="absolute z-10 w-60 -translate-x-1/2 -translate-y-1/2 text-center"
                    style={{ left: `${question.x}%`, top: `${question.y}%` }}
                  >
                    <h3 className="font-display text-[1.14rem] font-normal leading-[1.08] text-white">
                      {question.question}
                    </h3>
                    <p className="mx-auto mt-2 max-w-[13.5rem] text-[12px] leading-relaxed text-white/48">
                      {question.sub}
                    </p>
                  </div>
                ))}

                {visionCards.map((card, index) => (
                  <button
                    key={card.title}
                    type="button"
                    onClick={() => setActiveVisionCard(card)}
                    className="absolute z-20 block -translate-x-1/2 -translate-y-1/2 border border-white/18 bg-white/92 p-1 shadow-[0_18px_60px_rgba(0,0,0,0.2)] transition duration-300 hover:scale-110 hover:border-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70"
                    style={{
                      left: `${card.x}%`,
                      top: `${card.y}%`,
                      width: index % 3 === 0 ? 64 : 54,
                      height: index % 3 === 0 ? 64 : 54,
                    }}
                    aria-label={`Open ${card.title}`}
                  >
                    <img
                      src={card.image}
                      alt=""
                      width={720}
                      height={720}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-90 mix-blend-multiply saturate-[0.82] contrast-[1.08]"
                    />
                  </button>
                ))}
              </div>

              <div className="md:hidden">
                <p className="inverse-eyebrow mb-5">Boulai vision</p>
                <h2 className="font-display text-[2.25rem] font-normal leading-[1.05] text-white">
                  Human reasoning at scientific scale.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/[62%]">
                  Tap an image to open the idea behind Boulai's vision.
                </p>
                <div className="mt-8 space-y-7">
                  {visionQuestions.map((question) => (
                    <section key={question.id}>
                      <h3 className="font-display text-[1.3rem] font-normal leading-tight text-white">
                        {question.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">{question.sub}</p>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {visionCards
                          .filter((card) => card.questionId === question.id)
                          .map((card) => (
                            <button
                              key={card.title}
                              type="button"
                              onClick={() => setActiveVisionCard(card)}
                              className="border border-white/16 bg-white/92 p-1 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/70"
                              aria-label={`Open ${card.title}`}
                            >
                              <img
                                src={card.image}
                                alt=""
                                width={720}
                                height={720}
                                loading="lazy"
                                decoding="async"
                                className="aspect-square w-full object-cover opacity-90 mix-blend-multiply saturate-[0.82] contrast-[1.08]"
                              />
                            </button>
                          ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 hidden border border-white/10 px-4 py-2 text-[11px] text-white/42 md:block">
                Click an image to read more
              </div>

              <AnimatePresence>
                {activeVisionCard && (
                  <motion.div
                    className="absolute inset-0 z-50 flex items-center justify-center bg-[#0B0E14]/82 p-5 backdrop-blur-[3px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActiveVisionCard(null)}
                  >
                    <motion.article
                      className="w-full max-w-[420px] overflow-hidden border border-white/14 bg-white text-[#0B0E14] shadow-[0_28px_90px_rgba(0,0,0,0.34)]"
                      initial={{ opacity: 0, y: 18, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.97 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <figure className="relative aspect-[1.24] bg-white">
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

          <div className="mt-16">
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
                      <BoulaiListDot count={index + 1} className="mt-1 text-primary" />
                      <div>
                        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          {engine.name} / {engine.role}
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
