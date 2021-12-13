import React from 'react';
import style from './index.less';

const RecommendSidebar: React.FC<{}> = () => {
  return (
    <div id={style.container}>
      <div className={style.hotSpot}>
        <span className={style.title}>热门路线推荐</span>
        <span className={style.arrow}>→</span>
        <div className={style.recommend}>
          <img className={style.firstRow} src="https://github.com/Saltro/nano/blob/master/src/assets/images/hotSpot1.jpg?raw=true"/>
          <div className={style.secondRow}>
            <img src="https://github.com/Saltro/nano/blob/master/src/assets/images/hotSpot2.jpg?raw=true"/>
            <img src="https://github.com/Saltro/nano/blob/master/src/assets/images/hotSpot3.jpg?raw=true"/>
          </div>
        </div>
      </div>
      <div className={style.cityRec}>
        <span className={style.title}>城市推荐</span>
        <span className={style.arrow}>→</span>
        <div className={style.cityImage}> 
          <img className={style.city} src="https://github.com/Saltro/nano/blob/master/src/assets/images/city1.jpg?raw=true"/>
          <img className={style.city} src="https://github.com/Saltro/nano/blob/master/src/assets/images/city2.jpg?raw=true"/>
          <img className={style.city} src="https://github.com/Saltro/nano/blob/master/src/assets/images/city3.jpg?raw=true"/>
        </div>
      </div>
      <div className={style.strategy}>
        <span className={style.title}>圣地巡礼攻略</span>
        <span className={style.arrow}>→</span>
        <div className={style.imgs}>
          <img className={style.img} src="https://github.com/Saltro/nano/blob/master/src/assets/images/%E8%B7%AF%E7%BA%BF.png?raw=true"/>
          <img className={style.img} src="https://github.com/Saltro/nano/blob/master/src/assets/images/%E4%BA%A4%E9%80%9A.png?raw=true"/>
          <img className={style.img} src="https://github.com/Saltro/nano/blob/master/src/assets/images/%E5%AD%A3%E8%8A%82.png?raw=true"/>
          <img className={style.img} src="https://github.com/Saltro/nano/blob/master/src/assets/images/%E6%8A%80%E5%B7%A7.png?raw=true"/>
        </div>
      </div>
    </div>
  );
};

export default RecommendSidebar;
