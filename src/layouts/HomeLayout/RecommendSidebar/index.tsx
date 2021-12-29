import React from 'react';
import Image from './Image';
import style from './index.less';

const RecommendSidebar: React.FC<{}> = () => {
  return (
    <div id={style.container}>
      <div className={style.hotSpot}>
        <span className={style.title}>热门路线推荐</span>
        <span className={style.arrow}>→</span>
        <div className={style.recommend}>
          <Image title="寺庙、神社与祭典" src="https://qiniu-picgo.saltroping.com/hotSpot1.jpg" />
          <Image title="秋叶原" src="https://qiniu-picgo.saltroping.com/hotSpot2.jpg" />
          <Image title="走进新海诚" src="https://qiniu-picgo.saltroping.com/hotSpot3.jpg" />
        </div>
      </div>
      <div className={style.cityRec}>
        <span className={style.title}>城市推荐</span>
        <span className={style.arrow}>→</span>
        <div className={style.cityImages}>
          <Image title="东京" src="https://qiniu-picgo.saltroping.com/city1.jpg" />
          <Image title="京都" src="https://qiniu-picgo.saltroping.com/city2.jpg" />
          <Image title="镰仓" src="https://qiniu-picgo.saltroping.com/city3.jpg" />
        </div>
      </div>
      <div className={style.strategy}>
        <span className={style.title}>圣地巡礼攻略</span>
        <span className={style.arrow}>→</span>
        <div className={style.images}>
          <Image src="https://qiniu-picgo.saltroping.com/路线.png" />
          <Image src="https://qiniu-picgo.saltroping.com/交通.png" />
          <Image src="https://qiniu-picgo.saltroping.com/季节.png" />
          <Image src="https://qiniu-picgo.saltroping.com/技巧.png" />
        </div>
      </div>
    </div>
  );
};

export default RecommendSidebar;
