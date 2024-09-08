import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation().state;
  const userNickname = location.userNickname;
  const result = location.result;

  return (
    <div>
      {userNickname}님의 테스트 결과는? {result} 입니다.
    </div>
  );
};
export default Result;
