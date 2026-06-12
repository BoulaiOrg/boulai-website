import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const principles = [
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

const methods = [
  "Causal inference and graphical models",
  "Statistical learning for scientific datasets",
  "Subgroup and heterogeneity analysis",
  "Robustness and sensitivity workflows",
  "Evidence synthesis and hypothesis generation",
  "Governance-ready scientific review artifacts",
];

const Research = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="section-mid pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <FadeIn>
          <p className="eyebrow mb-5">Method</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.03] text-foreground mb-7">
            Scientific AI should make reasoning easier to inspect.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            BOULAI is built around a simple idea: AI should help teams organize evidence, test assumptions,
            and compare explanations before high-stakes scientific decisions are made.
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
                <p className="text-xs font-semibold text-primary mb-4">0{i + 1}</p>
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
            <p className="eyebrow mb-4">Roadmap</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight text-foreground">
              A methodological foundation for decision-grade discovery.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              The platform combines causal reasoning, statistical analysis, evidence synthesis, and review workflows
              so scientific teams can move from complex data to clearer decisions.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="premium-panel rounded-[2rem] p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {methods.map((method) => (
                  <div key={method} className="rounded-2xl border border-border bg-muted/35 p-4">
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
