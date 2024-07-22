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

    const calculateProgress = (currentPreguntaId, temaStartPreguntaId) => {
        const progress = ((currentPreguntaId - temaStartPreguntaId) / 4) * 100;
        return progress > 100 ? 100 : progress < 0 ? 0 : progress;
    };

    const progressE1 = calculateProgress(game.pregunta_id, 37);
    const progressE2 = calculateProgress(game.pregunta_id, 41);
    const progressE3 = calculateProgress(game.pregunta_id, 45);

    const handleNavigation = (path, temaIdRequired, progress, preguntaId) => {
        if (progress === 100) {
            const userChoice = window.confirm('Ya has completado este tema al 100%. ¿Quieres volver a jugar este tema?, perderás tu progreso');
            if (userChoice) {
                resetGame(temaIdRequired, preguntaId);
            }
        } else if (game.tema_id >= temaIdRequired) {
            navigate(path);
        } else {
            alert('No puedes acceder a este tema aún.\nCompleta los niveles anteriores para desbloquear.');
        }
    };

    const resetGame = async (tema_id, pregunta_id) => {
        const userID = sessionStorage.getItem('userID');
        try {
            await apiService.updateGame(userID, tema_id, pregunta_id, 4);
            setGame({ ...game, tema_id: tema_id, pregunta_id: pregunta_id });
            navigate('/pregunta-agua')
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
            <div className="cuerpo-ciclo-agua">
                <div className="volver-menu">
                    <button onClick={() => navigate('/principal')}>Volver a Menu Principal</button>
                </div>
                <div className="flex justify-center text-white text-5xl font-bold mb-20">
                    <h1 className="px-8 bg-[#223021a8]">CICLO DEL AGUA</h1>
                </div>
                <div className="opciones-menu-ecosistema">
                    <div className="E-1 px-10 gap-4" onClick={() => handleNavigation('/pregunta-agua', 10, progressE1, 37)}>
                        <h3 className="text-2xl">Ciclo del agua</h3>
                        <img src={AguaE1} alt="Agua E1" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE1}%` }}>
                                {progressE1}%
                            </div>
                        </div>
                    </div>
                    <div className="E-2 px-10 gap-4" onClick={() => handleNavigation('/pregunta-agua', 11, progressE2, 41)}>
                        <h3 className="text-2xl">Función ciclo del agua</h3>
                        <img src={AguaE2} alt="Agua E2" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE2}%` }}>
                                {progressE2}%
                            </div>
                        </div>
                    </div>
                    <div className="E-3 px-10 gap-4" onClick={() => handleNavigation('/pregunta-agua', 12, progressE3, 45)}>
                        <h3 className="text-2xl">Importancia</h3>
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