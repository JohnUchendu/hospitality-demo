"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";
import { useRef } from "react";

interface CounterStatProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function CounterStat({ value, label, suffix }: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Detect when visible
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  // Counter animation
  const spring = useSpring(0, { duration: 2 });
  const count = useTransform(spring, latest =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) spring.set(value); // Start animation only when visible
  }, [isInView, value, spring]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-4xl md:text-5xl font-bold text-amber-300 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.span>{count}</motion.span>{suffix}
      </motion.div>

      <motion.div
        className="text-lg opacity-90"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        {label}
      </motion.div>
    </div>
  );
}


