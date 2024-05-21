import React, { useState } from "react";

export default function EliminarCliente() {
  const [clientList, setClientList] = useState([
    { name: "John Doe", rut: "12.345.678-9", phone: "+569 8765 4321", email: "john@example.com" },
    { name: "Jane Doe", rut: "98.765.432-1", phone: "+569 1234 5678", email: "jane@example.com" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const formatRUT = (rut) => {
    // Elimina cualquier carácter que no sea dígito
    rut = rut.replace(/\D/g, "");

    // Si el RUT tiene más de 1 dígito, inserta el guion antes del dígito verificador
    if (rut.length > 1) {
      rut = rut.slice(0, -1) + "-" + rut.slice(-1);
    }

    // Inserta puntos cada 3 dígitos antes del guion
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

  const handleSearch = (event) => {
    const rawValue = event.target.value;
    const formattedRUT = formatRUT(rawValue);
    setSearchTerm(formattedRUT);
  };

  const handleDelete = (rut) => {
    setClientList(clientList.filter((client) => client.rut !== rut));
  };

  return (
    <div className="bg-white dark:bg-zinc-700 p-4 rounded-md shadow-xl mt-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-4">
        Eliminar Cliente
      </h2>
      <div className="mb-4">
        <label htmlFor="rut" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          RUT
        </label>
        <div className="relative">
          <input
            type="search"
            id="rut"
            placeholder="Ingrese RUT"
            className="w-full py-2 pl-10 pr-4 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleDelete(searchTerm)}
        disabled={!searchTerm}
        className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Eliminar Cliente
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