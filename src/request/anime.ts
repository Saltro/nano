import { request } from './instance';

const getAnimeDetail = (id: string) => {
  return request.get<IAnimeInfo>(`/anime/${id}`);
};

export default { getAnimeDetail };
