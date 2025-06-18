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
      className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <GiFruitBowl size={28} className="text-green-500" />
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
}
