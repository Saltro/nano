import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Request from '@/request';
import HomeLayout from '@/layouts/HomeLayout';
import Map from '@/components/Map';
import LocTable from '@/components/LocTable';
import Loading from '@/components/Loading';
import NoData from '@/components/NoData';
import DoubleSwiper from './DoubleSwiper';
import Detail, { IDetailProps } from './Detail';
import Title from './Title';
import style from './index.less';

export default function Details() {
  const { id } = useParams();
  const [detailProps, setDetailProps] = useState<IDetailProps | null>(null);
  const [pictures, setPictures] = useState<string[]>([]);
  const [places, setPlaces] = useState<(IPlaceInfoBrief & { city?: string })[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('show details');
    if (id) {
      Promise.all<[ReturnType<typeof Request.getAnimeDetail>, ReturnType<typeof Request.getAnimePlaces>]>([
        Request.getAnimeDetail(id),
        Request.getAnimePlaces(id),
      ])
        .then(([detail, places]) => {
          setDetailProps({
            id: id,
            title: detail.data.title,
            titleCN: detail.data.title_cn,
            image: detail.data.cover,
            description: detail.data.description,
            director: detail.data.director.slice(0, 3).map((director) => director.name),
            actors: detail.data.actor.slice(0, 3).map((actor) => actor.name),
            categories: detail.data.tags.slice(0, 4).map((tag) => tag.name),
            website: detail.data.website || '',
            country: detail.data.country,
            date: detail.data.air_date,
            alias: detail.data.alias,
            storyboard: detail.data.storyboard.slice(0, 3).map((storyboard) => storyboard.name),
            script: detail.data.script.slice(0, 3).map((script) => script.name),
            music: detail.data.music.slice(0, 3).map((music) => music.name),
            producer: detail.data.producer.slice(0, 3).map((producer) => producer.name),
            origin: detail.data.original.slice(0, 3).map((original) => original.name),
          });

          detail.data.photos.length !== 0 && setPictures(detail.data.photos.map((photo) => photo.image));

          places.data.count !== 0 &&
            setPlaces(
              places.data.results.map((place) => {
                console.log(place);
                return {
                  id: place.id,
                  name: place.name,
                  address: place.address,
                  longitude: place.longitude,
                  latitude: place.latitude,
                  photos: place.photos,
                };
              }),
            );
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  return (
    <HomeLayout>
      <Loading isLoading={isLoading}>
        <div className={style.container}>
          {detailProps && <Detail {...detailProps} />}
          <div className={style.gallery}>
            <Title text="实景照片" />
            <DoubleSwiper pictures={pictures} />
          </div>
          <div className={style.map}>
            <Title text="朝圣地图" />
            {places.length === 0 ? (
              <NoData
                img="https://github.com/Saltro/nano/blob/dev_details/src/assets/images/map.png?raw=true"
                text="暂无数据"
              />
            ) : (
              <Map places={places} styles={{ height: '40vh' }} zoom={10} />
            )}
          </div>
          <div className={style.locations}>
            <Title text="地址详情" />
            <LocTable places={places} />
          </div>
        </div>
      </Loading>
    </HomeLayout>
  );
}
