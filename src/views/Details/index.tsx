import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Request from '@/request';
import HomeLayout from '@/layouts/HomeLayout';
import Map from '@/components/Map';
import LocTable from './LocTable';
import DoubleSwiper from './DoubleSwiper';
import Detail from './Detail';
import style from './index.less';

interface tag {
  id: string;
  name: string;
}
interface photo {
  id: string;
  name: string;
  image: string;
}
interface placeRes {
  id: number;
  name: string;
  address: string;
  longitude: number;
  latitude: number;
}

interface ITitleProps {
  text: string;
}

const Title: React.FC<ITitleProps> = (props) => {
  return (
    <div className={style.title}>
      <span>{props.text}</span>
    </div>
  );
};

export default function Details() {
  const { id } = useParams();
  const [detailProps, setDetailProps] = useState({
    title: '',
    titleCN: '',
    image: '',
    description: '',
    director: [''],
    origin: [''],
    storyboard: [''],
    script: [''],
    music: [''],
    producer: [''],
    actors: [''],
    categories: [''],
    website: '',
    country: '',
    date: '',
    alias: [''],
  });
  const [pictures, setPictures] = useState(['']);
  const [places, setPlaces] = useState([
    {
      id: 0,
      name: '',
      address: '',
      longtitude: 0,
      latitude: 0,
    },
  ]);
  useEffect(() => {
    console.log('show details');
    Request.getAnimeDetail(id).then((res) => {
      setDetailProps({
        title: res.title,
        titleCN: res.title_cn,
        image: res.cover,
        description: res.description,
        director: getName(res.director, 4),
        actors: getName(res.actor, 4),
        categories: getName(res.tags, 5),
        website: res.website || '',
        country: res.country,
        date: res.air_date,
        alias: res.alias,
        storyboard: getName(res.storyboard, 4),
        script: getName(res.script, 4),
        music: getName(res.music, 4),
        producer: getName(res.producer, 4),
        origin: getName(res.original, 4),
      });
      if (res.photos.length === 0) {
        return;
      }
      setPictures(res.photos.map((p: photo) => p.image));
    });
    Request.getPlaces(id).then((res) => {
      if (res.count === 0) {
        return;
      }
      setPlaces(
        res.results.map((r: placeRes) => {
          const { id, name, address, longitude, latitude } = r;
          console.log(r);
          return {
            id: id,
            name: name,
            address: address,
            longtitude: longitude,
            latitude: latitude,
          };
        }),
      );
    });
  }, []);

  return (
    <HomeLayout>
      <div className={style.container}>
        <Detail {...detailProps} />
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

function getName(arr: tag[], max: number) {
  let new_arr = arr;
  if (arr.length === 0) {
    return [''];
  } else if (arr.length > max) {
    new_arr = arr.slice(0, max);
  }
  return new_arr.map((tag: tag) => tag.name);
}
