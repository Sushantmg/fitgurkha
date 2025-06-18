"use client";

import React from "react";
import { useUserData } from "@/context/UserDataContext";
import { getWorkoutPlan } from "@/utils/getWorkoutPlan";
import { getFoodRecommendations } from "@/utils/getFoodRecommendations";

import WorkoutCard from "@/components/WorkoutCard";
import FoodCard from "@/components/FoodCard";
import { motion } from "framer-motion";
import {
  MdFitnessCenter,
  MdRestaurantMenu,
  MdEmojiEvents,
  MdEmojiObjects,
} from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaRegSmileBeam } from "react-icons/fa";

export default function DashboardPage() {
  const { userData } = useUserData();

  if (!userData) {
    return (
      <div className="p-6 text-center text-gray-800 dark:text-white">
        <h2 className="text-xl font-semibold">No user data found</h2>
        <p>
          Please complete your{" "}
          <a href="/onboarding" className="text-blue-600 dark:text-blue-400 underline">
            onboarding
          </a>
          .
        </p>
      </div>
    );
  }

  const workoutPlan = getWorkoutPlan(userData.exerciseFrequency);
  const foodSuggestions = getFoodRecommendations(userData);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans text-gray-800 dark:text-white transition-colors">
      {/* Hero Welcome */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-2">
          Welcome back, {userData.name}! 👋
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Let’s keep up the momentum today! 🚀
        </p>
      </motion.div>

      {/* Progress Fun Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-green-100 via-white to-blue-100 dark:from-green-900 dark:via-gray-800 dark:to-blue-900 rounded-xl p-6 mb-10 shadow-lg flex items-center gap-4"
      >
        <GiProgression size={40} className="text-green-600 dark:text-green-300" />
        <div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
            You're on a{" "}
            <span className="text-green-700 dark:text-green-400 font-bold">3-day</span> streak!
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Keep it going and earn a badge 🏆
          </p>
        </div>
      </motion.div>

      {/* Workout Section */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <MdFitnessCenter className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Your Workout Plan
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workoutPlan.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <WorkoutCard workout={w} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nutrition Section */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <MdRestaurantMenu className="text-red-500 dark:text-red-400" size={28} />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Nutrition Suggestions
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodSuggestions.map((food, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FoodCard name={food.name} description={food.description} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun Fact Section */}
      <motion.div
        className="bg-yellow-100 dark:bg-yellow-800 p-6 rounded-xl flex items-start gap-4 text-yellow-800 dark:text-yellow-100 shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <MdEmojiObjects size={32} />
        <div>
          <h3 className="font-semibold text-lg mb-1">Did you know?</h3>
          <p className="text-sm">
            Exercising just 30 minutes a day boosts mental clarity and reduces stress.
          </p>
        </div>
      </motion.div>

      {/* Motivational Quote */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="italic text-gray-600 dark:text-gray-400 text-sm">
          “The body achieves what the mind believes.” 💪
        </p>
      </motion.div>
    </div>
  );
}
