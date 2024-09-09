import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_API } from '../../api/api';
import { toast } from 'react-toastify';
import Form from '../../components/AuthForm';
import { StTitle } from '../../shared/CommonStyle';
import { StJoinArea } from './joinStyle';

const initialState = {
  id: '',
  password: '',
  nickname: ''
};

const Join = () => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await USER_API.post('/register', formData);

      const data = response.data;
      if (data.success) {
        toast.success('성공적으로 가입되었습니다!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Join error:', error);
      toast.error(error.response.data.message, {
        theme: 'colored'
      });
    }
  };

  return (
    <StJoinArea>
      <StTitle className="mb-[40px]">Join</StTitle>
      <Form handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </StJoinArea>
  );
};
export default Join;
