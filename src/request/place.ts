import { request } from './instance';

const getAnimePlaces = (id: string) => {
  return request.get<IPageInfo<IPlaceInfo>>(`/place?anime_id=${id}`);
};

const getPlaces = () => {
  return request.get<IPageInfo<IPlaceInfo>>('/place');
};

export default { getAnimePlaces, getPlaces };
