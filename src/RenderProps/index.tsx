import { useState } from "react";

type ToggleProps = {
  render: (state: { on: boolean; toggle: () => void }) => React.ReactNode;
};

const Toggle = ({ render }: ToggleProps) => {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prev) => !prev);
  }

  return <>{render({ on, toggle })}</>;
};

export default function RenderProps() {
  return (
    <>
      <Toggle
        render={({ on, toggle }) => {
          return (
            <div>
              <button onClick={toggle}>{on ? "ON" : "OFF"}</button>
              <p>Status: {on ? "Enabled ✅" : "Disabled ❌"}</p>
            </div>
          );
        }}
      />
    </>
  );
}
