import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";

const ContactCTA = () => (
  <section className="section-cta border-y border-white/10 py-24">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <FadeIn>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/[52%]">
          Work with Boulai
        </p>
        <h2 className="mb-4 font-display text-[1.86rem] font-normal leading-[1.12] text-white md:text-[2.46rem]">
          Bring us a scientific decision workflow.
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/[62%] md:text-base">
          We work with teams on discovery, translational analysis, clinical development, and evidence-driven R&D strategy.
        </p>
        <div className="mt-8">
          <Button size="lg" className="bg-white text-[#121419] hover:bg-white/[92%]" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default ContactCTA;
