'use client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lista from './api/vercliente/page';
import Dashboard from '../components/DashboardForm';
import Calendar from './api/calendario/page';
import AgregarCliente from './api/anadircliente/page';
import EliminarCliente from './api/eliminarcliente/page';
import ActualizarCliente from './api/actualizarcliente/page';
import Home from './home';
import LoginForm from '../components/LoginForm'; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
          <Route path="/api/dashboard" element={<Dashboard />} />
          <Route path="/api/vercliente" element={<Lista />} />
          <Route path="/api/actualizarcliente" element={<ActualizarCliente />} />
          <Route path="/api/anadircliente" element={<AgregarCliente />} />
          <Route path="/api/eliminarcliente" element={<EliminarCliente />} />
          <Route path="/api/calendario" element={<Calendar />} />
      </Routes>
    </Router>
  );
}
