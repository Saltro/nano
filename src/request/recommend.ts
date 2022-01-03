import { request } from '@/request/instance';

const getRecommendPage = (
  page?: number,
  pageSize?: number,
  type?: RecommendTypeKey,
  ordering?: RecommendOrderingKey,
  ascending = true,
  // eslint-disable-next-line max-params
) => {
  return request.get<IPageInfo<IRecommendInfo>>('/recommendation/', {
    params: {
      page,
      page_size: pageSize,
      ordering: ascending ? ordering : `-${ordering}`,
      type: type === 'CAROUSEL' ? 1 : 2,
    },
  });
};

export default { getRecommendPage };
