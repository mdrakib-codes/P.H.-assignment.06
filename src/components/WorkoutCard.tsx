import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-lg border border-[#252932] bg-[#111318] transition hover:border-[#3a3f48]"
    >
      {/* Image */}
      <div className="aspect-[1.75/1] overflow-hidden bg-[#171a20]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-3">
        {/* Muscle Groups */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-sm bg-[#ccff00] px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wide text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="text-[11px] font-extrabold uppercase tracking-wide text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-[9px] text-[#777d87]">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-3 flex items-center gap-3 border-t border-[#252932] pt-2.5 text-[8px] text-[#777d87]">
          <span className="flex items-center gap-1">
            <Clock3 size={10} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={10} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <Star size={10} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}