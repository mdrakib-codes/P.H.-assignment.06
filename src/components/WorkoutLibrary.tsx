"use client";

import { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  return (
    <section
      id="library"
      className="border-b border-[#202329] bg-[#090a0c] py-14"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            The Library
          </p>

          <h2 className="mt-1 text-2xl font-extrabold uppercase text-white">
            Workout Library
          </h2>

          <p className="mt-1 text-[10px] text-[#777d87]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
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