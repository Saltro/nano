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

const getWorkList = async (typeId: number, page: number, searchKey: string) => {
  let typeField = '';
  switch (typeId) {
    case -1: // 根据searchKey搜索
      typeField = `search=${searchKey}`;
      break;
    case 1: // 全部作品 id递增排序
      typeField = 'ordering=id';
      break;
    case 2: // 热门作品 收藏数量递减排序
      typeField = 'ordering=-collection_num';
      break;
    case 3: // 最新发布 时间递减排序
      typeField = 'ordering=-update_time';
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
