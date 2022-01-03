import { request } from './instance';

const getAnimePage = (
  page?: number,
  pageSize?: number,
  search?: string,
  ordering?: AnimeOrderingKey,
  ascending = true,
  // eslint-disable-next-line max-params
) => {
  return request.get<IPageInfo<IAnimeInfoBrief>>('/anime/', {
    params: {
      page,
      page_size: pageSize,
      ordering: ascending ? ordering : `-${ordering}`,
      search,
    },
  });
};

const getAnimeDetail = (id: string) => {
  return request.get<IAnimeInfo>(`/anime/${id}`);
};

const checkAnimeCollection = (id: string | undefined) => {
  return request.get(`/anime/${id}/collection/`);
};

const addAnimeCollection = (id: string | undefined) => {
  return request.post(`/anime/${id}/collection/`);
};

const deleteAnimeCollection = (id: string | undefined) => {
  return request.delete(`/anime/${id}/collection/`);
};

export default { getAnimeDetail, getAnimePage, addAnimeCollection, checkAnimeCollection, deleteAnimeCollection };
