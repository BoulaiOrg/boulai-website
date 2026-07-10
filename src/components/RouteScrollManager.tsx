import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET = 112;

const scrollToHashTarget = (hash: string, behavior: ScrollBehavior) => {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top: Math.max(top, 0), behavior });
  return true;
};

const RouteScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    let retryTimer: ReturnType<typeof window.setTimeout> | undefined;
    let frameId = 0;

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return () => {
        if (retryTimer) window.clearTimeout(retryTimer);
        if (frameId) window.cancelAnimationFrame(frameId);
      };
    }

    const attemptScroll = (behavior: ScrollBehavior) => {
      const found = scrollToHashTarget(location.hash, behavior);
      if (!found) {
        retryTimer = window.setTimeout(() => {
          scrollToHashTarget(location.hash, "auto");
        }, 120);
      }
    };

    frameId = window.requestAnimationFrame(() => {
      attemptScroll("auto");
    });

    return () => {
      if (retryTimer) window.clearTimeout(retryTimer);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [location.pathname, location.hash]);

  return null;
};

export default RouteScrollManager;
