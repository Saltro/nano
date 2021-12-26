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

const checkPlaceCollection = (id: number | undefined) => {
  return request.get(`/place/${id}/collection/`);
};

const addPlaceCollection = (id: number | undefined) => {
  return request.post(`/place/${id}/collection/`);
};

const deletePlaceCollection = (id: number | undefined) => {
  return request.delete(`/place/${id}/collection/`);
};

export default {
  getAnimePlaces,
  getPlacePage,
  getPlace,
  checkPlaceCollection,
  addPlaceCollection,
  deletePlaceCollection,
};
