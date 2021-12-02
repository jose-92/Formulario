import React, { useState } from "react";

const Registro = () => {
  const [numero, setNumero] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  return (
    <div>
      <ul>
        {numero.map((item, valor) => (
          <li>
            {item}-{valor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Registro;
