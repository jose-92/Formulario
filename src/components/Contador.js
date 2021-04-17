import React, { Fragment, useState } from "react";

const Contador = () => {
  const [contact] = useState([0, 1, 2, 3, 4, 5]);

  return (
    <Fragment>
      <ul>
        {contact.map((a, b) => (
          <li key={b}>{a}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Contador;
