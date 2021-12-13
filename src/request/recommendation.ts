import { request } from '@/request/instance';

interface IRecommendationInfo {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    title: string;
    image: string;
    description: string;
    score: number;
    create_time: string;
    update_time: string;
    anime: number;
    tags: {
      id: number;
      name: string;
    }[];
  }[];
}

const getRecommendationList = async (page: number) => {
  const res = await request.get<IRecommendationInfo>(`/recommendation/?page=${page}&ordering=-score`).then((res) => {
    return res.data;
  });
  return res;
};

export default { getRecommendationList };
