import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import Router from './shared/Router';

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
