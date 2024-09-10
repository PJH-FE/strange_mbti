import { USER_API } from '../../api/api';
import { useEffect, useState } from 'react';
import { useChangeVisible, useDeleteResult, useFetchResults } from '../../queries/useTestQueries';
import { StResultBottom, StResultBox, StResultTop, StTitle } from '../../shared/CommonStyle';
import { mbtiDescriptions } from '../../data/mbtiPoints';
import { StNickname, StNicknameButton, StNicknameInput } from './mypageStyle';
import edit from '../../assets/edit.png';
import useUserStore from '../../zustand/userStore';

const MyPage = () => {
  const { userData } = useUserStore();

  const [userNickname, setUserNickname] = useState('');
  const [isModify, setIsModify] = useState(false);

  useEffect(() => {
    setUserNickname(userData?.nickname);
  }, [userData]);

  // 닉네임 변경
  const handleClickNickname = async (boolean) => {
    if (!boolean) return setIsModify(true);

    await USER_API.patch(
      '/profile',
      {
        nickname: userNickname
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }
      }
    );

    setIsModify(false);
  };

  // 결과 전부 불러오기
  const { data: results } = useFetchResults();

  // 내 검사 결과 목록
  const myResult = results?.filter((result) => result?.userID === userData?.id);
  console.log(myResult);
  // 공개/비공개 전환
  const changeVisible = useChangeVisible();
  const modifyResult = (id) => {
    changeVisible.mutate(id);
  };

  // 결과 삭제
  const delResult = useDeleteResult();
  const deleteResult = (id) => {
    delResult.mutate(id);
  };

  return (
    <div className="py-[24px] max-w-[1280px] mx-auto">
      <StTitle className="mb-[40px]">MyPage</StTitle>

      <div className="flex flex-col gap-[40px] md:flex-row md:justify-between">
        {/* 유저 정보 */}
        <div className="w-[100%]">
          <div className="flex items-center gap-[16px] text-[24px] mb-[16px]">
            내 MBTI는? <span className="font-star">{myResult[0]?.result}</span>
          </div>

          <StNickname>
            <StNicknameInput
              type="text"
              value={userNickname || ''}
              onChange={(e) => {
                setUserNickname(e.target.value);
              }}
              readOnly={isModify ? false : true}
            />

            <StNicknameButton
              onClick={() => {
                handleClickNickname(isModify);
              }}>
              {isModify ? '완료' : <img src={edit} />}
            </StNicknameButton>
          </StNickname>
        </div>

        {/* 검사 내역 */}
        <div className="flex flex-col gap-[24px] w-[100%] flex-shrink-0 md:w-[50%]">
          {myResult?.map((result) => {
            return (
              <StResultBox key={crypto.randomUUID()}>
                <StResultTop>
                  <span className="mbti">{result.result}</span>
                  <span>{result.date}</span>
                </StResultTop>

                <StResultBottom>
                  <div>{mbtiDescriptions[result.result]}</div>

                  <button
                    onClick={() => {
                      modifyResult(result.id);
                    }}>
                    {result.visibility ? '비공개로 전환' : '공개로 전환'}
                  </button>
                  <button
                    onClick={() => {
                      deleteResult(result.id);
                    }}>
                    삭제
                  </button>
                </StResultBottom>
              </StResultBox>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MyPage;
