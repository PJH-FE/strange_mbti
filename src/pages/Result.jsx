import { Link, useLocation } from 'react-router-dom';
import { mbtiDescriptions, pointsImage } from '../data/mbtiPoints';
import useUserStore from '../zustand/userStore';

const Result = () => {
  const { userData } = useUserStore();
  const location = useLocation().state;
  const userNickname = userData?.nickname;
  const result = location.result;
  const ranDomImage = pointsImage[Math.floor(Math.random() * 10)];

  return (
    <div className="flex flex-col items-center justify-center gap-[60px] py-[40px] md:flex-row">
      <div className="w-[80%] md:w-[30%] flex-shrink-0">
        <img src={ranDomImage} alt="이미지" className="w-full" />
      </div>

      <div>
        <div className="flex flex-col gap-[16px]">
          <span className="text-[24px]">
            <strong>{userNickname}</strong> 님의 테스트 결과는?
          </span>
          <span className="text-[32px]">
            <strong>{result}</strong> 입니다.
          </span>
        </div>
        <div className="pt-[24px] mt-[24px] border-t-2 border-white text-[24px]">{mbtiDescriptions[result]}</div>

        <Link to="/list" className="block w-fit border-2 rounded-[5px] border-white py-[8px] px-[12px] mt-[24px]">
          모든 결과 구경가기
        </Link>
      </div>
    </div>
  );
};
export default Result;
