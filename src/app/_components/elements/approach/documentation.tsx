"use client";

import { ArrowUpRight, RotateCcw } from "lucide-react";
import { motion, type Transition, useInView } from "motion/react";
import React from "react";
import { useIsMobile } from "~/app/_hooks/use-mobile";

const transition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 26,
};

const getCardVariants = (i: number) => ({
  collapsed: {
    marginTop: i === 0 ? 0 : -44,
    scaleX: 1 - i * 0.05,
  },
  expanded: {
    marginTop: i === 0 ? 0 : 4,
    scaleX: 1,
  },
});

const textSwitchTransition: Transition = {
  duration: 0.22,
  ease: "easeInOut",
};

const documentationTextVariants = {
  collapsed: { opacity: 1, y: 0, pointerEvents: "auto" },
  expanded: { opacity: 0, y: -16, pointerEvents: "none" },
};

const viewAllTextVariants = {
  collapsed: { opacity: 0, y: 16, pointerEvents: "none" },
  expanded: { opacity: 1, y: 0, pointerEvents: "auto" },
};

export type DocumentListProps = {
  name?: string;
  documents: {
    id: number;
    title: string;
    subtitle: string;
    time: string;
    count?: number;
  }[];
};

const documents: DocumentListProps["documents"] = [
  {
    id: 1,
    title: "Software Architecture Diagram",
    subtitle: "view details",
    time: "kornsupadej",
  },
  {
    id: 2,
    title: "Software Project Journal",
    subtitle: "view details",
    time: "kornsupadej",
  },
  {
    id: 3,
    title: "API Reference",
    subtitle: "view details",
    time: "kornsupadej",
  },
  {
    id: 4,
    title: "Coding Guideline",
    subtitle: "view details",
    time: "kornsupadej",
  },
];

export default function Documentation() {
  const isMobile = useIsMobile();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: "all" });

  return (
    <motion.div
      className="group border-border/50 from-background/20 via-background/8 to-background/5 relative col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-linear-to-br p-2 shadow-[inset_0_1px_2px_#ffffff50,0_2px_4px_#00000030] saturate-150 backdrop-blur-sm md:col-span-6 lg:col-span-4"
      ref={containerRef}
      initial="collapsed"
      whileHover="expanded"
      animate={isMobile && isInView ? "expanded" : "collapsed"}
    >
      {/* spotlight */}
      <div className="group-hover:bg-primary/30 absolute -right-[50%] -bottom-10 h-16 w-full blur-2xl transition-all duration-500 ease-in-out group-hover:-bottom-6" />
      {/* showcase */}
      <div className="relative mt-auto mb-0 flex h-85 items-center justify-center overflow-clip rounded-xl bg-neutral-200/20 px-8 shadow-lg dark:bg-[#161618]/20 dark:shadow-white/10">
        <div className="bg-muted dark:bg-muted w-xs space-y-3 rounded-3xl border p-3 shadow-md">
          <div>
            {documents.map((document, i) => (
              <motion.div
                key={document.id}
                className="bg-background dark:bg-background relative rounded-xl border px-4 py-2 shadow-sm transition-shadow duration-200 hover:shadow-lg"
                variants={getCardVariants(i)}
                transition={transition}
                style={{
                  zIndex: documents.length - i,
                }}
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-medium">{document.title}</h1>
                  {document.count && (
                    <div className="flex items-center gap-0.5 text-xs font-medium text-neutral-500 dark:text-neutral-300">
                      <RotateCcw className="size-3" />
                      <span>{document.count}</span>
                    </div>
                  )}
                </div>
                <div className="text-xs font-medium text-neutral-500">
                  <span>{document.time}</span>
                  &nbsp;•&nbsp;
                  <span>{document.subtitle}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-primary flex size-5 items-center justify-center rounded-full text-xs font-medium text-white">
              {documents.length}
            </div>
            <span className="grid">
              <motion.span
                className="col-start-1 row-start-1 text-sm font-medium text-neutral-600 dark:text-neutral-300"
                variants={documentationTextVariants}
                transition={textSwitchTransition}
              >
                Documents
              </motion.span>
              <motion.span
                className="col-start-1 row-start-1 flex cursor-pointer items-center gap-1 text-sm font-medium text-neutral-600 select-none dark:text-neutral-300"
                variants={viewAllTextVariants}
                transition={textSwitchTransition}
              >
                View all <ArrowUpRight className="size-4" />
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      {/* text */}
      <div className="p-4">
        <span className="text-foreground text-lg">Documentation</span>
        <p className="text-muted-foreground font-extralight">
          Accumulate and build technical resources for future reference.
        </p>
      </div>
    </motion.div>
  );
}
