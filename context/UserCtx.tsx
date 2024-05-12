'use client'
import { createContext, useContext, useState, ReactNode } from "react";
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
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    id: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};