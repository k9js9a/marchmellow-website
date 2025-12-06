"use client";

import { motion, useInView, type Variants } from "motion/react";
import type React from "react";
import { cn } from "~/utils/cn";

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function ScrollIndicator({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const isInView = useInView(containerRef, { amount: "all" });
  return (
    <button
      className={cn(
        "absolute bottom-10 z-20 flex w-full items-center justify-center",
      )}
      aria-label="Scroll to approach"
      onClick={() => {
        const element = document.getElementById("#approach");
        element?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <a href="#about">
        <motion.div
          className="flex h-16 w-[35px] items-start justify-center rounded-3xl border-4 border-[#f5f5f4] p-2"
          variants={variants}
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="mb-1 h-3 w-3 rounded-full bg-[#f5f5f4]"
          />
        </motion.div>
      </a>
    </button>
  );
}
