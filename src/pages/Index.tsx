import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import CausalGraph from "@/components/CausalGraph";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Activity, Atom, ChartNoAxesCombined, FlaskConical, Network, ShieldCheck } from "lucide-react";

const focusAreas = [
  "Trial optimization",
  "Causal theory testing",
  "Subgroup discovery",
  "Outcome analysis",
];

const platformCards = [
  {
    icon: <Network className="w-7 h-7 text-primary" />,
    title: "Stress-test causal theories",
    desc: "Turn a declared DAG into an auditable SCM stress test. See where observed data violates the mechanism you thought was true.",
  },
  {
    icon: <Activity className="w-7 h-7 text-primary" />,
    title: "Reduce false signals",
    desc: "Separate rare-but-valid patients from true surprising evidence, so teams do not overreact to noisy tails or miss meaningful deviations.",
  },
  {
    icon: <Atom className="w-7 h-7 text-primary" />,
    title: "Find actionable subgroups",
    desc: "Surface hidden response patterns, patient segments, and mechanism shifts that can inform trial design and translational strategy.",
  },
];

const decisionRows = [
  {
    label: "Clinical development",
    value: "Which patients, sites, and endpoints are putting the theory under stress?",
  },
  {
    label: "Translational science",
    value: "Which biomarkers or pathways explain surprising treatment response?",
  },
  {
    label: "R&D governance",
    value: "Which findings are robust enough to justify the next experiment?",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-screen flex items-center section-deep overflow-hidden pt-24">
        <CausalGraph />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_25%,hsl(var(--secondary)/0.10),transparent_30rem)]" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div className="max-w-4xl">
              <FadeIn>
                <p className="eyebrow mb-5">Causal intelligence for BioPharma R&D</p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-foreground">
                  Causal intelligence for scientific and strategic decisions.
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-7 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  BOULAi helps clinical, translational, and strategy teams test causal theories against real data,
                  explain surprising evidence, discover patient subgroups, and improve confidence in high-stakes
                  R&D decisions.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <span key={area} className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#waitlist">Request Pilot</a>
                  </Button>
                  <Button variant="ghost-light" size="lg" asChild>
                    <Link to="/product">Explore the Platform</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <div className="premium-panel rounded-[2rem] p-6 md:p-8">
                <div className="flex items-center justify-between border-b border-border/40 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Evidence cockpit</p>
                    <h2 className="mt-2 text-2xl font-semibold text-foreground">Theory under stress</h2>
                  </div>
                  <ShieldCheck className="h-9 w-9 text-secondary" />
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    ["Stage 0", "Surprising evidence", "0 forced anomalies"],
                    ["Stage 1", "Root explanation", "Causal attribution"],
                    ["Stage 2", "Regime locality", "DAG stress map"],
                    ["Stage 3", "Scientific hypotheses", "Critic-guarded agents"],
                  ].map(([stage, title, meta]) => (
                    <div key={stage} className="rounded-2xl border border-border bg-muted/35 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold text-primary">{stage}</p>
                          <p className="mt-1 text-sm font-semibold text-foreground">{title}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{meta}</p>
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
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Why BOULAi</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
                Cleaner evidence for high-stakes R&D decisions.
              </h2>
            </div>
          </FadeIn>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {platformCards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="premium-panel rounded-3xl p-7 h-full">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-deep py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <FadeIn>
              <p className="eyebrow mb-4">First solution</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight">Boulai Discovery</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                A causal discovery and theory-testing workbench for teams analyzing trial, experimental, and
                translational datasets. The product is one solution in the BOULAi platform, not the whole vision.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/product">See Boulai Discovery</Link>
              </Button>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="premium-panel rounded-[2rem] overflow-hidden">
                {decisionRows.map((row, i) => (
                  <div key={row.label} className="grid md:grid-cols-[0.38fr_0.62fr] gap-4 border-b border-border/35 p-6 last:border-b-0">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        0{i + 1}
                      </span>
                      <p className="text-sm font-semibold text-foreground">{row.label}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{row.value}</p>
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
            <div className="premium-panel rounded-[2rem] p-8 md:p-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
              <div>
                <ChartNoAxesCombined className="h-10 w-10 text-primary mb-5" />
                <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                  Designed for decisions, not just insight.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Prioritize trial design changes",
                  "Explain anomalous patient response",
                  "Pressure-test endpoint assumptions",
                  "Identify subgroup hypotheses to validate",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-muted/35 p-4">
                    <FlaskConical className="h-5 w-5 text-secondary mb-3" />
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                ))}
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
