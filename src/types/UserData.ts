export interface UserData {
  age: number;
  name: string;
  heightCm: number;
  gender: "male" | "female" | "other";
  exerciseFrequency: "never" | "sometimes" | "regularly" | "daily";
  weightKg?: number;
}
