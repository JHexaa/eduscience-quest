import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import AnimalE1 from '../assets/images/Animal-E1.png';
import AnimalE2 from '../assets/images/Animal-E2.png';
import AnimalE3 from '../assets/images/Animal-E3.png';
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

const Animales = () => {
    const [game, setGame] = useState('');
    const navigate = useNavigate();

    const calculateProgress = (currentPreguntaId, temaStartPreguntaId) => {
        const progress = ((currentPreguntaId - temaStartPreguntaId) / 4) * 100;
        return progress > 100 ? 100 : progress < 0 ? 0 : progress;
    };

    const progressE1 = calculateProgress(game.pregunta_id, 13);
    const progressE2 = calculateProgress(game.pregunta_id, 17);
    const progressE3 = calculateProgress(game.pregunta_id, 21);

    const handleNavigation = (path, temaIdRequired, progress, preguntaId) => {
        if (progress === 100) {
            const userChoice = window.confirm('Ya has completado este tema al 100%. ¿Quieres volver a jugar este tema?, perderás tu progreso');
            if (userChoice) {
                resetGame(temaIdRequired, preguntaId);
            } 
        } else if (game.tema_id >= temaIdRequired) {
            navigate(path);
        } else {
            alert('No puedes acceder a este tema aún.');
        }
    };

    const resetGame = async (tema_id, pregunta_id) => {
        const userID = sessionStorage.getItem('userID');
        try {
            await apiService.updateGame(userID, tema_id, pregunta_id, 2);
            setGame({ ...game, tema_id: tema_id, pregunta_id: pregunta_id});
            navigate('/pregunta-animales')
        } catch (error) {
            console.error('Error resetting game data:', error);
        }
    };

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
            <div className="cuerpo-animales">
                <div className="volver-menu">
                    <button onClick={() => navigate('/principal')}>Volver a Menu Principal</button>
                </div>
                <div className="opciones-menu-ecosistema">
                    <div className="E-1" onClick={() => handleNavigation('/pregunta-animales', 4, progressE1, 13)}>
                        <h3>Tipos de Animales</h3>
                        <img src={AnimalE1} alt="Animal E1" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE1}%` }}>
                                {progressE1}%
                            </div>
                        </div>
                    </div>
                    <div className="E-2" onClick={() => handleNavigation('/pregunta-animales', 5, progressE2, 17)}>
                        <h3>Habitats</h3>
                        <img src={AnimalE2} alt="Animal E2" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE2}%` }}>
                                {progressE2}%
                            </div>
                        </div>
                    </div>
                    <div className="E-3" onClick={() => handleNavigation('/pregunta-animales', 6, progressE3, 21)}>
                        <h3>Importancia de los animales</h3>
                        <img src={AnimalE3} alt="Animal E3" />
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

export default Animales;