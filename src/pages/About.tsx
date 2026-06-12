import FadeIn from "@/components/FadeIn";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const teamMembers = [
  { name: "Danilo", role: "Co-founder & co-CEO", bio: "Building the vision of rigorous AI for science." },
  { name: "Andrea", role: "Co-founder & co-CEO", bio: "Strategy and partnerships at the science-AI frontier." },
  { name: "Arianna", role: "Co-founder", bio: "Bridging domain expertise and product design." },
  { name: "Francesco", role: "Research", bio: "Advancing causal discovery methods." },
  { name: "Giacomo", role: "Research", bio: "Working on explainable AI and scientific data analysis." },
  { name: "Marco", role: "Research", bio: "Statistical learning and hypothesis generation." },
  { name: "Filippo", role: "CTO", bio: "Architecture, infrastructure, and engineering leadership." },
];

const advisor = { name: "Francesco", role: "Scientific Advisory", bio: "Causal learning lab leadership." };

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
    desc: "We start where better evidence can change expensive decisions: BioPharma R&D, clinical development, and translational science.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="section-mid pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <FadeIn>
          <p className="eyebrow mb-5">Who we are</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.03] text-foreground mb-7">
            We are building scientific intelligence for better decisions.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BOULAI brings together causal inference, machine learning, product design, and scientific strategy
            to help research organizations find stronger signals and avoid expensive false confidence.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Vision */}
    <section className="section-deep py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <FadeIn>
          <blockquote className="premium-panel rounded-[2rem] p-8 text-xl md:text-2xl font-medium text-foreground leading-relaxed text-left">
            "Our goal is to make high-stakes scientific reasoning more inspectable: human expertise, causal
            models, statistical evidence, and AI systems working around the same table."
          </blockquote>
        </FadeIn>
      </div>
    </section>

    {/* Team */}
    <section className="section-mid py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">The team</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((m, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="premium-panel rounded-3xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {m.name[0]}
                </div>
                <h3 className="text-base font-semibold text-foreground">{m.name}</h3>
                <p className="text-xs text-primary font-medium mt-1">{m.role}</p>
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
          <div className="premium-panel rounded-3xl p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
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

    <WaitlistSection />
    <Footer />
  </div>
);

export default About;
