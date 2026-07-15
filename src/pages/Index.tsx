import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
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

const decisionConcepts = [
  {
    title: "Robust analysis",
    engine: "Atlas",
    image: "/brand/product-atlas-instrument.png",
    x: 14,
    y: 24,
    problem: "Clinical teams need analyses that hold up under scrutiny, not just fast summaries.",
    output: "Auditable statistical and econometric workflows with assumptions, uncertainty, and reproducible outputs.",
  },
  {
    title: "Trial failure diagnosis",
    engine: "Icarus",
    image: "/brand/product-icarus-instrument.png",
    x: 82,
    y: 22,
    problem: "A failed trial often leaves teams with measured data that does not explain the result.",
    output: "Candidate external or unmeasured causes turned into testable scientific hypotheses.",
  },
  {
    title: "External causes",
    engine: "Icarus",
    image: "/brand/product-icarus-instrument.png",
    x: 18,
    y: 58,
    problem: "Important drivers can sit outside the variables already captured in the dataset.",
    output: "Structured hypotheses about missing causes, confounding pathways, and external mechanisms.",
  },
  {
    title: "Clinical theory testing",
    engine: "Locus",
    image: "/brand/product-locus-instrument.png",
    x: 82,
    y: 58,
    problem: "Clinical theories become expensive when they are carried forward without being stress-tested.",
    output: "Causal DAG checks that expose fragile assumptions, unsupported pathways, and competing mechanisms.",
  },
  {
    title: "Patient heterogeneity",
    engine: "Atlas + Icarus",
    image: "/brand/product-atlas-instrument.png",
    x: 36,
    y: 14,
    problem: "Average effects can hide the patient groups where a mechanism actually matters.",
    output: "Inspectable subgroup patterns and heterogeneous-response hypotheses for deeper validation.",
  },
  {
    title: "Anomaly detection",
    engine: "Locus",
    image: "/brand/product-locus-instrument.png",
    x: 64,
    y: 14,
    problem: "Unexpected behavior in clinical data is hard to interpret without a causal reference model.",
    output: "Anomalies surfaced against expected clinical mechanisms, with evidence your team can audit.",
  },
  {
    title: "False confidence",
    engine: "Locus",
    image: "/brand/product-locus-instrument.png",
    x: 36,
    y: 76,
    problem: "Weak signals become costly when they are promoted into trial, biomarker, or portfolio decisions.",
    output: "Assumption stress-tests that show where evidence is too fragile to justify commitment.",
  },
  {
    title: "Decision speed",
    engine: "Atlas",
    image: "/brand/product-atlas-instrument.png",
    x: 64,
    y: 76,
    problem: "Expert-grade analysis often takes too long to fit real R&D decision cycles.",
    output: "Frontier statistical workflows compressed into minimal time without losing traceability.",
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
  const [activeConceptIndex, setActiveConceptIndex] = useState(0);
  const activeConcept = decisionConcepts[activeConceptIndex];

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
            <div className="relative min-h-[650px] p-6 md:p-10">
              <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                {decisionConcepts.map((concept) => (
                  <line
                    key={concept.title}
                    x1="50"
                    y1="47"
                    x2={concept.x}
                    y2={concept.y}
                    stroke="rgba(255,255,255,0.13)"
                    strokeWidth="0.12"
                  />
                ))}
              </svg>

              <div className="absolute left-1/2 top-[46%] hidden w-[min(520px,72%)] -translate-x-1/2 -translate-y-1/2 text-center md:block">
                <p className="inverse-eyebrow mb-5">Decision system</p>
                <h2 className="font-display text-[2.55rem] font-normal leading-[1.02] text-white md:text-[3.25rem]">
                  Boulai is built for decisions where uncertainty is expensive.
                </h2>
              </div>

              <div className="hidden md:block">
                {decisionConcepts.map((concept, index) => (
                  <button
                    key={concept.title}
                    type="button"
                    onClick={() => setActiveConceptIndex(index)}
                    aria-pressed={activeConceptIndex === index}
                    className={`absolute z-10 flex w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center transition-opacity hover:opacity-100 ${
                      activeConceptIndex === index ? "opacity-100" : "opacity-70"
                    }`}
                    style={{ left: `${concept.x}%`, top: `${concept.y}%` }}
                  >
                    <span className={`block h-16 w-16 overflow-hidden border bg-white transition-colors ${
                      activeConceptIndex === index ? "border-white" : "border-white/20"
                    }`}>
                      <img
                        src={concept.image}
                        alt=""
                        width={720}
                        height={720}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover saturate-[0.85] contrast-[1.02]"
                      />
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/80">
                      {concept.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="md:hidden">
                <p className="inverse-eyebrow mb-5">Decision system</p>
                <h2 className="font-display text-[2.25rem] font-normal leading-[1.05] text-white">
                  Built for decisions where uncertainty is expensive.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-white/[62%]">
                  Select a signal to see what Boulai turns into auditable clinical evidence.
                </p>
                <div className="mt-8 space-y-3">
                  {decisionConcepts.map((concept, index) => (
                    <div key={concept.title}>
                      <button
                        type="button"
                        onClick={() => setActiveConceptIndex(index)}
                        className={`flex w-full items-center gap-4 border p-3 text-left transition-colors ${
                          activeConceptIndex === index
                            ? "border-white bg-white text-[#0B0E14]"
                            : "border-white/14 text-white"
                        }`}
                      >
                        <img
                          src={concept.image}
                          alt=""
                          width={720}
                          height={720}
                          loading="lazy"
                          decoding="async"
                          className="h-12 w-12 shrink-0 object-cover"
                        />
                        <span className="text-[11px] font-medium uppercase tracking-[0.16em]">
                          {concept.title}
                        </span>
                      </button>
                      {activeConceptIndex === index && (
                        <div className="border-x border-b border-white bg-white p-4 text-[#0B0E14]">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground/50">
                            {concept.engine}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="font-medium text-foreground">Problem:</span> {concept.problem}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            <span className="font-medium text-foreground">Boulai produces:</span> {concept.output}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-10 left-1/2 right-auto z-20 hidden w-[560px] -translate-x-1/2 border border-white/12 bg-white p-6 text-[#0B0E14] shadow-[0_24px_80px_rgba(0,0,0,0.26)] md:block">
                <div className="flex items-start gap-4">
                  <img
                    src={activeConcept.image}
                    alt=""
                    width={720}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="hidden h-16 w-16 shrink-0 object-cover sm:block"
                  />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/50">
                      {activeConcept.engine}
                    </p>
                    <h3 className="mt-2 text-[1.05rem] font-medium leading-tight text-foreground">
                      {activeConcept.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">Problem:</span> {activeConcept.problem}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">Boulai produces:</span> {activeConcept.output}
                    </p>
                  </div>
                </div>
              </div>
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
