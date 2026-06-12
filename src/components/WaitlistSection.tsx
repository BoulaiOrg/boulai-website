import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const WaitlistSection = () => (
  <section id="waitlist" className="section-cta py-20 border-y border-border">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <FadeIn>
        <p className="eyebrow mb-4">
          BioPharma pilots
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Evaluate a trial dataset with BOULAi.
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed">
          We work with teams on trial optimization, translational analysis, causal theory testing, and subgroup discovery.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:flex-1 h-11 px-4 rounded-lg bg-white text-foreground placeholder:text-muted-foreground border border-border outline-none focus:ring-2 focus:ring-primary/30 text-sm"
          />
          <Button size="lg">
            Request Pilot
          </Button>
        </form>
      </FadeIn>
    </div>
  </section>
);

export default WaitlistSection;
