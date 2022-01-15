import React from "react";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserProfile from "./components/UserProfile";
import { ThemeProvider } from "styled-components";
import { styledComponetsTheme } from "./styledComponents";
import { ThemeContext } from "./context/ThemeContext";
export default function App() {
  const { themeName } = useContext(ThemeContext);
  console.log(themeName);
  return (
    <ThemeProvider theme={styledComponetsTheme[themeName]}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
