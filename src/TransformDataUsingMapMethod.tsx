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
  const items = (
    <li>
      content: {dessert.title} - {dessert.description}, <br/> price: {dessert.price}
    </li>
  );

  return items;
});

const listItems = data.map((desert) => {
  const itemText = `${desert.title} - ${desert.price}`;

  return <li>{itemText}</li>;
});

export default function TransformDataUsingMapMethod() {
  console.log(topDesserts);
  return (
    <div>
      <ul>{listItems}</ul>
      <ul>{topDesserts}</ul>
      <ContAndUnCont />
    </div>
  );
}
