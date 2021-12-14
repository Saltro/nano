import React from 'react';
import Image from './component/Image';
import style from './index.less';

const RecommendSidebar: React.FC<{}> = () => {
  return (
    <div id={style.container}>
      <div className={style.hotSpot}>
        <span className={style.title}>热门路线推荐</span>
        <span className={style.arrow}>→</span>
        <div className={style.recommend}>
          <Image 
            title="寺庙、神社与祭典" 
            src="https://github.com/Saltro/nano/blob/master/src/assets/images/hotSpot1.jpg?raw=true" 
            imgStyle={{width: "90%", marginRight:""}}
            titleStyle={{top: "175%", right:"55%"}}
          />
          <div className={style.secondRow}>
            <Image 
              title="秋叶原" 
              src="https://github.com/Saltro/nano/blob/master/src/assets/images/hotSpot2.jpg?raw=true" 
              imgStyle={{width: "47.5%", marginRight:"5%"}}
              titleStyle={{top: "175%", right:"60%"}}
            />
              <Image 
              title="走进新海诚" 
              src="https://github.com/Saltro/nano/blob/master/src/assets/images/hotSpot3.jpg?raw=true" 
              imgStyle={{width: "47.5%", marginRight:""}}
              titleStyle={{top: "175%", right:"35%"}}
            />
          </div>
        </div>
      </div>
      <div className={style.cityRec}>
        <span className={style.title}>城市推荐</span>
        <span className={style.arrow}>→</span>
        <div className={style.cityImage}> 
          <Image 
              title="东京" 
              src="https://github.com/Saltro/nano/blob/master/src/assets/images/city1.jpg?raw=true" 
              imgStyle={{width: "27.5%", marginRight:"12px"}}
              titleStyle={{top: "125%", right:"57.5%"}}
            />
          <Image 
              title="京都" 
              src="https://github.com/Saltro/nano/blob/master/src/assets/images/city3.jpg?raw=true" 
              imgStyle={{width: "27.5%", marginRight:"12px"}}
              titleStyle={{top: "125%", right:"57.5%"}}
            />
          <Image 
              title="镰仓" 
              src="https://github.com/Saltro/nano/blob/master/src/assets/images/city2.jpg?raw=true" 
              imgStyle={{width: "27.5%", marginRight:"5%"}}
              titleStyle={{top: "125%", right:"57.5%"}}
            />
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
