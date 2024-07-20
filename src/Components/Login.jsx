import React, { useState } from 'react';
import apiService from '../apiService';
import Logo from '../assets/images/Logo-bienvenido.png'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const isAdmin = email === "admin";
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async () => {
    try {
      const response = await apiService.login(email.toLowerCase(), password);
      console.log(response.data);
      setMessage('Inicio de sesión exitoso');
      setMessageColor("text-green-500");
      sessionStorage.setItem('userID', response.data.id);
      sessionStorage.setItem('userNombre', response.data.nombre);
      sessionStorage.setItem('userApellido', response.data.apellido);
      sessionStorage.setItem('userTipo', response.data.tipo);
      if (isAdmin) {
        setTimeout(() => {
          navigate('/crud'); // SI ES ADMIN LO MANDA AL CRUD
        }, 1500);
      }
      else {
        setTimeout(() => {
          navigate('/principal'); // USUARIO NORMAL LO MANDA A LA PANTALLA PRINCIPAL
        }, 1500);
      }
    } catch (error) {
      console.error(error); // Handle error, e.g., display error message
      setMessage('Correo o contraseña incorrectos');
      setMessageColor("text-red-500");
      console.log(message)
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(); // Call handleLogin and handle navigation inside it
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div class="login">
          <div class="login-1">
            <h1 className="text-2xl">Iniciar Sesion</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" className="shadow appearance-none border rounded" placeholder="Correo Electronico" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="password" className="shadow appearance-none border rounded" placeholder="Contraseña" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit" className='text-bg'  >Iniciar Sesion</button>
            </form>
            {message && <p className={`text-xl mt-5 mx-10 w-72 ${messageColor}`}>{message}</p>}
            <p class="login-response" id="response"></p>
            <a href="/register" className="my-5 mx-10">No tienes una cuenta? Haz click Aqui!</a>
          </div>
          <div class="login-2">
            <img src={Logo} className="w-72" alt="" />
          </div>
        </div>
      </div >
    </>
  );
};

export default Login;
