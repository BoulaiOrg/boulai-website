import { Link } from "react-router-dom";

const navItems = [
  { label: "Vision", href: "/#vision", type: "anchor" },
  { label: "Platform", href: "/product", type: "link" },
  { label: "Who we are", href: "/about", type: "link" },
];

const engines = [
  {
    code: "E-01",
    ledClass: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    name: "Atlas",
    role: "Statistics & Econometrics",
    description:
      "Rigorous statistical inference and econometric modeling across trial, observational, and translational datasets.",
    methods: "METHODS: BAYESIAN / FREQUENTIST / MIXED-EFFECTS",
  },
  {
    code: "E-02",
    ledClass: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]",
    name: "Icarus",
    role: "Latent Factor Discovery",
    description:
      "Uncovers hidden drivers and subgroups with heterogeneous responses that classical models miss.",
    methods: "METHODS: VAE / SPARSE FACTORS / LATENT MIXTURES",
  },
  {
    code: "E-03",
    ledClass: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]",
    name: "Locus",
    role: "Causal DAG Stress-Testing",
    description:
      "Confronts a scientist-authored causal DAG with data to surface anomalies, violations, and root causes.",
    methods: "METHODS: DO-CALCULUS / SEM / COUNTERFACTUAL RESIDUALS",
  },
];

const CubeLogo = ({ className = "" }: { className?: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 2.5 4.5 6.75v8.5L12 19.5l7.5-4.25v-8.5L12 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 11.5v8M12 11.5 4.75 7M12 11.5 19.25 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 4.95 15.25 9.5v8.65"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.45"
    />
  </svg>
);

const Product = () => (
  <div className="min-h-screen bg-[#050505] font-sans text-neutral-100">
    <nav className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-neutral-900 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Link to="/product" className="flex items-center gap-3 text-white" aria-label="Boulai Discovery platform">
          <CubeLogo className="h-6 w-6" />
          <span className="text-sm font-bold uppercase tracking-tight">BOULAI DISCOVERY</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.type === "anchor" ? (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="border border-neutral-800 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-100 transition-colors hover:bg-white hover:text-black"
          >
            Contact us
          </Link>
        </div>
      </div>
    </nav>

    <main>
      <section className="px-6 pb-32 pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 inline-flex border border-neutral-800 bg-neutral-900/50 px-3 py-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
              SYSTEM STATUS: OPERATIONAL // v1.0
            </span>
          </div>

          <h1 className="mb-12 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-tight text-neutral-100 md:text-8xl">
            Scientific reasoning{" "}
            <span className="font-normal italic text-neutral-500">at the scale</span> of enterprise R&amp;D.
          </h1>

          <p className="max-w-2xl text-xl leading-relaxed text-neutral-400">
            The instrumentation layer for translational, clinical, and discovery research. Turn high-dimensional data
            into causal clarity your team can defend.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
            >
              Contact us
            </Link>
            <a
              href="/#vision"
              className="inline-flex h-12 items-center justify-center border border-neutral-800 px-6 text-sm font-medium text-white transition-colors hover:border-neutral-600"
            >
              View the approach
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-900 bg-[#080808] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 font-mono text-[11px] uppercase italic tracking-[0.3em] text-neutral-500">
            // CORE COMPUTE ARCHITECTURE
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-neutral-100">The Three Engines</h2>

          <div className="mt-12 grid border border-neutral-900 bg-neutral-900 md:grid-cols-3 md:gap-px">
            {engines.map((engine) => (
              <article
                key={engine.code}
                className="group border-b border-neutral-900 bg-[#080808] p-10 transition-colors hover:bg-neutral-950 md:border-b-0"
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600">
                    {engine.code}
                  </span>
                  <span className={`mt-1 h-2 w-2 rounded-full ${engine.ledClass}`} aria-hidden="true" />
                </div>

                <h3 className="font-mono text-2xl font-semibold text-neutral-100">{engine.name}</h3>
                <p className="mb-6 mt-3 font-mono text-sm uppercase tracking-widest text-neutral-500">
                  {engine.role}
                </p>
                <p className="leading-relaxed text-neutral-400">{engine.description}</p>

                <div className="mt-12 border-t border-neutral-900 pt-6 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    {engine.methods}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>

    <footer className="border-t border-neutral-900 bg-black px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 font-mono text-[10px] uppercase tracking-[0.2em] md:flex-row md:items-center md:justify-between">
        <p className="text-neutral-700">&copy; 2026 BOULAI DISCOVERY // END OF TRANSMISSION</p>
        <div className="flex flex-col gap-2 text-neutral-600 sm:flex-row sm:gap-6">
          <span>LAT: 42.3601&deg; N</span>
          <span>LON: 71.0589&deg; W</span>
        </div>
      </div>
    </footer>
  </div>
);

export default Product;
