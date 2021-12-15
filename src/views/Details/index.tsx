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

  return (
    <HomeLayout>
      <div className={style.container}>
        <Detail />
        <div className={style.gallery}>
          <Title text="实景照片" />
          <DoubleSwiper />
        </div>
        <div className={style.map}>
          <Title text="朝圣地图" />
          <Map />
        </div>
        <div className={style.locations}>
          <Title text="地址详情" />
          <LocTable />
        </div>
      </div>
    </HomeLayout>
  );
}
