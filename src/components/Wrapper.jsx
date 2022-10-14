import { React, useState } from "react";
import ButtonDecrease from "./ButtonDecrease";
import ButtonIncrease from "./ButtonIncrease";
import ButtonReset from "./ButtonReset";
import Title from "./Title";

function Wrapper() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <>
      <Title />
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <ButtonIncrease onClick={increase} />
        <ButtonDecrease onClick={decrease} count={counter} />
        <ButtonReset onClick={reset} />
      </div>
    </>
  );
}

export default Wrapper;
