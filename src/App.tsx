import DarkLightContainer from "./Exercises/DarkLightThemeWIthContextApi";
import TransformDataUsingMapMethod from "./TransformDataUsingMapMethod";
import { ThemeProvider } from "./ContextAPI/ThemeContext";
import React from "react";
import Test from "./Test";
import FormWithUseStateHook from "./Exercises/GoalForm/GoalForm";
import Form from "./FormStatus";
import GiftCard from "./Exercises/GiftCard";
import MyForm from "./FormStatus";
import GetUserInfo from "./Exercises/FetchingData";

function App() {
  return (
    <div className="h-dvh border-2">
      <ThemeProvider>
        {/* <Test /> */}
        {/* <DarkLightContainer /> */}
        {/* <FormWithUseStateHook /> */}
        {/* <Form/> */}
        {/* <GiftCard/> */}
        {/* <MyForm /> */}
        <GetUserInfo />
      </ThemeProvider>
    </div>
  );
}

export default React.memo(App);
