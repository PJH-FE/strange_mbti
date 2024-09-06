import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const SERVER_API = 'https://moneyfulpublicpolicy.co.kr';

const initialState = {
  id: '',
  password: '',
  nickname: ''
};
import Form from '../components/AuthForm';
import { StTitle } from '../shared/CommonStyle';

const Join = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(SERVER_API + '/register', formData);

      const data = response.data;
      if (data.success) {
        toast.success('성공적으로 가입되었습니다!', {
          position: 'top-right',
          autoClose: 3000,
          closeOnClick: true,
          theme: 'light',
          transition: Bounce
        });
        navigate('/login');
      }
    } catch (error) {
      console.error('Join error:', error);
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
      <StTitle>회원가입</StTitle>
      <Form handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </>
  );
};
export default Join;
