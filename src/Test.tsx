import { useReducer, useRef } from "react";

const reducer = (state: any, action: any) => {
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  if (action.type === "sell_a_meal") return { money: state.money + 10 };

  return state;
};

const Test = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef<any>(null);

  const handleFocus = () => {
    inputRef?.current?.focus();
  };

  return (
    <div>
      <h1>Wallet : {state?.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })}>
          Shopping for veggies
        </button>
        <button onClick={() => dispatch({ type: "sell_a_meal" })}>
          Sell a meal
        </button>
      </div>

      <div>
        <input ref={inputRef} placeholder="focus here" />
        <button onClick={handleFocus}>Focus input</button>
      </div>
    </div>
  );
};

export default Test;
