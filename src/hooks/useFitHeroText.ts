import { useLayoutEffect, useRef, RefObject } from "react";

interface Options {
  maxPx?: number;
  minPx?: number;
  deps?: unknown[];
}

/**
 * Auto-fits an H1 so each direct child line fits on a single line without
 * wrapping. Children MUST be width:max-content (e.g. Tailwind `w-max`) and
 * `whitespace-nowrap` so their scrollWidth reflects true text width.
 */
export function useFitHeroText<T extends HTMLElement>(
  ref: RefObject<T>,
  { maxPx = 96, minPx = 24, deps = [] }: Options = {}
) {
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const node = ref.current;
      if (!node) return;
      const parent = node.parentElement;
      const available = (parent ?? node).clientWidth;

      // Guard: skip transient tiny measurements and reschedule.
      if (!available || available < 120) {
        rafRef.current = requestAnimationFrame(fit);
        return;
      }

      node.style.fontSize = `${maxPx}px`;
      node.style.letterSpacing = "";

      const children = Array.from(node.children) as HTMLElement[];
      if (children.length === 0) return;

      children.forEach((c) => {
        c.style.whiteSpace = "nowrap";
      });

      let widest = 0;
      children.forEach((c) => {
        const w = Math.max(c.scrollWidth, c.getBoundingClientRect().width);
        if (w > widest) widest = w;
      });
      if (widest === 0) {
        rafRef.current = requestAnimationFrame(fit);
        return;
      }

      let size = maxPx;
      if (widest > available) {
        size = Math.max(minPx, Math.floor((available / widest) * maxPx));
        node.style.fontSize = `${size}px`;
      }

      if (size === minPx) {
        let widestAtFloor = 0;
        children.forEach((c) => {
          const w = Math.max(c.scrollWidth, c.getBoundingClientRect().width);
          if (w > widestAtFloor) widestAtFloor = w;
        });
        if (widestAtFloor > available) {
          const ratio = available / widestAtFloor;
          const tighten = Math.max(-0.04, ratio - 1);
          node.style.letterSpacing = `${tighten}em`;
        }
      }
    };

    const schedule = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(fit);
    };

    schedule();

    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    if (el.parentElement) ro.observe(el.parentElement);

    window.addEventListener("resize", schedule);
    const fonts = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts;
    if (fonts?.ready) fonts.ready.then(schedule).catch(() => {});

    return () => {
      window.removeEventListener("resize", schedule);
      ro.disconnect();
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, maxPx, minPx, ...deps]);
}

export default useFitHeroText;
