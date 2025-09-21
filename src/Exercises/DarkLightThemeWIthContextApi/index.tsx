import Switch from "../../components/Switch/Switch";
import { useTheme } from "../../ContextAPI/ThemeContext";

const DarkLightContainer = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`flex flex-col h-full items-center justify-start gap-10 py-[30px] transition-all duration-500 ${
        theme === "dark" ? "bg-black" : ""
      }`}
    >
      <div>
        <h2
          className={`text-[24px] font-bold transition-all duration-500 ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Little Lemon 🍕
        </h2>
        <Switch />
      </div>
      <div className="max-w-[1000px] flex flex-col gap-4 ">
        <strong
          className={`text-[20px] transition-all duration-500 ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          When it comes to dough
        </strong>

        <p
          className={`text-[20px] transition-all duration-500 ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          We are a pizza loving family. And for years, I searched and searched
          and searched for the perfect pizza dough recipe. I tried dozens, or
          more. And while some were good, none of them were that recipe that
          would make me stop trying all of the others.
        </p>
      </div>
    </main>
  );
};

export default DarkLightContainer;
