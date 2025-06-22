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
    return (
      <p className="text-center text-gray-500 mt-20 text-lg">Loading user data...</p>
    );
  }

  function handleLogout() {
    clearUserData();
    router.push("/onboarding");
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 ring-1 ring-gray-200 dark:ring-gray-700">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
        Welcome back, <span className="text-green-600 dark:text-green-400">{userData.name}</span>!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 dark:bg-green-900 rounded-lg p-6 shadow-inner">
          <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">Age</h2>
          <p className="text-2xl font-medium text-gray-900 dark:text-gray-100">{userData.age}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 rounded-lg p-6 shadow-inner">
          <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">Height</h2>
          <p className="text-2xl font-medium text-gray-900 dark:text-gray-100">{userData.heightCm} cm</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 rounded-lg p-6 shadow-inner">
          <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">Gender</h2>
          <p className="text-2xl font-medium text-gray-900 dark:text-gray-100 capitalize">{userData.gender}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 rounded-lg p-6 shadow-inner">
          <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">Exercise Frequency</h2>
          <p className="text-2xl font-medium text-gray-900 dark:text-gray-100 capitalize">{userData.exerciseFrequency}</p>
        </div>
        <div className="bg-green-50 dark:bg-green-900 rounded-lg p-6 shadow-inner sm:col-span-2">
          <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">Weight</h2>
          <p className="text-2xl font-medium text-gray-900 dark:text-gray-100">{userData.weightKg ?? "Not set"} kg</p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition-shadow shadow-md hover:shadow-lg"
        aria-label="Logout"
      >
        Logout
      </button>
    </div>
  );
}
