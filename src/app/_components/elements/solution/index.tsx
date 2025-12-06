"use client";

import { Cog } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { FaLink } from "react-icons/fa6";
import { GrSafariOption } from "react-icons/gr";
import { HiDatabase, HiShare } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import { LuGlobe } from "react-icons/lu";
import { SiAppstore, SiCloudflare } from "react-icons/si";
import { cn } from "~/utils/cn";
import { GradientHeading } from "../../fragments/gradient-heading";
import { Card, type Solution } from "./card";
import LogoCarousel from "./carousel";

const services: Solution[] = [
  {
    icon: Cog,
    name: "Software Development Consultancy",
    description:
      "Design scalable, maintainable systems that grow with your business for cost effective and promising solutions.",
  },
  {
    icon: SiCloudflare,
    name: "Advanced Software Development",
    description:
      "Pave the way to solid and robust systems, pattern, architecture for startups, enterprise built to address growth and collaboration.",
  },
  {
    icon: LuGlobe,
    name: "Web Application Development",
    description:
      "Build modern, responsive web applications tailored to your specific requirements.",
  },
  {
    icon: SiAppstore,
    name: "Mobile Application Development",
    description:
      "Build performant, portable cross platform mobile applications tailored to your specific requirements.",
  },
  {
    icon: HiDatabase,
    name: "Business Intelligence System",
    description:
      "Build data driven infrastructure for your business. Apply them on your next strategic decisions for maximum accuracy.",
  },
  {
    icon: HiShare,
    name: "Workflow Automation & AI Agent",
    description:
      "Streamline your business with automation workflow powered by AI agents to reduce redundancy, boost consistency.",
  },
  {
    icon: HiSparkles,
    name: "Legacy System Modernization",
    description:
      "Revamp your existing systems with cutting-edge technologies for better performance and maintainability.",
  },
  {
    icon: FaLink,
    name: "Third Party API Integration",
    description:
      "Connect your business with digital platform leaders. Increase point of contact and expose your business to more audience.",
  },
  {
    icon: GrSafariOption,
    name: "Analytic & Monitoring Tools",
    description:
      "Measure engagements. Experiment with different campaigns. Analyze and monitor the results, use the one that works best for your business.",
  },
] as const;

/** Animation variables */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

export default function Solution() {
  return (
    <section id="#solution">
      <div className="relative mx-auto px-6 py-24 md:pb-32 lg:pb-36">
        {/* Background elements */}
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
            <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
            {/* Header elements */}
            <div className="relative text-center">
              <div className="absolute top-[80%] left-1/4 size-72 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-500/40 blur-3xl" />
              <div className="absolute top-[40%] left-2/3 size-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-violet-500/40 blur-3xl" />
              <h1
                className={cn(
                  "text-[4rem] font-bold md:text-[9rem]",
                  "bg-linear-to-r from-indigo-500 from-35% via-violet-500 via-45% to-[#eeeef1] to-100% bg-clip-text text-transparent",
                )}
              >
                Solution
              </h1>
            </div>
          </div>
        </div>
        {/* Card layout */}
        <div className="relative container mx-auto mb-10 pt-5 md:pt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((solution: Solution) => (
              <Card
                key={solution.name}
                variants={itemVariants}
                solution={solution}
              />
            ))}
          </motion.div>
        </div>
        {/* Technology stack */}
        <div className="space-y-8 pt-12 md:pt-24">
          <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
            <div className="hidden text-center md:block">
              <GradientHeading weight={"thin"} size={"lg"}>
                Utilized only the best
              </GradientHeading>
              <GradientHeading
                weight={"semi"}
                size={"xl"}
                className="from-foreground bg-gradient-to-br to-transparent bg-clip-text text-transparent"
              >
                modern technologies
              </GradientHeading>
            </div>
            <div className="block text-center md:hidden">
              <GradientHeading weight={"thin"} size={"md"}>
                Utilized only the best
              </GradientHeading>
              <GradientHeading
                weight={"semi"}
                size={"lg"}
                className="from-foreground bg-gradient-to-br to-transparent bg-clip-text text-transparent"
              >
                modern technologies
              </GradientHeading>
            </div>

            <LogoCarousel columnCount={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
