"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numericMatch = value.match(/[\d.,]+/);
  const numeric = numericMatch
    ? parseFloat(numericMatch[0].replace(/\./g, "").replace(",", "."))
    : null;
  const prefix = numericMatch ? value.slice(0, numericMatch.index) : "";
  const suffix = numericMatch
    ? value.slice((numericMatch.index ?? 0) + numericMatch[0].length)
    : "";
  const hasDecimal = numericMatch?.[0].includes(",") ?? false;

  const [display, setDisplay] = useState(numeric === null ? value : "0");

  useEffect(() => {
    if (!inView || numeric === null) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplay(
        hasDecimal
          ? current.toFixed(1).replace(".", ",")
          : Math.round(current).toLocaleString("de-DE")
      );
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numeric, hasDecimal, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
