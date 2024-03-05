import React, { useState } from 'react';
import FiltroNav from './components/FiltroNav/FiltroNav';
import Formulario from './components/Formulario/Formulario';
import './index.css';
import './App.css';
import Contactos from './components/Contactos/Contactos';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contactos, setContactos] = useState([]);
    const [filteredContactos, setFilteredContactos] = useState([]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const agregarContacto = (nuevoContacto) => {
        setContactos([...contactos, nuevoContacto]);
        toggleModal(); 
    };

    const eliminarContacto = (id) => {
        setContactos(contactos.filter(contacto => contacto.id !== id));
    };

    const handleSearch = (searchTerm) => {
        const filtered = contactos.filter(contacto =>
            contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredContactos(filtered);
    };

    return (
        <>
            <FiltroNav handleModal={toggleModal} handleSearch={handleSearch} />
            {isModalOpen && <Formulario handleModal={toggleModal} handlesubmit={agregarContacto} />}
            <Contactos contactos={filteredContactos.length > 0 ? filteredContactos : contactos} handleEliminar={eliminarContacto} />
        </>
    );

        



};

export { App };

