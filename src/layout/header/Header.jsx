import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header>
      <div>로고</div>

      {isAuthenticated ? (
        <>
          <a href="#none" onClick={handleLogout}>
            로그아웃
          </a>
          <Link to="/mypage">마이페이지</Link>
        </>
      ) : (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/join">회원 가입</Link>
        </>
      )}
    </header>
  );
};
export default Header;
