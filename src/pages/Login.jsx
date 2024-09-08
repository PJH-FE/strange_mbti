import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from '../components/AuthForm';
import { StTitle } from '../shared/CommonStyle';
import { USER_API } from '../api/api';

const initialState = {
  id: '',
  password: ''
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await USER_API.post('/login', formData);

      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.response.data.message, {
        theme: 'colored'
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
