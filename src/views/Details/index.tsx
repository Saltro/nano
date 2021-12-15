import HomeLayout from '@/layouts/HomeLayout';
import LocTable from '@/components/LocTable';
import Map from '@/components/Map';
import DoubleSwiper from '@/components/DoubleSwiper';
import Detail from '@/components/Detail';
import Title from '@/components/Title';
import React from 'react';
import style from './index.less';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  console.log(id);

  const detailProps = {
    title: '秒速5センチメートル',
    titleCN: '秒速5厘米',
    image: 'https://github.com/Saltro/nano/blob/master/src/assets/images/detailCover.jpg?raw=true',
    description:
      '第一话《樱花抄》主要场景为东京，从东京出发一路北上到达栃木岩舟的各个车站。 第二话《宇航员》场景集中在鹿儿岛县种子岛的中种子町。 第三话《秒速5厘米》场景再次回到东京，与第一话有诸多呼应之处。',
    director: '新海诚',
    screenwriter: '新海诚',
    actors: ['水桥研二', '近藤好美'],
    categories: ['剧情', '爱情', '动画'],
    website: 'www.cwfilms.jp/5cm',
    country: '日本',
    date: new Date(),
    imdb: '12345',
    alias: ['秒速五厘米', '秒速五公分'],
  };

  const pictures: [string, string][] = [
    [
      'https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjC6ATJqsAAHQLHYElVU487.jpg',
      'https://media.nano.nagico.cn/group1/M00/00/6D/CgAABGGwjH2AWSV4AADIjj6dIeo387.jpg',
    ],
    [
      'https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjHqAIX-YAAFQpwDZEAg957.JPG',
      'https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjHyAH3Q7AAFWTJmXGcU359.JPG',
    ],
    [
      'https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjHmANL_VAADBaxkJapQ727.JPG',
      'https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjHuAPkHZAAEKeaGsfe4229.JPG',
    ],
  ];

  const places: PlaceInfoBrief[] = [
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 2,
      name: 'some place',
      address: 'somewhere',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
    {
      id: 3,
      name: 'some place',
      address: 'somewhere',
      latitude: 1.1123,
      longtitude: 30.12345,
    },
  ];

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
