import { useContext, useState } from 'react';
import { questions } from '../data/questions';
import mbtiCalculator from '../utiils/mbtiCalculator';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';
import { createResult, updateRank } from '../api/testResults';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const TestForm = () => {
  const { userData } = useContext(AuthContext);
  const [testResults, setTestResults] = useState({});
  const navigate = useNavigate();

  const handleClickButton = (id, boolean) => {
    setTestResults({ ...testResults, [id]: boolean });
    if (id === 0 && boolean === false) {
      Swal.fire({
        title: '당신은 이 테스트에 응할 자격이 없습니다.',
        text: '가서 글 하나 쓰고 오세요',
        icon: 'error'
      }).then(() => {
        window.open('https://news-feed-da6.vercel.app/', '_blank', 'noopener, noreferrer');
      });
    }

    if (id === 17 && boolean === true) {
      Swal.fire({
        title: 'ㅋㅋ 그럴 일 없음',
        text: 'ㅋㅋ ㅋㅋ ㅋㅋ ㅋㅋ ㅋㅋ',
        icon: 'question'
      });
    }
  };

  const handleSubmitResults = async () => {
    if (Object.values(testResults).length != 20) {
      toast.error('모든 문항에 답해주세요.', { theme: 'colored' });
      return;
    }

    const result = mbtiCalculator(testResults);
    const resultData = {
      userID: userData.id,
      userNickname: userData.nickname,
      result,
      date: new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      visibility: true
    };

    await createResult(resultData);
    await updateRank(resultData);
    navigate('/result', { state: resultData });
  };

  return (
    <>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <div>{question.question}</div>
            <button
              className={testResults[question.id] ? 'on' : undefined}
              onClick={() => {
                handleClickButton(question.id, true);
              }}>
              네
            </button>
            <button
              className={!testResults[question.id] ? 'on' : undefined}
              onClick={() => {
                handleClickButton(question.id, false);
              }}>
              아니오
            </button>
          </div>
        );
      })}

      <button type="submit" onClick={handleSubmitResults}>
        제출하기
      </button>
    </>
  );
};
export default TestForm;
