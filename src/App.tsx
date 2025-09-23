import DarkLightContainer from "./Exercises/DarkLightThemeWIthContextApi";
import TransformDataUsingMapMethod from "./TransformDataUsingMapMethod";
import { ThemeProvider } from "./ContextAPI/ThemeContext";
import React from "react";
import Test from "./Test";
import FormWithUseStateHook from "./Exercises/GoalForm/GoalForm";

function App() {
  return (
    <div className="h-dvh border-2">
      <ThemeProvider>
        {/* <Test /> */}
        {/* <DarkLightContainer /> */}
        <FormWithUseStateHook />
      </ThemeProvider>
    </div>
  );
}

export default React.memo(App);
