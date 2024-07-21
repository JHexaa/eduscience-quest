import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

const PreguntaEcosistema = () => {
    const [game, setGame] = useState('');
    const [pregunta, setPregunta] = useState(null);
    const navigate = useNavigate();

    const handleNext = async () => {
        let nextPreguntaId = game.pregunta_id + 1;
        let nextTemaId = game.tema_id;

        if (nextPreguntaId === 5) {
            nextTemaId = 2;
        } else if (nextPreguntaId === 9) {
            nextTemaId = 3;
        }

        try {
            await apiService.updateGame(game.usuario_id, nextTemaId, nextPreguntaId);

            const response = await apiService.getPregunta(nextPreguntaId);
            setPregunta(response.data);

            setGame(prevGame => ({
                ...prevGame,
                tema_id: nextTemaId,
                pregunta_id: nextPreguntaId
            }));
        } catch (error) {
            console.error('Error updating game data:', error);
        }
    };

    const getGame = async (id) => {
        try {
            const response = await apiService.getGame(id);
            setGame(response.data);
            const preguntaResponse = await apiService.getPregunta(response.data.pregunta_id);
            setPregunta(preguntaResponse.data);
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

    if (!game || !pregunta) {
        return null;
    }

    return (
        <>
            <Navbar />
            <div className="cuerpo-ecosistema">
                <div className="pregunta-ecosistema">
                    <div className="contenedor-preguntas">
                        <p className="titulo">Pregunta</p>
                        <span className="contador">{pregunta.numero}/4</span>
                        <p className="concepto">
                            {pregunta.contexto}
                        </p>

                        <h1>{pregunta.pregunta}</h1>
                        <div className="respuestas">
                            <div className="grupo-1">
                                <div className="respuesta-1">
                                    <p>A) Un conjunto de organismos que viven en el mismo hábitat.</p>
                                </div>
                                <div className="respuesta-2">
                                    <p>B) Un sistema formado por seres vivos y el entorno en el que interactúan.</p>
                                </div>
                            </div>
                            <div className="grupo-2">
                                <div className="respuesta-3">
                                    <p>C) Un grupo de animales que cazan y recolectan alimentos.</p>
                                </div>
                                <div className="respuesta-4">
                                    <p>D) Un área donde solo crecen plantas.</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleNext}>
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreguntaEcosistema;
