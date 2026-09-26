import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkoutDetails from "@/components/WorkoutDetails";

import { getWorkout } from "@/lib/api";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutPage({
  params,
}: WorkoutPageProps) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    return (
      <main className="min-h-screen bg-[#090a0c]">
        <Navbar />

        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Not Found
          </p>

          <h1 className="mt-3 text-3xl font-extrabold uppercase text-white">
            This workout does not exist.
          </h1>

          <Link
            href="/"
            className="mt-6 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-[#090a0c]"
          >
            Back to workouts
          </Link>
        </div>

        <Footer />
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <WorkoutDetails workout={workout} />

      <Footer />
    </>
  );
}