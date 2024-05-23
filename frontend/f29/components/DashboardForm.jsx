export default function Dashboard() {
    const handleGET = () => {
        router.push('/vercliente');
      }

    const handlePOST = () => {
        router.push('/addcliente');
      };
    
      const handlePUT = () => {
        router.push('/actualizarcliente');
      };

      const handleDELETE = () => {
        router.push('/eliminarcliente');
      }

  return (
      <body className="bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-700 dark:to-blue-700 min-h-screen p-4">
          <div className="container mx-auto p-4 flex flex-col items-center">
              
              <div className="w-full max-w-4xl mx-auto flex justify-between items-center">
                  <div className="text-white text-lg font-semibold">Panel de Control F29</div>
                  <button className="bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transform hover:-translate-y-1 transition-all duration-300">Cerrar Sesión</button>
              </div>
      
              <div className="bg-white dark:bg-zinc-700 text-black dark:text-white p-4 rounded-md shadow-lg my-6 text-center">
                Bienvenido, {session && session.user && session.user.name}
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
                      <button className="bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500 text-black dark:text-white py-2 px-4 rounded-lg shadow-inner transform hover:-translate-y-1 transition-all duration-300" onClick={handleGET}>Ver cliente</button>
                      <button className="bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500 text-black dark:text-white py-2 px-4 rounded-lg shadow-inner transform hover:-translate-y-1 transition-all duration-300" onClick={handlePOST}>Añadir cliente</button>
                      <button className="bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500 text-black dark:text-white py-2 px-4 rounded-lg shadow-inner transform hover:-translate-y-1 transition-all duration-300" onClick={handlePUT}>Actualizar cliente</button>
                      <button className="bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500 text-black dark:text-white py-2 px-4 rounded-lg shadow-inner transform hover:-translate-y-1 transition-all duration-300" onClick={handleDELETE}>Eliminar cliente</button>
                  </div>
              </div>
          </div>
      </body>
  )
}