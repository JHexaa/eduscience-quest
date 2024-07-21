import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';

const FelicitacionAnimales = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
  
    useEffect(() => {
      const userID = sessionStorage.getItem('userID');
      if (!userID) {
        navigate('/login');
      }else {
        setUser({id: userID});
      }
    }, [navigate]);
  
    if (!user) {
        return null;
    }
  
    return (
      <>
        <Navbar/>
        <div className="cuerpo-animales-felicitacion">
            <div className="contenedor-felicitaciones">
                <img src={logo} alt="logo" />
                <div className="parrafo-felicitacion">
                    <h1>
                        ¡Te desea felicitaciones! <br/>
                        Has terminado el capítulo <br />
                        ¡Enhorabuena!
                    </h1>
                </div>
                <div className="botones-felicitacion">
                    <button onClick={() => handleNavigation('/animales')}>Finalizar</button>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default FelicitacionAnimales;