import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DrinksList from "./Key";
import ContAndUnCont from "./Controlled&Uncontrolled";

const data = [
  {
    id: 1,
    title: "Laptop",
    description: "Lightweight laptop with 16GB RAM",
    price: 1200,
  },
  {
    id: 2,
    title: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 200,
  },
  {
    id: 3,
    title: "Smartphone",
    description: "5G smartphone with 128GB storage",
    price: 800,
  },
];

const topDesserts = data.map((dessert) => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  };
});

const listItems = data.map((desert) => {
  const itemText = `${desert.title} - ${desert.price}`;

  return <li>{itemText}</li>;
});

export default function App() {
  console.log(topDesserts);
  return (
    <div>
      {/* <ul>{listItems}</ul> */}
      {/* <DrinksList /> */}
      <ContAndUnCont />
    </div>
  );
}
