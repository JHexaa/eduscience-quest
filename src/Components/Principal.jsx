import React from 'react'
import Navbar from '../Components/Navbar'
import logoEco from '../assets/images/logo-ecosistema.png'
import logoAnim from '../assets/images/logo-animales.png'
import logoPlan from '../assets/images/logo-plantas.png'
import LogoAgua from '../assets/images/logo-cicloAgua.png'


const Principal = () => {

    return (
        <>
            <Navbar />
            <div className="cuerpo h-screen flex justify-center items-center">
                <div className="contenedor-menu mx-52 p-10">
                    <div className="parrafo-menu">
                        <h1 className="">BIENVENIDO</h1>
                        <p className="px-40">¡Descubre el mundo a través de la ciencia con EduScience Quest!</p>
                    </div>
                    <div className="opciones-menu ">
                        <div class="ecosistema">
                            <h2>Ecosistemas</h2>
                            <img src={logoEco} />
                            <a href="menu-ecosistema.html"><button>Jugar</button></a>
                        </div>
                        <div class="animales">
                            <h2>Animales</h2>
                            <img src={logoAnim} />
                            <a href="menu-animales.html"><button>Jugar</button></a>
                        </div>
                        <div class="plantas">
                            <h2>Plantas</h2>
                            <img src={logoPlan} />
                            <a href="menu-plantas.html"><button>Jugar</button></a>
                        </div>
                        <div class="agua">
                            <h2>Ciclo del Agua</h2>
                            <img src={LogoAgua} />
                            <a href="menu-ciclo-agua.html"><button>Jugar</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Principal