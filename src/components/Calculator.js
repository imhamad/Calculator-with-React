import React from "react";
import "./calculator.css";

const Calculator = ({ handle, backspace, clear, calculate, result }) => {
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear" className="special-btn">
            Clear
          </button>
          <button onClick={backspace} className="special-btn">
            C
          </button>
          <button value="/" onClick={handle} className="special-btn">
            &divide;
          </button>
          <button value="9" onClick={handle}>
            9
          </button>
          <button value="8" onClick={handle}>
            8
          </button>
          <button value="7" onClick={handle}>
            7
          </button>
          <button value="*" onClick={handle} className="special-btn">
            &times;
          </button>
          <button value="4" onClick={handle}>
            4
          </button>
          <button value="5" onClick={handle}>
            5
          </button>
          <button value="6" onClick={handle}>
            6
          </button>
          <button value="-" onClick={handle} className="special-btn">
            &ndash;
          </button>
          <button value="1" onClick={handle}>
            1
          </button>
          <button value="2" onClick={handle}>
            2
          </button>
          <button value="3" onClick={handle}>
            3
          </button>
          <button value="+" onClick={handle} className="special-btn">
            +
          </button>
          <button value="0" onClick={handle}>
            0
          </button>
          <button value="." onClick={handle}>
            .
          </button>
          <button
            value="="
            onClick={calculate}
            id="equal"
            className="special-btn"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
