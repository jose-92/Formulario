import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(9);
  const aumentar = () => {
    setTemperatura(temperatura + 1);
  };
  const Disminuir = () => {
    setTemperatura(temperatura - 1);
  };

  return (
    <div>
      <h2>LA TEMPERRATURA ES :{temperatura}</h2>
      <p> {temperatura < 15 ? "hace frio " : "hace calor"}</p>

      <button onClick={aumentar}>Aumentar</button>

      <button onClick={Disminuir}>Disminuir</button>
    </div>
  );
};

export default Temperatura;
