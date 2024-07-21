import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import logoEco from '../assets/images/logo-ecosistema.png';
import logoAnim from '../assets/images/logo-animales.png';
import logoPlan from '../assets/images/logo-plantas.png';
import LogoAgua from '../assets/images/logo-cicloAgua.png';
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

const Principal = () => {
  const [user, setUser] = useState(null);
  const [game, setGame] = useState('');
  const navigate = useNavigate();

  const handleNavigation = (path, categoriaIdRequired) => {
    if (game.categoria_id >= categoriaIdRequired) {
      navigate(path);
    } else {
      alert('No puedes acceder a esta categoría aún.');
    }
  };

  const getGame = async (id) => {
    try {
      const response = await apiService.getGame(id);
      setGame(response.data);
      sessionStorage.setItem('categoria_id',response.data.categoria_id);
      sessionStorage.setItem('tema_id',response.data.tema_id);
      sessionStorage.setItem('pregunta_id',response.data.pregunta_id);
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  };

  useEffect(() => {
    const userID = sessionStorage.getItem('userID');
    const userNombre = sessionStorage.getItem('userNombre');
    const userApellido = sessionStorage.getItem('userApellido');
    if (!userID) {
      navigate('/login');
    } else {
      setUser({ id: userID, nombre: userNombre, apellido: userApellido });
      getGame(userID);
    }
  }, [navigate]);

  if (!user || !game) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="cuerpo h-screen flex items-center justify-center align-center px-20 py-10">
        <div className="contenedor-menu p-10">
          <div className="parrafo-menu">
            <h1>BIENVENIDO, {user.nombre.toUpperCase()}</h1>
            <p className="px-40 pb-10">¡Descubre el mundo a través de la ciencia con EduScience Quest!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="ecosistema text-center">
              <h2>Ecosistemas</h2>
              <img src={logoEco} alt="" />
              <button
                onClick={() => handleNavigation('/ecosistema', 1)}
                className="text-xl mt-6 px-20 rounded-xl py-3 bg-main text-white hover:bg-main-HOVER"
              >
                Jugar
              </button>
            </div>
            <div className="animales text-center">
              <h2>Animales</h2>
              <img src={logoAnim} alt="" />
              <button
                onClick={() => handleNavigation('/animales', 2)}
                className="text-xl mt-6 px-20 rounded-xl py-3 bg-main text-white hover:bg-main-HOVER"
              >
                Jugar
              </button>
            </div>
            <div className="plantas text-center">
              <h2>Plantas</h2>
              <img src={logoPlan} alt="" />
              <button
                onClick={() => handleNavigation('/plantas', 3)}
                className="text-xl mt-6 px-20 rounded-xl py-3 bg-main text-white hover:bg-main-HOVER"
              >
                Jugar
              </button>
            </div>
            <div className="agua text-center">
              <h2>Ciclo del Agua</h2>
              <img src={LogoAgua} alt="" />
              <button
                onClick={() => handleNavigation('/agua', 4)}
                className="text-xl mt-6 px-20 rounded-xl py-3 bg-main text-white hover:bg-main-HOVER"
              >
                Jugar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
