import React from 'react';
import Request from '@/request';
import style from './index.less';

function Collections() {
  Request.getUserAnimeCollection().then((res) => {
    const { data } = res;
    console.log(data);
  });

  Request.getUserPlaceCollection().then((res) => {
    const { data } = res;
    console.log(data);
  });

  return (
    <div>
      <p id={style.title}>我的收藏</p>
      <p className={style.subtitle}>收藏的作品</p>
      <p className={style.subtitle}>收藏的地点</p>
    </div>
  );
}

export default Collections;
