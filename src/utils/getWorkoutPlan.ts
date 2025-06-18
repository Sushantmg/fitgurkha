import { Workout } from "@/types/workout";// import shared type

export const getWorkoutPlan = (activityLevel: string): Workout[] => {
  switch (activityLevel?.toLowerCase()) {
    case "low":
      return [
        { name: "Stretching", type: "cardio", duration: 15, intensity: "low" },
        { name: "Light Walking", type: "cardio", duration: 20, intensity: "low" },
      ];
    case "medium":
      return [
        { name: "Jogging", type: "cardio", duration: 25, intensity: "medium" },
        { name: "Bodyweight Exercises", type: "strength", duration: 20, intensity: "medium" },
      ];
    case "high":
      return [
        { name: "Running", type: "cardio", duration: 30, intensity: "high" },
        { name: "Weight Lifting", type: "strength", duration: 30, intensity: "high" },
        { name: "Cycling", type: "cycling", duration: 45, intensity: "high" },
      ];
    default:
      return [
        { name: "Basic Stretching", type: "cardio", duration: 10, intensity: "low" },
      ];
  }
};
