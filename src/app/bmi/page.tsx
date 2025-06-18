"use client";

import React, { useState } from "react";
import { calculateBMI, getBMICategory } from "../../lib/bmiCalculator";
import { calculateBMR } from "../../lib/bmrCalculator";

type CalculatorType = "BMI" | "BMR";

export default function HealthCalculator() {
  const [calculator, setCalculator] = useState<CalculatorType>("BMI");

  // Common inputs for BMI
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // Extra inputs for BMR
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");

  // Results
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const [bmrResult, setBmrResult] = useState<number | null>(null);

  // Calculate BMI
  function handleBMICalculate() {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h) {
      setBmiResult(null);
      setBmiCategory("Please enter valid weight and height.");
      return;
    }

    const bmi = calculateBMI(w, h);
    setBmiResult(bmi);
    setBmiCategory(getBMICategory(bmi));
  }

  // Calculate BMR
  function handleBMRCalculate() {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

    if (!w || !h || !a) {
      setBmrResult(null);
      return;
    }

    // Assuming your calculateBMR accepts (weightKg, heightCm, age, gender)
    const bmr = calculateBMR(w, h, a, gender);
    setBmrResult(bmr);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6 space-x-4">
          {(["BMI", "BMR"] as CalculatorType[]).map((type) => (
            <button
              key={type}
              onClick={() => {
                setCalculator(type);
                // Reset results on toggle
                setBmiResult(null);
                setBmiCategory("");
                setBmrResult(null);
              }}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                calculator === type
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white"
              }`}
            >
              {type} Calculator
            </button>
          ))}
        </div>

        {/* BMI Calculator */}
        {calculator === "BMI" && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              BMI Calculator
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="weight"
                  className="block mb-1 text-gray-700 dark:text-gray-300 font-medium"
                >
                  Weight (kg)
                </label>
                <input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g. 70"
                  min="0"
                />
              </div>

              <div>
                <label
                  htmlFor="height"
                  className="block mb-1 text-gray-700 dark:text-gray-300 font-medium"
                >
                  Height (cm)
                </label>
                <input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g. 170"
                  min="0"
                />
              </div>

              <button
                onClick={handleBMICalculate}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
              >
                Calculate BMI
              </button>

              {bmiResult !== null && (
                <div className="mt-4 text-center">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    Your BMI:{" "}
                    <span className="text-green-600 dark:text-green-400">
                      {bmiResult}
                    </span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {bmiCategory}
                  </p>
                </div>
              )}

              {bmiResult === null && bmiCategory && (
                <p className="mt-4 text-center text-red-500">{bmiCategory}</p>
              )}
            </div>
          </>
        )}

        {/* BMR Calculator */}
        {calculator === "BMR" && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              BMR Calculator
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="weight-bmr"
                  className="block mb-1 text-gray-700 dark:text-gray-300 font-medium"
                >
                  Weight (kg)
                </label>
                <input
                  id="weight-bmr"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g. 70"
                  min="0"
                />
              </div>

              <div>
                <label
                  htmlFor="height-bmr"
                  className="block mb-1 text-gray-700 dark:text-gray-300 font-medium"
                >
                  Height (cm)
                </label>
                <input
                  id="height-bmr"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g. 170"
                  min="0"
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block mb-1 text-gray-700 dark:text-gray-300 font-medium"
                >
                  Age (years)
                </label>
                <input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g. 25"
                  min="0"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-700 dark:text-gray-300 font-medium">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) =>
                    setGender(e.target.value === "male" ? "male" : "female")
                  }
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <button
                onClick={handleBMRCalculate}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
              >
                Calculate BMR
              </button>

              {bmrResult !== null && (
                <div className="mt-4 text-center text-gray-900 dark:text-white">
                  Your BMR:{" "}
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    {bmrResult.toFixed(2)} kcal/day
                  </span>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
