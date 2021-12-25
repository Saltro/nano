import { request } from './instance';

const getAnimePlaces = (id: string) => {
  return request.get<IPageInfo<IPlaceInfo>>(`/place?anime_id=${id}`);
};

const addPlaceCollection = (id: string) => {
  return request.post(`place/${id}/collection/`);
};

export default { getAnimePlaces, addPlaceCollection };
