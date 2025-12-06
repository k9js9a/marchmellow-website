"use client";

import { addDays, startOfMonth, subDays } from "date-fns";
import { motion, useInView } from "motion/react";
import React from "react";
import { Calendar } from "~/app/_components/ui/calendar";
import { useIsMobile } from "~/app/_hooks/use-mobile";

export default function StrategicPlanning() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: "all" });
  const isMobile = useIsMobile();
  const fromDate: Date = React.useMemo(() => startOfMonth(new Date()), []);
  const [toDate, setToDate] = React.useState<Date>(fromDate);

  const onSelect = React.useCallback(
    () => setToDate(addDays(fromDate, 4)),
    [fromDate],
  );
  const onDeselect = React.useCallback(
    () => setToDate(subDays(toDate, 4)),
    [toDate],
  );

  React.useEffect(() => {
    if (!isMobile) return;
    if (isInView) {
      onSelect();
    } else {
      onDeselect();
    }
  }, [isInView, isMobile]);

  return (
    <motion.div
      className="group border-border/50 from-background/20 via-background/8 to-background/5 relative col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-linear-to-br p-2 shadow-[inset_0_1px_2px_#ffffff50,0_2px_4px_#00000030] saturate-150 backdrop-blur-sm md:col-span-6 lg:col-span-4"
      ref={containerRef}
      onHoverStart={onSelect}
      onHoverEnd={onDeselect}
    >
      {/* spotlight */}
      <div className="group-hover:bg-primary/30 absolute -right-[50%] -bottom-10 h-16 w-full blur-2xl transition-all duration-500 ease-in-out group-hover:-bottom-6" />
      {/* showcase */}
      <div className="relative mt-auto mb-0 flex h-85 items-center justify-center overflow-clip rounded-xl bg-neutral-200/20 px-8 shadow-lg dark:bg-[#161618]/20 dark:shadow-white/10">
        <div className="bg-muted relative mx-auto mt-6 h-full w-full overflow-hidden rounded-t-[40px] border mask-b-from-60% mask-b-to-100% backdrop-blur-md md:mt-12">
          <Calendar
            mode="range"
            today={fromDate}
            selected={{ from: fromDate, to: toDate }}
            month={fromDate}
            className="bg-background dark:bg-background pointer-events-none absolute top-1/2 left-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 transform rounded-t-4xl"
            onSelect={onSelect}
          />
        </div>
      </div>
      {/* text */}
      <div className="p-4">
        <span className="text-foreground text-lg">Strategic Planning</span>
        <p className="text-muted-foreground font-extralight">
          Establish directions, priorities and goals based on requirements and
          timeline.
        </p>
      </div>
    </motion.div>
  );
}
