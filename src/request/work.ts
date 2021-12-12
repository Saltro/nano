import { request } from '@/request/instance';

interface IAnimeInfo {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    title_cn: string;
    cover_medium: string;
    is_collected: boolean;
  }[];
}

const getWorkList = async (typeId: number, page: number) => {
  let typeField = '';
  switch (typeId) {
    case 1:
      typeField = 'ordering=-id';
      break;
    case 2:
      typeField = 'ordering=-collection_num';
      break;
    default:
      typeField = 'ordering=-id';
      break;
  }

  const res = await request.get<IAnimeInfo>(`/anime/?page=${page}&${typeField}`).then((res) => {
    return res.data;
  });
  return res;
};

export default { getWorkList };
