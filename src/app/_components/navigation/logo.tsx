"use client";

import Link from "next/link";
import React from "react";
import { TbBackground } from "react-icons/tb";
import { Button } from "../ui/button";

export default function Logo() {
  return (
    <Link aria-label="home" href={"/"}>
      <Button variant={"ghost"}>
        <TbBackground />
        <span className="text-lg font-semibold">Marchmellow.</span>
      </Button>
    </Link>
  );
}
