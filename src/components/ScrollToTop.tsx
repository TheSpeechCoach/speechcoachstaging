import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 80;
const HASH_SCROLL_TIMEOUT = 1500;
const HASH_SCROLL_INTERVAL = 50;
const HASH_SCROLL_TOLERANCE = 2;

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const clearPendingScroll = useCallback(() => {
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scrollToHash = useCallback((rawHash: string) => {
    clearPendingScroll();

    const id = decodeURIComponent(rawHash.replace(/^#/, ""));
    if (!id) return;

    const start = window.performance.now();

    const tick = () => {
      const el = document.getElementById(id);

      if (el) {
        const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);
        window.scrollTo({ top, left: 0, behavior: "auto" });

        const distanceFromTarget = Math.abs(el.getBoundingClientRect().top - HEADER_OFFSET);
        if (distanceFromTarget <= HASH_SCROLL_TOLERANCE) return;
      }

      if (window.performance.now() - start < HASH_SCROLL_TIMEOUT) {
        timeoutRef.current = window.setTimeout(() => {
          frameRef.current = window.requestAnimationFrame(tick);
        }, HASH_SCROLL_INTERVAL);
      }
    };

    frameRef.current = window.requestAnimationFrame(tick);
  }, [clearPendingScroll]);

  useEffect(() => {
    if (hash) {
      scrollToHash(hash);
      return;
    }

    clearPendingScroll();
    window.scrollTo(0, 0);
  }, [pathname, hash, key, scrollToHash, clearPendingScroll]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash);
        return;
      }

      clearPendingScroll();
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [scrollToHash, clearPendingScroll]);

  useEffect(() => clearPendingScroll, [clearPendingScroll]);

  return null;
};

export default ScrollToTop;
