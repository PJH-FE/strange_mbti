import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RESULT_API, USER_API } from '../api/api';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyPage = () => {
  const queryClient = useQueryClient();
  const { userData } = useContext(AuthContext);

  const [userNickname, setUserNickname] = useState('');
  const [isModify, setIsModify] = useState(false);

  useEffect(() => {
    setUserNickname(userData?.nickname);
  }, [userData]);

  // 닉네임 변경
  const handleChangeNickname = async () => {
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

  // 결과 전부 출력
  const fetchResults = async () => {
    const response = await RESULT_API.get('/results');
    return response.data;
  };

  const {
    data: results,
    isPending,
    isError
  } = useQuery({
    queryKey: ['results'],
    queryFn: fetchResults
  });

  // 내 검사 결과 목록
  const myResult = results?.filter((result) => result?.userID === userData?.id);

  // 공개/비공개 전환
  const handleChangeVisible = async (id) => {
    const response = await RESULT_API.get('/results');
    const nowVisible = response.data.filter((result) => {
      return result.id === id;
    });

    await RESULT_API.patch(`/results/${id}`, {
      visibility: !nowVisible[0].visibility
    });
  };

  const { mutate: modifyResult } = useMutation({
    mutationFn: handleChangeVisible,
    onSuccess: () => {
      queryClient.invalidateQueries(['results']);
    }
  });

  // 결과 삭제
  const handleDeleteResult = async (id) => {
    await RESULT_API.delete(`/results/${id}`);
  };

  const { mutate: deleteResult } = useMutation({
    mutationFn: handleDeleteResult,
    onSuccess: () => {
      queryClient.invalidateQueries(['results']);
    }
  });

  return (
    <>
      <div>MyPage</div>

      {isModify ? (
        <>
          <input
            type="text"
            value={userNickname || ''}
            onChange={(e) => {
              setUserNickname(e.target.value);
            }}
          />

          <button
            onClick={() => {
              handleChangeNickname();
            }}>
            완료
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={userNickname || ''}
            onChange={(e) => {
              setUserNickname(e.target.value);
            }}
            readOnly
          />

          <button
            onClick={() => {
              setIsModify(true);
            }}>
            수정
          </button>
        </>
      )}

      {myResult?.map((result) => {
        return (
          <div key={result.date}>
            {result.result}
            {result.date}

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
          </div>
        );
      })}
    </>
  );
};
export default MyPage;
