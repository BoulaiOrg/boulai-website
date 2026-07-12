import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const engines = [
  {
    code: "E-01",
    name: "Atlas",
    role: "Statistics & Econometrics",
    description:
      "Rigorous statistical inference and econometric modeling across trial, observational, and translational datasets.",
  },
  {
    code: "E-02",
    name: "Icarus",
    role: "Latent Factor Discovery",
    description:
      "Uncovers hidden drivers and subgroups with heterogeneous responses that classical models miss.",
  },
  {
    code: "E-03",
    name: "Locus",
    role: "Causal DAG Stress-Testing",
    description:
      "Confronts a scientist-authored causal DAG with data to surface anomalies, violations, and root causes.",
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
            The instrumentation layer for translational, clinical, and discovery research. Turn high-dimensional data
            into causal clarity your team can defend.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-[#121419] hover:bg-white/[92%]" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button className="border border-white/[14%] bg-transparent text-white hover:bg-white hover:text-[#121419]" size="lg" asChild>
              <a href="/#vision">View the Approach</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-deep border-b border-border py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">The engines</p>
            <h2 className="section-title">Three engines, one platform.</h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {engines.map((engine) => (
              <article
                key={engine.code}
                className="premium-panel p-8 h-full"
              >
                <p className="mb-4 text-xs font-semibold text-primary">{engine.code}</p>
                <h3 className="card-title mb-3">{engine.name}</h3>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {engine.role}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">{engine.description}</p>
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
