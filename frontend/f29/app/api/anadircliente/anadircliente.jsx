import React, { useState } from "react";

export default function AgregarCliente() {
  const [clientList, setClientList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rut: "",
    phone: "",
    email: ""
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "rut") {
      setFormData({ ...formData, [name]: formatRUT(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddClient = () => {
    setClientList([...clientList, formData]);
    setFormData({ name: "", rut: "", phone: "", email: "" });
  };

  return (
    <div className="bg-white dark:bg-zinc-700 p-4 rounded-md shadow-xl mt-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-4">
        Agregar Cliente
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingrese nombre"
          className="w-full py-2 px-4 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
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
          value={formData.rut}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          Celular
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Ingrese celular"
          className="w-full py-2 px-4 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
          Correo
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Ingrese correo"
          className="w-full py-2 px-4 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleAddClient}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Agregar Cliente
      </button>
      <div className="bg-white dark:bg-zinc-700 p-6 rounded-md shadow-lg my-6">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Lista de Clientes
        </h2>
        <ul>
          {clientList.map((client, index) => (
            <li key={index}>
              {client.name} ({client.rut}) - {client.phone} - {client.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}