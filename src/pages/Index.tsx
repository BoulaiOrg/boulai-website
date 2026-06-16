import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const heroLines = ["Scientific AI for", "R&D decisions."];
const focusAreas = ["Scientific evidence", "Trial analysis", "Causal discovery", "R&D strategy"];

const methodPillars = [
  {
    title: "Inference",
    desc: "Estimate what the evidence supports, where uncertainty remains, and which explanations are still plausible.",
  },
  {
    title: "Machine learning",
    desc: "Use models to discover patterns, heterogeneity, and predictive structure without mistaking every signal for science.",
  },
  {
    title: "Reasoning",
    desc: "Connect data, mechanisms, assumptions, and domain knowledge into arguments that experts can inspect.",
  },
];

const methodOutcomes = [
  "Organize scientific evidence around explicit questions, not disconnected dashboards.",
  "Compare competing mechanisms before the team commits to a program, cohort, or endpoint.",
  "Prioritize what deserves validation next, with assumptions and uncertainty kept visible.",
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
          <div className="flex min-h-[calc(100vh-5rem)] items-center py-28 md:py-36">
            <div className="max-w-6xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-8 h-px w-20 origin-left bg-white/16"
                />
                <motion.p
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="inverse-eyebrow mb-5"
                >
                  Scientific intelligence for BioPharma R&amp;D
                </motion.p>
                <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[0.86] tracking-[-0.09em] text-white sm:text-6xl md:text-7xl lg:text-[7.5rem]">
                  {heroLines.map((line, index) => (
                    <span key={line} className="block overflow-hidden pb-2">
                      <motion.span
                        initial={{ y: "108%", opacity: 0, filter: "blur(12px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.9, delay: 0.24 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="block will-change-transform"
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 max-w-3xl text-base leading-relaxed text-white/66 md:text-2xl"
                >
                  BOULAI helps research teams reason across data, hypotheses, mechanisms, and evidence so they can
                  decide what to test, validate, or deprioritize next.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/44"
                >
                  {focusAreas.map((area, index) => (
                    <span key={area} className="inline-flex items-center gap-6">
                      <span>{area}</span>
                      {index < focusAreas.length - 1 ? <span className="hidden sm:inline-block text-white/18">/</span> : null}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-12 flex flex-col gap-4 sm:flex-row"
                >
                  <Button size="lg" className="bg-white text-[#121419] hover:bg-white/92" asChild>
                    <a href="#waitlist">Request Intro</a>
                  </Button>
                  <Button
                    size="lg"
                    className="border border-white/14 bg-transparent text-white hover:bg-white hover:text-[#121419]"
                    asChild
                  >
                    <Link to="/product">View BOULAI Discovery</Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.94, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-14 max-w-4xl border-t border-white/10 pt-6 text-sm leading-relaxed text-white/52"
                >
                  BOULAI combines inference, machine learning, and scientific reasoning to help teams move from
                  fragmented evidence to decision-grade judgment.
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-mid border-b border-border py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="eyebrow mb-4">Method</p>
                <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                  Scientific AI should make reasoning easier to inspect.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  BOULAI combines inference, machine learning, and scientific reasoning so teams can organize evidence,
                  compare explanations, and decide what deserves validation.
                </p>
              </div>
              <div className="premium-panel p-8 md:p-10">
                <p className="eyebrow mb-6">What changes in practice</p>
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
