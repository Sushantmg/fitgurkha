"use client";

import React, { useEffect, useState } from "react";
import { getCookie } from "@/lib/cookieStorage";
import { getFoodRecommendations } from "@/utils/getFoodRecommendations";
import FoodCard from "@/components/FoodCard";
import { GiFruitBowl } from "react-icons/gi";
import { motion } from "framer-motion";

// Define types here or import from your types file
type UserData = {
  name: string;
  age: number;
  heightCm: number;
  gender: "male" | "female";
  exerciseFrequency: string;
};

type FoodItem = {
  name: string;
  description?: string;
};

export default function NutritionPage() {
  const [user, setUser] = useState<UserData | null>(null);
  const [foods, setFoods] = useState<FoodItem[]>([]);

  useEffect(() => {
    const userData = getCookie("userData") as UserData | null;
    if (userData) {
      setUser(userData);
      const recommendedFoods = getFoodRecommendations(userData);
      setFoods(recommendedFoods);
    }
  }, []);

  if (!user) {
    return (
      <p className="p-6 text-center text-gray-500 dark:text-gray-400">
        Loading recommendations...
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans text-gray-800 dark:text-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Nutrition Suggestions for{" "}
        <span className="text-blue-600 dark:text-blue-400">{user.name}</span>
      </motion.h1>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <GiFruitBowl className="text-green-500 dark:text-green-400" size={28} />
          <h2 className="text-2xl font-semibold">Healthy Picks Just for You</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FoodCard
                name={food.name}
                description={food.description || "A healthy choice to fuel your day!"}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
