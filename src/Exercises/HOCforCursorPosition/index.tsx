import { useEffect, useState } from "react";

const withMousePosition = (WrappedComponent: any) => {
  return (props: any) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMouseChange = (e: any) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMouseChange);
      return () => window.removeEventListener("mousemove", handleMouseChange);
    }, []);
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

function PointMouseLogger({ mousePosition }: any) {
  if (!mousePosition) return null;
  return (
    <p>
      {mousePosition.x} , {mousePosition.y}
    </p>
  );
}

function PanelMouseLogger({ mousePosition }: any) {
  if (!mousePosition) return null;
  return (
    <p>
      {mousePosition.x} , {mousePosition.y}
    </p>
  );
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

export default function HOCforCursorPosition() {
  return (
    <div>
      <header>Little Lemon Restaurant</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}
