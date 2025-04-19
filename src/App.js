import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  //const [hours, setHours] = useState(0);
  ////const [minutes, setminutes] = useState(0);
  //const [seconds, setSeconds] = useState(0);

  const [count, setCount] = useState(0);
  const [colour, setColour] = useState("blue");

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Hello from UE");
  }, [count]);

  function reset() {
    setCount(0);
  }

  function changeToGreen() {
    setColour("green");
  }
  return (
    <>
      <button style={{ backgroundColor: colour }} onClick={changeToGreen}>
        Am I the blue or the green?
      </button>
      <div>
        <button onClick={handleClick}> click </button>
        <h3> You click x{count} times !!</h3>
      </div>
    </>
  );
}

export default App;
