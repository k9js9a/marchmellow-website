"use client";

import { motion, useInView } from "motion/react";
import React from "react";
import { useIsMobile } from "~/app/_hooks/use-mobile";
import { cn } from "~/utils/cn";

export default function Development() {
  const [shouldAnimate, setShouldAnimate] = React.useState<boolean>(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(containerRef, { amount: "all" });

  React.useEffect(() => {
    if (!isMobile) return;

    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  return (
    <motion.div
      className="group border-border/50 from-background/20 via-background/8 to-background/5 relative col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-linear-to-br p-2 shadow-[inset_0_1px_2px_#ffffff50,0_2px_4px_#00000030] saturate-150 backdrop-blur-sm md:col-span-6 lg:col-span-5"
      ref={containerRef}
      onHoverStart={() => {
        if (isMobile) return;
        setShouldAnimate(true);
      }}
      onHoverEnd={() => {
        if (isMobile) return;
        setShouldAnimate(false);
      }}
    >
      {/* spotlight */}
      <div className="group-hover:bg-primary/30 absolute -right-[50%] -bottom-10 h-16 w-full blur-2xl transition-all duration-500 ease-in-out group-hover:-bottom-6" />
      {/* showcase */}
      <div className="relative mt-auto mb-0 flex h-85 max-h-85 flex-1 flex-col overflow-hidden rounded-xl bg-neutral-200/20 px-8 shadow-lg dark:bg-[#161618]/20 dark:shadow-white/10">
        <div className="bg-muted mt-6 flex aspect-4/2 min-w-[550px] flex-col rounded-3xl border mask-b-from-60% mask-b-to-100% pb-4 shadow-[4px_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-lg md:col-span-7 md:col-start-6 md:mt-12">
          {/* Header */}
          <header className="grid w-full grid-cols-12 items-center px-4 py-2">
            <div className="col-span-2 flex gap-1">
              <button
                className="size-2 rounded-full bg-[#D9D9D9]"
                aria-label="Close window"
              />
              <button
                className="size-2 rounded-full bg-[#D9D9D9]"
                aria-label="Minimize window"
              />
              <button
                className="size-2 rounded-full bg-[#D9D9D9]"
                aria-label="Enter full screen"
              />
            </div>
            <div className="bg-background dark:bg-background col-span-6 col-start-4 flex h-6 w-full items-center rounded-full px-2 backdrop-blur-lg">
              <span className="flex items-center gap-2 text-[0.625rem] -tracking-[.045%]">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.50038 1.07788C8.21908 1.07788 10.4229 3.33727 10.4229 6.12488C10.4229 8.35428 9.01406 10.2455 7.05934 10.9135C6.80977 10.9632 6.72116 10.8056 6.72116 10.6712C6.72116 10.5048 6.72707 9.96141 6.72707 9.28604C6.72707 8.81545 6.56955 8.50832 6.39283 8.35178C7.48907 8.22675 8.64093 7.79993 8.64093 5.86145C8.64093 5.31013 8.44994 4.86024 8.13392 4.5068C8.18511 4.37931 8.35395 3.86596 8.08568 3.1709C8.08568 3.1709 7.67317 3.03567 6.73347 3.68839C6.34016 3.57665 5.91879 3.52043 5.50038 3.51846C5.08197 3.52043 4.6611 3.57665 4.26828 3.68839C3.32759 3.03567 2.9141 3.1709 2.9141 3.1709C2.64681 3.86596 2.81565 4.37931 2.86635 4.5068C2.5518 4.86024 2.35934 5.31013 2.35934 5.86145C2.35934 7.79501 3.50874 8.22837 4.60203 8.35587C4.46124 8.48188 4.33375 8.70418 4.28945 9.03055C4.00886 9.15952 3.29608 9.38272 2.857 8.61136C2.857 8.61136 2.5966 8.12644 2.10238 8.09099C2.10238 8.09099 1.62244 8.08462 2.06891 8.39769C2.06891 8.39769 2.39133 8.55275 2.6153 9.13606C2.6153 9.13606 2.90426 10.0369 4.2737 9.73166C4.27616 10.1535 4.28059 10.5511 4.28059 10.6712C4.28059 10.8046 4.19001 10.9607 3.94438 10.914C1.98818 10.247 0.577881 8.35477 0.577881 6.12488C0.577881 3.33727 2.78218 1.07788 5.50038 1.07788Z"
                    fill="#ADADB0"
                  />
                </svg>
                <span>Current repository: &nbsp;my-repo</span>
              </span>
            </div>
          </header>

          {/* Body */}
          <div className="grid w-full flex-1 grid-cols-12 gap-2 overflow-hidden px-4">
            {/* Folder */}
            <div className="col-span-3 col-start-1 flex flex-col">
              <span className="leading-micro tracking-tigher text-[0.625rem] font-medium">
                Changes
              </span>
              <ul className="mt-2 space-y-1 pr-4 text-[9px]">
                <li className="flex items-center justify-between">
                  <span>app/src/../main.js</span>
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="grayscale"
                  >
                    <g clipPath="url(#clip0_3913_35763)">
                      <rect
                        x="0.5"
                        y="1"
                        width="7"
                        height="7"
                        rx="1.5"
                        stroke="#DBAB09"
                        strokeWidth="0.75"
                      />
                      <circle cx="4" cy="4.5" r="1" fill="#DBAB09" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3913_35763">
                        <rect
                          width="8"
                          height="8"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li className="flex items-center justify-between">
                  <span>app/../server.js</span>
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="grayscale"
                  >
                    <g clipPath="url(#clip0_3913_35768)">
                      <rect
                        x="0.5"
                        y="1"
                        width="7"
                        height="7"
                        rx="1.5"
                        stroke="#28A745"
                        strokeWidth="0.75"
                      />
                      <path
                        d="M4 3V6"
                        stroke="#28A745"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5.5 4.5L2.5 4.5"
                        stroke="#28A745"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3913_35768">
                        <rect
                          width="8"
                          height="8"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li className="flex items-center justify-between">
                  <span>app/../app.js</span>
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="grayscale"
                  >
                    <g clipPath="url(#clip0_3913_35763)">
                      <rect
                        x="0.5"
                        y="1"
                        width="7"
                        height="7"
                        rx="1.5"
                        stroke="#DBAB09"
                        strokeWidth="0.75"
                      />
                      <circle cx="4" cy="4.5" r="1" fill="#DBAB09" />
                    </g>
                    <defs>
                      <clipPath id="clip0_3913_35763">
                        <rect
                          width="8"
                          height="8"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
              </ul>

              <button className="md:text-eyebrow bg-background dark:bg-background mt-auto mb-0 rounded-md border border-white/8 py-1 text-[8px] font-medium tracking-tighter md:py-2 dark:border-black/8">
                Commit and push
              </button>
            </div>
            {/* Editor */}
            <div className="bg-background dark:bg-background col-span-9 col-start-4 overflow-hidden rounded-xl p-2">
              <ul
                className={cn(
                  "text-greyscale-600 relative px-1 font-mono",
                  "after:absolute",
                  // "after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-[#232325]"
                )}
              >
                {Array.from({ length: 22 }).map((_, i) => {
                  const lineNumber = i + 37;
                  const highlightedNumbers = [47, 48, 49, 50];
                  const isError = lineNumber === 41;
                  const isGood = highlightedNumbers.includes(lineNumber);

                  return (
                    <li
                      key={i}
                      className={cn(
                        "leading-micro tracking-tigher pointer-events-none pl-2 text-[6px] md:text-[0.625rem]",
                        {
                          "bg-primary/10 rounded": shouldAnimate && isError,
                          "bg-primary/10": shouldAnimate && isGood,
                          "rounded-t": lineNumber === highlightedNumbers[0],
                          "rounded-b":
                            lineNumber ===
                            highlightedNumbers[highlightedNumbers.length - 1],
                        },
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {lineNumber}
                        {isError ? (
                          <svg
                            className="size-1.5 grayscale md:size-2"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8ZM2.39844 3.625C2.19133 3.625 2.02344 3.79289 2.02344 4C2.02344 4.20711 2.19133 4.375 2.39844 4.375H5.59844C5.80554 4.375 5.97344 4.20711 5.97344 4C5.97344 3.79289 5.80554 3.625 5.59844 3.625H2.39844Z"
                              // fill="#FF453A"
                              fill="#7ADF82"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="size-1.5 grayscale md:size-2"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8ZM4 2.0249C4.20711 2.0249 4.375 2.1928 4.375 2.3999V3.6249H5.59844C5.80554 3.6249 5.97344 3.7928 5.97344 3.9999C5.97344 4.20701 5.80554 4.3749 5.59844 4.3749H4.375V5.5999C4.375 5.80701 4.20711 5.9749 4 5.9749C3.79289 5.9749 3.625 5.80701 3.625 5.5999V4.3749H2.39844C2.19133 4.3749 2.02344 4.20701 2.02344 3.9999C2.02344 3.7928 2.19133 3.6249 2.39844 3.6249H3.625V2.3999C3.625 2.1928 3.79289 2.0249 4 2.0249Z"
                              fill="#7ADF82"
                            />
                          </svg>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* text */}
      <div className="p-4">
        <span className="text-foreground text-lg">Development</span>
        <p className="text-muted-foreground font-extralight">
          Collaborate on tasks, encourage code quality, best practice and
          convention.
        </p>
      </div>
    </motion.div>
  );
}
