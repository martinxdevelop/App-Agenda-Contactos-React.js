import React from 'react'
import {FaTimes} from 'react-icons/fa'
import './Contacto.css'

function Contacto({ contacto, handleEliminar }) {
    return (
      <div className="container-card">
        <div className="header">
          <FaTimes className='icon' onClick={() => handleEliminar(contacto.id)} />
        </div>
        <div className="body">
          <div className="imagen">Imagen</div>
          <div className="datos">
            <span>{contacto.nombre}</span>
            <p>{contacto.telefono}</p>
            <p>{contacto.correo}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contacto;