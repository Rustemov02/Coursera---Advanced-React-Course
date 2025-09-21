import DarkLightContainer from "./Exercises/DarkLightThemeWIthContextApi";
import TransformDataUsingMapMethod from "./TransformDataUsingMapMethod";
import { ThemeProvider } from "./ContextAPI/ThemeContext";

function App() {
  return (
    <div className="h-dvh border-2">
      <ThemeProvider>
        <DarkLightContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
