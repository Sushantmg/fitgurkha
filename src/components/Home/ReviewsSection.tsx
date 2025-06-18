"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    name: "Alice W.",
    text: "FitTrack has completely changed how I manage my fitness journey. Highly recommend!",
  },
  {
    name: "James K.",
    text: "Love the easy-to-use interface and personalized plans. I’ve seen real progress.",
  },
  {
    name: "Sara L.",
    text: "The nutrition recommendations helped me eat better without stress.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.3,
      type: "spring" as const,
      stiffness: 100,
    },
  }),
};

export default function ReviewsSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 max-w-5xl mx-auto text-gray-900 dark:text-white transition-colors">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-green-600 dark:text-green-400">
        What Users Say
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {reviews.map(({ name, text }, i) => (
          <motion.blockquote
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-600 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-default flex flex-col"
          >
            <FaQuoteLeft className="text-green-400 text-3xl mb-4" />
            <p className="text-gray-700 dark:text-gray-300 flex-grow leading-relaxed font-medium">
              “{text}”
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <FaUserCircle className="text-green-500 text-2xl" />
              <span className="font-semibold text-gray-900 dark:text-white">
                {name}
              </span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
