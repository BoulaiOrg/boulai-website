import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedBoulaiLogo } from "@/components/AnimatedBoulaiLogo";
import FadeIn from "@/components/FadeIn";
import ContactCTA from "@/components/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const workflow = [
  {
    title: "Bring the dataset",
    desc: "Start from trial, translational, experimental, or observational data with the context needed to interpret it responsibly.",
  },
  {
    title: "Frame the scientific question",
    desc: "Define outcomes, candidate drivers, covariates, groups, and hypotheses before asking the system to analyze the data.",
  },
  {
    title: "Run the analysis",
    desc: "Use statistical and causal workflows to explore patterns, test assumptions, compare explanations, and surface subgroups.",
  },
  {
    title: "Review the evidence",
    desc: "Turn results into inspectable outputs that scientists, clinicians, and decision-makers can challenge together.",
  },
];

const engines = [
  {
    title: "Atlas",
    desc: "Statistics and econometrics for exploring and understanding your data — profiling outcomes, comparing cohorts, and surfacing the signals that deserve deeper analysis.",
  },
  {
    title: "Icarus",
    desc: "Uncovers latent and hidden factors in the data and identifies subgroups with heterogeneous responses to treatments or causal candidates — opening the door to novel discoveries and new experiments.",
  },
  {
    title: "Locus",
    desc: "Takes a causal DAG from the scientist and tests it against the data for anomalies, suggesting new hypotheses and research avenues while reducing false positives and mitigating the risk of false negatives.",
  },
];

const outputs = [
  "Study and dataset readiness summaries",
  "Outcome and subgroup analysis outputs",
  "Causal hypothesis and assumption checks",
  "Robustness and sensitivity notes",
  "Candidate mechanisms for follow-up",
  "Evidence packages for scientific review",
];

const Product = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="section-hero border-b border-white/10 pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <FadeIn>
            <div className="mb-7 flex items-center gap-4">
              <AnimatedBoulaiLogo
                size={56}
                className="shrink-0 text-white"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="inverse-eyebrow mb-2">Boulai Discovery</p>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/[38%]">
                  Scientific AI platform
                </p>
              </div>
            </div>
            <h1 className="mb-7 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-white md:text-7xl">
              A workbench for scientific data, hypotheses, and decisions.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/[66%]">
              Boulai Discovery is built on three proprietary engines — Atlas, Icarus, and Locus — helping teams
              analyze datasets, uncover hidden patterns, test causal hypotheses, and prepare evidence for decisions
              across discovery, trials, and translational research.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#121419] hover:bg-white/[92%]" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button className="border border-white/[14%] bg-transparent text-white hover:bg-white hover:text-[#121419]" size="lg" asChild>
                <Link to="/">View the Approach</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="premium-panel border-white/[12%] bg-white/[0.03] p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-white/[44%]">Solution scope</p>
              <div className="mt-6 grid gap-4">
                {[
                  ["Data", "Trial, translational, experimental, and observational datasets"],
                  ["Questions", "Outcomes, drivers, hypotheses, subgroups, and robustness"],
                  ["Users", "Scientists, clinical teams, data teams, and R&D decision-makers"],
                  ["Goal", "Move from complex evidence to clearer next-step decisions"],
                ].map(([label, value]) => (
                  <div key={label} className="border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-xs font-semibold text-white/[54%]">{label}</p>
                    <p className="mt-1 text-sm text-white/[84%]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="section-deep py-24 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <p className="eyebrow mb-4 text-center">Workflow</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground text-center mb-16">
            A cleaner path from data to scientific review.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {workflow.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <div className="premium-panel p-6 h-full">
                <p className="text-xs font-semibold text-primary mb-4">0{i + 1}</p>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-mid py-24 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <p className="eyebrow mb-4 text-center">The engines</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground text-center mb-16">
            Three engines, one platform.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engines.map((engine, i) => (
            <FadeIn key={engine.title} delay={i * 0.1}>
              <div className="premium-panel p-8 h-full">
                <p className="text-xs font-semibold text-primary mb-4">0{i + 1}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">{engine.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{engine.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-deep py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <FadeIn>
            <p className="eyebrow mb-4">Outputs</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
              Evidence your team can inspect before it acts.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              The product is designed to support scientific judgment, not replace it. Outputs should help teams
              see what is known, what is uncertain, and what deserves validation.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-4">
              {outputs.map((item) => (
                <div key={item} className="premium-panel p-5">
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <ContactCTA />
    <Footer />
  </div>
);

export default Product;
