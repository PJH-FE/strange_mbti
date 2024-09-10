import { useState } from 'react';
import { questions } from '../data/questions';
import mbtiCalculator from '../utiils/mbtiCalculator';
import { toast } from 'react-toastify';
import { createResult, updateRank } from '../api/testResults';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { StQuestionLine, StSubmitButton, StTestButton } from './testFormStyle';
import useUserStore from '../zustand/userStore';

const TestForm = () => {
  const { userData } = useUserStore();
  const [testResults, setTestResults] = useState({});
  const navigate = useNavigate();
  console.log(userData);

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
      userID: userData?.id,
      userNickname: userData?.nickname,
      result,
      date: new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      visibility: true
    };

    await updateRank(resultData);
    await createResult(resultData);
    navigate('/result', { state: resultData });
  };

  return (
    <div className="flex flex-col">
      {questions.map((question) => {
        return (
          <StQuestionLine key={question.id}>
            <div className="text-[22px] pr-[16px]">{question.question}</div>
            <div className="flex gap-[12px] shrink-0">
              <StTestButton
                className={testResults[question.id] ? 'on' : undefined}
                onClick={() => {
                  handleClickButton(question.id, true);
                }}>
                네
              </StTestButton>
              <StTestButton
                className={!testResults[question.id] && testResults[question.id] !== undefined ? 'on' : undefined}
                onClick={() => {
                  handleClickButton(question.id, false);
                }}>
                아니오
              </StTestButton>
            </div>
          </StQuestionLine>
        );
      })}

      <StSubmitButton type="submit" onClick={handleSubmitResults}>
        제출하기
      </StSubmitButton>
    </div>
  );
};
export default TestForm;
