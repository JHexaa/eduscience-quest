import React from 'react'
import Navbar from '../Components/Navbar'

const Ayuda = () => {



    return (
        <>
            <Navbar/>
            <div className="cuerpo h-screen flex items-center justify-center align-center px-20 py-10">
                <div className="contenedor-ayuda p-10">
                    <div className="parrafo-ayuda">
                        <h1>AYUDA</h1>
                        <h2>Video Informativo</h2>
                        <iframe width="600" height="400" src="https://www.youtube.com/embed/uzB_bVqXgLU?si=wjYfbvM88LYmrcVP" title="YouTube video player" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Ayuda