import { useEffect, useRef, useState, RefObject } from "react";

interface Options { maxPx?: number; minPx?: number; deps?: unknown[]; }

export function useFitHeroText<T extends HTMLElement>(
  ref: RefObject<T>,
  { maxPx = 96, minPx = 24, deps = [] }: Options = {}
): string {
  const [fontSize, setFontSize] = useState<string>(`clamp(2.5rem, 7vw, ${maxPx}px)`);
  const rafRef = useRef<number | null>(null);
  const hasFitOnceRef = useRef(false);
  const lastAppliedRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    hasFitOnceRef.current = false;
    lastAppliedRef.current = null;

    // Always recomputes from scratch. Safe to call any number of times.
    // Scales both DOWN and UP based on current parent width.
    const fit = () => {
      const el = ref.current;
      if (!el) return;
      const parent = el.parentElement;
      // Prefer parent.clientWidth — it reflects the real settled container.
      const available = parent?.clientWidth || el.clientWidth || 0;
      if (!available || available < 120) return;

      const measureWidest = () => {
        let w = 0;
        Array.from(el.children).forEach((c) => {
          const cw = (c as HTMLElement).getBoundingClientRect().width;
          if (cw > w) w = cw;
        });
        return w;
      };

      const prevInline = el.style.fontSize;

      // Always start at maxPx and decrement until the widest line truly fits.
      // Never trust an analytical estimate or the cap — always verify against the rendered width.
      let target = maxPx;
      el.style.fontSize = `${target}px`;
      void el.offsetWidth;
      let measured = measureWidest();
      let guard = 0;
      while (measured > available + 1 && target > minPx && guard < 400) {
        target -= 1;
        el.style.fontSize = `${target}px`;
        void el.offsetWidth;
        measured = measureWidest();
        guard += 1;
      }
      el.style.fontSize = prevInline;

      if (lastAppliedRef.current === target) {
        hasFitOnceRef.current = true;
        return;
      }

      hasFitOnceRef.current = true;
      lastAppliedRef.current = target;
      el.setAttribute("data-fit", String(target));
      setFontSize((cur) => (cur === `${target}px` ? cur : `${target}px`));
    };

    // Scheduler used by observer / resize: ALWAYS runs fit, no guard.
    const schedule = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        fit();
      });
    };

    // Initial fit + double-rAF to let layout settle.
    fit();
    requestAnimationFrame(() => requestAnimationFrame(fit));

    // On-mount retry timers — only relevant before first successful fit.
    // These do NOT block subsequent resize/observer recomputes.
    const retryTimers = [50, 200, 500].map((delay) =>
      window.setTimeout(() => {
        if (!hasFitOnceRef.current) fit();
      }, delay)
    );

    // ResizeObserver: observe only the parent container.
    // Observing the H1 itself creates a feedback loop because fit() changes its size.
    const ro = new ResizeObserver(() => schedule());
    if (node.parentElement) ro.observe(node.parentElement);

    // Window listeners: ALWAYS schedule a fresh fit() — no guards.
    const onResize = () => schedule();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
    const postFontTimers: number[] = [];
    if (fonts?.ready) {
      fonts.ready
        .then(() => {
          schedule();
          // Re-fit after font swap settles — covers late layout reflows.
          [50, 200, 500, 1000].forEach((d) =>
            postFontTimers.push(window.setTimeout(() => schedule(), d))
          );
        })
        .catch(() => {});
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      ro.disconnect();
      retryTimers.forEach((t) => window.clearTimeout(t));
      postFontTimers.forEach((t) => window.clearTimeout(t));
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, maxPx, minPx, ...deps]);

  return fontSize;
}

export default useFitHeroText;
