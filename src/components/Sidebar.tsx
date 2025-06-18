"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ThemeToggle from "./ThemeButton";

import {
  MdDashboard,
  MdFitnessCenter,
  MdHome,
  MdRestaurantMenu,
  MdTimeline,
  MdPerson,
  MdLogout,
  MdMonitorWeight,  // <-- import this icon for BMI
} from "react-icons/md";

// add BMI link here
const navLinks = [
  { href: "/", label: "Home", icon: <MdHome size={20} /> },
  { href: "/dashboard", label: "Dashboard", icon: <MdDashboard size={20} /> },
  {
    href: "/dashboard/workouts",
    label: "Workouts",
    icon: <MdFitnessCenter size={20} />,
  },
  {
    href: "/dashboard/nutrition",
    label: "Nutrition",
    icon: <MdRestaurantMenu size={20} />,
  },
  { href: "/dashboard/progress", label: "Progress", icon: <MdTimeline size={20} /> },

  // BMI Calculator link
  {
    href: "/bmi",
    label: "BMI Calculator",
    icon: <MdMonitorWeight size={20} />,
  },
];


export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false); // <-- added mounted flag
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true); // mark component as mounted
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/auth/login");
  }

  // Do not render until after client mount
  if (!mounted) return null;

  return (
    <motion.aside
      initial={{ width: 64 }}
      animate={{ width: expanded ? 220 : 64 }}
      transition={{ type: "spring", stiffness: 220, damping: 30 }}
      className="fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-6 border-r border-gray-200 dark:border-gray-700 z-50 transition-all"
    >
      {/* Expand/Collapse Toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mb-6 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-800 transition-colors text-green-700 dark:text-green-300"
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        {expanded ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
      </button>

      {/* Theme Switch */}
      <div className="mb-6">{expanded && <ThemeToggle />}</div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2 w-full px-2 flex-grow">
        {navLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-green-200 dark:bg-green-700 text-green-900 dark:text-white font-semibold shadow"
                  : "text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-800"
              }`}
            >
              <span>{icon}</span>
              {expanded && <span className="whitespace-nowrap">{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Authentication Controls */}
      <div className="mt-auto w-full px-2">
        {token ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-2 rounded-lg text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800 w-full justify-center transition-colors"
            aria-label="Log out"
            title="Log out"
          >
            <MdLogout size={20} />
            {expanded && <span>Log Out</span>}
          </button>
        ) : (
          <Link
            href="/auth/register"
            className="flex items-center gap-4 px-4 py-2 rounded-lg text-sm text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-800 w-full justify-center transition-colors"
            aria-label="Register"
            title="Register"
          >
            <MdPerson size={20} />
            {expanded && <span>Register</span>}
          </Link>
        )}
      </div>
    </motion.aside>
  );
}
