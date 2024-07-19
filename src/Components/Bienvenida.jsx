import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo-bienvenido.png'

const Bienvenida = () => {
  const navigate = useNavigate();

  const beginGame = () => {
    navigate('/principal')
  }

  return (
    <div>
      <img src={Logo} alt="" />
        <button onClick={beginGame} className='bg-orange'>Jugar</button>
      <div>
        <h3>¡Disfruta de la Experiencia EduScience Quest!</h3>
      </div>
    </div>
  )
}

export default Bienvenida