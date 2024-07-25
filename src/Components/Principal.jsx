import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Temas from '../Components/Temas';
import logoEco from '../assets/images/logo-ecosistema.png';
import logoAnim from '../assets/images/logo-animales.png';
import logoPlan from '../assets/images/logo-plantas.png';
import LogoAgua from '../assets/images/logo-cicloAgua.png';

const Principal = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userID = sessionStorage.getItem('userID');
    const userNombre = sessionStorage.getItem('userNombre');
    const userApellido = sessionStorage.getItem('userApellido');

    if (!userID) {
      navigate('/login');
    } else {
      setUser({ id: userID, nombre: userNombre, apellido: userApellido });
    }
  }, [navigate]);

  const cerrarSesion = () => {
    sessionStorage.removeItem('userID');
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className="cuerpo h-screen flex items-center justify-center align-center px-20 py-10">
        <button
          onClick={cerrarSesion}
          className="absolute text-l top-56 right-44 px-8 rounded-xl py-4 bg-red-600 text-white hover:bg-red-900"
        >
          CERRAR SESIÓN
        </button>
        <div className="contenedor-menu p-10">
          <div className="parrafo-menu">
            <h1>BIENVENIDO, {user ? `${user.nombre}` : ''}</h1>
            <p className="px-40 pb-10">¡Descubre el mundo a través de la ciencia con EduScience Quest!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Temas
              tema="Ecosistema"
              img={logoEco}
              navegar="/ecosistema"
              idTema={1}
              userID={user ? user.id : ''}
            />
            <Temas
              tema="Animales"
              img={logoAnim}
              navegar="/animales"
              idTema={2}
              userID={user ? user.id : ''}
            />
            <Temas
              tema="Plantas"
              img={logoPlan}
              navegar="/plantas"
              idTema={3}
              userID={user ? user.id : ''}
            />
            <Temas
              tema="Ciclo del Agua"
              img={LogoAgua}
              navegar="/agua"
              idTema={4}
              userID={user ? user.id : ''}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
