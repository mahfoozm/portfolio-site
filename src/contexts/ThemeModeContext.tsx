import { createContext } from "react";
import { ThemeProvider } from "styled-components";

import { useDarkMode } from "src/hooks/useDarkMode";
import { darkTheme, lightTheme } from "src/styles/theme";

interface IThemeModeContext {
  theme: typeof darkTheme | typeof lightTheme;
  toggleTheme: any;
}

export const ThemeModeContext = createContext({} as IThemeModeContext);

export const ThemeModeProvider: React.FC = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeModeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
