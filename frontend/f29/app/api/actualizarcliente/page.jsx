'use client';

import React, { useState } from "react";


export default function ActualizarCliente() {

  
  const handleback = () => {
    window.location.href = '/api/dashboard';
}

const handlelogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
}

  const [clientList, setClientList] = useState([
    { name: "John Doe", rut: "12.345.678-9", phone: "+569 8765 4321", email: "john@example.com" },
    { name: "Jane Doe", rut: "98.765.432-1", phone: "+569 1234 5678", email: "jane@example.com" },
  ]);
  const [searchRUT, setSearchRUT] = useState("");
  const [selectedField, setSelectedField] = useState("name");
  const [newValue, setNewValue] = useState("");

  const formatRUT = (rut) => {
    rut = rut.replace(/\D/g, "");
    if (rut.length > 1) {
      rut = rut.slice(0, -1) + "-" + rut.slice(-1);
    }
    if (rut.length > 5) {
      rut = rut.slice(0, -5) + "." + rut.slice(-5);
    }
    if (rut.length > 9) {
      rut = rut.slice(0, -9) + "." + rut.slice(-9);
    }
    if (rut.length > 12) {
      rut = rut.slice(0, -12) + "." + rut.slice(-12);
    }
    return rut;
  };

  const handleRUTChange = (e) => {
    setSearchRUT(formatRUT(e.target.value));
  };

  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);
  };

  const handleValueChange = (e) => {
    setNewValue(e.target.value);
  };

  const handleUpdateClient = () => {
    setClientList(clientList.map((client) => {
      if (client.rut === searchRUT) {
        return { ...client, [selectedField]: newValue };
      }
      return client;
    }));
    setSearchRUT("");
    setNewValue("");
  };

  return (
    <body className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-700 dark:to-blue-700 min-h-screen p-4">
    <div className="container mx-auto p-4 flex flex-col items-center">
      <button className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300" onClick={handleback}>Volver a Dashboard</button>
        
        <div className="w-full max-w-4xl mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-semibold">Panel de Control F29</div>
            <button className="bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300"onClick={handlelogout}>Cerrar Sesión</button>
        </div>

        <div className="bg-white dark:bg-zinc-700 text-black dark:text-white p-4 rounded-md shadow-lg my-6 text-center">
            Bienvenido estimado usuario 
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300">Clientes</button>
            <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-500 dark:from-green-600 dark:to-green-800 dark:hover:from-green-800 dark:hover:to-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300">Formularios</button>
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-500 dark:from-purple-600 dark:to-purple-800 dark:hover:from-purple-800 dark:hover:to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300">Firma Digital</button>
            <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 dark:from-red-600 dark:to-red-800 dark:hover:from-red-800 dark:hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300">Honorarios</button>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-700 hover:to-yellow-500 dark:from-yellow-600 dark:to-yellow-800 dark:hover:from-yellow-800 dark:hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300">Calendario</button>
        </div>

    <div className="bg-white dark:bg-zinc-700 p-4 rounded-md shadow-xl mt-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-4">
        Actualizar Cliente
      </h2>
      <div className="mb-4">
        <label htmlFor="rut" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          RUT
        </label>
        <input
          type="text"
          id="rut"
          name="rut"
          placeholder="Ingrese RUT"
          className="w-full py-2 px-4 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={searchRUT}
          onChange={handleRUTChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="field" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          Campo a Modificar
        </label>
        <select
          id="field"
          name="field"
          className="w-full py-2 px-4 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedField}
          onChange={handleFieldChange}
        >
          <option value="name">Nombre</option>
          <option value="phone">Celular</option>
          <option value="email">Correo</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="newValue" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          Nuevo Valor
        </label>
        <input
          type="text"
          id="newValue"
          name="newValue"
          placeholder="Ingrese nuevo valor"
          className="w-full py-2 px-4 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={newValue}
          onChange={handleValueChange}
        />
      </div>
      <button
        onClick={handleUpdateClient}
        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Actualizar Cliente
      </button>
      <div className="bg-white dark:bg-zinc-700 p-6 rounded-md shadow-lg my-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Lista de Clientes
        </h2>
        <ul>
          {clientList.map((client) => (
            <li key={client.rut}>
              {client.name} ({client.rut}) - {client.phone} - {client.email}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  </body>
  );
}