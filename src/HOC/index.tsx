// ! BASIC HOC

function withLogger(WrappedComponent: any) {
  return function EnhacedComponent(props: any) {
    console.log("Props : ", props);
    return <WrappedComponent {...props} />;
  };
}

function Hello({ name }: { name: string }) {
  return <h1>Hello , {name}</h1>;
}

const HelloWithLogger = withLogger(Hello);

//! HOC function with CONFIG

const withColor = (color: string) => (WrappedComponent: any) => {
  return function EnhacedComponent(props: any) {
    return (
      <div style={{ color }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

function Message({ text }: { text: string }) {
  return <h1>Hello , {text}</h1>;
}

const RedMessage = withColor("red")(Message);
const BlueMessage = withColor("blue")(Message);

export default function HOCComponents() {
  return (
    <>
      {/* <HelloWithLogger name="John" /> */}
      <RedMessage text="this is red!" />
      <BlueMessage text="this is blue !" />
    </>
  );
}
