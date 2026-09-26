import { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

// Get all workouts
export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const data: Workout[] = await response.json();

  return data;
}

// Get single workout by ID
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