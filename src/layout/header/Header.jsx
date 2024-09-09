import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { StHeader, StNav } from './headerStyle';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <StHeader>
        <Link to="/" className="block w-[80px]">
          <img src={logo} alt="로고" />
        </Link>

        <StNav>
          {isAuthenticated ? (
            <>
              <a
                href="#none"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}>
                LogOut
              </a>
              <Link to="/mypage">MyPage</Link>
            </>
          ) : (
            <>
              <Link to="/login">LogIn</Link>
              <Link to="/join">Join</Link>
            </>
          )}
        </StNav>
      </StHeader>

      <div className="h-[100px]"></div>
    </>
  );
};
export default Header;
