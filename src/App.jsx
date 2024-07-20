import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Components/Principal';
import Bienvenida from './Components/Bienvenida';
import Login from './Components/Login';
import Crud from './Components/CRUD';
import Register from './Components/Register';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </Router>
  );
};

export default App;
