import React, { createContext, useContext, useState, ReactNode } from "react";
import { StyleSwitch } from "./StyleSwitch";

type ColorMode = "light" | "dark";

interface ThemeContextProps {
  colorMode: ColorMode;
  toggleColorMode: (btnRef?: React.RefObject<HTMLElement>) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleColorMode = (btnRef?: React.RefObject<HTMLElement>) => {
    const next: ColorMode = colorMode === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      if (next === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      setColorMode(next);
      return;
    }

    if (btnRef?.current) {
      const rect = btnRef.current.getBoundingClientRect();
      document.documentElement.style.setProperty("--x", `${rect.left + rect.width / 2}px`);
      document.documentElement.style.setProperty("--y", `${rect.top + rect.height / 2}px`);
    }

    document.startViewTransition(() => {
      if (next === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      setColorMode(next);
    });
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        <StyleSwitch />
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
