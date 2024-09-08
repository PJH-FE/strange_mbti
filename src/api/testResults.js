import { RESULT_API } from './api';

export const createResult = async (result) => {
  await RESULT_API.post('/results', result);
};

export const updateRank = async (result) => {
  const mbti = result.result;

  // 현재 랭크 값을 가져옵니다.
  const currentRanks = await RESULT_API.get('/rank');
  const currentRank = currentRanks.data;

  // 기존 값에 1을 더합니다.
  const newValue = (currentRank[mbti] || 0) + 1;

  await RESULT_API.patch(`/rank/${mbti}`, {
    score: newValue
  });
};
