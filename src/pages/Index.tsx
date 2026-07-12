import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import HeroCausalAnimation from "@/components/HeroCausalAnimation";
import ContactCTA from "@/components/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroLines = ["Scientific AI for ", "clinical decisions."];

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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-hero min-h-screen overflow-hidden border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative flex min-h-screen items-center py-24 md:py-32">
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
                  Explore Boulai
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, filter: "blur(18px)", scale: 0.992 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 1.15, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="page-title max-w-[56rem]"
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
                  className="mt-8 max-w-[40rem] text-[0.94rem] leading-[1.9] text-white/70 md:text-[1.02rem]"
                >
                  Boulai is a research-and-product startup: our proprietary models turn clinical and real-world data
                  into decision-grade causal evidence, from patient-level effects to hidden structure and hypothesis
                  testing.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: 0.76, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                >
                  <Button
                    size="sm"
                    className="h-10 bg-white px-4 text-[11px] tracking-[0.2em] text-[#121419] hover:bg-white/[92%]"
                    asChild
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <a
                    href="#vision"
                    className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/[56%] transition-colors hover:text-white"
                  >
                    View Vision
                  </a>
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
                <h2 className="section-title">
                  A modern Boulē
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Boulai takes its name from the ancient Greek <em>Boulē</em>: a place where collective judgment was
                  formed. We reinterpret that idea for high-complexity discovery, bringing human expertise and machine
                  intelligence around the same evidence.
                </p>
                <figure className="mt-10 max-w-[680px]">
                  <img
                    src="/brand/vision-boule-line-instrument.png"
                    alt="A modern research Boulē with a causal reasoning instrument at its center."
                    width={1180}
                    height={554}
                    loading="lazy"
                    decoding="async"
                    className="w-full select-none opacity-[0.92] mix-blend-multiply saturate-[0.88] contrast-[1.16]"
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
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        0{index + 1}
                      </p>
                      <h3 className="card-title mt-2">{item.title}</h3>
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
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        0{index + 1}
                      </p>
                      <p className="mt-2 max-w-md text-base leading-relaxed text-foreground/[84%]">{item}</p>
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
                  <h3 className="card-title mb-3">{card.title}</h3>
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
                {industries.map((item, i) => (
                  <div key={item.title} className="premium-panel p-6 h-full">
                    <p className="text-xs font-semibold text-primary">0{i + 1}</p>
                    <h3 className="card-title mt-4">{item.title}</h3>
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
