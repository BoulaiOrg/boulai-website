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
    title: "Compress analysis cycles without losing rigor.",
    description:
      "Atlas is the analysis workbench of Boulai Discovery. It helps biostatistics, translational, and clinical strategy teams run the analyses they would normally build in R, Stata, Python, or SAS, but faster, with guided model selection, automatic diagnostics, and reusable outputs.",
    payoff:
      "Use it to profile datasets, inspect missingness and variable quality, compare cohorts, fit statistical models, evaluate treatment effects, check balance, explore robustness, and generate audit-ready tables and summaries.",
  },
  {
    name: "Icarus",
    logo: "/brand/module-icarus-logo.png",
    logoAlt: "Icarus logo",
    version: "1.0",
    image: "/brand/product-icarus-instrument.png",
    imageAlt: "Clinical signal layers mapping measured data to candidate external causes.",
    title: "Find hidden drivers behind response and failure.",
    description:
      "Icarus is the discovery engine of Boulai Discovery. It is designed for datasets where observed variables do not fully explain what happened: hidden responder groups, unmeasured biological programs, technical sources of variation, or latent confounding patterns.",
    payoff:
      "Use it when trial outcomes are heterogeneous, when a signal fails without an obvious explanation, or when a team needs hypothesis-generating evidence on candidate drivers, subgroup memberships, and follow-up interpretations.",
  },
  {
    name: "Locus",
    logo: "/brand/module-locus-logo.png",
    logoAlt: "Locus logo",
    version: "1.0",
    image: "/brand/product-locus-instrument.png",
    imageAlt: "Causal graph instrument for stress-testing clinical theories and anomalies.",
    title: "Stress-test causal hypotheses before they drive decisions.",
    description:
      "Locus is the causal theory stress-testing engine of Boulai Discovery. It starts from a scientist-authored DAG and asks where the declared theory fails to explain the data, localizing stress to the nodes, relationships, or mechanisms most responsible for the mismatch.",
    payoff:
      "Use it to evaluate whether a clinical mechanism is compatible with observed data, identify strained causal neighborhoods, compare alternative explanations, and generate audited next-step hypotheses with rejected alternatives and evidence IDs.",
  },
];

const productLevers = [
  {
    title: "Use existing data harder",
    desc: "Turn clinical, real-world, and translational datasets into structured analyses before teams collect more data or commit to a new study.",
  },
  {
    title: "Reduce decision risk",
    desc: "Stress-test assumptions, subgroup patterns, and alternative mechanisms before they become trial, biomarker, or portfolio commitments.",
  },
  {
    title: "Find responder structure",
    desc: "Detect heterogeneous response patterns, candidate subgroups, and hidden clinical structure that average effects can obscure.",
  },
  {
    title: "Move to the next step",
    desc: "Translate analyses into traceable hypotheses, follow-up branches, and decision-ready summaries teams can inspect together.",
  },
];

const Product = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <main>
      <section className="section-hero pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <h1 className="page-title max-w-4xl">
              Boulai Discovery
            </h1>

            <p className="max-w-2xl text-[1.08rem] font-light leading-[1.42] text-[#E6E8EB]/72 md:text-[1.2rem] lg:pt-4">
              The causal AI workbench for biopharma and clinical research teams: analyze biomedical data, uncover
              hidden causal drivers, stress-test DAGs and assumptions, and turn results into causally grounded,
              evidence-backed next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section-mid pt-16 pb-14 md:pt-20 md:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="eyebrow mb-4">Why it matters</p>
              <h2 className="section-title">
                Surface risk and opportunity before they become expensive.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Clinical development still relies on analyses that are slow to assemble, difficult to reproduce, and
                fragmented across tools. At the pace of modern R&amp;D, weak signals can survive too long while valuable
                mechanisms, subgroups, and opportunities go unnoticed.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Boulai Discovery brings causal AI into scientific workflows to uncover hidden relationships, generate
                testable hypotheses, and stress-test them against data. Teams can identify potential risks and promising
                opportunities earlier, with evidence they can trace, inspect, and defend.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[18px] border border-border bg-border md:grid-cols-2">
              {productLevers.map((item, index) => (
                <article key={item.title} className="bg-card p-6">
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

      <section className="section-deep pt-8 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="section-title">A scientific workbench for evidence-backed clinical development decisions.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Boulai Discovery is not a dashboard or a generic AI chat layer. It is a modular causal analysis product
              for teams that need to decide which signals to trust, which patient groups or mechanisms deserve follow-up,
              and which assumptions are too weak to carry into trial or portfolio decisions.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {engines.map((engine) => (
              <article
                key={engine.name}
                className="premium-panel h-full overflow-hidden"
              >
                <figure className="h-56 border-b border-border/70 bg-[#E6E8EB] md:h-48">
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
                    className={`mt-0.5 ${engine.name === "Icarus" ? "h-8 w-8" : "h-7 w-7"} shrink-0 select-none object-contain opacity-75 brightness-0`}
                  />
                  <div>
                    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {engine.name}
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
