import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ThemeProvider from "./context/theme";
import LocaleProvider from "./context/locale";

function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <div>
          <Home />
          <Skills />
          <Profile />
          <Projects />
        </div>
        <Footer />
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
