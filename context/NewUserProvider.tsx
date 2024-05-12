"use client";

import { UserProvider as UserProviderCtx } from "@/hooks/useUser";
interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return (
    <UserProviderCtx
  
    >
      {children}
    </UserProviderCtx>
  );
};

export default UserProvider;