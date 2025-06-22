"use client";

import React, { useEffect } from "react";
import { useUserData } from "@/context/UserDataContext";
import { useRouter } from "next/navigation";

type UserData = {
  age: number;
  name: string;
  heightCm: number;
  gender: "male" | "female" | "other";
  exerciseFrequency: "never" | "sometimes" | "regularly" | "daily";
  weightKg?: number;
};

export default function Dashboard() {
  const { userData, setUserData, clearUserData } = useUserData();
  const router = useRouter();

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

  function handleLogout() {
    clearUserData();
    router.push("/onboarding"); // Redirect to onboarding or login page
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome back, {userData.name}!</h1>
      <p>Age: {userData.age}</p>
      <p>Height: {userData.heightCm} cm</p>
      <p>Gender: {userData.gender}</p>
      <p>Exercise Frequency: {userData.exerciseFrequency}</p>
      <p>Weight: {userData.weightKg ?? "Not set"} kg</p>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
