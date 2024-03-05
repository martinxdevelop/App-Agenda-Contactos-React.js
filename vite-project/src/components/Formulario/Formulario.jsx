import React, { useState } from "react";
import { FaWindowClose, FaRegUser, FaPhoneAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "./Formulario.css"; 

function Formulario({ handleModal, handlesubmit }) {
  const [inputValues, setInputValues] = useState({
    id: Math.random(1),
    nombre: "",
    telefono: 0,
    correo: "", 
  });

  const handlechange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const guardarDatos = (e) => {
    e.preventDefault();

    if (inputValues.nombre === "")
      return toast("Por favor ingrese su nombre.", {
        duration: 2000,
        position: "top-center",
      });
    if (inputValues.telefono === 0)
      return toast("Por favor ingrese su numero de telefono",{
        duration: 2000,
        position: "top-center",
      });
    if (inputValues.telefono.length !== 10)
      return toast("El numero de telefono debe tener 10 digitos",{
        duration: 2000,
        position: "top-center",
      });

    handlesubmit(inputValues);
    handleModal(false);
    e.target.reset();
  };

  return (
    <div className="container-modal">
      <Toaster />
      <div className="modal">
        <div className="cabecera">
          <FaWindowClose onClick={() => handleModal(false)} className="icon" />
        </div>
        <div className="body">
          <h2>Registra tu contacto</h2>
          <form onSubmit={guardarDatos}>
            <label>
              <FaRegUser />
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
                onChange={(e) => handlechange(e)}
              />
            </label>

            <label>
              <FaPhoneAlt />
              <input
                type="number"
                name="telefono"
                placeholder="Ingrese su telefono"
                onChange={(e) => handlechange(e)}
              />
            </label>

            <label>
              <FaRegUser  />
              <input
                type="email"
                name="correo"
                placeholder="Ingrese su correo electrónico" 
                onChange={(e) => handlechange(e)}
              />
            </label>




            <div className="container-boton">
                <div className="boton2">
              <button>Registrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
