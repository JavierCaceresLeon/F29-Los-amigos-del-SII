"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = async () => {
    if (!email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    }

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const res = await axios.post('localhost:30300/login', { //CAMBIAR ESTO POR LA IP DE LA MÁQUINA CON LA BD
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Mail o contraseña incorrectos");
        return;
      }
      router.replace("dashboard");
      
    } catch (error) {
      console.log(error);
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
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2" onClick={handleLogin}>
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
