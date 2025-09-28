import React, { type ReactNode } from "react";

const Row = ({ children, size }: { children: any; size: number }) => {
  const childStyle = {
    fontSize: `${size}px`,
    marginLeft: `${size}px`,
  };
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(childStyle),
          },
        });
      })}
    </div>
  );
};

const ManipulatingChildren = () => {
  return (
    <div>
      <Row size={40}>
        <p>Pizza</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
};

export default ManipulatingChildren;
