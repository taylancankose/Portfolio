import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import AppProvider from "./context";

function App() {
  return (
    <AppProvider>
      <div>
        <Home />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </AppProvider>
  );
}

export default App;
