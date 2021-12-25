import React, { useEffect, useState } from 'react';
import Request from '@/request';
import WorkTable from '@/components/WorkTable';
import LocTable from '@/components/LocTable';
import style from './index.less';

const Collections: React.FC = () => {
  const [animeList, setAnimeList] = useState<IAnimeInfoBrief[]>([]);
  const [placeList, setPlaceList] = useState<{ id: number; name: string; city: string; address: string }[]>([]);

  useEffect(() => {
    Request.getUserAnimeCollection().then((res) => {
      const { data } = res;
      console.log(data.results);
      setAnimeList(data.results.map((item) => item.anime));
    });

    Request.getUserPlaceCollection().then((res) => {
      const { data } = res;
      console.log(data);
      setPlaceList(data.results.map((item) => item.place));
    });
  }, []);

  return (
    <div>
      <p id={style.title}>我的收藏</p>
      <p className={style.subtitle}>收藏的作品</p>
      <div className={style.table}>
        <WorkTable workItems={animeList} />
      </div>
      <p className={style.subtitle}>收藏的地点</p>
      <div className={style.table}>
        <LocTable places={placeList} />
      </div>
    </div>
  );
};

export default Collections;
