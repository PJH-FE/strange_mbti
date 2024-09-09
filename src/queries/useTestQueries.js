import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RESULT_API } from '../api/api';

export const queryKeys = {
  testController: {
    rank: () => ['rank'],
    results: () => ['results']
  }
};

const fetchRank = async () => {
  const response = await RESULT_API.get('/rank');
  return response.data;
};

export const useFetchRank = () => {
  return useQuery({
    queryKey: queryKeys.testController.rank(),
    queryFn: fetchRank
  });
};

// 결과 전부 출력
const fetchResults = async () => {
  const response = await RESULT_API.get('/results');
  return response.data;
};

export const useFetchResults = () => {
  return useQuery({
    queryKey: queryKeys.testController.results(),
    queryFn: fetchResults
  });
};

// 공개/비공개 전환
export const useChangeVisible = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await RESULT_API.get('/results');
      const nowVisible = response.data.filter((result) => {
        return result.id === id;
      });

      await RESULT_API.patch(`/results/${id}`, {
        visibility: !nowVisible[0].visibility
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.testController.results);
    }
  });
};

// 결과 삭제
export const useDeleteResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => RESULT_API.delete(`/results/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.testController.results);
    }
  });
};
