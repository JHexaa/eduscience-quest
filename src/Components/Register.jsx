// src/Register.js
import React, { useState } from 'react';
import apiService from '../apiService';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/Logo-bienvenido.png'

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await apiService.register({
                ...formData,
                email: formData.email.toLowerCase()
            });
            setResponseMessage(response.data.message);
            if (response.data.message === "Usuario registrado correctamente") {
                setResponseMessage(response.data.message+".");
                setMessageColor("text-green-500");
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        } catch (error) {
            setResponseMessage('El usuario ya existe');
            setMessageColor("text-red-500");
        }
    };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
            <div className="login">
                <div className="register-1">
                    <h1 className="text-2xl">Registrar Cuenta</h1>
                    <form id="registerForm" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            className="shadow appearance-none border rounded"
                            name="apellido"
                            placeholder="Apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            className="shadow appearance-none border rounded"
                            name="email"
                            placeholder="Correo Electronico"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            className="shadow appearance-none border rounded"
                            name="password"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className='text-bg'>Registrarse</button>
                    </form>
                    {responseMessage && <p className={`text-l mt-5 mx-10 w-72 ${messageColor}`}>{responseMessage}</p>}
                    <a href="/login" className="my-5 mx-10">Ya tienes cuenta? Haz click Aqui!</a>
                </div>
                <div className="login-2">
                    <img src={Logo} className="w-72" alt="" />
                </div>
            </div>
        </div>
    </>
    
  );
};

export default Register;
