import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import HeroCausalAnimation from "@/components/HeroCausalAnimation";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroLines = ["Scientific AI for ", "clinical decisions."];

const methodPillars = [
  {
    title: "Scientific intelligence",
    desc: "Organize data, evidence, assumptions, and domain context into a decision layer experts can inspect.",
  },
  {
    title: "Causal reasoning",
    desc: "Compare mechanisms, intervention pathways, and competing explanations instead of stopping at correlation.",
  },
  {
    title: "Machine learning + agents",
    desc: "Use models and agentic workflows to surface structure, synthesize evidence, and accelerate scientific analysis.",
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
    desc: "BOULAI is built around the idea that better discovery happens when domain expertise and machine intelligence work around the same evidence.",
  },
  {
    title: "Research-grade methods",
    desc: "We go beyond pattern-matching by combining causal reasoning, exploratory AI, and explainable statistical workflows teams can challenge and inspect.",
  },
  {
    title: "Discovery first",
    desc: "BOULAI Discovery is the first system built on this vision, turning complex data into hypotheses, anomalies, and decision-grade causal evidence.",
  },
];

const reviewPrinciples = [
  {
    title: "Explicit assumptions",
    desc: "Scientific teams should be able to see which assumptions are being used before a model produces an answer.",
  },
  {
    title: "Inspectable evidence",
    desc: "Outputs should make uncertainty, robustness, and competing explanations easier to review, not harder.",
  },
  {
    title: "Human scientific judgment",
    desc: "AI can help structure analysis and synthesis, but the decision remains accountable to expert review.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-hero min-h-[calc(100vh-5rem)] border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative flex min-h-[calc(100vh-5rem)] items-center py-24 md:py-32">
            <div className="relative z-10 max-w-none lg:w-[68%] lg:pr-[12rem] xl:w-[65%] xl:pr-[15rem]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="inverse-eyebrow mb-6"
                >
                  Explore BOULAI
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, filter: "blur(18px)", scale: 0.992 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display max-w-[60rem] text-[3.15rem] font-normal leading-[0.94] tracking-[-0.055em] text-white sm:text-[3.9rem] md:text-[4.45rem] lg:text-[4.7rem] xl:text-[5.05rem]"
                >
                  {heroLines.map((line) => (
                    <span
                      key={line}
                      className="block pb-2 will-change-transform md:whitespace-nowrap"
                      style={{ fontKerning: "normal", fontVariantLigatures: "common-ligatures" }}
                    >
                      {line}
                    </span>
                  ))}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 max-w-[40rem] text-[0.98rem] leading-[1.9] text-white/70 md:text-[1.08rem]"
                >
                  BOULAI turns clinical and real-world data into decision-grade causal evidence, from patient-level
                  effects to hidden structure and clinical hypothesis testing.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: 0.76, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                >
                  <Button
                    size="sm"
                    className="h-10 bg-white px-4 text-[11px] tracking-[0.2em] text-[#121419] hover:bg-white/92"
                    asChild
                  >
                    <a href="#waitlist">Request Intro</a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute right-[-6%] top-1/2 hidden w-[58%] -translate-y-1/2 items-center justify-end opacity-[0.98] lg:flex xl:right-[-4%] xl:w-[56%]">
              <HeroCausalAnimation />
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
                <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                  A modern Boule for clinical discovery.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  BOULAI takes its name from the ancient Greek <em>boule</em>: a place where collective judgment was
                  formed. We reinterpret that idea for high-complexity discovery, bringing human expertise and machine
                  intelligence around the same evidence.
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/78">
                  BOULAI Discovery is the first platform built on that vision. It helps teams turn clinical and
                  real-world data into testable hypotheses, explainable anomalies, and causal evidence they can inspect
                  before committing to expensive decisions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="premium-panel p-8 md:p-10">
                <p className="eyebrow mb-6">What this means in practice</p>
                <div className="space-y-6">
                  {visionPrinciples.map((item, index) => (
                    <div key={item.title} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        0{index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
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
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">Methodological foundation</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                  Scientific intelligence should make causal reasoning easier to inspect.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  BOULAI combines machine learning, advanced statistics, causal reasoning, and agentic scientific
                  workflows so teams can organize evidence, test competing explanations, and decide what deserves
                  validation.
                </p>
              </div>
              <div className="premium-panel p-8 md:p-10">
                <p className="eyebrow mb-6">What BOULAI integrates</p>
                <div className="space-y-6">
                  {methodOutcomes.map((item, index) => (
                    <div key={item} className="border-t border-border/70 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        0{index + 1}
                      </p>
                      <p className="mt-2 max-w-md text-base leading-relaxed text-foreground/84">{item}</p>
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
                  <p className="text-xs font-semibold text-primary mb-4">0{i + 1}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
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
              <p className="eyebrow mb-4">Scientific review</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                A methodological foundation for decision-grade discovery.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                The goal is not to replace expert judgment. It is to make the path from data to decision clearer,
                more explicit, and easier to challenge.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid sm:grid-cols-3 gap-4">
                {reviewPrinciples.map((item, i) => (
                  <div key={item.title} className="premium-panel p-6 h-full">
                    <p className="text-xs font-semibold text-primary">0{i + 1}</p>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
                <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                  BOULAI Discovery is the first product built on this approach.
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  It helps teams analyze scientific datasets, explore causal hypotheses, and identify patterns that
                  deserve deeper validation.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Button size="lg" asChild>
                  <Link to="/product">Explore BOULAI Discovery</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
