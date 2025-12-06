/* eslint-disable @next/next/no-img-element */
"use client";

import { animate, motion, useInView } from "motion/react";
import React from "react";
import { unwrite, write } from "~/app/_components/animations/write";
import { useIsMobile } from "~/app/_hooks/use-mobile";
import { cn } from "~/utils/cn";

const text = [
  {
    timestamp: "18:31:21.320",
    content: "Production Build",
  },
  {
    timestamp: "18:31:21.344",
    content: "Running build in Washington, D.C., USA (East) – iad1",
  },
  {
    timestamp: "18:31:21.450",
    content:
      "Cloning github.com/chenparnasa/isr-blog-nextjs-wordpress (Branch: main, Commit: de72693)",
  },
  {
    timestamp: "18:31:21.836",
    content: "Previous build cache not available",
  },
  {
    timestamp: "18:31:21.860",
    content: "Cloning completed: 409.772ms",
  },
  {
    timestamp: "18:31:22.123",
    content: 'Running "proudction build"',
  },
  {
    timestamp: "18:31:22.938",
    content: "Cloud CLI 37.6.1",
  },
] as const;

export default function Delivery() {
  const [seconds, setSeconds] = React.useState<number>(32);
  const [lastLine, setLastLine] = React.useState<string>("");
  const [shouldAnimate, setShouldAnimate] = React.useState<boolean>(false);

  const isMobile = useIsMobile();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: "all" });

  React.useEffect(() => {
    if (!isMobile) return;

    if (isInView) {
      setShouldAnimate(true);
      animate(32, 60, {
        onUpdate: (latest) => setSeconds(+latest.toFixed()),
        duration: 44,
      });
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      write("Installing dependencies...", (v) => setLastLine(v), 500);
    } else {
      setShouldAnimate(false);
      animate(seconds, 32, {
        onUpdate: (latest) => setSeconds(+latest.toFixed()),
        duration: 0.25,
      });
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      unwrite("Installing dependencies...", (v) => setLastLine(v), 500);
    }
  }, [isInView]);

  return (
    <motion.div
      className="group from-background/20 via-background/8 to-background/5 border-border/50 relative col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-linear-to-br p-2 shadow-[inset_0_1px_2px_#ffffff50,0_2px_4px_#00000030] saturate-150 backdrop-blur-sm lg:col-span-7"
      ref={containerRef}
      onMouseEnter={() => {
        if (isMobile) return;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        write("Installing dependencies...", (v) => setLastLine(v), 500);
      }}
      onMouseLeave={() => {
        if (isMobile) return;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        unwrite("Installing dependencies...", (v) => setLastLine(v), 500);
      }}
    >
      {/* spotlight */}
      <div className="group-hover:bg-primary/30 absolute -right-[50%] -bottom-10 h-16 w-full blur-2xl transition-all duration-500 ease-in-out group-hover:-bottom-6" />
      {/* showcase */}
      <div className="relative mt-auto mb-0 flex h-85 flex-col items-center justify-center overflow-hidden rounded-xl bg-neutral-200/20 px-3 shadow-lg md:flex-1 md:px-8 dark:bg-[#161618]/20 dark:shadow-white/10">
        {/* Site */}
        <div className="bg-muted mx-auto mt-6 hidden w-full flex-col overflow-hidden rounded-[1.25rem] border mask-b-from-60% mask-b-to-100% px-1 pb-1 backdrop-blur-md md:mt-12 md:flex">
          <div className="flex h-8 w-full items-center gap-1 pl-2">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="size-2 rounded-full bg-[#D9D9D9]" />
            ))}
          </div>
          <img
            loading="lazy"
            src="/assets/site.png"
            alt="Site screen"
            className="max-h-64 rounded-2xl object-cover object-top invert dark:invert-0"
          />
        </div>
        {/* Terminal */}
        <div className="bg-muted right-0 bottom-8 z-1 mx-auto flex w-full max-w-[450px] flex-col overflow-hidden rounded-[1.25rem] border px-2 pb-2 md:absolute md:-right-24">
          <div className="flex h-10 w-full items-center gap-6 px-2 md:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-foreground text-sm">Deployment logs</span>
              <span className="text-muted-foreground bg-muted-foreground/20 rounded-md px-1.5 py-0.5 text-xs font-light">
                Building
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div role="status" className="order-1 md:order-2">
                <svg
                  aria-hidden="true"
                  className={cn(
                    "animation-duration-[3s] h-3 w-3 fill-black text-black/10 dark:invert",
                    {
                      "animate-spin": shouldAnimate,
                    },
                  )}
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              <span className="text-sm">{seconds}s</span>
            </div>
          </div>
          <div className="bg-background dark:bg-background flex flex-col flex-nowrap overflow-hidden rounded-[12px] p-4 text-xs">
            <code className="w-[900px] tracking-wider">
              {text.map(({ timestamp, content }, i) => (
                <div key={i} className="flex flex-nowrap gap-2">
                  <span className="text-muted-foreground block">
                    {timestamp}
                  </span>
                  <span
                    className={cn("block flex-nowrap", {
                      "text-primary": i === 0,
                    })}
                  >
                    {content}
                  </span>
                </div>
              ))}
              <div className="flex flex-nowrap gap-2">
                <span className="text-muted-foreground block">
                  18:31:23.305
                </span>
                <span className="block flex-nowrap">{lastLine}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
      {/* text */}
      <div className="p-4">
        <span className="text-foreground text-lg">Delivery</span>
        <p className="text-muted-foreground font-extralight">
          Craft rollout plans, integrate suitable indicators and system
          monitoring tools based on business strategy and decision.
        </p>
      </div>
    </motion.div>
  );
}
