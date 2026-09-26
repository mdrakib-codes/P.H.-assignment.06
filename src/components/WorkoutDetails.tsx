"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Bookmark,
  Check,
} from "lucide-react";

import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({
  workout,
}: WorkoutDetailsProps) {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  return (
    <main className="min-h-screen bg-[#090a0c]">
      <section className="border-b border-[#202329]">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          
          <Link
            href="/"
            className="mb-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#777d87] hover:text-[#ccff00]"
          >
            <ArrowLeft size={13} />
            Back to library
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            
            {/* Image */}
            <div className="overflow-hidden rounded-lg border border-[#252932] bg-[#111318]">
              <div className="aspect-[4/3] w-full">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-sm bg-[#ccff00] px-2 py-1 text-[9px] font-black uppercase text-[#090a0c]"
                  >
                    {group}
                  </span>
                ))}
              </div>

              <h1 className="mt-4 text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl">
                {workout.name}
              </h1>

              <p className="mt-4 text-sm leading-6 text-[#8d929c]">
                {workout.description}
              </p>

              {/* Specs */}
              <div className="mt-7 overflow-hidden rounded-lg border border-[#252932] bg-[#111318]">
                <div className="grid grid-cols-2">
                  <Spec label="Equipment" value={workout.equipment} />
                  <Spec label="Difficulty" value={workout.difficulty} />
                  <Spec label="Sets" value={`${workout.sets}`} />
                  <Spec label="Reps" value={workout.reps} />
                  <Spec label="Duration" value={`${workout.duration} min`} />
                  <Spec label="Calories" value={`${workout.caloriesBurned} kcal`} />
                  <Spec
                    label="Rating"
                    value={`${workout.rating}`}
                    full
                  />
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-7">
                <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                  Instructions
                </h2>

                <ol className="mt-4 space-y-3">
                  {workout.instructions.map(
                    (instruction, index) => (
                      <li
                        key={index}
                        className="flex gap-3 text-xs leading-5 text-[#8d929c]"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a1d22] text-[9px] font-bold text-[#ccff00]">
                          {index + 1}
                        </span>

                        <span>{instruction}</span>
                      </li>
                    )
                  )}
                </ol>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => addToPlan(workout)}
                  disabled={alreadyInPlan}
                  className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-bold uppercase transition ${
                    alreadyInPlan
                      ? "cursor-not-allowed bg-[#30342b] text-[#777d87]"
                      : "bg-[#ccff00] text-[#090a0c] hover:bg-[#ddff4d]"
                  }`}
                >
                  <Check size={15} />

                  {alreadyInPlan
                    ? "Already in today's plan"
                    : "Add to today's plan"}
                </button>

                <button
                  type="button"
                  onClick={() => saveWorkout(workout)}
                  disabled={alreadySaved}
                  className={`inline-flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-xs font-bold uppercase transition ${
                    alreadySaved
                      ? "cursor-not-allowed border-[#30343c] text-[#777d87]"
                      : "border-[#383d46] text-white hover:border-[#ccff00] hover:text-[#ccff00]"
                  }`}
                >
                  <Bookmark size={15} />

                  {alreadySaved
                    ? "Saved"
                    : "Save for later"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Spec({
  label,
  value,
  full = false,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div
      className={`border-b border-r border-[#252932] px-4 py-3 ${
        full ? "col-span-2" : ""
      }`}
    >
      <p className="text-[8px] font-bold uppercase tracking-wider text-[#666c76]">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold text-white">
        {value}
      </p>
    </div>
  );
}