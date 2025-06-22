"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

// ✅ Define and export the UserData type here
export interface UserData {
  age: number;
  name: string;
  heightCm: number;
  gender: "male" | "female" | "other";
  exerciseFrequency: "never" | "sometimes" | "regularly" | "daily";
  weightKg?: number;
}

interface UserDataContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
  clearUserData: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

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
