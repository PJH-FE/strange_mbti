import { useChangeVisible, useDeleteResult, useFetchRank, useFetchResults } from '../../queries/useTestQueries';
import { StResultBottom, StResultBox, StResultTop } from '../../shared/CommonStyle';
import { mbtiDescriptions } from '../../data/mbtiPoints';
import { StResultsList } from './listStyle';
import useUserStore from '../../zustand/userStore';

const List = () => {
  const { userData } = useUserStore();

  const { data: rank } = useFetchRank();

  const bestMBTI = rank
    ?.filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  // 결과 전부 출력
  const { data: results, isPending, isError } = useFetchResults();

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

  if (isPending) {
    return <div>목록을 불러오는 중입니다.</div>;
  }

  if (isError) {
    return <div>에러가.. 났네요..?</div>;
  }

  return (
    <StResultsList className="py-[40px]">
      {/* MBTI TOP 3 */}
      <div className="text-[36px] font-star mb-[24px]">MBTI TOP 3</div>
      <div className="flex flex-col gap-[8px] w-full mb-[40px] pb-[40px] border-b-[1px] border-solid border-white">
        {bestMBTI?.map((rank, idx) => {
          return (
            <div key={rank.score + rank.id} className="flex gap-[16px] text-[24px]">
              <span className="block w-[24px]">#{idx + 1}</span>
              <div>
                <span className="font-star">{rank.id}</span> / {rank.score}명
              </div>
            </div>
          );
        })}
      </div>

      {/* 결과 목록 */}
      <div className="text-[36px] font-star mb-[24px]">MBTI Results</div>
      <div className="flex flex-col gap-[24px] w-full">
        {results?.map((result) => {
          return (
            (result.visibility || userData?.id === result.userID) && (
              <StResultBox key={crypto.randomUUID()}>
                <StResultTop>
                  <span className="mbti">{result.result}</span>
                  <span className="ml-auto">{result.date}</span>/<span>{result.userNickname}</span>
                </StResultTop>

                <StResultBottom>
                  <div>{mbtiDescriptions[result.result]}</div>
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
                </StResultBottom>
              </StResultBox>
            )
          );
        })}
      </div>
    </StResultsList>
  );
};
export default List;
