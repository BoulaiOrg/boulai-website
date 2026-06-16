import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "boulai_intro_seen_v3";
const INTRO_TIMEOUT_MS = 5200;

const introPillars = [
  {
    index: "01",
    title: "Inference",
    detail: "Estimate what the evidence supports before teams commit capital, time, or trial design.",
  },
  {
    index: "02",
    title: "Machine learning",
    detail: "Surface patterns, heterogeneity, and structure without confusing every signal for judgment.",
  },
  {
    index: "03",
    title: "Reasoning",
    detail: "Connect hypotheses, mechanisms, and data into arguments experts can inspect and challenge.",
  },
];

const IntroSplash = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const dismiss = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
    setVisible(false);
    window.setTimeout(() => setMounted(false), 420);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }

    const shouldShowInThisSession = import.meta.env.DEV || !sessionStorage.getItem(STORAGE_KEY);
    if (!shouldShowInThisSession) return;

    setMounted(true);
    const raf = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };

    const fallback = window.setTimeout(dismiss, INTRO_TIMEOUT_MS);
    const video = videoRef.current;
    const onEnded = () => window.setTimeout(dismiss, 800);

    window.addEventListener("keydown", onKey);
    video?.addEventListener("ended", onEnded);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(fallback);
      video?.removeEventListener("ended", onEnded);
    };
  }, [dismiss, mounted]);

  return (
    <AnimatePresence>
      {mounted ? (
        <motion.div
          key="intro-splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[120] overflow-hidden bg-background"
          role="dialog"
          aria-label="BOULAI intro"
          onClick={dismiss}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(hsl(220 10% 78% / 0.26) 1px, transparent 1px), linear-gradient(90deg, hsl(220 10% 78% / 0.22) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_42%)]" />

          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: visible ? 0 : -24, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 border-b border-border/70 bg-background/88 backdrop-blur-md"
          >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
              <img src="/brand/boulai-logo-v2.svg?v=3" alt="BOULAI" className="h-9 w-auto object-contain" />
              <button
                type="button"
                onClick={dismiss}
                onClickCapture={(event) => event.stopPropagation()}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Skip
              </button>
            </div>
          </motion.div>

          <div className="relative flex min-h-screen items-center pt-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="max-w-4xl">
                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 24 }}
                    transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
                    className="eyebrow mb-5"
                  >
                    Scientific intelligence for BioPharma R&amp;D
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 40 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-foreground sm:text-6xl md:text-7xl lg:text-[6.5rem]"
                  >
                    From evidence to decision.
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 24 }}
                    transition={{ duration: 0.55, delay: 0.52, ease: "easeOut" }}
                    className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl"
                  >
                    BOULAI helps scientific teams connect data, mechanisms, uncertainty, and judgment before they
                    decide what to test, validate, or deprioritize next.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30, scale: visible ? 1 : 0.97 }}
                  transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full lg:justify-self-end"
                >
                  <div className="premium-panel overflow-hidden bg-white/72 backdrop-blur-sm">
                    <video
                      ref={videoRef}
                      src="/brand/boulai-logo-animation.mp4"
                      autoPlay
                      muted
                      playsInline
                      preload="auto"
                      className="aspect-[16/10] w-full object-cover"
                      aria-label="BOULAI logo animation"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 24 }}
                transition={{ duration: 0.6, delay: 0.72, ease: "easeOut" }}
                className="mt-12 grid gap-4 border-t border-border/80 pt-6 md:grid-cols-3"
              >
                {introPillars.map((item) => (
                  <div key={item.index} className="grid gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {item.index} / {item.title}
                    </p>
                    <p className="max-w-sm text-sm leading-relaxed text-foreground/84">{item.detail}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IntroSplash;
