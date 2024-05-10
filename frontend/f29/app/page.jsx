'use client';

import { useRouter } from 'next/navigation';
import styles from './Home.modules.css';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <main>
        <body className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="flex justify-between items-center border-b border-zinc-200 pb-4">
            <span className="text-white text-xl font-bold">F29</span>
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded" onClick={handleLogin}>Iniciar Sesión</button>
          </div>
      
          <div className="text-center py-8">
            <h1 className="text-2xl font-bold mb-3">¿Qué es F29?</h1>
            <p className="mb-6">
              F29 Es la mejor aplicación para contadores, auditores y gente de finanzas. Con una interfaz simple y cómoda, lograrás manejar tus clientes, llevar un registro y trazabiidad de fechas, documentos y pagos pendientes. ¡Pruébala!
            </p>
            <div className="inline-block p-4 bg-white rounded-lg">
              <img src="/f29.jpg" alt="banner/imágen" className="w-full h-auto"></img>
            </div>
          </div>
        </div>
      </body>
    </main>
    </div>
  );
}