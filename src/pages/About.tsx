import FadeIn from "@/components/FadeIn";
import WaitlistSection from "@/components/WaitlistSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Compass, Users, Rocket } from "lucide-react";

const teamMembers = [
  { name: "Danilo", role: "Co-founder & co-CEO", bio: "Building the vision of rigorous AI for science." },
  { name: "Andrea", role: "Co-founder & co-CEO", bio: "Strategy and partnerships at the science–AI frontier." },
  { name: "Arianna", role: "Co-founder", bio: "Bridging domain expertise and product design." },
  { name: "Francesco", role: "Research", bio: "Advancing causal discovery methods." },
  { name: "Giacomo", role: "Research", bio: "Working on explainable AI and anomaly detection." },
  { name: "Marco", role: "Research", bio: "Statistical learning and hypothesis generation." },
  { name: "Filippo", role: "CTO", bio: "Architecture, infrastructure, and engineering leadership." },
];

const advisor = { name: "Francesco", role: "Scientific Advisory", bio: "Causal learning lab leadership." };

const values = [
  {
    icon: <Compass className="w-7 h-7 text-primary" />,
    title: "Rigorous by design",
    desc: "We build algorithms for scientists, not slides for stakeholders.",
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    title: "Open collaboration",
    desc: "Healthy debate required. No fear culture, no intimidation.",
  },
  {
    icon: <Rocket className="w-7 h-7 text-primary" />,
    title: "Ambitious, pragmatic",
    desc: "We'll win one industry at a time. Starting with the one that matters most to human life.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="section-mid pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            We are builders, researchers, and scientists who got tired of false positives.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            BOULAi was founded to bring rigorous causal and explainable AI to the people who need it most — the researchers and innovators pushing the boundaries of life science and beyond.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Vision */}
    <section className="section-deep py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <FadeIn>
          <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic border-l-4 border-primary pl-8 text-left">
            "We aim to build a horizontal platform that brings the best minds — human and artificial — around the same table to tackle humanity's hardest problems. A modern Boule."
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
              <div className="bg-card rounded-xl p-6 border border-border/30 hover-gold-border text-center">
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
          <div className="bg-card rounded-xl p-6 border border-border/30 text-center">
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
                <div className="w-14 h-14 rounded-2xl bg-card flex items-center justify-center mx-auto mb-5 border border-border/30">
                  {v.icon}
                </div>
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
