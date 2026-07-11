import FadeIn from "@/components/FadeIn";
import ContactCTA from "@/components/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  { name: "Danilo", bio: "Building the vision of rigorous AI for science." },
  { name: "Andrea", bio: "Strategy and partnerships at the science-AI frontier." },
  { name: "Arianna", bio: "Bridging domain expertise and product design." },
  { name: "Francesco", bio: "Advancing causal discovery methods." },
  { name: "Giacomo", bio: "Working on explainable AI and scientific data analysis." },
  { name: "Marco", bio: "Statistical learning and hypothesis generation." },
  { name: "Filippo", bio: "Architecture, infrastructure, and engineering leadership." },
];

const advisor = { name: "Francesco", bio: "Causal learning lab leadership." };

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
          <h1 className="mb-7 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.065em] text-white md:text-7xl">
            We are building scientific intelligence for better decisions.
          </h1>
          <p className="text-lg leading-relaxed text-white/[66%]">
            Boulai is a research-and-product startup: we bring together causal inference, machine learning, product
            design, and scientific strategy to build the proprietary models that help research organizations find
            stronger signals and avoid expensive false confidence.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Vision */}
    <section className="section-deep py-24 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <FadeIn>
          <blockquote className="premium-panel p-8 text-xl md:text-2xl font-medium text-foreground leading-relaxed text-left">
            "Our goal is to make high-stakes scientific reasoning more inspectable: human expertise, causal
            models, statistical evidence, and AI systems working around the same table."
          </blockquote>
        </FadeIn>
      </div>
    </section>

    {/* Team */}
    <section className="section-mid py-24 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">The team</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((m, i) => (
            <FadeIn key={i} delay={i * 0.05} className="h-full">
              <div className="premium-panel p-6 text-center h-full">
                <div className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {m.name[0]}
                </div>
                <h3 className="text-base font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Advisor */}
    <section className="section-deep py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-md">
        <FadeIn>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 text-center">Scientific Advisory</p>
          <div className="premium-panel p-6 text-center">
            <div className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
              {advisor.name[0]}
            </div>
            <h3 className="text-base font-semibold text-foreground">{advisor.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{advisor.bio}</p>
          </div>
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
