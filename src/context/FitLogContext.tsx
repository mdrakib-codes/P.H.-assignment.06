"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  hydrated: boolean;
  toast: string;

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitLogContext = createContext<
  FitLogContextType | undefined
>(undefined);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [toast, setToast] = useState("");
  const [hydrated, setHydrated] = useState(false);

  /*
   * Load data from localStorage after the first render.
   *
   * eslint-disable is used here because this effect intentionally
   * hydrates client-side state from browser storage.
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan) as Workout[]);
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved) as Workout[]);
      }
    } catch (error) {
      console.error(
        "Failed to load FitLog data:",
        error
      );
    } finally {
      setHydrated(true);
    }
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!hydrated) {
      return;
    }

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!hydrated) {
      return;
    }

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, hydrated]);

  function showToast(message: string) {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  }

  function addToPlan(workout: Workout) {
    if (plan.some((item) => item.id === workout.id)) {
      showToast(
        "This workout is already in today's plan."
      );
      return;
    }

    if (plan.length >= 5) {
      showToast(
        "You can add a maximum of 5 workouts."
      );
      return;
    }

    setPlan((currentPlan) => [
      ...currentPlan,
      workout,
    ]);

    showToast("Added to today's plan.");
  }

  function saveWorkout(workout: Workout) {
    if (saved.some((item) => item.id === workout.id)) {
      showToast("This workout is already saved.");
      return;
    }

    setSaved((currentSaved) => [
      ...currentSaved,
      workout,
    ]);

    showToast("Saved for later.");
  }

  function removeFromPlan(id: number) {
    setPlan((currentPlan) =>
      currentPlan.filter(
        (workout) => workout.id !== id
      )
    );

    showToast("Removed from today's plan.");
  }

  function removeFromSaved(id: number) {
    setSaved((currentSaved) =>
      currentSaved.filter(
        (workout) => workout.id !== id
      )
    );

    showToast("Removed from saved workouts.");
  }

  function markAsDone(id: number) {
    setPlan((currentPlan) =>
      currentPlan.filter(
        (workout) => workout.id !== id
      )
    );

    showToast("Workout marked as done.");
  }

  function isInPlan(id: number) {
    return plan.some(
      (workout) => workout.id === id
    );
  }

  function isSaved(id: number) {
    return saved.some(
      (workout) => workout.id === id
    );
  }

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        hydrated,
        toast,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}