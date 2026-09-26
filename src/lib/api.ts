import { Workout } from "@/types/workout";

const API_URL =
  "https://api.api-store.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Workout[] = await response.json();

  return data;
}

export async function getWorkout(
  id: string
): Promise<Workout | null> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    return null;
  }

  const data: Workout = await response.json();

  return data;
}