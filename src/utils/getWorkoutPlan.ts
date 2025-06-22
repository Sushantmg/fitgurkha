import { Workout } from "@/types/workout";

export const getWorkoutPlan = (activityLevel: string): Workout[] => {
  switch (activityLevel?.toLowerCase()) {
    case "low":
      return [
        { id: "1", name: "Stretching", type: "cardio", duration: 15, intensity: "low" },
        { id: "2", name: "Light Walking", type: "cardio", duration: 20, intensity: "low" },
      ];
    case "medium":
      return [
        { id: "3", name: "Jogging", type: "cardio", duration: 25, intensity: "medium" },
        { id: "4", name: "Bodyweight Exercises", type: "strength", duration: 20, intensity: "medium" },
      ];
    case "high":
      return [
        { id: "5", name: "Running", type: "cardio", duration: 30, intensity: "high" },
        { id: "6", name: "Weight Lifting", type: "strength", duration: 30, intensity: "high" },
        { id: "7", name: "Cycling", type: "cycling", duration: 45, intensity: "high" },
      ];
    default:
      return [
        { id: "8", name: "Basic Stretching", type: "cardio", duration: 10, intensity: "low" },
      ];
  }
};
