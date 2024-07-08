import { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:33000/login', { email, password });
      if (res.status === 200) {
        setIsAuthenticated(true);
        setUser(res.data.user); // Puedes establecer los datos del usuario aquí si es necesario
        console.log('Login exitoso');
        router.push('/dashboard');
      }
    } catch (error) {
      console.log('Error en login:', error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    console.log('Logout exitoso');
    router.push('/login');
  };

  console.log('AuthProvider renderizado');

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
