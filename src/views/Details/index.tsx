import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Request from '@/request';
import HomeLayout from '@/layouts/HomeLayout';
import Map from '@/components/Map';
import LocTable from './LocTable';
import DoubleSwiper from './DoubleSwiper';
import Detail, { IDetailProps } from './Detail';
import Title from './Title';
import style from './index.less';

export default function Details() {
  const { id } = useParams();
  const [detailProps, setDetailProps] = useState<IDetailProps | null>(null);
  const [pictures, setPictures] = useState<string[]>([]);
  const [places, setPlaces] = useState<IPlaceInfoBrief[]>([]);

  useEffect(() => {
    console.log('show details');
    id &&
      Request.getAnimeDetail(id).then((res) => {
        const { data } = res;
        setDetailProps({
          title: data.title,
          titleCN: data.title_cn,
          image: data.cover,
          description: data.description,
          director: data.director.slice(0, 3).map((director) => director.name),
          actors: data.actor.slice(0, 3).map((actor) => actor.name),
          categories: data.tags.slice(0, 4).map((tag) => tag.name),
          website: data.website || '',
          country: data.country,
          date: data.air_date,
          alias: data.alias,
          storyboard: data.storyboard.slice(0, 3).map((storyboard) => storyboard.name),
          script: data.script.slice(0, 3).map((script) => script.name),
          music: data.music.slice(0, 3).map((music) => music.name),
          producer: data.producer.slice(0, 3).map((producer) => producer.name),
          origin: data.original.slice(0, 3).map((original) => original.name),
        });
        data.photos.length !== 0 && setPictures(data.photos.map((photo) => photo.image));
      });

    id &&
      Request.getAnimePlaces(id).then((res) => {
        const { data } = res;
        data.count !== 0 &&
          setPlaces(
            data.results.map((place) => {
              console.log(place);
              return {
                id: place.id,
                name: place.name,
                address: place.address,
                longitude: place.longitude,
                latitude: place.latitude,
              };
            }),
          );
      });
  }, []);

  return (
    <HomeLayout>
      <div className={style.container}>
        {detailProps && <Detail {...detailProps} />}
        <div className={style.gallery}>
          <Title text="实景照片" />
          <DoubleSwiper pictures={pictures} />
        </div>
        <div className={style.map}>
          <Title text="朝圣地图" />
          <Map places={places} />
        </div>
        <div className={style.locations}>
          <Title text="地址详情" />
          <LocTable places={places} />
        </div>
      </div>
    </HomeLayout>
  );
}
