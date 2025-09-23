import { useState } from "react";

const GoalForm = (props: any) => {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e: any) {
    console.log(e.target.name , e.target.value)
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  }


  return <>
    <h1>My Little Lemon Goals</h1>
    <div className="flex flex-col items-start">
        <input type='text' name="goal" placeholder="goal" value={formData.goal} onChange={changeHandler}/>
        <input type='text' name="by" placeholder="by..." value={formData.by} onChange={changeHandler}/>
    </div>
  </>;
};

const ListForm = () => {
  return null;
};

const FormWithUseStateHook = () => {
  return (
    <>
      <GoalForm />
      <ListForm />
    </>
  );
};

export default FormWithUseStateHook;
