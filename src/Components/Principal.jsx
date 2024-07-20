import React from 'react'
import Navbar from '../Components/Navbar'


const Principal = () => {

    return (
        <>
            <Navbar />
            <div className="cuerpo h-screen">
                <div className="contenedor-menu">
                    <div className="parrafo-menu">
                        <h1>BIENVENIDO</h1>
                        <p>¡Descubre el mundo a través de la ciencia con EduScience Quest!</p>
                    </div>
                    <div className="opciones-menu">
                        <div class="ecosistema">
                            <h2>Ecosistemas</h2>
                            <img src="imagenes/logo-ecosistema.png" />
                            <a href="menu-ecosistema.html"><button>Jugar</button></a>
                        </div>
                        <div class="animales">
                            <h2>Animales</h2>
                            <img src="imagenes/logo-animales.png" />
                            <a href="menu-animales.html"><button>Jugar</button></a>
                        </div>
                        <div class="plantas">
                            <h2>Plantas</h2>
                            <img src="imagenes/logo-plantas.png" />
                            <a href="menu-plantas.html"><button>Jugar</button></a>
                        </div>
                        <div class="agua">
                            <h2>Ciclo del Agua</h2>
                            <img src="imagenes/logo-cicloAgua.png" />
                            <a href="menu-ciclo-agua.html"><button>Jugar</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Principal