import { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const token = sessionStorage.getItem('accessToken');

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = (token) => {
    sessionStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
