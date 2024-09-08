import { Mutation, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RESULT_API } from '../api/api';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const List = () => {
  const { userData } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // MBTI [TOP 3]
  const fetchRank = async () => {
    const response = await RESULT_API.get('/rank');
    return response.data;
  };

  const { data: rank } = useQuery({
    queryKey: ['rank'],
    queryFn: fetchRank
  });

  const bestMBTI = rank
    ?.filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

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

  if (isPending) {
    return <div>목록을 불러오는 중입니다.</div>;
  }

  if (isError) {
    return <div>에러가.. 났네요..?</div>;
  }

  return (
    <>
      {/* MBTI TOP 3 */}
      {bestMBTI?.map((rank, idx) => {
        return (
          <div key={rank.score + rank.id}>
            #{idx + 1} / {rank.id} / {rank.score}명
          </div>
        );
      })}

      {/* 결과 목록 */}
      {results?.map((result) => {
        return (
          (result.visibility || userData?.id === result.userID) && (
            <div key={result.date}>
              {result.result}
              {result.date}
              {result.userNickname}

              {userData?.id === result.userID && (
                <>
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
                </>
              )}
            </div>
          )
        );
      })}
    </>
  );
};
export default List;
