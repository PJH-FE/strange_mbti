import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import useUserStore from '../zustand/userStore';
import { USER_API } from '../api/api';
import { toast } from 'react-toastify';

const Layout = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { setData } = useUserStore();

  useEffect(() => {
    if (isAuthenticated) {
      const token = sessionStorage.getItem('accessToken');
      const getData = async () => {
        await USER_API.get('/user', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
          .then((data) => {
            setData(data.data);
          })
          .catch((error) => {
            toast.error(error.response.data.message);
            logout();
            return;
          });
      };
      getData();
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
