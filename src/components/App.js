import react, { useState } from "react";
import Calculator from "./Calculator";

function App() {
  // state that stores the input values and result
  const [result, setResult] = useState("");

  // function to handle btn click
  const handle = (e) => {
    setResult(result.concat(e.target.value));
  };

  // clear button function
  const clear = () => {
    setResult("");
  };

  // backspace button function
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  // function to evaluate maths expression
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error!");
    }
  };
  return (
    <>
      <Calculator
        handle={handle}
        clear={clear}
        backspace={backspace}
        calculate={calculate}
        result={result}
      />
    </>
  );
}

export default App;
