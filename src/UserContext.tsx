import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";

interface ContextType {
  name: string;
  email: string;
}

const UserContext = createContext<ContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user] = useState({
    name: "John",
    email: "example@gmail.com",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
};
