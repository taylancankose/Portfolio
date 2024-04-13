import { createContext, useEffect, useState } from "react";
import { colors } from "../theme/light";
import themes from "../theme";

export const ThemeContext = createContext({
  key: localStorage.getItem("theme") || "light",
  colors: colors,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    key: localStorage.getItem("theme") || "light",
    colors: colors,
  });

  const toggleTheme = () => {
    localStorage.setItem("theme", theme.key === "dark" ? "light" : "dark");

    setTheme({
      ...theme,
      key: theme.key === "dark" ? "light" : "dark",
    });
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    if (theme.key === "dark" || localTheme === "dark") {
      setTheme({
        ...theme,
        colors: themes[1].colors,
      });
    } else {
      setTheme({
        ...theme,
        colors: themes[0].colors,
      });
    }
  }, [themes, theme.key]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
