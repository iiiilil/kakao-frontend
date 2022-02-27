import { KeyboardEvent, useEffect } from "react";

const App = (): JSX.Element => {
  useEffect(() => {
    alert("hello");
  }, []);

  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <>
      <input type="text" onKeyDown={preventKeyDown} />
    </>
  );
};

export default App;
