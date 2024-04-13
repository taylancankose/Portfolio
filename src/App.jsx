import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ThemeProvider from "./context/theme";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Home />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
