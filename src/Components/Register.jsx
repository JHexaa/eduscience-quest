// src/Register.js
import React, { useState } from 'react';
import apiService from '../apiService';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await apiService.register({
        nombre,
        apellido,
        email: email.toLowerCase(),
        password
      });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('El usuario ya existe');
      }
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
      <br/>
      <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
      <br/>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <button onClick={handleRegister}>Register</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
