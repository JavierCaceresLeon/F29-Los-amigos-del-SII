'use client';

import Lista from './api/vercliente/page';
import Dashboard from '@/components/DashboardForm';
import Calendar from './api/calendario/calendario';
import AgregarCliente from './api/anadircliente/anadircliente';
import EliminarCliente from './api/eliminarcliente/eliminarcliente';
import ActualizarCliente from './api/actualizarcliente/actualizarcliente';
import Home from './home';
import { Routes, Route } from 'react-router-dom';

// Variable global para simular el estado de login
let logged = false;

// Componente ProtectedRoute para proteger rutas
const ProtectedRoute = ({ isAllowed, children }) => {
  if (!isAllowed) {
    // Redirección si el usuario no está autorizado
    return <Navigate to="/landing" replace />;
  }
  return children ? children : <Outlet />;
};

// En la estructura de rutas, se utiliza ProtectedRoute para proteger las rutas
export default function App () {
  return (
    <Home>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={logged} />}>
          <Route path="components/dashboard" element={<Dashboard />} />
          <Route path="api/vercliente" element={<Lista />} />
          <Route path="api/actualizarcliente" element={<ActualizarCliente />} />
          <Route path="api/anadircliente" element={<AgregarCliente />} />
          <Route path="api/eliminarcliente" element={<EliminarCliente />} />
          <Route path="api/calendario" element={<Calendar />} />
        </Route>
        <Route path="home" element={<Home />} />
      </Routes>
    </Home>
  );
};
