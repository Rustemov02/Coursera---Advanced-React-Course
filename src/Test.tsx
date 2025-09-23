import { useState } from "react";

const Test = () => {
  const [greeting, setGreeting] = useState({ greet: "Hello", place: "World" });

  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting((prevState) => {
      return { ...prevState, greet: "Updated Hello" };
    });
  }

  return (
    <>
      <h2>{greeting.greet}</h2>
      <button onClick={() => updateGreeting()}>Update</button>
    </>
  );
};

export default Test;
