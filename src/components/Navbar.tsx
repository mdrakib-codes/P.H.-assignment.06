"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  const workoutActive = pathname === "/";
  const planActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-[#202228] bg-[#090a0c]">
      <div className="mx-auto flex h-[62px] max-w-[1200px] items-center justify-between px-5 sm:px-8">

        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={27}
            height={27}
            priority
          />

          <span className="text-[15px] font-black tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-[11px] font-semibold transition ${
              workoutActive
                ? "bg-[#18220d] text-[#ccff00]"
                : "text-[#858993] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-[11px] font-semibold transition ${
              planActive
                ? "bg-[#18220d] text-[#ccff00]"
                : "text-[#858993] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[11px] font-medium text-[#a0a4ad] hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-black text-[#090a0c]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[11px] font-medium text-[#a0a4ad] hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#343840] px-1 text-[9px] font-bold text-[#858993]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>

      <div className="flex border-t border-[#202228] md:hidden">
        <Link
          href="/"
          className={`flex-1 py-3 text-center text-[11px] font-bold uppercase tracking-wider ${
            workoutActive ? "text-[#ccff00]" : "text-[#858993]"
          }`}
        >
          Workouts
        </Link>

        <Link
          href="/my-plan"
          className={`flex-1 border-l border-[#202228] py-3 text-center text-[11px] font-bold uppercase tracking-wider ${
            planActive ? "text-[#ccff00]" : "text-[#858993]"
          }`}
        >
          My Plan
        </Link>
      </div>
    </header>
  );
}