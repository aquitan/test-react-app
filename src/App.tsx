import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import AppRouter from "./components/appRouter/AppRouter";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const {themeMode} = useThemeContext()

  const darkTheme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
