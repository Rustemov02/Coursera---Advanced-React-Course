import { useRef } from "react";

const ContAndUnCont = () => {
  const inputRef = useRef(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = inputRef?.current?.value;

    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text"/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContAndUnCont;
