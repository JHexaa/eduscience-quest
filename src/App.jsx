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
import Animales from './Components/Animales';
import Plantas from './Components/Plantas';
import Agua from './Components/Agua';
import PreguntaEcosistema from './Components/PreguntaEcosistema';
import PreguntaAnimales from './Components/PreguntaAnimales';
import PreguntaPlantas from './Components/PreguntaPlantas';
import PreguntaAgua from './Components/PreguntaAgua';
import FelicitacionEcosistema from './Components/FelicitacionEcosistema';
import FelicitacionAnimales from './Components/FelicitacionAnimales';
import FelicitacionPlantas from './Components/FelicitacionPlantas';
import FelicitacionAgua from './Components/FelicitacionAgua';
import Felicitacion from './Components/Felicitacion';


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
        <Route path="/animales" element={<Animales />} />
        <Route path="/plantas" element={<Plantas />} />
        <Route path="/agua" element={<Agua />} />
        <Route path="/pregunta-ecosistema" element={<PreguntaEcosistema />} />
        <Route path="/pregunta-animales" element={<PreguntaAnimales />} />
        <Route path="/pregunta-plantas" element={<PreguntaPlantas />} />
        <Route path="/pregunta-agua" element={<PreguntaAgua />} />
        <Route path="/felicitacion-ecosistema" element={<FelicitacionEcosistema />} />
        <Route path="/felicitacion-animales" element={<FelicitacionAnimales />} />
        <Route path="/felicitacion-plantas" element={<FelicitacionPlantas />} />
        <Route path="/felicitacion-agua" element={<FelicitacionAgua />} />
        <Route path="/felicitacion" element={<Felicitacion />} />
      </Routes>
    </Router>
  );
};

export default App;
