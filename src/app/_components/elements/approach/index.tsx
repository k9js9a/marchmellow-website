import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "~/utils/cn";
import PrimaryButton from "../../fragments/primary-button";

import Delivery from "./delivery";
import Development from "./development";
import Documentation from "./documentation";
import StrategicPlanning from "./strategic-planning";
import TechnicalBlueprint from "./technical-blueprint";

export default function Approach() {
  return (
    <section id="#approach">
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:pb-32 lg:pb-36">
        {/* Background elements */}
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          {/* Header */}
          <div className="absolute inset-0 -z-10">
            <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
            <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
            <div className="relative text-center">
              <div className="absolute top-[80%] left-1/4 size-72 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-500/40 blur-3xl" />
              <div className="absolute top-[40%] left-2/3 size-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-500/40 blur-3xl" />
              <h1
                className={cn(
                  "text-[4rem] font-bold md:text-[9rem]",
                  "bg-linear-to-r from-indigo-500 from-35% via-violet-500 via-45% to-[#eeeef1] to-100% bg-clip-text text-transparent",
                )}
              >
                Approach
              </h1>
            </div>
          </div>
        </div>
        {/* Grid layout */}
        <div className="relative container mx-auto mb-10 pt-5 md:pt-24">
          <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-12">
            <StrategicPlanning />
            <TechnicalBlueprint />
            <Documentation />
            <Development />
            <Delivery />
          </div>
        </div>
        {/* Call to action */}
        <div className="relative container mx-auto flex flex-col justify-between space-y-6 text-center md:flex-row md:space-y-0 md:text-left">
          <p
            className={cn(
              "max-w-2xl",
              "font-light text-balance",
              "from-foreground to-primary bg-linear-to-r bg-clip-text text-transparent",
            )}
          >
            My approach for the most efficient problem solving while working on
            projects, in order to achieve the desired goals.
          </p>
          <Link href={"/about"} aria-label="Navigate to about page">
            <PrimaryButton>
              <span className="font-extralight text-[#f5f5f4]">About</span>
              <ArrowRight />
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
