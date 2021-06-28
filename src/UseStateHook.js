import React, { useState } from "react";
import "./styles.css";

function UseStateHook() {
  // number va a guardar el estado inicial
  // setNumber va a ser la funcion que utilizamos
  // para modificar el estado de nuestro componente

  const [number, setNumber] = useState(0);

  const handleUp = () => {
    // console.log("Hiciste Click");
    setNumber(number + 1);
  };

  const handleDowm = () => {
    setNumber(number - 1);
  };

  return (
    <div className="UseStateHook">
      <h1>useState Hook</h1>
      <p>{number}</p>
      <button onClick={handleUp}>+</button>
      <button onClick={handleDowm}>-</button>
    </div>
  );
}

export default UseStateHook;
