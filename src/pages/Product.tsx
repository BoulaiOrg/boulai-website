import BoulaiListDot from "@/components/BoulaiListDot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const engines = [
  {
    name: "Atlas",
    logo: "/brand/module-atlas-logo.png",
    logoAlt: "Atlas logo",
    version: "1.0",
    image: "/brand/product-atlas-instrument.png",
    imageAlt: "Layered analytical interface for robust auditable statistical analysis.",
    title: "Run frontier analysis in minimal time.",
    description:
      "Atlas turns clinical and real-world datasets into robust, auditable statistical evidence in minimal time. It is built for teams that need frontier-grade analysis without losing the ability to inspect assumptions, uncertainty, specifications, and reproducibility.",
    payoff:
      "Use it when the question is not only what the data says, but whether the conclusion is strong enough to defend in a clinical, regulatory, or portfolio discussion.",
  },
  {
    name: "Icarus",
    logo: "/brand/module-icarus-logo.png",
    logoAlt: "Icarus logo",
    version: "1.0",
    image: "/brand/product-icarus-instrument.png",
    imageAlt: "Clinical signal layers mapping measured data to candidate external causes.",
    title: "Explain trial failures beyond measured data.",
    description:
      "Icarus searches for plausible external or unmeasured causal drivers behind trial failures, weak replication, or unexpected subgroup behavior. It turns causal discovery outputs into testable explanations that scientists can review, challenge, and prioritize.",
    payoff:
      "Use it when measured variables do not fully explain what happened and the team needs sharper failure diagnosis before deciding what to rescue, redesign, or stop.",
  },
  {
    name: "Locus",
    logo: "/brand/module-locus-logo.png",
    logoAlt: "Locus logo",
    version: "1.0",
    image: "/brand/product-locus-instrument.png",
    imageAlt: "Causal graph instrument for stress-testing clinical theories and anomalies.",
    title: "Test clinical theories and spot anomalies.",
    description:
      "Locus stress-tests scientist-authored clinical theories against data. It compares observed behavior with the causal structure the team believes should hold, surfaces anomalies, and makes competing mechanisms easier to inspect.",
    payoff:
      "Use it when a clinical theory needs to be tested quickly and auditable evidence is required before committing to a costly trial, indication, or portfolio decision.",
  },
];

const productLevers = [
  {
    title: "Recover decision time",
    desc: "Compress repeated exploratory analysis into inspectable causal workflows, so teams spend less time chasing weak or redundant signals.",
  },
  {
    title: "Reduce false confidence",
    desc: "Stress-test assumptions, subgroup patterns, and alternative mechanisms before they become trial, biomarker, or portfolio commitments.",
  },
  {
    title: "Find patient heterogeneity",
    desc: "Detect response patterns and hidden clinical structure that average effects can obscure, especially across complex patient-level data.",
  },
  {
    title: "Protect missed opportunities",
    desc: "Generate testable hypotheses from clinical and real-world evidence, helping teams see plausible paths before they are discarded too early.",
  },
];

const Product = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <main>
      <section className="section-hero border-b border-white/10 pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="inverse-eyebrow mb-5">Boulai Discovery</p>
          <h1 className="page-title mb-7 max-w-4xl">
            Scientific reasoning at the scale of enterprise R&amp;D.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/[66%]">
            The instrumentation layer for translational, clinical, and discovery research.
          </p>

        </div>
      </section>

      <section className="section-mid border-b border-border py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Why it matters</p>
              <h2 className="section-title">
                Built for the cost of being wrong.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Clinical R&amp;D does not only lose money when a trial fails. It loses time when teams pursue weak
                signals, over-trust subgroup patterns, or miss mechanisms hidden in patient-level data. Boulai
                Discovery helps teams inspect uncertainty earlier, before it becomes an expensive decision.
              </p>
            </div>

            <div className="grid gap-px border border-border bg-border md:grid-cols-2">
              {productLevers.map((item, index) => (
                <article key={item.title} className="bg-card p-7">
                  <div className="flex items-start gap-5">
                    <BoulaiListDot count={index + 1} className="mt-1 text-primary" />
                    <div>
                      <h3 className="card-title mb-3">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-deep border-b border-border py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">What you buy</p>
            <h2 className="section-title">Decision-grade evidence before expensive commitments.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Boulai Discovery is not a dashboard or a generic AI chat layer. It is a causal analysis product that helps
              teams decide which signals to trust, which hypotheses to test next, and which assumptions are too weak to
              carry into trial or portfolio decisions.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {engines.map((engine) => (
              <article
                key={engine.name}
                className="premium-panel h-full overflow-hidden"
              >
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
                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {engine.name} {engine.version}
                    </p>
                    <h3 className="card-title mb-4">{engine.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{engine.description}</p>
                    <p className="mt-6 border-t border-border/70 pt-4 text-sm leading-relaxed text-foreground/[72%]">
                      {engine.payoff}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Product;
