import React from "react";
import { HydrateClient } from "~/trpc/server";
import Approach from "./_components/elements/approach";
import Hero from "./_components/elements/heros/home";
import Solution from "./_components/elements/solution";
import { GravityStarsBackground } from "./_components/gravity-stars";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="relative overflow-hidden">
        <React.Suspense>
          <Hero />
        </React.Suspense>
        <div className="relative">
          <GravityStarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
          <Approach />
          <Solution />
        </div>
      </main>
    </HydrateClient>
  );
}
