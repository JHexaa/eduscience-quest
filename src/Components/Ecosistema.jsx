import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import logoE1 from '../assets/images/Logo-E1.png';
import logoE2 from '../assets/images/Logo-E2.png';
import logoE3 from '../assets/images/Logo-E3.png';
import { useNavigate } from 'react-router-dom';

const Ecosistema = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    useEffect(() => {
        const userID = sessionStorage.getItem('userID');
        const userNombre = sessionStorage.getItem('userNombre');
        const userApellido = sessionStorage.getItem('userApellido');
        if (!userID) {
            navigate('/login');
        } else {
            setUser({ nombre: userNombre, apellido: userApellido });
        }
    }, [navigate]);

    if (!user) {
        return null;
    }

    return (
        <>
            <Navbar />
            <div className="cuerpo-ecosistema">
                <div className="volver-menu">
                    <button onClick={() => handleNavigation('/principal')}>Volver a Menu Principal</button>
                </div>
                <div className="opciones-menu-ecosistema">
                    <div className="E-1" onClick={() => handleNavigation('/pregunta-ecosistema')}>
                        <h3>Que es el Ecosistema</h3>
                        <img src={logoE1} alt="Logo E1" />
                        <h4>25% Completado</h4>
                    </div>
                    <div className="E-2" onClick={() => handleNavigation('/pregunta-ecosistema')}>
                        <h3>Estructura del Ecosistema</h3>
                        <img src={logoE2} alt="Logo E2" />
                        <h4>25% Completado</h4>
                    </div>
                    <div className="E-3" onClick={() => handleNavigation('/pregunta-ecosistema')}>
                        <h3>Proteccion y <br />conservacion</h3>
                        <img src={logoE3} alt="Logo E3" />
                        <h4>25% Completado</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ecosistema;
