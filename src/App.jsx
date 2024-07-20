import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Components/Principal';
import Bienvenida from './Components/Bienvenida';
import Login from './Components/Login';
import Crud from './Components/CRUD';
import Register from './Components/Register';
import Ecosistema from './Components/Ecosistema';
import PreguntaEcosistema from './Components/PreguntaEcosistema';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/ecosistema" element={<Ecosistema />} />
        <Route path="/pregunta-ecosistema" element={<PreguntaEcosistema />} />
      </Routes>
    </Router>
  );
};

export default App;
