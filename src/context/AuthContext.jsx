import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { USER_API } from '../api/api';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

const token = sessionStorage.getItem('accessToken');

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [userData, setUserData] = useState();

  const login = async (token) => {
    sessionStorage.setItem('accessToken', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const getUserData = async () => {
      if (token) {
        const { data } = await USER_API.get('/user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }).catch((error) => {
          toast.error(error.response.result.split(':')[1]);
          logout();
          return;
        });

        setUserData(data);
      }
    };
    getUserData();
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated, login, logout, userData }}>{children}</AuthContext.Provider>;
};
