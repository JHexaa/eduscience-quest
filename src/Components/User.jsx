import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';
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
        <div className="usuario-info px-96">
          <div className="flex justify-center mt-10">
            <h1 className="text-5xl text-white ">PERFIL DE USUARIO</h1>
          </div>
          <div className="usuario-imagen flex justify-center mt-16">
            <img src={fotoPerfil} alt="monkey-animated" className="w-6/12" />
          </div>
          <div className="mx flex flex-col gap-4 mt-10">
            <p className="text-2xl"><strong>NOMBRE:</strong> {user.nombre.toUpperCase()}</p>
            <p className="text-2xl"><strong>APELLIDO:</strong> {user.apellido.toUpperCase()}</p>
            <p className="text-2xl"><strong>CORREO:</strong> {user.email.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
