import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const SERVER_API = 'https://moneyfulpublicpolicy.co.kr';

const initialState = {
  id: '',
  password: ''
};
import Form from '../components/AuthForm';
import { StTitle } from '../shared/CommonStyle';

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(SERVER_API + '/login', formData);

      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        theme: 'colored',
        transition: Bounce
      });
    }
  };

  return (
    <>
      <StTitle>로그인</StTitle>
      <Form handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </>
  );
};
export default Login;
