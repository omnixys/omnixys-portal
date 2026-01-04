"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hide header when scrolling DOWN
 * Show header immediately on ANY scroll UP
 *
 * Works with custom scroll containers (not window).
 */
export function useHideOnScroll(
  scrollRef: React.RefObject<HTMLElement | null>
) {
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const currentY = el.scrollTop;
      const delta = currentY - lastScrollY.current;

      // ignore tiny jitter
      if (Math.abs(delta) < 3) return;

      if (delta > 0) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up (even tiny)
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  return visible;
}
