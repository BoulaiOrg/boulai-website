import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const WaitlistSection = () => (
  <section id="waitlist" className="section-cta scroll-mt-28 border-y border-white/10 py-24">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <FadeIn>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/52">
          Work with BOULAI
        </p>
        <h2 className="mb-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
          Bring us a scientific decision workflow.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/62 md:text-base">
          We work with teams on discovery, translational analysis, clinical development, and evidence-driven R&D strategy.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-lg flex-col items-center justify-center gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 w-full border border-white/16 bg-transparent px-4 text-sm text-white placeholder:text-white/36 outline-none focus:ring-2 focus:ring-white/20 sm:flex-1"
          />
          <Button size="lg" className="bg-white text-[#121419] hover:bg-white/92">
            Request Intro
          </Button>
        </form>
      </FadeIn>
    </div>
  </section>
);

export default WaitlistSection;
