'use client';

import { useState } from "react";
import axios from 'axios';
import { decode } from 'jwt-decode';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:33000/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/api/dashboard'; 
    } catch (error) {
      console.error(error);
      setError("Error en la conexión con el servidor");
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Iniciar Sesión</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Enviar
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
