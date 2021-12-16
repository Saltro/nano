import React from 'react';
import cardStyle from '../assets/card.less';
import style from './index.less';

const DetailSidebar: React.FC = () => {
  return (
    <div id={style.container} className={cardStyle.card}>
      <div id={style.websiteContainer}>
        <span className={cardStyle.title}>作品官网</span>
        <span className={cardStyle.arrow}>→</span>
        <div className={style.website}>网站</div>
      </div>
      <div id={style.navContainer}>
        <span className={cardStyle.title}>目录导航</span>
        <span className={cardStyle.arrow}>→</span>
        <div className={style.nav}>
          <a href="#实景照片">实景照片</a>
          <a href="#朝圣照片">朝圣地图</a>
          <a href="#地址详情">地址详情</a>
        </div>
      </div>
    </div>
  );
};

export default DetailSidebar;
