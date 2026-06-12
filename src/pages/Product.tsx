import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Binary,
  BrainCircuit,
  FileCheck2,
  GitBranch,
  Microscope,
  Network,
  ScanSearch,
  SplitSquareHorizontal,
  Upload,
} from "lucide-react";

const workflow = [
  {
    icon: <Upload className="w-6 h-6 text-primary" />,
    title: "Bring data and theory",
    desc: "Upload trial, experimental, or translational data. Add a DAG, reference dataset, target outcome, and scientific context when available.",
  },
  {
    icon: <Binary className="w-6 h-6 text-primary" />,
    title: "Estimate conditional mechanisms",
    desc: "Learn local SCM mechanisms from D0 or use declared structural equations when the science is already specified.",
  },
  {
    icon: <ScanSearch className="w-6 h-6 text-primary" />,
    title: "Stress-test the theory",
    desc: "Score D1 against the maintained causal model using tail probabilities rather than forced top-percentile outliers.",
  },
  {
    icon: <FileCheck2 className="w-6 h-6 text-primary" />,
    title: "Review decision outputs",
    desc: "Inspect anomalies, root explanations, locality diagnostics, subgroup hypotheses, and audit-ready artifacts.",
  },
];

const engines = [
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: "Causal theory stress testing",
    desc: "Detect where a declared DAG/SCM stops explaining the observed data. Built for model criticism, not blind storytelling.",
  },
  {
    icon: <SplitSquareHorizontal className="w-8 h-8 text-primary" />,
    title: "Subgroup and regime discovery",
    desc: "Compare reference and stress regimes across treatment arms, sites, time windows, batches, or external validation cohorts.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Guarded scientific agents",
    desc: "LLM agents synthesize evidence after the statistical stages. They do not decide anomalies; they interpret auditable outputs.",
  },
];

const outputs = [
  "Row-level anomaly probabilities and severity",
  "Learned local mechanism coefficients",
  "Causal attribution for surprising evidence",
  "DAG stress locality and reliability flags",
  "Candidate subgroup and follow-up experiment hypotheses",
  "Exportable artifacts for review and governance",
];

const Product = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="section-mid pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <FadeIn>
            <p className="eyebrow mb-5">BouleDiscovery</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.03] text-foreground mb-7">
              Causal analysis for trial and translational data.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              BouleDiscovery helps teams interrogate outcomes, patient subgroups, endpoint assumptions,
              treatment pathways, and hidden mechanism shifts with a workflow designed for scientific review.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#waitlist">Request Demo</a>
              </Button>
              <Button variant="ghost-light" size="lg" asChild>
                <Link to="/research">Read the Research Frame</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="premium-panel rounded-[2rem] p-7">
              <div className="flex items-center justify-between border-b border-border/40 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Analysis run</p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">SCM stress test</h2>
                </div>
                <GitBranch className="h-9 w-9 text-secondary" />
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  ["Input", "DAG + D0/D1 + target outcome"],
                  ["Rule", "p_tail <= alpha, no forced anomalies"],
                  ["Output", "Anomalies, root explanation, locality"],
                  ["Interpretation", "Evidence-bound hypotheses"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-muted/35 border border-border p-4">
                    <p className="text-xs font-semibold text-primary">{label}</p>
                    <p className="mt-1 text-sm text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="section-deep py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <p className="eyebrow mb-4 text-center">Workflow</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground text-center mb-16">
            From causal theory to auditable evidence.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {workflow.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.08}>
              <div className="premium-panel rounded-3xl p-6 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-5">
                  {step.icon}
                </div>
                <p className="text-xs font-semibold text-primary mb-2">Step {i + 1}</p>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-mid py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <p className="eyebrow mb-4 text-center">Engines</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground text-center mb-16">
            Built for the questions BioPharma teams actually ask.
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engines.map((engine, i) => (
            <FadeIn key={engine.title} delay={i * 0.1}>
              <div className="premium-panel rounded-3xl p-8 h-full">
                <div className="mb-6">{engine.icon}</div>
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
            <Microscope className="h-10 w-10 text-primary mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
              Outputs your scientific team can interrogate.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Every run is designed to produce evidence objects - not just a generated paragraph.
              Scientists can inspect rows, mechanisms, assumptions, and follow-up hypotheses.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid sm:grid-cols-2 gap-4">
              {outputs.map((item) => (
                <div key={item} className="premium-panel rounded-2xl p-5">
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <WaitlistSection />
    <Footer />
  </div>
);

export default Product;
