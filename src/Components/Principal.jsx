import React from 'react'
import Navbar from '../Components/Navbar'
import logoEco from '../assets/images/logo-ecosistema.png'
import logoAnim from '../assets/images/logo-animales.png'
import logoPlan from '../assets/images/logo-plantas.png'
import LogoAgua from '../assets/images/logo-cicloAgua.png'
import { useNavigate } from 'react-router-dom';

const Principal = () => {

    const navigate = useNavigate();

    const ecosistema = () => {
        navigate('/login')
    }

    return (
        <>
            <Navbar />
            <div className="cuerpo h-screen flex items-center justify-center align-center px-20 py-10">
                <div className="contenedor-menu p-10">
                    <div className="parrafo-menu">
                        <h1 className="">BIENVENIDO, ${ }</h1>
                        <p className="px-40 pb-10">¡Descubre el mundo a través de la ciencia con EduScience Quest!</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="ecosistema text-center">
                            <h2>Ecosistemas</h2>
                            <img src={logoEco} />
                            <button className="text-xl mt-6 px-20 rounded-xl py-2 bg-main text-white hover:bg-main-HOVER">Jugar</button>
                        </div>
                        <div class="animales text-center">
                            <h2>Animales</h2>
                            <img src={logoAnim} />
                            <button className="text-xl mt-6 px-20 rounded-xl py-2 bg-main text-white hover:bg-main-HOVER">Jugar</button>
                        </div>
                        <div class="plantas text-center">
                            <h2>Plantas</h2>
                            <img src={logoPlan} />
                            <button className="text-xl mt-6 px-20 rounded-xl py-2 bg-main text-white hover:bg-main-HOVER">Jugar</button>
                        </div>
                        <div class="agua text-center">
                            <h2>Ciclo del Agua</h2>
                            <img src={LogoAgua} />
                            <button className="text-xl mt-6 px-20 rounded-xl py-2 bg-main text-white hover:bg-main-HOVER">Jugar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Principal