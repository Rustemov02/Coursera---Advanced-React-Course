import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ThemeType = {
  theme: string;
  setTheme: (theme: string) => void;
  value: { a: string; b: string };
};

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");
  const a = "hi";
  const b = "bye";

  // ! ATTENTION  ! \\

  // {a: ‘hi’, b: ‘bye’} !== {a: ‘hi’, b: ‘bye’}
  // That is because object comparison in JavaScript is done by reference.
  // Every time a new re-render happens in the App component, a new instance of the value object is created,
  //  resulting in the provider performing a comparison against its previous value and determining that it has changed,
  // hence(deməli) informing all context consumers that they should re-render.
  // This problem can be resolved by using the useMemo hook from React

  const value = useMemo(() => ({ a, b }), [a, b]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, value }}>
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
