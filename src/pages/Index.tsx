import { Link } from "react-router-dom";
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
    desc: "Test clinical hypotheses against data and find where assumptions fail.",
  },
];

const methodPillars = [
  {
    title: "Research translated",
    desc: "We turn frontier causal AI, statistics, and scientific reasoning into product modules for real R&D decisions.",
  },
  {
    title: "Built with scientists",
    desc: "Methods are shaped with academic and industry partners, so products reflect how scientists test and use evidence.",
  },
  {
    title: "Internal research engine",
    desc: "Boulai develops proprietary methods internally, then ships them as focused tools rather than generic AI wrappers.",
  },
];

const methodOutcomes = [
  "Frontier causal AI research converted into usable decision workflows.",
  "Scientific teams, academic partners, and industry R&D working around inspectable evidence.",
  "Products that make hypotheses, assumptions, and causal explanations easier to test before costly commitments.",
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
    title: "Discovery focus",
    desc: "Boulai Discovery is built on this vision, turning complex data into hypotheses, anomalies, and decision-grade causal evidence.",
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
                Boulai is a research and product company building Scientific AI systems for biopharma and clinical
                research teams: grounded in human causal intelligence, built to accelerate R&D.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button className="bg-[#E6E8EB] text-[#0B0E14] hover:bg-[#A9B0BC]" size="lg" asChild>
                  <Link to="/contact">Book a Demo</Link>
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="section-mid py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="section-title">Introducing Boulai Discovery</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                It launches with three modules — Atlas 1.0, Icarus 1.0, and Locus 1.0 — built to help teams analyze
                biomedical data, uncover hidden causal drivers, and stress-test clinical hypotheses.
              </p>
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
                  Causal AI research becomes decision software.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                  Boulai translates frontier research in causal AI for science into focused products for R&D teams. We
                  sit between academia and industry, turning rigorous methods into workflows that make clinical and
                  discovery decisions more targeted, traceable, and faster.
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
                <h2 className="section-title">
                  Boulai Discovery is built on this approach.
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
