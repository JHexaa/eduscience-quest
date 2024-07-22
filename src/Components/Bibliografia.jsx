import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import libro4 from '../assets/images/libro4.jpg'
import libro5 from '../assets/images/libro5.jpg'
import libro6 from '../assets/images/libro6.jpg'
import { useNavigate } from 'react-router-dom';

const Bibliografia = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userID = sessionStorage.getItem('userID');
        if (!userID) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <Navbar />
            <div className="cuerpo h-screen flex items-center justify-center align-center px-20 py-10">
                <div className="contenedor-ayuda p-10">
                    <div className="parrafo-ayuda">
                        <h1>BIBLIOGRAFIA</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div class="libros">
                                <img src={libro4} onClick={() => window.location.href = "https://santillana.com.pa/ciencias-naturales-4/"} alt="" />
                                <h2>Ciencias Naturales 4</h2>
                            </div>
                            <div class="libros text-center" >
                                <img src={libro5} onClick={() => window.location.href = "https://santillana.com.pa/ciencias-naturales-5/"} alt="" />
                                <h2>Ciencias Naturales 5</h2>
                            </div>
                            <div class="libros text-center">
                                <img src={libro6} onClick={() => window.location.href = "https://santillana.com.pa/ciencias-naturales-6/"} alt="" />
                                <h2>Ciencias Naturales 6</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bibliografia