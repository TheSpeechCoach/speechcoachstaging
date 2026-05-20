import { useEffect, useRef, useState, RefObject } from "react";

interface Options {
  maxPx?: number;
  minPx?: number;
  deps?: unknown[];
}

/**
 * Auto-fits an H1 so each direct child line fits on a single line without
 * wrapping. Children MUST be width:max-content (e.g. Tailwind `w-max`) and
 * `whitespace-nowrap` so their scrollWidth reflects true text width.
 *
 * Returns a CSS font-size string. Initial value is a responsive clamp() so
 * first paint is always correctly sized even before JS runs; after mount the
 * hook overwrites it with a precise px value so the longest line fits exactly.
 */
export function useFitHeroText<T extends HTMLElement>(
  ref: RefObject<T>,
  { maxPx = 96, minPx = 24, deps = [] }: Options = {}
): string {
  const rafRef = useRef<number | null>(null);
  const [fontSize, setFontSize] = useState<string>(
    `clamp(2.5rem, 7vw, ${maxPx}px)`
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      const node = ref.current;
      if (!node) return;
      const parent = node.parentElement;
      const available = (parent ?? node).clientWidth;

      if (!available || available < 120) {
        rafRef.current = requestAnimationFrame(fit);
        return;
      }

      const prev = node.style.fontSize;
      node.style.fontSize = `${maxPx}px`;

      const children = Array.from(node.children) as HTMLElement[];
      if (children.length === 0) {
        node.style.fontSize = prev;
        return;
      }

      let widest = 0;
      children.forEach((c) => {
        const w = Math.max(c.scrollWidth, c.getBoundingClientRect().width);
        if (w > widest) widest = w;
      });

      if (widest === 0) {
        node.style.fontSize = prev;
        rafRef.current = requestAnimationFrame(fit);
        return;
      }

      const size =
        widest > available
          ? Math.max(minPx, Math.floor((available / widest) * maxPx))
          : maxPx;

      // Clear the inline measuring style — React state drives the final size.
      node.style.fontSize = "";

      setFontSize((current) => {
        const next = `${size}px`;
        return current === next ? current : next;
      });
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

  return fontSize;
}

export default useFitHeroText;
