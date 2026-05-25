import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 80;
const HASH_POLL_INTERVAL = 50;
const HASH_POLL_MAX_ATTEMPTS = 60; // ~3s

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const intervalRef = useRef<number | null>(null);

  const clearPending = useCallback(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const scrollToHash = useCallback(
    (rawHash: string) => {
      clearPending();
      const id = decodeURIComponent(rawHash.replace(/^#/, ""));
      if (!id) return;

      let attempts = 0;
      const tryScroll = () => {
        attempts += 1;
        const el = document.getElementById(id);
        if (el) {
          const top = Math.max(
            0,
            el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
          );
          window.scrollTo({ top, left: 0, behavior: "smooth" });
          clearPending();
          return;
        }
        if (attempts >= HASH_POLL_MAX_ATTEMPTS) {
          clearPending();
        }
      };

      // Try immediately, then poll.
      tryScroll();
      if (intervalRef.current === null) {
        intervalRef.current = window.setInterval(tryScroll, HASH_POLL_INTERVAL);
      }
    },
    [clearPending]
  );

  // React Router navigation: pathname or hash change.
  useEffect(() => {
    if (hash) {
      scrollToHash(hash);
      return;
    }
    clearPending();
    window.scrollTo(0, 0);
  }, [pathname, hash, key, scrollToHash, clearPending]);

  // Same-page hash changes (URL hash mutated without router state change).
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        scrollToHash(window.location.hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [scrollToHash]);

  useEffect(() => clearPending, [clearPending]);

  return null;
};

export default ScrollToTop;
