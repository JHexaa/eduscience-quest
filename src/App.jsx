import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Components/Principal';
import Bienvenida from './Components/Bienvenida';
import Login from './Components/Login';
import Register from './Components/Register';
import Crud from './Components/CRUD';
import User from './Components/User';
import Ayuda from './Components/Ayuda';
import Bibliografia from './Components/Bibliografia';
import Ecosistema from './Components/Ecosistema';
import PreguntaEcosistema from './Components/PreguntaEcosistema';
import FelicitacionEcosistema from './Components/FelicitacionEcosistema';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/bibliografia" element={<Bibliografia />} />
        <Route path="/ecosistema" element={<Ecosistema />} />
        <Route path="/pregunta-ecosistema" element={<PreguntaEcosistema />} />
        <Route path="/felicitacion-ecosistema" element={<FelicitacionEcosistema />} />
      </Routes>
    </Router>
  );
};

export default App;
