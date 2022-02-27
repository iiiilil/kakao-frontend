import { useState, ChangeEvent } from "react";

const Adder = () => {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);

  const changeOperand1 = (event: ChangeEvent<HTMLInputElement>) => {
    const inputVaule = event.currentTarget.value;
    if (inputVaule.length > 0) {
      const inputNumber = Number.parseInt(inputVaule);
      setOperand1(inputNumber);
    } else {
      setOperand1(0);
    }
  };
  const changeOperand2 = (event: ChangeEvent<HTMLInputElement>) => {
    const inputVaule = event.currentTarget.value;
    const inputNumber = Number.parseInt(inputVaule);
    setOperand2(inputNumber);

    return (
      <section>
        <section></section>
        <input type="text" onChange={changeOperand1} />
        <input type="text" onChange={changeOperand1} />
        (operan1 + operand2)
      </section>
    );
  };
};
export default useState;
