const Button = ({ children, ...buttonProps }: any) => {
  console.log(buttonProps);
  return <button {...buttonProps}>{children}</button>;
};

const LoginButton = ({ type, children, ...buttonProps }: any) => {
  return (
    <Button {...buttonProps} onClick={() => alert("Logging in")}>
      {children}
    </Button>
  );
};

export default function Test() {
  return (
    <div>
      {/* <Button onClick={() => alert("Signing up")}>Sign Up</Button> */}
      <LoginButton onClick={() => alert("Signing u253p")}>Login</LoginButton>
    </div>
  );
}
