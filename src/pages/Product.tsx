import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BoulaiListDot from "@/components/BoulaiListDot";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const engines = [
  {
    name: "Atlas",
    role: "Statistics & Econometrics",
    description:
      "Rigorous statistical inference and econometric modeling across trial, observational, and translational datasets.",
  },
  {
    name: "Icarus",
    role: "Causal Discovery",
    description:
      "Discovers candidate causal structures, hidden drivers, and heterogeneous-response subgroups, while AI agents turn causal outputs into testable hypotheses for scientists to review.",
  },
  {
    name: "Locus",
    role: "Causal DAG Stress-Testing",
    description:
      "Stress-tests scientist-authored DAGs against data; AI agents surface violations, compare alternative mechanisms, and generate new hypotheses grounded in the causal model.",
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

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-[#0B0E14] hover:bg-white/[92%]" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button className="border border-white/[14%] bg-transparent text-white hover:bg-white hover:text-[#0B0E14]" size="lg" asChild>
              <a href="/#vision">View the Approach</a>
            </Button>
          </div>
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
            <p className="eyebrow mb-4">The engines</p>
            <h2 className="section-title">Three engines, one product.</h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {engines.map((engine, index) => (
              <article
                key={engine.name}
                className="premium-panel p-8 h-full"
              >
                <div className="flex items-start gap-5">
                  <BoulaiListDot count={index + 1} className="mt-1 text-primary" />
                  <div>
                    <h3 className="card-title mb-3">{engine.name}</h3>
                    <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {engine.role}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{engine.description}</p>
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
