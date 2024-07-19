import React, { useState } from 'react';
import apiService from '../apiService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await apiService.login(email.toLowerCase(), password);
      console.log(response.data); // Handle success, e.g., set session
      setMessage('Inicio de sesión exitoso');
    } catch (error) {
      console.error(error); // Handle error, e.g., display error message
      setMessage('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br/>
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
