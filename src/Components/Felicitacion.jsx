import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

const Felicitacion = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
  
    useEffect(() => {
      const userID = sessionStorage.getItem('userID');
      const userName = sessionStorage.getItem('userNombre');
      if (!userID) {
        navigate('/login');
      }else {
        setUser({id: userID, nombre: userName});
      }
    }, [navigate]);
  
    if (!user) {
        return null;
    }
  
    return (
      <>
        <Navbar/>
        <div className="cuerpo-agua-felicitacion">
            <div className="contenedor-felicitaciones">
                <img src={logo} alt="logo" />
                <div className="parrafo-felicitacion">
                    <h1>
                        ¡Muchas Gracias por jugar, {user.nombre.toUpperCase()}! <br/>
                        Has completado todo el juego <br />
                        ¡Enhorabuena!
                    </h1>
                </div>
                <div className="botones-felicitacion">
                    <button onClick={() => handleNavigation('/principal')}>Finalizar</button>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default Felicitacion;