import { useState } from "react";

const GoalForm = (props: any) => {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e: any) {
    console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <div className="flex gap-5 items-start">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="goal"
            placeholder="goal"
            value={formData.goal}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="by"
            placeholder="by..."
            value={formData.by}
            onChange={changeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

const ListForm = (props: any) => {
  return (
    <div>
      {props.allGoals &&
        props?.allGoals.map((item: any) => (
          <p>
            {item.goal} - {item.by}{" "}
          </p>
        ))}
    </div>
  );
};

const FormWithUseStateHook = () => {
  const [allGoals, setAllGoals] = useState<any[]>([]);

  const onAdd = (props: any) => {
    setAllGoals([...allGoals, props]);

    // it's same
    // setAllGoals(prevState =>
    //   [...prevState , props]
    // )
  };

  return (
    <>
      <GoalForm onAdd={onAdd} />
      <ListForm allGoals={allGoals} />
    </>
  );
};

export default FormWithUseStateHook;
