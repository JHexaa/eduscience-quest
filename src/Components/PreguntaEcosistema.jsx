import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const PreguntaEcosistema = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        
    };

    return (
        <>
            <Navbar />
            <div className="cuerpo-ecosistema">
                <div className="pregunta-ecosistema">
                    <div className="contenedor-preguntas">
                        <p className="titulo">Pregunta</p>
                        <span className="contador">1</span><span className="contador">/4</span>
                        <p className="concepto">
                            Un ecosistema incluye tanto a los seres vivos (plantas, animales, microorganismos) como a los elementos no vivos (agua, aire, suelo) 
                            que interactúan en un entorno específico. Estos componentes trabajan juntos para formar un sistema equilibrado donde cada elemento tiene un rol esencial.
                        </p>

                        <h1>¿Qué es un ecosistema?</h1>
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
