import { useClient } from 'next/client'; // Importa useClient desde next/client
import Login from "./components/login";

export default function Home() {
  useClient(); // Marca el componente como un componente del lado del cliente
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">F29</h1>
      <button className="absolute top-0 right-0 p-4 text-white bg-blue-500 rounded" onClick={() => setModalOpen(true)}>Login</button>
      <Login />
    </main>
  );
}