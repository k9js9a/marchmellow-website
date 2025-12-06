import { motion } from "motion/react";
import React from "react";
import { TbBackground } from "react-icons/tb";
import { cn } from "~/utils/cn";

export type Solution = {
  name: string;
  description: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  highlight?: boolean;
};
type SolutionCardProps = React.ComponentPropsWithRef<typeof motion.div> & {
  solution: Solution;
};
export const Card = React.forwardRef<HTMLDivElement, SolutionCardProps>(
  ({ solution, className, ...props }, ref) => {
    const Icon = solution.icon ?? TbBackground;
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative flex flex-col justify-between overflow-hidden rounded-2xl p-6",
          "border-border/50 border",
          "from-background/20 via-background/8 to-background/5 bg-linear-to-br saturate-150 backdrop-blur-sm",
          // "shadow-[inset_0_1px_30px_0_rgba(255,255,255,0.1)]",
          "shadow-[inset_0_1px_2px_#ffffff50,0_2px_4px_#00000030]",
          "before:absolute before:inset-0 before:-z-10 before:content-['']",
          "before:bg-linear-to-br before:from-white/7 before:to-transparent",
          "before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
          "after:absolute after:inset-0 after:-z-20 after:content-['']",
          "after:bg-[radial-gradient(circle_at_75%_25%,hsl(var(--primary)/0.05),transparent_70%)]",
          "after:opacity-70",
          "hover:border-border/70 hover:shadow-lg",
          "group [-webkit-tap-highlight-color:transparent] [transform-style:preserve-3d]",
          className,
        )}
        whileHover={{ y: -8 }}
        {...props}
      >
        <div className="relative space-y-3">
          {/* <div className="relative inline-flex bg-neutral-200/20 dark:bg-[#161618]/20 border border-border/50 p-2 rounded-xl">
            <Icon className="w-6 h-6 text-foreground/80" />
            <FaCircleCheck className="absolute text-primary right-1 bottom-1 w-4 h-4 fill-primary bg-background rounded-full" />
          </div> */}
          <button
            type="button"
            aria-label={solution.name}
            className={`group relative h-12 w-12 border-none bg-transparent outline-none [perspective:24em]`}
          >
            <span
              className="absolute top-0 left-0 block h-full w-full origin-[100%_100%] rotate-[15deg] rounded-[1.25em] bg-indigo-500 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] [will-change:transform] group-hover:[transform:rotate(25deg)_translate3d(-0.1em,-0.1em,0.1em)]"
              style={{
                boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
              }}
            ></span>

            <span className="border-border absolute top-0 left-0 flex h-full w-full origin-[80%_50%] transform rounded-[1.25em] border bg-[hsla(0,0%,100%,0.15)] backdrop-blur-[0.75em] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] [will-change:transform] [-moz-backdrop-filter:blur(0.75em)] [-webkit-backdrop-filter:blur(0.75em)] group-hover:[transform:translate3d(0,0,2em)]">
              <span
                className="m-auto flex h-[1.5em] w-[1.5em] items-center justify-center"
                aria-hidden="true"
              >
                <Icon className="h-6 w-6 text-white" />
              </span>
            </span>

            {/* <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-base opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
              {item.label}
            </span> */}
          </button>
          <div className="text-foreground">
            <span className="text-lg font-medium">{solution.name}</span>
          </div>
          <span className="text-muted-foreground font-extralight">
            {solution.description}
          </span>
        </div>
      </motion.div>
    );
  },
);
Card.displayName = "Card";
