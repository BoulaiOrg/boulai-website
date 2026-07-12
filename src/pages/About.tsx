import FadeIn from "@/components/FadeIn";
import ContactCTA from "@/components/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    title: "Evidence before narrative",
    desc: "The system must expose the evidence before anyone turns it into a story.",
  },
  {
    title: "Built with scientific teams",
    desc: "We design for researchers, clinicians, data scientists, and decision-makers who need to challenge one another productively.",
  },
  {
    title: "Ambitious and practical",
    desc: "We start where better evidence can change expensive decisions — BioPharma R&D, clinical development, and translational science — powered by the proprietary engines behind Boulai Discovery.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="section-hero border-b border-white/10 pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <FadeIn>
          <p className="inverse-eyebrow mb-5">Who we are</p>
          <h1 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-white md:text-7xl">
            We are building scientific intelligence for better decisions.
          </h1>
        </FadeIn>
      </div>
    </section>

    {/* Team */}
    <section className="section-mid py-28 border-b border-border">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <FadeIn className="lg:pt-2">
          <p className="eyebrow mb-5">Human judgment</p>
          <h2 className="max-w-sm text-3xl font-bold leading-tight text-foreground md:text-5xl">
            The people behind Boulai
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="max-w-3xl">
          <p className="text-2xl font-medium leading-snug text-foreground md:text-3xl">
            We are researchers, scientists, and industry builders united by a simple belief: the future of scientific AI
            should make human judgment more powerful, not less necessary.
          </p>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Scientific decisions are expensive because uncertainty is expensive. A weak hypothesis, a misleading signal,
            or a false sense of confidence can redirect years of investments. We are building causal AI systems that
            help teams reason through evidence, causal structure, and competing assumptions before those decisions
            become costly.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Values */}
    <section className="section-mid py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">What we believe</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-xs font-semibold text-primary mb-4">0{i + 1}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <ContactCTA />
    <Footer />
  </div>
);

export default About;
