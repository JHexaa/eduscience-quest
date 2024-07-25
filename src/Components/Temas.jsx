import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../apiService';

const Temas = (props) => {
    const { userID, tema, img, navegar, idTema } = props;
    const navigate = useNavigate();
    const [game, setGame] = useState('');

    const handleNavigation = async (path, categoriaIdRequired) => {
        const gameData = await getGame(userID);
        if (gameData && gameData.categoria_id >= categoriaIdRequired) {
            navigate(path);
        } else {
            alert('No puedes acceder a este tema aún.\nCompleta los temas anteriores para desbloquear.');
        }
    };

    const getGame = async (id) => {
        try {
            const response = await apiService.getGame(id);
            setGame(response.data);
            sessionStorage.setItem('categoria_id', response.data.categoria_id);
            sessionStorage.setItem('tema_id', response.data.tema_id);
            sessionStorage.setItem('pregunta_id', response.data.pregunta_id);
            return response.data;
        } catch (error) {
            console.error('Error fetching game data:', error);
            return null;
        }
    };

    return (
        <div className="ecosistema text-center">
            <h2>{tema}</h2>
            <img src={img} alt={tema} />
            <button
                onClick={() => handleNavigation(navegar, idTema)}
                className="text-xl mt-6 px-20 rounded-xl py-3 bg-main text-white hover:bg-main-HOVER"
            >
                Jugar
            </button>
        </div>
    );
};

export default Temas;
