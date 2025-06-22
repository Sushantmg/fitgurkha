"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import type { UserData } from "@/types/userData";

interface UserDataContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  clearUserData: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [userData, setUserDataState] = useState<UserData | null>(null);

  useEffect(() => {
    const savedData = Cookies.get("userData");
    if (savedData) {
      try {
        setUserDataState(JSON.parse(savedData));
      } catch {
        Cookies.remove("userData");
      }
    }
  }, []);

  function setUserData(data: UserData) {
    setUserDataState(data);
    Cookies.set("userData", JSON.stringify(data), { expires: 7 });
  }

  function clearUserData() {
    setUserDataState(null);
    Cookies.remove("userData");
  }

  return (
    <UserDataContext.Provider value={{ userData, setUserData, clearUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
}
