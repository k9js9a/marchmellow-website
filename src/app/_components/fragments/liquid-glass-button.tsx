import type React from "react";
import { cn } from "~/utils/cn";
import { Button } from "../ui/button";

export default function LiquidGlassButton({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Button
      variant={"ghost"}
      className={cn(
        "h-9 cursor-pointer rounded-full bg-[rgba(69,10,10,0.2)] bg-linear-to-br from-white/20 via-white/8 to-white/5 shadow-[inset_0_1px_2px_#ffffff50,0_2px_4px_#00000030] saturate-150 backdrop-blur-lg hover:scale-[1.05] hover:bg-[rgba(69,10,10,0.2)] dark:hover:bg-[rgba(69,10,10,0.2)]",
        "hover:animation-duration-[1.5s] hover:[box-shadow:0_0_60px_rgba(124,58,237,0.2),0_0_120px_rgba(139,92,246,0.2),0_0_180px_rgba(109,40,217,0.2),0_12px_40px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.3)] hover:[transition-property:all] hover:duration-[0.4s] hover:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] active:transform-[translateY(-2px)_scale(1.02)]",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
