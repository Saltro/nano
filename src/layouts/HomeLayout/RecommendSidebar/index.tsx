import React from 'react';
import { useImagesLoaded } from 'use-images-loaded';
import Skeleton from 'react-loading-skeleton';
import Image from './Image';
import style from './index.less';
import 'react-loading-skeleton/dist/skeleton.css';

const RecommendSidebar: React.FC<{}> = () => {
  const [refHotSpot, loadedHotSpot] = useImagesLoaded();
  const [refCityRec, loadedCityRec] = useImagesLoaded();
  const [refStrategy, loadedStrategy] = useImagesLoaded();

  return (
    <div id={style.container}>
      <div className={style.hotSpot} ref={refHotSpot}>
        <div className={style.header}>
          <span className={style.title}>热门路线推荐</span>
          <span className={style.arrow}>→</span>
        </div>
        {!loadedHotSpot && <Skeleton height="12.08vw" borderRadius="15px" />}
        <div className={style.recommend}>
          <Image
            title="寺庙、神社与祭典"
            src="https://qiniu-picgo.saltroping.com/hotSpot1.jpg"
            loaded={loadedHotSpot}
          />
          <Image title="秋叶原" src="https://qiniu-picgo.saltroping.com/hotSpot2.jpg" loaded={loadedHotSpot} />
          <Image title="走进新海诚" src="https://qiniu-picgo.saltroping.com/hotSpot3.jpg" loaded={loadedHotSpot} />
        </div>
      </div>
      <div className={style.cityRec} ref={refCityRec}>
        <div className={style.header}>
          <span className={style.title}>城市推荐</span>
          <span className={style.arrow}>→</span>
        </div>
        {!loadedCityRec && <Skeleton height="4.60vw" borderRadius="15px" />}
        <div className={style.cityImages}>
          <Image title="东京" src="https://qiniu-picgo.saltroping.com/city1.jpg" loaded={loadedCityRec} />
          <Image title="京都" src="https://qiniu-picgo.saltroping.com/city2.jpg" loaded={loadedCityRec} />
          <Image title="镰仓" src="https://qiniu-picgo.saltroping.com/city3.jpg" loaded={loadedCityRec} />
        </div>
      </div>
      <div className={style.strategy} ref={refStrategy}>
        <div className={style.header}>
          <span className={style.title}>圣地巡礼攻略</span>
          <span className={style.arrow}>→</span>
        </div>
        {!loadedStrategy && <Skeleton height="8vw" borderRadius="15px" />}
        <div className={style.images}>
          <Image src="https://qiniu-picgo.saltroping.com/路线.png" loaded={loadedStrategy} />
          <Image src="https://qiniu-picgo.saltroping.com/交通.png" loaded={loadedStrategy} />
          <Image src="https://qiniu-picgo.saltroping.com/季节.png" loaded={loadedStrategy} />
          <Image src="https://qiniu-picgo.saltroping.com/技巧.png" loaded={loadedStrategy} />
        </div>
      </div>
    </div>
  );
};

export default RecommendSidebar;
