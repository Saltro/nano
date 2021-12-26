import React, { useEffect, useState } from 'react';
import Request from '@/request';
import WorkTable from '@/components/WorkTable';
import LocTable from '@/components/LocTable';
import Loading from '@/components/Loading';
import style from './index.less';

const Collections: React.FC = () => {
  const [animeList, setAnimeList] = useState<IAnimeInfoBrief[]>([]);
  const [placeList, setPlaceList] = useState<{ id: number; name: string; city: string; address: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all<[ReturnType<typeof Request.getUserAnimeCollection>, ReturnType<typeof Request.getUserPlaceCollection>]>(
      [Request.getUserAnimeCollection(), Request.getUserPlaceCollection()],
    )
      .then(([anime, place]) => {
        setAnimeList(anime.data.results.map((item) => item.anime));
        setPlaceList(place.data.results.map((item) => item.place));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Loading isLoading={isLoading}>
      <p id={style.title}>我的收藏</p>
      <p className={style.subtitle}>收藏的作品</p>
      <div className={style.table}>
        <WorkTable workItems={animeList} />
      </div>
      <p className={style.subtitle}>收藏的地点</p>
      <div className={style.table}>
        <LocTable places={placeList} />
      </div>
    </Loading>
  );
};

export default Collections;
