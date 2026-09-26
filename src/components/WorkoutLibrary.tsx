"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    const copy = [...workouts];

    copy.sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });

    return copy;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="border-b border-[#202329] bg-[#090a0c] py-14 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
              The Library
            </p>

            <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              Workout Library
            </h2>

            <p className="mt-1 text-[10px] text-[#777d87]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {/* Sort */}
          <div className="relative w-fit">
            <select
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value as SortOption)
              }
              className="appearance-none rounded-md border border-[#30343c] bg-[#111318] py-2 pl-3 pr-8 text-[10px] font-semibold text-white outline-none focus:border-[#ccff00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <ChevronDown
              size={13}
              className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#777d87]"
            />
          </div>
        </div>

        {/* Workout Grid */}
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
}