"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { reveal } from "@/lib/motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.06, margin: "0px 0px -10%" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
