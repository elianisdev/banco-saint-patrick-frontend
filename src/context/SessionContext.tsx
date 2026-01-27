import { createContext, useContext, ReactNode } from "react";

type SessionContextValue = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const value: SessionContextValue = {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within a SessionProvider");
  return ctx;
};
