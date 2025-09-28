import React from "react";
import styles from "./style.module.css";

export const RadioGroup = ({ onChange, selected, children }: any) => {
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange: onChange,
      checked: child.props.value === selected,
    });
  });

  return <div className={styles.RadioGroup}>{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }: any) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element

  return (
    <div className={styles.RadioOption}>
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={(e: any) => onChange(e.target.value)}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
