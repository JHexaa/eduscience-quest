import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';
import fotoPerfil from '../assets/images/mono.png'


const Users = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userID = sessionStorage.getItem('userID');
    const userNombre = sessionStorage.getItem('userNombre');
    const userApellido = sessionStorage.getItem('userApellido');
    const userEmail = sessionStorage.getItem('userEmail')
    const userTipo = sessionStorage.getItem('userTipo');
    if (!userID) {
      navigate('/login');
    } else if (userTipo === 'Admin') {
      navigate('/crud')
    } else {
      setUser({ nombre: userNombre, apellido: userApellido, email: userEmail });
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="cuerpo h-screen flex items-center justify-center align-center px-20 py-10">
        <div className="usuario-info">
          <div className="usuario-imagen flex justify-center p-20">
            <img src={fotoPerfil} alt="monkey-animated" className="w-1/5" />
          </div>
          <div className="mx-96 flex flex-col">
            <p><strong>NOMBRE:</strong> DAVID</p>
            <p><strong>APELLIDO:</strong> GARCÍAS</p>
            <p><strong>CORREO:</strong> david.garcias@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
