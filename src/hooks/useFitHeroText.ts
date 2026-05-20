import { useEffect, useLayoutEffect, useRef, RefObject } from "react";

interface Options {
  maxPx?: number;
  minPx?: number;
  deps?: unknown[];
}

/**
 * Auto-fits an H1 (or any container) so each direct child line fits on a single
 * line without wrapping. Children should have white-space: nowrap.
 *
 * Strategy: measure widest child scrollWidth vs container clientWidth, scale
 * font-size down from maxPx so the widest line fits. Never scales above maxPx.
 * Floors at minPx; below that, applies a small negative letter-spacing as a
 * last resort but never wraps.
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
      if (!available) return;

      // Reset to max before measuring.
      node.style.fontSize = `${maxPx}px`;
      node.style.letterSpacing = "";

      const children = Array.from(node.children) as HTMLElement[];
      if (children.length === 0) return;

      // Ensure no wrapping while measuring.
      children.forEach((c) => {
        c.style.whiteSpace = "nowrap";
      });

      let widest = 0;
      children.forEach((c) => {
        if (c.scrollWidth > widest) widest = c.scrollWidth;
      });
      if (widest === 0) return;

      let size = maxPx;
      if (widest > available) {
        size = Math.max(minPx, Math.floor((available / widest) * maxPx));
        node.style.fontSize = `${size}px`;
      }

      // If still overflowing at floor, tighten letter-spacing slightly.
      if (size === minPx) {
        let widestAtFloor = 0;
        children.forEach((c) => {
          if (c.scrollWidth > widestAtFloor) widestAtFloor = c.scrollWidth;
        });
        if (widestAtFloor > available) {
          const ratio = available / widestAtFloor;
          // Up to -0.04em tightening.
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
    // Refit after webfonts load.
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
