import { request } from './instance';

const getAnimePlaces = (id: string) => {
  return request.get<IPageInfo<IPlaceInfo>>(`/place?anime_id=${id}`);
};

const checkPlaceCollection = (id: number | undefined) => {
  return request.get(`/place/${id}/collection/`);
};

const addPlaceCollection = (id: number | undefined) => {
  return request.post(`/place/${id}/collection/`);
};

const deletePlaceCollection = (id: number | undefined) => {
  return request.delete(`/place/${id}/collection/`);
};

export default { getAnimePlaces, checkPlaceCollection, addPlaceCollection, deletePlaceCollection };
