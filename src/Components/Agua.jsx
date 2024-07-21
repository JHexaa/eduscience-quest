import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import AguaE1 from '../assets/images/Agua-E1.png';
import AguaE2 from '../assets/images/Agua-E2.png';
import AguaE3 from '../assets/images/Agua-E3.png';
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

const Agua = () => {
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

    const progressE1 = calculateProgress(game.pregunta_id, 37);
    const progressE2 = calculateProgress(game.pregunta_id, 41);
    const progressE3 = calculateProgress(game.pregunta_id, 45);

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
            <div className="cuerpo-ciclo-agua">
                <div className="volver-menu">
                    <button onClick={() => navigate('/principal')}>Volver a Menu Principal</button>
                </div>
                <div className="opciones-menu-ecosistema">
                    <div className="E-1" onClick={() => handleNavigation('/pregunta-agua', 10)}>
                        <h3>Ciclo del agua</h3>
                        <img src={AguaE1} alt="Agua E1" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE1}%` }}>
                                {progressE1}%
                            </div>
                        </div>
                    </div>
                    <div className="E-2" onClick={() => handleNavigation('/pregunta-agua', 11)}>
                        <h3>Función ciclo del agua</h3>
                        <img src={AguaE2} alt="Agua E2" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE2}%` }}>
                                {progressE2}%
                            </div>
                        </div>
                    </div>
                    <div className="E-3" onClick={() => handleNavigation('/pregunta-agua', 12)}>
                        <h3>Importancia</h3>
                        <img src={AguaE3} alt="Agua E3" />
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

export default Agua;