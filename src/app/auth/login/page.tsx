"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "@/lib/cookieStorage";
import { FaUser, FaLock } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const welcomeMessages = [
  "Welcome, Please Login",
  "로그인 해주세요",
  "कृपया लगइन गर्नुहोस्",
  "ログインしてください",
  "Por favor inicie sesión",
  "请登录",
];

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % welcomeMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      setCookie("auth", { username }, 7);
      router.push("/dashboard");
    } else {
      alert("Please fill in username and password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f2e9] via-[#c7e3cd] to-[#a3d9b1] p-6">
      <div className="backdrop-blur-md bg-white/70 rounded-xl shadow-lg w-full max-w-md p-10 border border-green-300">
        <AnimatePresence mode="wait">
          <motion.h2
            key={messageIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-green-900 text-center mb-8"
          >
            {welcomeMessages[messageIndex]}
          </motion.h2>
        </AnimatePresence>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex items-center bg-green-100 border border-green-300 rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-green-400 transition">
            <FaUser className="text-green-600 mr-3 text-xl" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent focus:outline-none text-green-900 w-full placeholder-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className="flex items-center bg-green-100 border border-green-300 rounded-lg px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-green-400 transition">
            <FaLock className="text-green-600 mr-3 text-xl" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent focus:outline-none text-green-900 w-full placeholder-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
