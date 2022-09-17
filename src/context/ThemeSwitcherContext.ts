import { createContext } from 'react';


type ThemeContextType ={
    themeMode: 'light' | 'dark',
    changeMode: () => void
}

export const ThemeSwitcherContext = createContext<ThemeContextType>({
    themeMode: 'light',
    changeMode: () => {}
})

