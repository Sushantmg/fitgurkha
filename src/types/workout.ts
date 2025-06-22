export type Intensity = "low" | "medium" | "high";

export interface Workout {
  id: string;          // unique id required
  name: string;
  type: string;
  duration: number;    // duration in minutes
  intensity: Intensity;
}
