import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import logoE1 from '../assets/images/Logo-E1.png';
import logoE2 from '../assets/images/Logo-E2.png';
import logoE3 from '../assets/images/Logo-E3.png';
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

const Ecosistema = () => {
    const [game, setGame] = useState('');
    const navigate = useNavigate();

    const calculateProgress = (currentPreguntaId, temaStartPreguntaId) => {
        const progress = ((currentPreguntaId - temaStartPreguntaId) / 4) * 100;
        return progress > 100 ? 100 : progress < 0 ? 0 : progress;
    };

    const progressE1 = calculateProgress(game.pregunta_id, 1);
    const progressE2 = calculateProgress(game.pregunta_id, 5);
    const progressE3 = calculateProgress(game.pregunta_id, 9);

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
            await apiService.updateGame(userID, tema_id, pregunta_id, 1);
            setGame({ ...game, tema_id: tema_id, pregunta_id: pregunta_id });
            navigate('/pregunta-ecosistema')
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
            getGame(userID);
        }
    }, [navigate]);

    return (
        <>
            <Navbar />
            <div className="cuerpo-ecosistema">
                <div className="volver-menu">
                    <button onClick={() => navigate('/principal')}>Volver a Menu Principal</button>
                </div>
                <div className="flex justify-center text-white text-5xl font-bold mb-20">
                    <h1 className="px-8 bg-[#223021a8]">ECOSISTEMA</h1>
                </div>
                <div className="opciones-menu-ecosistema">
                    <div className="E-1 px-10" onClick={() => handleNavigation('/pregunta-ecosistema', 1, progressE1, 1)}>
                        <h3 className="text-2xl">Que es el Ecosistema</h3>
                        <img src={logoE1} alt="Logo E1" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE1}%` }}>
                                {progressE1}%
                            </div>
                        </div>
                    </div>
                    <div className="E-2 px-10 gap-4" onClick={() => handleNavigation('/pregunta-ecosistema', 2, progressE2, 5)}>
                        <h3 className="text-2xl">Estructura del Ecosistema</h3>
                        <img src={logoE2} alt="Logo E2" />
                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progressE2}%` }}>
                                {progressE2}%
                            </div>
                        </div>
                    </div>
                    <div className="E-3 px-10 gap-4" onClick={() => handleNavigation('/pregunta-ecosistema', 3, progressE3, 9)}>
                        <h3 className="text-2xl">Protección y <br />conservación</h3>
                        <img src={logoE3} alt="Logo E3" />
                        <div className="progress-container">
                            <div className="progress-bar font-bold" style={{ width: `${progressE3}%` }}>
                                {progressE3}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ecosistema;
