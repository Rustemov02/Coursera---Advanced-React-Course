import { useFormStatus } from "react-dom";

const Button = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();

  // ! useFormStatus only gives us status inside a component that rendered inside a <form>
  // ! that has an action={...} prop
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Pending..." : title}
    </button>
  );
};

export default Button;
