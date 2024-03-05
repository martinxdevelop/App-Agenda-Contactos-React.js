import React from 'react';
import './Contactos.css'; 
import Contacto from '../Contacto/Contacto';

function Contactos({ contactos, handleEliminar }) {
  return (
    <div className="contenedor-contactos">
      {contactos.map(contacto => (
        <Contacto key={contacto.id} contacto={contacto} handleEliminar={handleEliminar} />
      ))}
    </div>
  );
}

export default Contactos;

