import DarkLightContainer from "./Exercises/DarkLightThemeWIthContextApi";
import TransformDataUsingMapMethod from "./TransformDataUsingMapMethod";
import { ThemeProvider } from "./ContextAPI/ThemeContext";
import React from "react";

function App() {
  return (
    <div className="h-dvh border-2">
      <ThemeProvider>
        <DarkLightContainer />
      </ThemeProvider>
    </div>
  );
}

export default React.memo(App);
