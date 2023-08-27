import { createContext } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', setTheme: () => { } });