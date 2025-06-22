"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Workout } from "@/types/workout";
import { getWorkoutPlan } from "@/utils/getWorkoutPlan";
import WorkoutCard from "@/components/WorkoutCard";

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get userData from cookie (assumes you store it as JSON string)
    const userDataString = Cookies.get("userData");
    if (userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        const activityLevel = userData.exerciseFrequency || "low";
        const plan = getWorkoutPlan(activityLevel);

        // Ensure duration is always a number (fallback 0)
        const safePlan = plan.map((w) => ({
          ...w,
          duration: w.duration ?? 0,
        }));

        setWorkouts(safePlan);
      } catch (error) {
        console.error("Failed to parse userData cookie:", error);
      }
    } else {
      // No cookie found, set empty workouts or fallback plan
      setWorkouts([]);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600 animate-pulse">
        Loading your custom workout...
      </div>
    );
  }

  if (!workouts.length) {
    return (
      <div className="p-6 text-center text-gray-600">
        No workout plan available. Please complete your onboarding.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Your Workout Plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
