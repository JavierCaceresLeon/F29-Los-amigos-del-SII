import React, { useState } from "react";

export default function ActualizarCliente() {
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
  );
}