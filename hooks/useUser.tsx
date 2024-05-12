"use client"


import { createContext, useContext, useEffect, useState } from "react";
import { UserDetails } from "@/types";
type UserContextType = {
  userDetails: UserDetails | null;
};


export interface IUserContext {
  user: UserDetails;
  setUser: (user: UserDetails) => void;
}

export const UserContext = createContext<IUserContext | any>(null);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<UserDetails>({
    username: "",
    email: "",
    id: "",
    avatar: "",
  });
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}