import { useTheme } from "./ThemeProvider";
import { RefObject } from "react";
export const useThemeAnimation = () => {
  const { colorMode, toggleColorMode } = useTheme();

  const toggle = (btnRef?: RefObject<HTMLElement>) => {
    toggleColorMode(btnRef);
  };

  return { colorMode, toggle };
};
