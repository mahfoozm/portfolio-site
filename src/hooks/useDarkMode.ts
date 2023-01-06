import { useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const setMode = (mode: ThemeMode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme: ThemeMode = window.localStorage.getItem(
      'theme'
    ) as ThemeMode;
    localTheme ? setTheme(localTheme) : setTheme('dark');
  }, []);

  return [theme, toggleTheme];
};
