import { useState } from "react";

export default function DrinksList() {
  const [drinks, setDrinks] = useState(["Beer", "Wine"]);

  return (
    <div>
      <button onClick={() => setDrinks(["Cider", ...drinks])}>
        Add Cider to Start
      </button>

      <ul>
        {drinks.map((drink, index) => (
          // ! burda əgər key istifadə edilməsə (və ya onun yerinə index istifadə edilsə) onda React siyahını sadəcə index-ə görə izlədiyi üçün
          // ! inputa yazılan dəyər sadəcə həmin sırada qalacaq --- test üçün inputa dəyər yazıb yoxla
          <li key={drink}>
            {drink} <input placeholder="Type something..." />
          </li>
        ))}
      </ul>
    </div>
  );
}
