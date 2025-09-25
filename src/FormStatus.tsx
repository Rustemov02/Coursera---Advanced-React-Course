import Button from "./components/Button/Button";

const MyForm = () => {
  const submitHandler = async (formData: FormData) => {
    console.log(formData.get("name"));
  };

  return (
    <form action={submitHandler}>
      <input placeholder="name" name="name" />
      <Button title="Submit button" />
    </form>
  );
};

export default MyForm;
