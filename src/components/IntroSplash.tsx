import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "boulai_intro_seen";

const IntroSplash = () => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }

    setMounted(true);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const dismiss = () => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setVisible(false);
      window.setTimeout(() => setMounted(false), 500);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);

    const fallback = window.setTimeout(dismiss, 2600);

    const vid = videoRef.current;
    const onEnded = () => dismiss();
    vid?.addEventListener("ended", onEnded);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(fallback);
      vid?.removeEventListener("ended", onEnded);
    };
  }, [mounted]);

  if (!mounted) return null;

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
    window.setTimeout(() => setMounted(false), 500);
  };

  return (
    <div
      role="dialog"
      aria-label="BOULAI intro"
      onClick={handleDismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <video
        ref={videoRef}
        src="/brand/boulai-logo-animation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="max-w-[320px] w-[60vw] h-auto"
        aria-label="BOULAI logo animation"
      />
    </div>
  );
};

export default IntroSplash;
