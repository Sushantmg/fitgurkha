"use client";

import React, { useEffect } from "react";
import { useUserData } from "@/context/UserDataContext";

// ✅ Define the type here (since you're not importing from a types file)
type UserData = {
  age: number;
  name: string;
  heightCm: number;
  gender: "male" | "female" | "other";
  exerciseFrequency: "never" | "sometimes" | "regularly" | "daily";
  weightKg?: number;
};

export default function Dashboard() {
  const { userData, setUserData } = useUserData();

  useEffect(() => {
    if (!userData) {
      const newUser: UserData = {
        age: 25,
        name: "Sushan",
        heightCm: 165,
        gender: "male",
        exerciseFrequency: "regularly",
        weightKg: 60,
      };
      setUserData(newUser);
    }
  }, [userData, setUserData]);

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome back, {userData.name}!</h1>
      <p>Age: {userData.age}</p>
      <p>Height: {userData.heightCm} cm</p>
      <p>Gender: {userData.gender}</p>
      <p>Exercise Frequency: {userData.exerciseFrequency}</p>
      <p>Weight: {userData.weightKg ?? "Not set"} kg</p>
    </div>
  );
}
