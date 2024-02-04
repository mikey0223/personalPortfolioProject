"use client"

import { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';

// referenced from https://claritydev.net/blog/typing-react-context-in-typescript

// I hate typescript, I regret my decision to use it
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with an initial value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};




export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    // Apply theme class to body
    document.body.classList.remove('bg-slate-400', 'text-slate-900', 'bg-slate-800', 'text-slate-200'); // Remove existing theme classes
    document.body.classList.add(theme == 'light' ? 'bg-slate-400' : 'bg-slate-800' , theme=='light' ?  'text-slate-900' : 'text-slate-200'); // Add current theme class
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};