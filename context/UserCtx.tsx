"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
export interface IUser {

}

export interface IUserContext {
  user: any;
  setUser: (user: any) => void;
}

export const UserContext = createContext<IUserContext | any>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const initialUser = JSON.parse(localStorage.getItem("user") || "{}");
  const [user, setUser] = useState<IUser>({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
