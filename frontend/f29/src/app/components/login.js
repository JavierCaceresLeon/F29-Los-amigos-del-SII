import React, { useState } from 'react';
import { useNavigate, usePathname } from 'next/navigation'; // Importa useNavigate y usePathname desde 'next/navigation'
import * as api from './api';

function Login() {
  const navigate = useNavigate(); // Utiliza useNavigate para la navegación
  const pathname = usePathname();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    try {
      const response = await api.post('http://localhost:8085/auth/login', { username, password });
      console.log(response.data);
      setSuccessMessage('Inicio de sesión exitoso');
      setModalOpen(true);
      setTimeout(() => {
        setSuccessMessage('');
        setModalOpen(false);
      }, 1000);
    } catch (error) {
      console.error('Error en el login:', error);
      alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && modalOpen && <p>{successMessage}</p>}
    </div>
  );
}

export default Login;