"use client";

import Image from "next/image";
import Link from "next/link";

import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();

  return (
    <header className="border-b border-[#202329] bg-[#090a0c]">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={28}
            height={28}
            priority
          />

          <span className="text-sm font-extrabold tracking-wide text-white sm:text-base">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-white transition hover:text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="text-sm font-semibold text-[#8d929c] transition hover:text-[#ccff00]"
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-2.5 py-1.5 text-[9px] font-black text-[#090a0c] sm:px-3 sm:text-[10px]"
          >
            Plan {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#3a3e47] px-2.5 py-1.5 text-[9px] font-black text-white sm:px-3 sm:text-[10px]"
          >
            Saved {saved.length}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex border-t border-[#202329] md:hidden">
        <Link
          href="/"
          className="flex-1 py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-white"
        >
          Workout
        </Link>

        <Link
          href="/my-plan"
          className="flex-1 border-l border-[#202329] py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-[#8d929c]"
        >
          My Plan
        </Link>
      </div>
    </header>
  );
}