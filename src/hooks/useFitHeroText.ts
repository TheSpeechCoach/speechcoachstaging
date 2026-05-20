import { useEffect, useRef, useState, RefObject } from "react";

interface Options { maxPx?: number; minPx?: number; deps?: unknown[]; }

export function useFitHeroText<T extends HTMLElement>(
  ref: RefObject<T>,
  { maxPx = 96, minPx = 24, deps = [] }: Options = {}
): string {
  const [fontSize, setFontSize] = useState<string>(`clamp(2.5rem, 7vw, ${maxPx}px)`);
  const rafRef = useRef<number | null>(null);
  const hasFitRef = useRef(false);
  const lastTargetRef = useRef<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    hasFitRef.current = false;
    lastTargetRef.current = null;

    const fit = () => {
      const el = ref.current;
      if (!el) return;
      const parent = el.parentElement;
      const available = (parent ?? el).clientWidth;
      if (!available || available < 120) return;

      // Read currentPx first, then measure widest in the same frame
      const currentPx = parseFloat(getComputedStyle(el).fontSize) || maxPx;

      let widest = 0;
      Array.from(el.children).forEach((c) => {
        const w = (c as HTMLElement).getBoundingClientRect().width;
        if (w > widest) widest = w;
      });

      if (widest <= 0 || currentPx <= 0) return;

      const naturalWidthPerPx = widest / currentPx;
      if (naturalWidthPerPx <= 0) return;

      const target = Math.min(
        maxPx,
        Math.max(minPx, Math.floor(available / naturalWidthPerPx))
      );

      hasFitRef.current = true;
      lastTargetRef.current = target;
      el.setAttribute("data-fit", String(target));
      setFontSize((cur) => {
        const next = `${target}px`;
        return cur === next ? cur : next;
      });
    };

    const schedule = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(fit);
      });
    };

    fit();
    schedule();

    const retryTimers = [50, 200, 500].map((delay) =>
      window.setTimeout(() => {
        if (!hasFitRef.current) fit();
      }, delay)
    );

    const ro = new ResizeObserver(schedule);
    ro.observe(node);
    if (node.parentElement) ro.observe(node.parentElement);
    // Also observe documentElement so viewport changes always fire
    ro.observe(document.documentElement);

    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);

    const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
    if (fonts?.ready) fonts.ready.then(schedule).catch(() => {});

    return () => {
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
      ro.disconnect();
      retryTimers.forEach((timer) => window.clearTimeout(timer));
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, maxPx, minPx, ...deps]);

  return fontSize;
}

export default useFitHeroText;
