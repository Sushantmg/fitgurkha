"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserData, UserData } from "@/context/UserDataContext";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBirthdayCake,
  FaRulerVertical,
  FaVenusMars,
  FaRunning,
} from "react-icons/fa";

export default function OnboardingPage() {
  const router = useRouter();
  const { setUserData } = useUserData();

  const [form, setForm] = useState<UserData>({
    name: "",
    age: 0,
    heightCm: 0,
    gender: "male",
    exerciseFrequency: "never",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (form.age <= 0) newErrors.age = "Age must be positive";
    if (form.heightCm <= 0) newErrors.heightCm = "Height must be positive";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "age" || e.target.name === "heightCm"
          ? Number(e.target.value)
          : e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setUserData(form);
    router.push("/dashboard");
  }

  // Common input wrapper styles for icon + input
  const inputWrapperClasses =
    "flex items-center space-x-3 rounded-md border px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent transition";

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg ring-1 ring-gray-200">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Tell Us About You
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <div
            className={`${inputWrapperClasses} ${
              errors.name ? "border-red-500 focus-within:ring-red-500" : "border-gray-300"
            }`}
          >
            <FaUser className={`text-gray-400 ${errors.name ? "text-red-500" : ""}`} />
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="flex-1 border-none outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 font-medium">{errors.name}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age
          </label>
          <div
            className={`${inputWrapperClasses} ${
              errors.age ? "border-red-500 focus-within:ring-red-500" : "border-gray-300"
            }`}
          >
            <FaBirthdayCake
              className={`text-gray-400 ${errors.age ? "text-red-500" : ""}`}
            />
            <input
              id="age"
              type="number"
              name="age"
              value={form.age || ""}
              onChange={handleChange}
              placeholder="Your age"
              min={1}
              className="flex-1 border-none outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
          {errors.age && (
            <p className="mt-1 text-sm text-red-600 font-medium">{errors.age}</p>
          )}
        </div>

        {/* Height */}
        <div>
          <label
            htmlFor="heightCm"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Height (cm)
          </label>
          <div
            className={`${inputWrapperClasses} ${
              errors.heightCm ? "border-red-500 focus-within:ring-red-500" : "border-gray-300"
            }`}
          >
            <FaRulerVertical
              className={`text-gray-400 ${errors.heightCm ? "text-red-500" : ""}`}
            />
            <input
              id="heightCm"
              type="number"
              name="heightCm"
              value={form.heightCm || ""}
              onChange={handleChange}
              placeholder="Your height in centimeters"
              min={1}
              className="flex-1 border-none outline-none text-gray-900 placeholder-gray-400"
            />
          </div>
          {errors.heightCm && (
            <p className="mt-1 text-sm text-red-600 font-medium">{errors.heightCm}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Gender
          </label>
          <div
            className={`${inputWrapperClasses} border-gray-300 bg-white cursor-pointer`}
          >
            <FaVenusMars className="text-gray-400" />
            <select
              id="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="flex-1 bg-transparent border-none outline-none cursor-pointer text-gray-900"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Exercise Frequency */}
        <div>
          <label
            htmlFor="exerciseFrequency"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Exercise Frequency
          </label>
          <div
            className={`${inputWrapperClasses} border-gray-300 bg-white cursor-pointer`}
          >
            <FaRunning className="text-gray-400" />
            <select
              id="exerciseFrequency"
              name="exerciseFrequency"
              value={form.exerciseFrequency}
              onChange={handleChange}
              className="flex-1 bg-transparent border-none outline-none cursor-pointer text-gray-900"
            >
              <option value="never">Never</option>
              <option value="sometimes">Sometimes</option>
              <option value="regularly">Regularly</option>
              <option value="daily">Daily</option>
            </select>
          </div>
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          Save & Continue
        </motion.button>
      </form>
    </div>
  );
}