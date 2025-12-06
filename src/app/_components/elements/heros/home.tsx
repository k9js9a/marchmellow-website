"use client";

import Link from "next/link";
import React from "react";
import { TbBackground } from "react-icons/tb";
import LiquidGlassButton from "~/app/_components/fragments/liquid-glass-button";
import PrimaryButton from "~/app/_components/fragments/primary-button";
import Iridescence from "~/app/_components/iridescence";
import { MorphingText } from "~/app/_components/morphing-text";
import ScrollIndicator from "~/app/_components/scroll-indicator";

export default function Hero() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <section id="#hero" className="relative overflow-x-hidden">
      <div
        ref={containerRef}
        className="relative flex h-screen flex-col justify-center"
      >
        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full">
            <LiquidGlassButton
              onClick={() => {
                const element = document.getElementById("#solution");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <TbBackground className="text-[#f5f5f4]" />
              <span className="font-extralight text-[#f5f5f4]">
                Navigate to solution
              </span>
            </LiquidGlassButton>
            <h1 className="mt-8 max-w-2xl text-5xl tracking-tight text-balance text-[#f5f5f4] text-shadow-[0_0_16px_rgba(0,0,0,0.5)] md:text-6xl xl:text-7xl">
              Collaboration for
            </h1>
            <MorphingText
              className={"mx-auto font-medium text-[#f5f5f4]"}
              texts={["creative", "effective", "meaningful"]}
            />
            <h1 className="max-w-2xl text-5xl tracking-tight text-balance text-[#f5f5f4] text-shadow-[0_0_16px_rgba(0,0,0,0.5)] md:text-6xl xl:text-7xl">
              solutions.
            </h1>
            <p className="mt-8 max-w-2xl text-base font-extralight text-balance text-[#f5f5f4] text-shadow-[0_0_16px_rgba(0,0,0,0.5)]">
              I&apos;m <span className="font-semibold">March</span>, A Software
              Engineer — based in Thailand with 5+ years of professional
              experience in software development &amp; architecture.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <Link aria-label="Navigate to contacts" href={"/contacts"}>
                <PrimaryButton>
                  <span className="font-extralight text-[#f5f5f4]">
                    Let&apos;s Connect
                  </span>
                </PrimaryButton>
              </Link>
              <Link aria-label="Navigate to about" href={"/about"}>
                <LiquidGlassButton>
                  <span className="font-extralight text-[#f5f5f4]">
                    Learn More
                  </span>
                </LiquidGlassButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-1 -z-10 aspect-auto overflow-hidden rounded-3xl border border-black/10 dark:border-white/5">
          <Iridescence
            color={[0.5, 0.6, 0.8]}
            mouseReact={true}
            amplitude={0.1}
            speed={1.0}
          />
        </div>
      </div>
      <ScrollIndicator containerRef={containerRef} />
    </section>
  );
}
