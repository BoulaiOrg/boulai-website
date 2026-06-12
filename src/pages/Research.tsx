import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, GitPullRequestArrow, Microscope, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: <GitPullRequestArrow className="w-7 h-7 text-primary" />,
    title: "Causal structure first",
    desc: "We treat a DAG as a scientific theory to be tested, not a decorative graph added after analysis.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "No forced anomalies",
    desc: "A clean deterministic dataset should return zero anomalies. This is a product rule and a scientific principle.",
  },
  {
    icon: <Microscope className="w-7 h-7 text-primary" />,
    title: "Evidence before language",
    desc: "LLM agents operate after statistical diagnostics. They synthesize, challenge, and propose - they do not decide the facts.",
  },
];

const methods = [
  "SCM and DAG stress-testing",
  "Baseline-relative surprising evidence",
  "Budhathoki-style episodic attribution",
  "Varici-style locality diagnostics",
  "Posterior-ready mechanism learning roadmap",
  "Critic-guarded scientific hypothesis generation",
];

const Research = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="section-mid pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <FadeIn>
          <p className="eyebrow mb-5">Research frame</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-foreground mb-7">
            Scientific AI should be testable, falsifiable, and inspectable.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            BOULAi is built around a simple constraint: before AI proposes narratives, the system must expose
            what the data says about the causal theory, where the evidence is surprising, and how reliable the
            localization is.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="section-deep py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, i) => (
            <FadeIn key={principle.title} delay={i * 0.1}>
              <div className="premium-panel rounded-3xl p-8 h-full">
                <div className="mb-6">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="section-mid py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <FadeIn>
            <BookOpen className="h-10 w-10 text-primary mb-6" />
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-foreground">
              A methodological roadmap for decision-grade discovery.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              The current platform operationalizes causal stress-testing and anomaly explanation. The roadmap
              extends this into richer Bayesian mechanism learning, protocol-aware trial analysis, and
              governance-grade evidence packages.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="premium-panel rounded-[2rem] p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {methods.map((method) => (
                  <div key={method} className="rounded-2xl border border-border/40 bg-background/35 p-4">
                    <p className="text-sm font-medium text-foreground">{method}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Research;
