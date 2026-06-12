import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const WaitlistSection = () => (
  <section id="waitlist" className="section-gold py-20">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/70 mb-4">
          Early BioPharma pilots
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Bring a trial, dataset, or causal theory. We will help stress-test it.
        </h2>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-primary-foreground/75 leading-relaxed">
          We are working with teams on trial optimization, translational analysis, and causal discovery workflows.
        </p>
        <form
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full sm:flex-1 h-11 px-4 rounded-lg bg-surface-deep text-foreground placeholder:text-muted-foreground border-none outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          <Button variant="gold-dark" size="lg">
            Request Pilot
          </Button>
        </form>
      </FadeIn>
    </div>
  </section>
);

export default WaitlistSection;
