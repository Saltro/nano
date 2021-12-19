import { request } from './instance';

const getAnimePage = (
  page?: number,
  pageSize?: number,
  search?: string,
  ordering?: AnimeOrderingKey,
  ascending = true,
  // eslint-disable-next-line max-params
) => {
  return request.get<IPageInfo<IAnimeInfo>>('/anime', {
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

export default { getAnimeDetail, getAnimePage };
