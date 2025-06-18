"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full text-center"
      >
        <h1 className="flex items-center justify-center gap-6 text-5xl text-green-500 font-semibold mb-5">
          <FiActivity className="text-gray-500 dark:text-gray-300" size={36} />
          FitTrack
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-10 leading-relaxed">
          Effortlessly track your workouts, nutrition, and progress. Tailored
          plans designed to help you stay healthy and motivated.
        </p>

        <div className="flex justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/auth/login"
              className="px-8 py-3 bg-green-400 hover:bg-green-600 text-white dark:text-white rounded-md font-medium shadow-md transition"
            >
              Login
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/onboarding"
              className="px-8 py-3 border-2 border-green-400 text-green-400 dark:border-green-500 dark:text-green-300 rounded-md font-medium transition"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
