"use client";

import React from "react";
import { motion } from "framer-motion";
import { GiFruitBowl } from "react-icons/gi";

type FoodCardProps = {
  name: string;
  description: string;
};

export default function FoodCard({ name, description }: FoodCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/40 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg p-5 rounded-xl transition-all duration-300 hover:shadow-2xl"
      aria-label={`Food card for ${name}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <GiFruitBowl size={28} className="text-green-500 dark:text-green-400" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
