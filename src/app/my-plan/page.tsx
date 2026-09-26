"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFitLog } from "@/context/FitLogContext";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    hydrated,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState<Tab>("plan");

  const minutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const currentList =
    activeTab === "plan" ? plan : saved;

  if (!hydrated) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center bg-[#090a0c]">
          <div className="flex flex-col items-center">
            <div className="h-9 w-9 animate-spin rounded-full border-4 border-zinc-800 border-t-lime-400" />

            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#777d87]">
              Loading workouts...
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#090a0c]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-12">

          {/* Heading */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
              Your Log
            </p>

            <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              My Plan
            </h1>

            <p className="mt-2 text-xs text-[#777d87]">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          {/* Metrics */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            <Metric
              label="Exercises"
              value={plan.length}
            />

            <Metric
              label="Minutes"
              value={minutes}
            />

            <Metric
              label="Calories"
              value={calories}
            />
          </div>

          {/* Tabs */}
          <div className="mt-8 flex border-b border-[#252932]">

            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={`px-4 pb-3 text-[10px] font-bold uppercase tracking-wider transition ${
                activeTab === "plan"
                  ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                  : "text-[#777d87] hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`px-4 pb-3 text-[10px] font-bold uppercase tracking-wider transition ${
                activeTab === "saved"
                  ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                  : "text-[#777d87] hover:text-white"
              }`}
            >
              Saved
            </button>

          </div>

          {/* Content */}
          <div className="mt-6">

            {currentList.length === 0 ? (
              <EmptyState activeTab={activeTab} />
            ) : (
              <div className="space-y-3">

                {currentList.map((workout) => (
                  <PlanCard
                    key={workout.id}
                    workout={workout}
                    activeTab={activeTab}
                    onDone={markAsDone}
                    onRemove={
                      activeTab === "plan"
                        ? removeFromPlan
                        : removeFromSaved
                    }
                  />
                ))}

              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-lg border border-[#252932] bg-[#111318] px-3 py-4 sm:px-5">

      <p className="text-[8px] font-bold uppercase tracking-wider text-[#666c76]">
        {label}
      </p>

      <p className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
        {value}
      </p>

    </div>
  );
}

function PlanCard({
  workout,
  activeTab,
  onDone,
  onRemove,
}: {
  workout: {
    id: number;
    name: string;
    image: string;
    equipment: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
  };
  activeTab: Tab;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-[#252932] bg-[#111318] p-3 sm:flex-row sm:items-center">

      <img
        src={workout.image}
        alt={workout.name}
        className="h-24 w-full rounded-md object-cover sm:h-20 sm:w-28"
      />

      <div className="min-w-0 flex-1">

        <h2 className="text-xs font-extrabold uppercase text-white">
          {workout.name}
        </h2>

        <p className="mt-1 text-[9px] text-[#777d87]">
          {workout.equipment}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3 text-[9px] text-[#777d87]">

          <span className="flex items-center gap-1">
            <Clock3 size={11} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={11} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={11} />
            {workout.rating}
          </span>

        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:justify-end">

        <Link
          href={`/workout/${workout.id}`}
          className="rounded-md border border-[#30343c] px-3 py-2 text-[9px] font-bold uppercase text-white hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          View Details
        </Link>

        {activeTab === "plan" && (
          <button
            type="button"
            onClick={() => onDone(workout.id)}
            className="inline-flex items-center gap-1 rounded-md bg-[#ccff00] px-3 py-2 text-[9px] font-bold uppercase text-[#090a0c]"
          >
            <Check size={11} />
            Mark as Done
          </button>
        )}

        <button
          type="button"
          onClick={() => onRemove(workout.id)}
          className="inline-flex items-center justify-center rounded-md border border-[#30343c] px-2.5 py-2 text-white hover:border-red-400 hover:text-red-400"
          aria-label="Remove workout"
        >
          <X size={13} />
        </button>

      </div>
    </div>
  );
}

function EmptyState({
  activeTab,
}: {
  activeTab: Tab;
}) {
  return (
    <div className="rounded-lg border border-dashed border-[#30343c] bg-[#111318] px-6 py-16 text-center">

      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ccff00]">
        Nothing Here Yet
      </p>

      <p className="mx-auto mt-3 max-w-sm text-xs leading-5 text-[#777d87]">
        {activeTab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save a workout from the library and find it here later."}
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex rounded-md bg-[#ccff00] px-5 py-3 text-[10px] font-bold uppercase text-[#090a0c]"
      >
        Go to workouts
      </Link>

    </div>
  );
}