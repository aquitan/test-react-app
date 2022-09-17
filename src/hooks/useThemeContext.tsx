import { useContext, useState } from "react";
import { ThemeSwitcherContext } from "../context/ThemeSwitcherContext";


type ThemeContextType = {
    children: React.ReactNode
}

export const useThemeContext = () => useContext(ThemeSwitcherContext)

export const ThemeContextProvider = ({children}:ThemeContextType) => {
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light') 

    const changeMode = () => {
        setThemeMode(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeSwitcherContext.Provider value={{themeMode, changeMode}}>
            {children}
        </ThemeSwitcherContext.Provider>
    )
}