import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const papers = [
  { title: "Paper title coming soon", authors: "BOULAi Research", year: "2025" },
  { title: "Paper title coming soon", authors: "BOULAi Research", year: "2025" },
  { title: "Paper title coming soon", authors: "BOULAi Research", year: "2025" },
];

const Research = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="section-mid pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            We understand our users because we are researchers too
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover papers and prototypes from our team.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Papers grid */}
    <section className="section-deep py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {papers.map((paper, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-8 border border-border/30 hover-gold-border h-full flex flex-col">
                <FileText className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{paper.title}</h3>
                <p className="text-sm text-muted-foreground mt-auto pt-4">
                  {paper.authors} · {paper.year}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Research;
