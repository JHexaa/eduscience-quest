import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import plantasE1 from '../assets/images/plantas-E1.png';
import plantasE2 from '../assets/images/plantas-E2.png';
import plantasE3 from '../assets/images/plantas-E3.png';
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

const Plantas = () => {
    const [game, setGame] = useState('');
    const navigate = useNavigate();

    const handleNavigation = (path, temaIdRequired) => {
        if (game.tema_id >= temaIdRequired) {
            navigate(path);
        } else {
            alert('No puedes acceder a este tema aún.');
        }
    };

    const calculateProgress = (currentPreguntaId, temaStartPreguntaId) => {
        const progress = ((currentPreguntaId - temaStartPreguntaId) / 4) * 100;
        return progress > 100 ? 100 : progress < 0 ? 0 : progress;
    };

    const progressE1 = calculateProgress(game.pregunta_id, 25);
    const progressE2 = calculateProgress(game.pregunta_id, 29);
    const progressE3 = calculateProgress(game.pregunta_id, 33);

    const getGame = async (id) => {
        try {
          const response = await apiService.getGame(id);
          setGame(response.data);
        } catch (error) {
          console.error('Error fetching game data:', error);
        }
      };

    useEffect(() => {
        const userID = sessionStorage.getItem('userID');
        if (!userID) {
            navigate('/login');
        } else {
            getGame(userID)
        }
    }, [navigate]);

    return (
        <>
            <Navbar />
            <div className="cuerpo-plantas">
                <div className="volver-menu">
                    <button onClick={() => navigate('/principal')}>Volver a Menu Principal</button>
                </div>
                <div className="opciones-menu-ecosistema">
                    <div className="E-1" onClick={() => handleNavigation('/pregunta-plantas', 7)}>
                        <h3>Partes de las plantas</h3>
                        <img src={plantasE1} alt="plantas E1" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE1}%` }}>
                                {progressE1}%
                            </div>
                        </div>
                    </div>
                    <div className="E-2" onClick={() => handleNavigation('/pregunta-plantas', 8)}>
                        <h3>Función de las plantas</h3>
                        <img src={plantasE2} alt="plantas E2" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE2}%` }}>
                                {progressE2}%
                            </div>
                        </div>
                    </div>
                    <div className="E-3" onClick={() => handleNavigation('/pregunta-plantas', 9)}>
                        <h3>Producción de oxígeno</h3>
                        <img src={plantasE3} alt="plantas E3" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE3}%` }}>
                                {progressE3}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plantas;