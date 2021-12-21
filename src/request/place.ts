import { request } from './instance';

const getAnimePlaces = (id: string) => {
  return request.get<IPageInfo<IPlaceInfo>>(`/place?anime_id=${id}`);
};

const getPlace = (id: string | undefined) => {
  return request.get<IPlaceInfo>(`/place/${id}`);
};

export default { getAnimePlaces, getPlace };
