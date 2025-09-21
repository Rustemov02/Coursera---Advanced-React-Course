import { createContext, useContext, useState, type ReactNode } from "react";

type ThemeType = { theme: string; setTheme: (theme: string) => void };

const ThemeContext = createContext<ThemeType | undefined>({
  theme: "dark",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("Couldn't find any theme data !");
  }

  return theme;
};
