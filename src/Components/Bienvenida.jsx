import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo-bienvenido.png'

const Bienvenida = () => {
  const navigate = useNavigate();

  const beginGame = () => {
    navigate('/login')
  }

  return (
    <div className="bg-bg text-center mx-auto flex flex-col items-center justify-center h-screen">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="eduscience logo" />
      </div>
      <div className="text-center">
        <button type onClick={beginGame} className="rounded-md my-10 bg-main px-14 py-2.5 text-sm font-extrabold shadow-sm hover:bg-main-HOVER focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          Jugar
        </button>
        <h3 className="text-white font-bold my-4 text-2xl">¡Disfruta de la Experiencia EduScience Quest!</h3>
      </div>
    </div >
  )
}
export default Bienvenida