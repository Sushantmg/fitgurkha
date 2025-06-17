import React from "react";
import Sidebar from "@/components/Sidebar";
import { UserDataProvider } from "@/context/UserDataContext";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css"; // Ensure you have global styles for Tailwind CSS

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
      <body className="flex min-h-screen h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <main className="flex-1 overflow-auto">{/* content */}
            <AuthProvider>
              <UserDataProvider>{children}</UserDataProvider>
            </AuthProvider>
          </main>
        </div>
      </body>
    </html>
  );
}