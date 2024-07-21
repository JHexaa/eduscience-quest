import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

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
    }else if (userTipo==='Admin'){
      navigate('/crud')
    }else {
      setUser({ nombre: userNombre, apellido: userApellido, email: userEmail });
    }
  }, [navigate]);

  if (!user) {
      return null;
  }

  return (
    <>
      <Navbar/>
      <div className="cuerpo h-screen flex items-center justify-center align-center px-20 py-10">
        <div className="contenedor-ayuda p-10">

        </div>
      </div>
    </>
  );
};

export default Users;
