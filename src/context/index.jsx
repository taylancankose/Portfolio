import React, { useState, useEffect, createContext } from "react";
import LocaleProvider from "./locale";
import ThemeProvider from "./theme";
import { locale } from "../locale";
import themes from "../theme";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    locale: {
      key: JSON.parse(localStorage.getItem("design-tokens"))
        ? JSON.parse(localStorage.getItem("design-tokens")).locale
        : "tr",
      language: locale[0],
    },
    theme: {
      key: JSON.parse(localStorage.getItem("design-tokens"))
        ? JSON.parse(localStorage.getItem("design-tokens")).theme
        : "light",
      colors: themes[0].colors,
    },
  });

  const toggleLng = () => {
    setAppState({
      ...appState,
      locale: {
        language: appState?.locale.key === "tr" ? locale[1] : locale[0],
        key: appState?.locale.key === "tr" ? "en" : "tr",
      },
    });
    const data = {
      theme: appState.theme.key,
      locale: appState?.locale.key === "tr" ? "en" : "tr",
    };
    localStorage.setItem("design-tokens", JSON.stringify(data));
  };

  const toggleTheme = () => {
    setAppState({
      ...appState,
      theme: {
        colors:
          appState?.theme.key === "dark" ? themes[0].colors : themes[1].colors,
        key: appState?.theme.key === "dark" ? "light" : "dark",
      },
    });
    const data = {
      theme: appState.theme.key === "dark" ? "light" : "dark",
      locale: appState?.locale.key,
    };
    localStorage.setItem("design-tokens", JSON.stringify(data));
  };

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("design-tokens"))
      ? JSON.parse(localStorage.getItem("design-tokens")).theme
      : "light";
    const localLng = JSON.parse(localStorage.getItem("design-tokens"))
      ? JSON.parse(localStorage.getItem("design-tokens")).locale
      : "tr";
    setAppState({
      locale: {
        key: localLng === "tr" ? "tr" : "en",
        language: localLng === "en" ? locale[1] : locale[0],
      },
      theme: {
        key: localTheme === "dark" ? "dark" : "light",
        colors: localTheme === "dark" ? themes[1].colors : themes[0].colors,
      },
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        toggleLng,
        toggleTheme,
        appState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
