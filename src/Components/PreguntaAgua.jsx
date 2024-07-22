import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

const PreguntaAgua = () => {
    const [game, setGame] = useState(null);
    const [pregunta, setPregunta] = useState(null);
    const [respuestas, setRespuestas] = useState([]);
    const [selectedRespuesta, setSelectedRespuesta] = useState(null);
    const navigate = useNavigate();

    const handleNext = async () => {
        if (!selectedRespuesta) {
            alert('Por favor seleccionar una respuesta');
            return;
        }

        const isCorrect = selectedRespuesta.estado === 'true';
        if (!isCorrect) {
            alert('Respuesta incorrecta. Intente denuevo.');
            return;
        }

        let nextPreguntaId = game.pregunta_id + 1;
        let nextTemaId = game.tema_id;
        let nextCategoriaId = game.categoria_id;

        if (nextPreguntaId === 41) {
            nextTemaId++;
        } else if (nextPreguntaId === 45) {
            nextTemaId++;
        } else if (nextPreguntaId === 49) {
            nextTemaId++;
            nextCategoriaId++;
        }
        
        if (nextPreguntaId === 41 || nextPreguntaId === 45) {
            navigate('/felicitacion-agua');
        }else if (nextPreguntaId === 49){
            navigate('/felicitacion');
        }

        try {
            await apiService.updateGame(game.usuario_id, nextTemaId, nextPreguntaId, nextCategoriaId);

            const response = await apiService.getPregunta(nextPreguntaId);
            setPregunta(response.data);

            const respuestasResponse = await apiService.getRespuestas(nextPreguntaId);
            setRespuestas(respuestasResponse.data);

            setSelectedRespuesta(null);

            setGame(prevGame => ({
                ...prevGame,
                tema_id: nextTemaId,
                pregunta_id: nextPreguntaId,
                categoria_id: nextCategoriaId
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

            const respuestasResponse = await apiService.getRespuestas(response.data.pregunta_id);
            setRespuestas(respuestasResponse.data);
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

    if (!game || !pregunta || respuestas.length === 0) {
        return null;
    }

    return (
        <>
            <Navbar />
            <div className="cuerpo-ciclo-agua">
                <div className="pregunta-ecosistema">
                    <div className="contenedor-preguntas">
                        <p className="titulo">Pregunta</p>
                        <span className="contador">{pregunta.numero}/4</span>
                        <p className="concepto">
                            {pregunta.contexto}
                        </p>
                        <div className="pregunta">
                            <h1>{pregunta.pregunta}</h1>
                        </div>
                        <div className="respuestas">
                            {respuestas.map((respuesta) => (
                                <div
                                    key={respuesta.id}
                                    className={`respuesta${selectedRespuesta?.id === respuesta.id ? ' seleccionada' : ''}`}
                                    onClick={() => setSelectedRespuesta(respuesta)}
                                >
                                    <p>{respuesta.respuesta}</p>
                                </div>
                            ))}
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

export default PreguntaAgua;
