"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookieStorage";
import { getWorkoutPlan } from "@/utils/getWorkoutPlan";
import WorkoutCard from "@/components/WorkoutCard";
import { motion } from "framer-motion";
import { MdFitnessCenter } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";

export default function WorkoutsPage() {
  const [user, setUser] = useState<any>(null);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const userData = getCookie("userData");
    setUser(userData);
    if (userData) {
      const plan = getWorkoutPlan(userData.activity);
      setWorkouts(plan);
    }
  }, []);

  if (!user)
    return (
      <div className="p-6 text-center text-gray-600 animate-pulse">
        Loading your custom workout...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-gray-800 font-sans">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
          {user.name}'s Personalized Workout Plan
        </h1>
        <p className="text-gray-600 text-md">
          Based on your activity level:{" "}
          <span className="font-semibold text-blue-700">
            {user.activity || "Not set"}
          </span>
        </p>
      </motion.div>

      {/* Tip box */}
      <motion.div
        className="bg-blue-50 p-4 rounded-lg flex items-center gap-4 mb-8 shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <GiMuscleUp size={30} className="text-blue-500" />
        <p className="text-sm text-gray-700">
          💡 Tip: Consistency beats intensity! Try to complete at least 70% of
          your weekly plan for best results.
        </p>
      </motion.div>

      {/* Workout Grid */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <MdFitnessCenter size={24} className="text-blue-600" />
          <h2 className="text-2xl font-semibold">Today's Exercises</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <WorkoutCard workout={workout} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}