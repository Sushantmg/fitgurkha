"use client";

import React from "react";
import { FaDumbbell, FaAppleAlt, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaDumbbell size={36} className="text-green-500" />,
    title: "Workout Tracking",
    description: "Log your exercises easily and track your progress over time.",
  },
  {
    icon: <FaAppleAlt size={36} className="text-green-500" />,
    title: "Nutrition Guidance",
    description: "Get personalized food recommendations to stay healthy.",
  },
  {
    icon: <FaChartLine size={36} className="text-green-500" />,
    title: "Progress Insights",
    description: "Visualize your journey with charts and detailed reports.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 text-gray-900 dark:text-white max-w-6xl mx-auto transition-colors">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid gap-12 md:grid-cols-3">
        {features.map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center space-y-4 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform transition-transform duration-300"
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
