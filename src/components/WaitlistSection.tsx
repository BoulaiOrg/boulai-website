import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const WaitlistSection = () => (
  <section id="waitlist" className="section-cta py-24 border-y border-foreground">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55 mb-4">
          Work with BOULAI
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-white mb-4">
          Bring us a scientific decision workflow.
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-white/68 leading-relaxed">
          We work with teams on discovery, translational analysis, clinical development, and evidence-driven R&D strategy.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:flex-1 h-12 px-4 rounded-none bg-white text-foreground placeholder:text-muted-foreground border border-white/20 outline-none focus:ring-2 focus:ring-white/40 text-sm"
          />
          <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
            Request Intro
          </Button>
        </form>
      </FadeIn>
    </div>
  </section>
);

export default WaitlistSection;
