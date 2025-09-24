import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function Form() {
  return (
    <form action={handleSubmit}>
      <input type="text" name="name" placeholder="Enter your name" />
      <SubmitButton />
    </form>
  );
}

async function handleSubmit(formData: FormData) {
  // Handle form submission
}
