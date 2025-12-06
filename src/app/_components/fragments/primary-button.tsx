import type React from "react";
import { cn } from "~/utils/cn";
import { Button } from "../ui/button";

export default function PrimaryButton({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Button
      className={cn(
        "animation-glow-pulse direction-[alternate] animation-duration-[2s] repeat-[infinite] relative isolate z-15 h-9 cursor-pointer overflow-hidden rounded-full bg-size-[200%_200%] [box-shadow:0_0_40px_rgba(124,58,237,0.2),0_0_80px_rgba(139,92,246,0.1),0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-[0.4s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] [animation-timing-function:ease-in-out] [background:linear-gradient(135deg,#7c3aed,#4338ca)] [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]",
        'before:absolute before:top-0 before:-left-full before:z-1 before:h-full before:w-full before:[transition-property:left] before:duration-[0.6s] before:ease-[ease] before:[content:""] before:[background:linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]',
        'after:animation-border-dance after:animation-duration-[4s] after:repeat-[infinite] after:absolute after:-inset-0.5 after:-z-1 after:bg-size-[200%_200%] after:opacity-0 after:[transition-property:opacity] after:duration-300 after:ease-[ease] after:[content:""] after:[animation-timing-function:linear] after:[background:linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent,rgba(255,255,255,0.1),transparent)]',
        "hover:before:left-full",
        "hover:after:opacity-[1]",
        "active:transform-[translateY(-2px)_scale(1.02)]",
        "hover:animation-duration-[1.5s] hover:scale-[1.05] hover:[box-shadow:0_0_60px_rgba(124,58,237,0.2),0_0_120px_rgba(139,92,246,0.2),0_0_180px_rgba(109,40,217,0.2),0_12px_40px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.3)] hover:[transition-property:all] hover:duration-[0.4s] hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
