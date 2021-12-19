import { request } from './instance';

interface IPlacePageInfo {
  count: number;
  next: string;
  previous: string;
  results: IPlaceInfo[];
}

const getAnimePlaces = (id: string) => {
  return request.get<IPlacePageInfo>(`/place?anime_id=${id}`);
};

export default { getAnimePlaces };
