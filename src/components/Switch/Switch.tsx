import { useTheme } from "../../ContextAPI/ThemeContext";
import styles from "./style.module.css";

const Switch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={theme ? theme === "light" : false} />
      <span
        className={`${styles.slider} ${styles.round}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </label>
  );
};

export default Switch;
