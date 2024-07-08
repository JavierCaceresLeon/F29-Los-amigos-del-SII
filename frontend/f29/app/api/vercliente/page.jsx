'use client';

export default function Lista() {

    const handleback = () => {
        window.location.href = '/api/dashboard';
    }

    const handlelogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }

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
              
              <div className="bg-white dark:bg-zinc-700 p-6 rounded-md shadow-xl mt-6 w-full max-w-4xl">
                  <h2 className="text-xl font-bold text-zinc-800 dark:text-white text-center mb-4">Clientes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-cyan-300 dark:bg-cyan-600 text-black dark:text-white">
                                <th className="p-2">Nombre</th>
                                <th className="p-2">RUT</th>
                                <th className="p-2">Celular</th>
                                <th className="p-2">Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        <tr className="bg-cyan-50 dark:bg-cyan-700">
                            <td className="p-2">John Doe</td>
                            <td className="p-2">12.345.678-9</td>
                            <td className="p-2">+569 8765 4321</td>
                            <td className="p-2">john@example.com</td>
                        </tr>
                        
                        </tbody>
                    </table>
                  </div>
              </div>
          </div>
      </body>
  )
}
