"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "motion/react";
import { reveal } from "@/lib/motion";

export function Photo({
  src,
  alt,
  rotation,
  offset = false,
}: {
  src: string;
  alt: string;
  rotation: number;
  offset?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [-0.5, 0.5], [-13, 13]);
  const rotateX = useTransform(y, [-0.5, 0.5], [13, -13]);
  return (
    <motion.div
      className={`perspective-[900px] ${offset ? "mt-9.5 max-[760px]:mt-6.5" : ""}`}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={reveal}
    >
      <motion.div
        style={{ rotateX, rotateY, rotate: rotation }}
        transition={{ duration: 0.12 }}
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1100}
          className="block h-auto w-full rounded-sm shadow-[0_20px_34px_-20px_rgba(20,16,10,.4)]"
        />
      </motion.div>
    </motion.div>
  );
}
