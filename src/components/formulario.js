import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [listado, setListado] = useState([]);
  const [editar, setEditar] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    const listNombre = {
      Nombre: nombre,
      Apellido: apellido,
      Email: email,
    };
    setListado([...listado, listNombre]);
    setNombre("");
    setApellido("");
    setEmail("");
    console.log("this was clicked");
  };
  const edit = (item) => {
    setEditar(true);
    setNombre(item.Nombre);
    setApellido(item.Apellido);
    setEmail(item.Email);
  };

  return (
    <div className="container">
      <div className="row">
        <form className="col" onSubmit={(e) => handlesubmit(e)}>
          <h2>Formulario</h2>
          <input
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            required
            className="form-control mb-3"
            placeholder="Nombre"
            name="nombre"
            type="text"
            value={nombre}
          />
          <input
            onChange={(e) => {
              setApellido(e.target.value);
            }}
            required
            className="form-control mb-3"
            placeholder="Apellidos"
            name="apellido"
            type="text"
            value={apellido}
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="form-control mb-3"
            placeholder="Email"
            name="email"
            type="email"
            value={email}
          />
          <button className="btn btn-info btn-block mb-3">
            {editar ? "Editar" : "Enviar"}
          </button>
        </form>
        <div className="col">
          <h2>Listado de nombres</h2>
          <ul className="list-group">
            {listado.map((item, value) => (
              <li key={value} className="list-group-item">
                {item.Nombre.toUpperCase(0)}
                <br />
                {item.Apellido.toUpperCase(0)}
                <br />
                {item.Email.toUpperCase(0)}
                <button type="button" class="btn btn-danger float-right">
                  Borrar
                </button>
                <button
                  type="button"
                  class="btn btn-info float-right mr-2"
                  onClick={() => {
                    edit(item);
                  }}
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Formulario;
