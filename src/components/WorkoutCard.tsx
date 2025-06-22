"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaRunning,
  FaDumbbell,
  FaBiking,
  FaSwimmer,
  FaFire,
} from "react-icons/fa";

import { Workout } from "@/types/workout";

const getIcon = (type?: string) => {
  switch (type?.toLowerCase()) {
    case "cardio":
      return <FaRunning className="text-blue-500" size={28} />;
    case "strength":
      return <FaDumbbell className="text-red-500" size={28} />;
    case "cycling":
      return <FaBiking className="text-yellow-500" size={28} />;
    case "swimming":
      return <FaSwimmer className="text-teal-500" size={28} />;
    default:
      return <FaFire className="text-pink-500" size={28} />;
  }
};

const getIntensityLabel = (level?: string) => {
  switch (level) {
    case "low":
      return <span className="text-green-600 dark:text-green-400 font-medium">Easy</span>;
    case "medium":
      return <span className="text-yellow-600 dark:text-yellow-300 font-medium">Moderate</span>;
    case "high":
      return <span className="text-red-600 dark:text-red-400 font-medium">Intense</span>;
    default:
      return <span className="text-gray-500 dark:text-gray-400">Unknown</span>;
  }
};

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/40 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-gray-700 shadow-lg p-5 rounded-xl transition-all duration-300 hover:shadow-2xl"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {getIcon(workout.type)}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {workout.name}
          </h3>
        </div>
        <div className="text-sm">{getIntensityLabel(workout.intensity)}</div>
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
        Type:{" "}
        <span className="capitalize font-medium text-gray-900 dark:text-gray-100">
          {workout.type || "N/A"}
        </span>
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Duration:{" "}
        <span className="font-semibold">{workout.duration} mins</span>
      </p>
    </motion.div>
  );
}
