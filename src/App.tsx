import React from "react";
import { ThemeProvider } from "./ContextAPI/ThemeContext";
import DarkLightContainer from "./Exercises/DarkLightThemeWIthContextApi";
import TransformDataUsingMapMethod from "./TransformDataUsingMapMethod";
import Test from "./Test";
import FormWithUseStateHook from "./Exercises/GoalForm/GoalForm";
import Form from "./FormStatus";
import GiftCard from "./Exercises/GiftCard";
import MyForm from "./FormStatus";
import GetUserInfo from "./Exercises/FetchingData";
import GetPreviousDate from "./Exercises/getPreviousDate";
import ManipulatingChildren from "./ManipulatingChildren";
import { RadioOption } from "./components/Radio/Radio";
import BuildRadioContainer from "./Exercises/BuildRadioGroupComponent";
import HOCComponents from "./HOC";
import HOCforCursorPosition from "./Exercises/HOCforCursorPosition";
import RenderProps from "./RenderProps";
import ScrollerPositionWithRenderProps from "./Exercises/ScrollerPositionWithRenderProps";
import TestScenarios from "./Exercises/TestScenariosForFeedBackForm";
import Final from "./FINAL PROJECT/Final";

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
        {/* <GetUserInfo /> */}
        {/* <GetPreviousDate /> */}
        {/* <ManipulatingChildren /> */}
        {/* <BuildRadioContainer /> */}
        {/* <HOCComponents /> */}
        {/* <HOCforCursorPosition /> */}
        {/* <RenderProps/> */}
        {/* <ScrollerPositionWithRenderProps /> */}
        {/* <TestScenarios /> */}
        <Final />
      </ThemeProvider>
    </div>
  );
}

export default React.memo(App);
