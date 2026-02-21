import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const WaitlistSection = () => (
  <section id="waitlist" className="section-gold py-20">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <FadeIn>
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Running early pilots in life sciences. Apply now.
        </h2>
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
            Request Demo
          </Button>
        </form>
      </FadeIn>
    </div>
  </section>
);

export default WaitlistSection;
