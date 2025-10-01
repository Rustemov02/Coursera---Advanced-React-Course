import { useEffect, useState } from "react";

const MousePosition = ({ render }: any) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return <>{render(mousePosition)}</>;
};

const PanelMouseLogger = ({ mousePosition }: any) => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }: any) => {
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

function ScrollerPositionWithRenderProps() {
  return (
    <div className="ScrollerPositionWithRenderProps">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <MousePosition
        render={(mousePosition: any) => (
          <PanelMouseLogger mousePosition={mousePosition} />
        )}
      />
      <MousePosition
        render={(mousePosition: any) => (
          <PointMouseLogger mousePosition={mousePosition} />
        )}
      />
    </div>
  );
}

export default ScrollerPositionWithRenderProps;
