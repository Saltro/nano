import { request } from './instance';

const getAnimePlaces = (id: string) => {
  return request.get<IPageInfo<IPlaceInfo>>(`/place?anime_id=${id}`);
};

const getPlacePage = (page?: number, pageSize?: number) => {
  return request.get<IPageInfo<IPlaceInfo>>(`/place/`, {
    params: {
      page,
      page_size: pageSize,
    },
  });
};

const getPlace = (id: string | undefined) => {
  return request.get<IPlaceInfo>(`/place/${id}`);
};

export default { getAnimePlaces, getPlacePage, getPlace };
