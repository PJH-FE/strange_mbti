import { Link } from 'react-router-dom';

import github from '../../assets/github.svg';
import velog from '../../assets/velog.svg';
import upBtn from '../../assets/up.png';
import downBtn from '../../assets/down.png';
import { FixedBtn, StFooter } from './footerStyle';

const Footer = () => {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const handleGoToBottom = () => {
    window.scrollTo({
      top: document.getElementById('root').scrollHeight,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <FixedBtn>
        <img src={upBtn} alt="상단으로" onClick={() => handleGoToTop()} />
        <img src={downBtn} alt="하단으로" onClick={() => handleGoToBottom()} />
      </FixedBtn>
      <StFooter className="flex flex-col items-center justify-center h-[160px]">
        <div className="flex items-center justify-center gap-[16px]">
          <Link to="https://github.com/PJH-FE" target="_blank" className="h-[30px]">
            <img src={github} alt="깃허브" className="h-full" />
          </Link>
          <Link to="https://velog.io/@sjrmd781" target="_blank" className="h-[30px]">
            <img src={velog} alt="velog" className="h-full" />
          </Link>
        </div>

        <span className="flex items-center justify-center text-[14px] mt-[24px]">
          Designed by PJH / Icons by&nbsp;
          <Link to="https://icons8.kr/icons" target="_blank">
            ICONS 8
          </Link>
        </span>
      </StFooter>
    </>
  );
};
export default Footer;
