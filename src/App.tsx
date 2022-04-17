import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
import Home from './pages/Home';
import MisPerritos from './pages/MisPerritos';
import RegistrarPerrito from './pages/RegistrarPerrito';
import Servicios from './pages/Servicios';
import ServicioDetalles from './pages/ServicioDetalles';
import AgendarCita from './pages/AgendarCita';
import Admin from './pages/Admin';
import AdminPerritos from './pages/AdminPerritos';
import VerReporte from './pages/VerReporte';
import RegistrarReporte from './pages/RegistrarReporte';
import PerritoDetalle from './pages/PerritoDetalle';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/citas">
          <Route path="" element={<Admin />} />
          <Route path=":cita" element={<VerReporte />} />
          <Route path="crear/:citaId" element={<RegistrarReporte />} />
        </Route>
        <Route path="/admin/perritos" element={<AdminPerritos />} />
        <Route path="/home" element={<Home />} />
        <Route path="/misperritos">
          <Route path="" element={<MisPerritos />} />
          <Route path=":perritoId/dashboard" element={<PerritoDetalle />} />
        </Route>
        <Route path="/registrar" element={<RegistrarPerrito />} />
        <Route path="/servicios/">
          <Route path="" element={<Servicios />} />
          <Route path=":servicioId" element={<ServicioDetalles />} />
          <Route path=":servicioId/agendar" element={<AgendarCita />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
