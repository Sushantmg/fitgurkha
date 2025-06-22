// src/app/layout.tsx
import React from "react";
import Sidebar from "@/components/Sidebar";
import { UserDataProvider } from "@/context/UserDataContext";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata = {
  title: "Fitness Tracker",
  description: "Personalized fitness and nutrition app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <AuthProvider>
            <UserDataProvider>
              <div className="flex w-full">
                <Sidebar />
                <main className="flex-1 overflow-auto">{children}</main>
              </div>
            </UserDataProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
