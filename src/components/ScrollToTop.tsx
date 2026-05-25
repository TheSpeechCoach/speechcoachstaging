import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 80;

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace("#", ""));
      let cancelled = false;
      let lastTop: number | null = null;
      let stableCount = 0;
      const start = Date.now();

      const tick = () => {
        if (cancelled) return;
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          window.scrollTo(0, top);
          if (lastTop !== null && Math.abs(top - lastTop) < 1) {
            stableCount += 1;
          } else {
            stableCount = 0;
          }
          lastTop = top;
          if (stableCount >= 3) return; // settled
        }
        if (Date.now() - start < 1800) {
          window.setTimeout(() => requestAnimationFrame(tick), 60);
        }
      };

      requestAnimationFrame(tick);

      const onLoad = () => requestAnimationFrame(tick);
      window.addEventListener("load", onLoad);

      return () => {
        cancelled = true;
        window.removeEventListener("load", onLoad);
      };
    }

    window.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
