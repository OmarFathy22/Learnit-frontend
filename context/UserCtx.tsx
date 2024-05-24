'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
export interface IUser {
  name: string;
  email: string;
  id: string;
}

export interface IUserContext {
  user: IUser;
  setUser: (user: IUser) => void;
}

export const UserContext = createContext<IUserContext | any>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const initialUser = JSON.parse(localStorage.getItem("user") || "{}");
  const [user, setUser] = useState<IUser>({
    name: initialUser.name || "",
    email: initialUser.email || "",
    id: initialUser.id || "",
  });

  return ( 
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};