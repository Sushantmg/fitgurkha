export type Intensity = "low" | "medium" | "high";

export interface Workout {
  name: string;
  type: string;       // e.g. "cardio", "strength", "cycling", "swimming"
  duration: number;   // duration in minutes
  intensity: Intensity;
}
