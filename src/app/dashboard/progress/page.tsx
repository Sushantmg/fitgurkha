"use client";

import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookieStorage";
import ProgressChart from "@/components/ProgressChart";
import { motion } from "framer-motion";
import { MdTrendingDown } from "react-icons/md";

// Type declarations
type User = {
  name: string;
  age: number;
  heightCm: number;
  gender: string;
  exerciseFrequency: string;
};

type ProgressEntry = {
  date: string;
  weight: number;
};

export default function ProgressPage() {
  const [user, setUser] = useState<User | null>(null);
  const [progressData, setProgressData] = useState<ProgressEntry[]>([
    { date: "2025-06-01", weight: 70 },
    { date: "2025-06-08", weight: 69 },
    { date: "2025-06-15", weight: 68 },
    { date: "2025-06-22", weight: 67 },
  ]);

  useEffect(() => {
    const raw = getCookie("userData");
    if (raw) {
      try {
        const parsed: User = JSON.parse(raw);
        setUser(parsed);
      } catch (err) {
        console.error("Error parsing userData cookie:", err);
      }
    }
  }, []);

  if (!user)
    return (
      <p className="p-6 text-center text-gray-600 dark:text-gray-300 animate-pulse transition-colors">
        Loading...
      </p>
    );

  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-10 font-sans text-gray-800 dark:text-white transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Page Header */}
      <div className="text-center mb-8">
        <motion.h2
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Progress Tracking 📉
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 transition-colors">
          Stay motivated, <span className="font-semibold">{user.name}</span>! Every step counts.
        </p>
      </div>

      {/* Chart Card */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center mb-4">
          <MdTrendingDown className="text-blue-500 dark:text-blue-400 mr-2" size={28} />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors">
            Weight Trend (kg)
          </h3>
        </div>
        <ProgressChart data={progressData} />
      </motion.div>

      {/* Tip Section */}
      <motion.div
        className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-5 text-sm text-blue-800 dark:text-blue-100 shadow-md transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        💡 <strong>Tip:</strong> Small, consistent changes are more sustainable than extreme ones.
        Keep up the great work!
      </motion.div>
    </motion.div>
  );
}
