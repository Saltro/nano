import HomeLayout from '@/layouts/HomeLayout';
import LocTable from '@/components/LocTable';
import DoubleSwiper from '@/components/DoubleSwiper';
import Detail from '@/components/Detail';
import React from 'react';
import style from './index.less';



export default function Details() {
  
  return (
    <HomeLayout>
      <div className={style.container}>
        <Detail/>
       <div className={style.gallery}>
          <div className={style.galleryTitle}>
            <h2>实景照片</h2>
            <DoubleSwiper/>
          </div>
        </div>
        <div>
          <div className={style.locsTable}>
            <h2>地址详情</h2>
          </div>  
          <LocTable/>
        </div>
      </div>
    </HomeLayout>
  );
}
