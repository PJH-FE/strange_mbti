import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRouter = ({ page }) => {
  const user = sessionStorage.getItem('isLogin');
  const navigate = useNavigate();

  if (user) {
    return page;
  } else {
    Swal.fire({
      text: '로그인이 필요한 서비스입니다.',
      icon: 'error',
      confirmButtonText: '확인'
    }).then(() => {
      // then을 이용해 alert 확인 버튼 클릭 후 로그인 페이지 이동하도록 구현
      navigate('/login');
    });
  }

  return null;
};
export default PrivateRouter;
