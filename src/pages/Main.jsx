import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Main = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return (
    <div className="flex flex-wrap items-center justify-center  gap-[80px] overflow-hidden">
      <Link
        to="/test"
        className="relative flex items-center justify-center w-[300px] h-[300px] border-solid border-white border-[2px] rounded-[100%] text-[24px] font-bold">
        MBTI Test
        <span className="absolute top-0 left-0 bottom-0 right-0 animate-circle01 border-solid border-white border-[1px] rounded-[100%]"></span>
        <span className="absolute top-0 left-0 bottom-0 right-0 animate-circle02 border-solid border-white border-[1px] rounded-[100%]"></span>
        <span className="absolute top-0 left-0 bottom-0 right-0 animate-circle03 border-solid border-white border-[1px] rounded-[100%]"></span>
      </Link>
      <Link
        to="/list"
        className="relative flex items-center justify-center w-[300px] h-[300px] border-solid border-white border-[2px] rounded-[100%] text-[24px] font-bold">
        Results List
        <span className="absolute top-0 left-0 bottom-0 right-0 animate-circle01 border-solid border-white border-[1px] rounded-[100%]"></span>
        <span className="absolute top-0 left-0 bottom-0 right-0 animate-circle02 border-solid border-white border-[1px] rounded-[100%]"></span>
        <span className="absolute top-0 left-0 bottom-0 right-0 animate-circle03 border-solid border-white border-[1px] rounded-[100%]"></span>
      </Link>
    </div>
  );
};
export default Main;
